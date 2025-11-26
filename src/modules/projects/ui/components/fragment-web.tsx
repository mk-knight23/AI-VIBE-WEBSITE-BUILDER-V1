import { useState } from "react";
import { ExternalLinkIcon, RefreshCcwIcon, CheckIcon, CopyIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Fragment } from "@/generated/prisma";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Props {
  fragment: Fragment | null;
}

export function FragmentWeb({ fragment }: Props) {
  const [fragmentKey, setFragmentKey] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!fragment) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-50 dark:bg-gray-900">
        <div className="text-center text-muted-foreground">
          <p className="text-lg mb-2">No preview available</p>
          <p className="text-sm">Start a conversation to generate a website</p>
        </div>
      </div>
    );
  }

  const onRefresh = () => {
    setFragmentKey((prev) => prev + 1);
  };

  const handleCopy = async () => {
    if (!fragment.sandboxUrl) return;

    try {
      await navigator.clipboard.writeText(fragment.sandboxUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = fragment.sandboxUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleOpenInNewTab = () => {
    if (!fragment.sandboxUrl) return;
    window.open(fragment.sandboxUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="flex flex-col w-full h-full bg-white dark:bg-gray-900"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between p-3 border-b bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Preview
          </span>
        </div>

        <TooltipProvider>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={onRefresh}>
                  <RefreshCcwIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Refresh preview</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleCopy}>
                  {copied ? (
                    <CheckIcon className="h-4 w-4 text-green-500" />
                  ) : (
                    <CopyIcon className="h-4 w-4" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{copied ? "Copied!" : "Copy URL"}</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleOpenInNewTab}>
                  <ExternalLinkIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Open in new tab</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>

      <div className="flex-1 relative">
        {fragment.sandboxUrl ? (
          <iframe
            key={fragmentKey}
            src={fragment.sandboxUrl}
            className="w-full h-full border-0"
            title="Website Preview"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">No preview URL available</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
