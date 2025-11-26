import { NextRequest } from "next/server";
import { Sandbox } from "@e2b/code-interpreter";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";

const E2B_API_KEY = process.env.E2B_API_KEY;
const E2B_TEMPLATE = process.env.E2B_SANDBOX_TEMPLATE || "vibe-kazi-test3";

export const maxDuration = 300;

const SYSTEM_PROMPT = `You are an expert web developer. Create a complete, production-ready website based on the user's request.

CRITICAL REQUIREMENTS:
- ALWAYS generate exactly 3 separate files: index.html, styles.css, and script.js
- NEVER use inline styles or inline scripts in HTML
- Put ALL CSS in styles.css file
- Put ALL JavaScript in script.js file
- Use modern, responsive design
- Make it visually appealing with smooth animations
- Ensure mobile responsiveness

OUTPUT FORMAT (MANDATORY):
You MUST return exactly 3 files in this format:

FILE: index.html
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website Title</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- HTML content only -->
  <script src="script.js"></script>
</body>
</html>
\`\`\`

FILE: styles.css
\`\`\`css
/* All CSS styles here */
\`\`\`

FILE: script.js
\`\`\`javascript
// All JavaScript code here
\`\`\`

IMPORTANT: Always generate all 3 files even for simple websites.`;

const PROVIDERS = [
  { name: "openrouter", envKey: "OPENROUTER_API_KEY", header: "Authorization" },
  { name: "routeway", envKey: "ROUTEWAY_API_KEY", header: "Authorization" },
  { name: "megallm", envKey: "MEGALLM_API_KEY", header: "Authorization" },
  { name: "agentrouter", envKey: "AGENTROUTER_API_KEY", header: "X-API-Key" },
];

async function tryGeneration(
  provider: string,
  model: string,
  apiKey: string,
  baseUrl: string,
  userMessage: string,
  send: (data: any) => void
): Promise<string> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (provider === "agentrouter") {
    headers["X-API-Key"] = apiKey;
  } else {
    headers["Authorization"] = `Bearer ${apiKey}`;
  }

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userMessage },
      ],
      stream: true,
      temperature: 0.7,
      max_tokens: 4000,
    }),
  });

  if (!response.ok) {
    throw new Error(`${provider} failed with status ${response.status}`);
  }

  const reader = response.body?.getReader();
  if (!reader) throw new Error("No response stream");

  const decoder = new TextDecoder();
  let fullResponse = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);
    const lines = chunk.split("\n").filter((line) => line.trim().startsWith("data:"));

    for (const line of lines) {
      const data = line.replace(/^data: /, "").trim();
      if (data === "[DONE]") continue;
      if (!data) continue;

      try {
        const parsed = JSON.parse(data);
        const content = parsed.choices?.[0]?.delta?.content || "";
        if (content) {
          fullResponse += content;
          send({ type: "content", content: fullResponse });
        }
      } catch (e) {
        // Skip invalid JSON
      }
    }
  }

  return fullResponse;
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { projectId, provider, model, apiKey, baseUrl } = await req.json();

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const send = (data: any) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
      };

      let sandbox: Sandbox | null = null;

      try {
        send({ type: "status", message: "🚀 Starting generation..." });

        const project = await prisma.project.findUnique({
          where: { id: projectId, userId },
          include: { messages: { orderBy: { createdAt: "desc" }, take: 1 } },
        });

        if (!project) throw new Error("Project not found");

        const userMessage = project.messages[0]?.content || "";
        if (!userMessage) throw new Error("No message found");

        send({ type: "status", message: "🤖 Connecting to AI..." });

        let fullResponse = "";
        let usedProvider = provider;
        let usedModel = model;

        // Try primary provider first
        if (apiKey && baseUrl) {
          try {
            send({ type: "status", message: `✨ Trying ${provider}...` });
            fullResponse = await tryGeneration(provider, model, apiKey, baseUrl, userMessage, send);
          } catch (error: any) {
            console.log(`Primary provider ${provider} failed:`, error.message);
            send({ type: "status", message: `⚠️ ${provider} failed, trying fallback...` });
          }
        }

        // Try fallback providers if primary failed
        if (!fullResponse) {
          for (const fallbackProvider of PROVIDERS) {
            const fallbackKey = process.env[fallbackProvider.envKey];
            if (!fallbackKey) continue;

            try {
              send({ type: "status", message: `🔄 Trying ${fallbackProvider.name}...` });
              
              const fallbackBaseUrl = 
                fallbackProvider.name === "openrouter" ? "https://openrouter.ai/api/v1" :
                fallbackProvider.name === "routeway" ? "https://api.routeway.ai/v1" :
                fallbackProvider.name === "megallm" ? "https://ai.megallm.io/v1" :
                "https://agentrouter.org/v1";

              const fallbackModel = 
                fallbackProvider.name === "openrouter" ? "x-ai/grok-4.1-fast:free" :
                fallbackProvider.name === "routeway" ? "kimi-k2-0905:free" :
                fallbackProvider.name === "megallm" ? "llama3-8b-instruct" :
                "deepseek-v3.1";

              fullResponse = await tryGeneration(
                fallbackProvider.name,
                fallbackModel,
                fallbackKey,
                fallbackBaseUrl,
                userMessage,
                send
              );

              usedProvider = fallbackProvider.name;
              usedModel = fallbackModel;
              send({ type: "status", message: `✅ Using ${fallbackProvider.name}` });
              break;
            } catch (error: any) {
              console.log(`Fallback ${fallbackProvider.name} failed:`, error.message);
              continue;
            }
          }
        }

        if (!fullResponse) {
          throw new Error("All AI providers failed. Please check your API keys in settings.");
        }

        send({ type: "status", message: "📝 Extracting files..." });

        // Parse files from response
        const files: Record<string, string> = {};
        const fileRegex = /FILE:\s*([^\n]+)\n```(?:html|css|javascript|js)?\n([\s\S]*?)```/g;
        let match;

        while ((match = fileRegex.exec(fullResponse)) !== null) {
          const filename = match[1].trim();
          const content = match[2].trim();
          files[filename] = content;
        }

        // If no files found, extract HTML from code blocks
        if (Object.keys(files).length === 0) {
          const codeMatch = fullResponse.match(/```html\n([\s\S]*?)```/) || 
                           fullResponse.match(/```\n([\s\S]*?)```/);
          let code = codeMatch ? codeMatch[1].trim() : fullResponse.trim();

          if (!code.includes("<!DOCTYPE") && !code.includes("<html")) {
            code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated Website</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  ${code}
</body>
</html>`;
          }
          files["index.html"] = code;
        }

        send({ type: "status", message: "🔧 Creating sandbox..." });

        sandbox = await Sandbox.create(E2B_TEMPLATE);
        await sandbox.setTimeout(300000);

        send({ type: "status", message: "💾 Writing files..." });

        for (const [filename, content] of Object.entries(files)) {
          await sandbox.files.write(filename, content);
        }

        send({ type: "status", message: "🌐 Starting server..." });

        // Start HTTP server in background and wait for it to be ready
        await sandbox.commands.run("python3 -m http.server 8000 &");
        
        // Wait longer for server to start
        await new Promise((resolve) => setTimeout(resolve, 3000));
        
        // Verify server is running
        try {
          await sandbox.commands.run("curl -s http://localhost:8000 > /dev/null");
        } catch (e) {
          console.log("Server check failed, waiting more...");
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }

        const previewUrl = `https://${sandbox.getHost(8000)}`;

        send({ type: "status", message: "💾 Saving to database..." });

        const filesList = Object.keys(files).map(f => `- ${f}`).join('\n');
        const successMessage = `✅ **Website Generated Successfully!**

📁 **Files Created:**
${filesList}

🌐 **Preview URL:** ${previewUrl}

🤖 **Provider Used:** ${usedProvider} (${usedModel})

Your website is ready! Check the Preview tab to see it live, and the Code tab to view the source files.`;

        // Save message and fragment
        const message = await prisma.message.create({
          data: {
            projectId,
            role: "ASSISTANT",
            type: "RESULT",
            content: successMessage,
          },
        });

        // Save fragment with files and preview URL for code/preview display
        await prisma.fragment.create({
          data: {
            projectId,
            messageId: message.id,
            content: JSON.stringify(files, null, 2),
            sandboxUrl: previewUrl,
            sandboxId: sandbox.sandboxId,
          },
        });

        send({
          type: "complete",
          files,
          previewUrl,
          sandboxId: sandbox.sandboxId,
        });

        controller.close();
      } catch (error: any) {
        console.error("Generation error:", error);
        send({ 
          type: "error", 
          message: error.message || "Generation failed. Please try again." 
        });
        
        if (sandbox) {
          try {
            await sandbox.kill();
          } catch (e) {
            console.error("Failed to kill sandbox:", e);
          }
        }
        
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
