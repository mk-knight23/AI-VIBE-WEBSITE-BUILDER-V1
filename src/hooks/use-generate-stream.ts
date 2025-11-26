import { useState, useCallback } from "react";

interface GenerateOptions {
  projectId: string;
  provider: string;
  model: string;
  apiKey: string;
  baseUrl: string;
}

interface GenerateResult {
  files: Record<string, string>;
  previewUrl: string;
  sandboxId: string;
}

export function useGenerateStream() {
  const [status, setStatus] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [files, setFiles] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = useCallback(async (options: GenerateOptions): Promise<GenerateResult | null> => {
    setIsGenerating(true);
    setError(null);
    setContent("");
    setFiles({});
    setStatus("Initializing...");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(options),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No response stream available");

      const decoder = new TextDecoder();
      let result: GenerateResult | null = null;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;

          try {
            const data = JSON.parse(line.slice(6));

            switch (data.type) {
              case "status":
                setStatus(data.message || "");
                break;

              case "content":
                setContent(data.content || "");
                break;

              case "complete":
                setStatus("✅ Complete!");
                setFiles(data.files || {});
                result = {
                  files: data.files,
                  previewUrl: data.previewUrl,
                  sandboxId: data.sandboxId,
                };
                break;

              case "error":
                throw new Error(data.message || "Generation failed");
            }
          } catch (parseError) {
            console.warn("Failed to parse SSE data:", parseError);
          }
        }
      }

      setIsGenerating(false);
      return result;
    } catch (err: any) {
      console.error("Generation error:", err);
      setError(err.message || "An unexpected error occurred");
      setStatus("❌ Failed");
      setIsGenerating(false);
      throw err;
    }
  }, []);

  const reset = useCallback(() => {
    setStatus("");
    setContent("");
    setFiles({});
    setError(null);
    setIsGenerating(false);
  }, []);

  return { 
    generate, 
    status, 
    content,
    files,
    isGenerating, 
    error,
    reset 
  };
}
