"use client";

import { useSettingsStore } from "@/lib/settings-store";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2Icon, AlertCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const ProviderStatus = () => {
  const { provider, getActiveConfig } = useSettingsStore();
  const config = getActiveConfig();
  const isConfigured = !!config?.apiKey;

  const providerColors = {
    openrouter: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    megallm: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    agentrouter: "bg-green-500/10 text-green-600 border-green-500/20",
    routeway: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <Badge variant="outline" className={cn("text-xs", providerColors[provider])}>
        {provider.toUpperCase()}
      </Badge>
      {isConfigured ? (
        <CheckCircle2Icon className="h-4 w-4 text-green-500" />
      ) : (
        <AlertCircleIcon className="h-4 w-4 text-orange-500" />
      )}
    </div>
  );
};
