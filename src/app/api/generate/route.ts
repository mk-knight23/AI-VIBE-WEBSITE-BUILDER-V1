import { NextRequest } from "next/server";
import { Sandbox } from "@e2b/code-interpreter";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";
import { PROMPT } from "@/prompt";
import { checkRateLimit } from "@/lib/rate-limit";
import { requireValidCSRF } from "@/lib/csrf";

// Validate and assert environment variables exist
const E2B_API_KEY = process.env.E2B_API_KEY as string;
const E2B_TEMPLATE = process.env.E2B_SANDBOX_TEMPLATE as string;

if (!E2B_API_KEY || !E2B_TEMPLATE) {
  throw new Error(
    "Missing required environment variables: E2B_API_KEY and E2B_SANDBOX_TEMPLATE must be set",
  );
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 300;

import { getWeightedProvider, getFallbackProviders } from "@/lib/ai-selection";

async function tryGeneration(
  provider: string,
  model: string,
  apiKey: string,
  baseUrl: string,
  userMessage: string,
  send: (data: any) => void,
  partialCode?: string,
): Promise<string> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (provider === "agentrouter") {
    headers["X-API-Key"] = apiKey;
  } else {
    headers["Authorization"] = `Bearer ${apiKey}`;
  }

  const messages: any[] = [
    { role: "system", content: PROMPT },
    { role: "user", content: userMessage },
  ];

  if (partialCode) {
    messages.push({ role: "assistant", content: partialCode });
    messages.push({
      role: "user",
      content:
        "Continue generating the rest of the application. Do not repeat what you already wrote, just continue from the last fragment.",
    });
  }

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model,
      messages,
      stream: true,
      temperature: 0.7,
      max_tokens: 4000,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `${provider} failed with status ${response.status}: ${errorText}`,
    );
  }

  const reader = response.body?.getReader();
  if (!reader) throw new Error("No response stream");

  const decoder = new TextDecoder();
  let fullResponse = partialCode || "";
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (!trimmedLine) continue;
      if (trimmedLine === "data: [DONE]") break;
      if (!trimmedLine.startsWith("data:")) continue;

      const data = trimmedLine.replace(/^data:\s*/, "").trim();

      try {
        const parsed = JSON.parse(data);
        const content = parsed.choices?.[0]?.delta?.content || "";
        if (content) {
          fullResponse += content;
          send({ type: "content", content: fullResponse });
        }
      } catch (e) {
        // Log parse error but continue - might be truncated JSON in a line
        console.warn(`Failed to parse SSE data chunk from ${provider}:`, data);
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

  // CSRF Protection for state-changing operations
  const csrfToken = req.headers.get("x-csrf-token");
  const csrfError = await requireValidCSRF(csrfToken);
  if (csrfError) {
    return csrfError;
  }

  // Rate limiting: 5 requests per 5 minutes for generation (expensive operation)
  const rateLimitResponse = await checkRateLimit("generation");
  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  const { projectId, provider, model, apiKey, baseUrl, partialCode } =
    await req.json();

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
            send({ type: "status", message: `✨ Trying ${usedProvider}...` });
            fullResponse = await tryGeneration(
              usedProvider,
              usedModel,
              apiKey,
              baseUrl,
              userMessage,
              send,
              partialCode,
            );
          } catch (error: any) {
            console.log(`Primary provider ${provider} failed:`, error.message);
            send({
              type: "status",
              message: `⚠️ ${provider} failed, trying fallback...`,
            });
          }
        }

        // Try fallback providers if primary failed
        if (!fullResponse) {
          const fallbackProviders = getFallbackProviders(provider);
          for (const fallback of fallbackProviders) {
            const fallbackKey = process.env[fallback.envKey];
            if (!fallbackKey) continue;

            try {
              send({
                type: "status",
                message: `🔄 Trying ${fallback.name}...`,
              });

              fullResponse = await tryGeneration(
                fallback.name,
                fallback.defaultModel,
                fallbackKey,
                fallback.baseUrl,
                userMessage,
                send,
                partialCode,
              );

              usedProvider = fallback.name;
              usedModel = fallback.defaultModel;
              send({ type: "status", message: `✅ Using ${fallback.name}` });
              break;
            } catch (error: any) {
              console.log(`Fallback ${fallback.name} failed:`, error.message);
              continue;
            }
          }
        }

        if (!fullResponse) {
          throw new Error(
            "All AI providers failed. Please check your API keys in settings.",
          );
        }

        send({ type: "status", message: "📝 Extracting and healing files..." });

        // Auto-healing parser logic
        const files: Record<string, string> = {};

        // Ensure the response has balanced code blocks for extraction
        let repairedResponse = fullResponse;
        const openBlocks = (repairedResponse.match(/```/g) || []).length;
        if (openBlocks % 2 !== 0) {
          repairedResponse += "\n```"; // Close dangling code block
        }

        const fileRegex =
          /FILE:\s*([^\n]+)\n```(?:html|css|javascript|js)?\n([\s\S]*?)```/g;
        let match;

        while ((match = fileRegex.exec(repairedResponse)) !== null) {
          const filename = match[1].trim();
          const content = match[2].trim();
          files[filename] = content;
        }

        // Fallback: If no files found via FILE: tag, try extracting from generic code blocks
        if (Object.keys(files).length === 0) {
          const htmlMatch = repairedResponse.match(/```html\n([\s\S]*?)```/i);
          const cssMatch = repairedResponse.match(/```css\n([\s\S]*?)```/i);
          const jsMatch = repairedResponse.match(
            /```(?:javascript|js)\n([\s\S]*?)```/i,
          );

          if (htmlMatch) files["index.html"] = htmlMatch[1].trim();
          if (cssMatch) files["styles.css"] = cssMatch[1].trim();
          if (jsMatch) files["script.js"] = jsMatch[1].trim();
        }

        // Second-level Fallback: Use everything as index.html if still empty
        if (Object.keys(files).length === 0) {
          let code = repairedResponse.trim();
          // Remove potential leading/trailing markdown code block indicators if they weren't matched
          code = code.replace(/^```[a-z]*\n/i, "").replace(/\n```$/i, "");

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
          await sandbox.commands.run(
            "curl -s http://localhost:8000 > /dev/null",
          );
        } catch (e) {
          console.log("Server check failed, waiting more...");
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }

        const previewUrl = `https://${sandbox.getHost(8000)}`;

        send({ type: "status", message: "💾 Saving to database..." });

        const filesList = Object.keys(files)
          .map((f) => `- ${f}`)
          .join("\n");
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
            content: repairedResponse, // Save the raw LLM response for recovery/search
            files: files as any, // Save the parsed file object for the UI
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
          message: error.message || "Generation failed. Please try again.",
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
