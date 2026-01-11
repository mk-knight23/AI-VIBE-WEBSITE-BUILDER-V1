"use client";

import { useEffect, useState } from "react";
import { useGenerateStream } from "@/hooks/use-generate-stream";
import { useSettingsStore } from "@/lib/settings-store";
import { toast } from "sonner";
import { Loader2Icon, AlertCircleIcon, CheckCircleIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Props {
  projectId: string;
  hasAssistantMessage: boolean;
  onComplete?: () => void;
}

export function AutoGenerator({ projectId, hasAssistantMessage, onComplete }: Props) {
  const [hasStarted, setHasStarted] = useState(false);
  const { generate, status, content, isGenerating, error, reset } = useGenerateStream();
  const { provider, model, getActiveConfig } = useSettingsStore();

  useEffect(() => {
    if (!hasAssistantMessage && !hasStarted && !isGenerating) {
      setHasStarted(true);
      startGeneration();
    }
  }, [projectId, hasAssistantMessage, hasStarted, isGenerating]);

  const startGeneration = async (partialCode?: string) => {
    const config = getActiveConfig();

    // Check if current provider has API key, if not find one that does
    if (!config?.apiKey) {
      const providers = useSettingsStore.getState().providers;
      const providerWithKey = (Object.keys(providers) as (keyof typeof providers)[]).find(
        p => providers[p]?.apiKey?.trim()
      );

      if (!providerWithKey) {
        toast.error("No API key configured", {
          description: "Please configure your API key in settings (⚙️)",
        });
        return;
      }

      // Switch to provider with key
      useSettingsStore.getState().setProvider(providerWithKey);
      const newConfig = providers[providerWithKey as keyof typeof providers];

      try {
        const result = await generate({
          projectId,
          provider: providerWithKey,
          model: useSettingsStore.getState().model,
          apiKey: newConfig.apiKey,
          baseUrl: newConfig.baseUrl,
          partialCode,
        });

        if (result) {
          toast.success("Website generated successfully! 🎉");
          onComplete?.();
        }
      } catch (err: any) {
        toast.error("Generation failed", {
          description: err.message || "Please try again",
        });
      }
      return;
    }

    try {
      const result = await generate({
        projectId,
        provider,
        model,
        apiKey: config.apiKey,
        baseUrl: config.baseUrl,
        partialCode,
      });

      if (result) {
        toast.success("Website generated successfully! 🎉");
        onComplete?.();
      }
    } catch (err: any) {
      toast.error("Generation failed", {
        description: err.message || "Please try again",
      });
    }
  };

  const retry = () => {
    reset();
    setHasStarted(false);
  };

  if (!isGenerating && !error) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-6 right-6 bg-background border rounded-xl shadow-2xl p-5 max-w-md z-50"
      >
        <div className="flex items-start gap-4">
          {isGenerating && (
            <Loader2Icon className="h-5 w-5 animate-spin text-primary flex-shrink-0 mt-0.5" />
          )}
          {error && (
            <AlertCircleIcon className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          )}

          <div className="flex-1 min-w-0">
            <div className="font-medium text-sm mb-1">
              {error ? "Generation Failed" : "Generating Website"}
            </div>

            <div className="text-sm text-muted-foreground mb-3">
              {error || status}
            </div>

            {content && !error && (
              <div className="text-xs text-muted-foreground bg-muted rounded p-2 max-h-20 overflow-y-auto font-mono">
                {content.slice(0, 200)}...
              </div>
            )}

            {error && (
              <div className="flex gap-2 mt-2">
                <Button onClick={retry} size="sm" variant="outline">
                  Retry
                </Button>
                {content && (
                  <Button onClick={() => startGeneration(content)} size="sm" variant="outline">
                    Resume
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
          {isGenerating && (
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 30, ease: "linear" }}
            />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
