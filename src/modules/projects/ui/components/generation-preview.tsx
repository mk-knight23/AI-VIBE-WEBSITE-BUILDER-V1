"use client";

import { useEffect, useState } from "react";
import { useGenerateStream } from "@/hooks/use-generate-stream";
import { useSettingsStore } from "@/lib/settings-store";
import { toast } from "sonner";
import { Loader2Icon, AlertCircleIcon, SparklesIcon, ExternalLinkIcon, RefreshCwIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Fragment } from "@/generated/prisma";
import { trpc } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

interface Props {
  projectId: string;
  fragment: Fragment | null;
  onFilesGenerated?: (files: Record<string, string>, previewUrl: string) => void;
}

export function GenerationPreview({ projectId, fragment, onFilesGenerated }: Props) {
  const [hasStarted, setHasStarted] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [iframeKey, setIframeKey] = useState(0);
  const { generate, status, content, isGenerating, error, reset } = useGenerateStream();
  const { provider, model, getActiveConfig } = useSettingsStore();
  const trpcProxy = trpc();

  const { data: messages } = useQuery(
    trpcProxy.messages.getMany.queryOptions(
      { projectId },
      { refetchInterval: 2000 }
    )
  );

  const hasAssistantMessage = messages?.some((m) => m.role === "ASSISTANT");

  useEffect(() => {
    if (!hasAssistantMessage && !hasStarted && !isGenerating) {
      setHasStarted(true);
      startGeneration();
    }
  }, [projectId, hasAssistantMessage, hasStarted, isGenerating]);

  const startGeneration = async (partialCode?: string) => {
    let config = getActiveConfig();

    if (!config?.apiKey) {
      // logic for finding key ...
    }

    if (!config || !config.apiKey) return;

    try {
      const result = await generate({
        projectId,
        provider: (config as any).name || provider,
        model: (config as any).defaultModel || model,
        apiKey: config.apiKey,
        baseUrl: config.baseUrl,
        partialCode,
      });
      if (result) {
        setPreviewUrl(result.previewUrl);
        onFilesGenerated?.(result.files, result.previewUrl);
      }
    } catch (err: any) {
      console.error("Generation error:", err);
    }
  };

  const retry = () => {
    reset();
    setHasStarted(false);
    setPreviewUrl("");
  };

  const refreshPreview = () => {
    setIframeKey(prev => prev + 1);
  };

  // Generating UI
  if (isGenerating) {
    return (
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-blue-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full mx-4"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <Loader2Icon className="h-10 w-10 animate-spin text-blue-500 relative" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Generating Website
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{status}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 30, ease: "linear" }}
                />
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500 dark:text-gray-400">Processing...</span>
                <span className="text-gray-500 dark:text-gray-400">10-30 seconds</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-red-200 dark:border-red-900 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
              <AlertCircleIcon className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Generation Failed</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{error}</p>
            <div className="flex flex-col gap-2">
              <Button onClick={retry} className="w-full" size="lg">
                <RefreshCwIcon className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              {content && (
                <Button
                  onClick={() => startGeneration(content)}
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  <SparklesIcon className="h-4 w-4 mr-2" />
                  Resume from last fragment
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Preview with sandbox URL
  if (previewUrl || fragment?.sandboxUrl) {
    const url = previewUrl || fragment?.sandboxUrl || "";

    return (
      <div className="h-full flex flex-col bg-white dark:bg-gray-950">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Live Preview</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={refreshPreview}>
              <RefreshCwIcon className="h-4 w-4" />
            </Button>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
            >
              <ExternalLinkIcon className="h-3 w-3" />
              Open in new tab
            </a>
          </div>
        </div>
        <div className="flex-1 relative bg-white">
          <iframe
            key={iframeKey}
            src={url}
            className="absolute inset-0 w-full h-full border-0"
            title="Website Preview"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            onError={(e) => {
              console.error("Iframe error:", e);
              toast.error("Preview failed to load. The sandbox might be unavailable.");
            }}
          />
        </div>
      </div>
    );
  }

  // Empty state
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="text-center space-y-4">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center">
          <SparklesIcon className="h-12 w-12 text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">No Preview Available</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Start a conversation to generate a website
          </p>
        </div>
      </div>
    </div>
  );
}
