import { useState, useCallback } from "react";
import { fetchWithCSRF } from "./use-csrf";

interface GenerateOptions {
  projectId: string;
  provider: string;
  model: string;
  apiKey: string;
  baseUrl: string;
  partialCode?: string;
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
    if (!options.partialCode) {
      setContent("");
      setFiles({});
    }
    setStatus(options.partialCode ? "Resuming..." : "Initializing...");

    try {
      // Use CSRF-protected fetch
      const response = await fetchWithCSRF("/api/generate", {
        method: "POST",
        body: JSON.stringify(options),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No response stream available");

      const decoder = new TextDecoder();
      let result: GenerateResult | null = null;
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          // Process any remaining text in the buffer if applicable
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        // Keep the last partial line in the buffer
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine || !trimmedLine.startsWith("data: ")) continue;

          try {
            const data = JSON.parse(trimmedLine.slice(6));
            // ... (rest of the logic remains the same)

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
