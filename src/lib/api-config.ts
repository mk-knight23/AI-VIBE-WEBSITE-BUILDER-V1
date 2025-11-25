export type Provider = "openrouter" | "megallm" | "agentrouter" | "routeway";

export interface ProviderConfig {
  apiKey: string;
  baseUrl: string;
  headers?: Record<string, string>;
}

export interface ProviderInfo {
  name: string;
  baseUrl: string;
  color: string;
  requiresAuth: boolean;
}

export const PROVIDER_INFO: Record<Provider, ProviderInfo> = {
  openrouter: {
    name: "OpenRouter",
    baseUrl: "https://openrouter.ai/api/v1",
    color: "bg-blue-500",
    requiresAuth: true,
  },
  megallm: {
    name: "MegaLLM",
    baseUrl: "https://ai.megallm.io/v1",
    color: "bg-purple-500",
    requiresAuth: true,
  },
  agentrouter: {
    name: "AgentRouter",
    baseUrl: "https://agentrouter.org/v1",
    color: "bg-green-500",
    requiresAuth: true,
  },
  routeway: {
    name: "Routeway",
    baseUrl: "https://api.routeway.ai/v1",
    color: "bg-orange-500",
    requiresAuth: true,
  },
};

export function getProviderConfig(
  provider?: string,
  eventData?: { apiKey?: string; baseUrl?: string }
): ProviderConfig {
  if (eventData?.apiKey && eventData?.baseUrl) {
    return { 
      baseUrl: eventData.baseUrl, 
      apiKey: eventData.apiKey,
      headers: getProviderHeaders(provider as Provider, eventData.apiKey)
    };
  }

  const selectedProvider = (provider || process.env.DEFAULT_PROVIDER || "openrouter") as Provider;
  const info = PROVIDER_INFO[selectedProvider];
  const envKey = `${selectedProvider.toUpperCase()}_API_KEY`;
  const apiKey = process.env[envKey];

  if (!apiKey) {
    throw new Error(`API key not found for provider: ${selectedProvider}. Set ${envKey} in environment.`);
  }

  return {
    baseUrl: info.baseUrl,
    apiKey,
    headers: getProviderHeaders(selectedProvider, apiKey)
  };
}

function getProviderHeaders(provider: Provider, apiKey: string): Record<string, string> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (provider === "openrouter") {
    headers["Authorization"] = `Bearer ${apiKey}`;
    headers["HTTP-Referer"] = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    headers["X-Title"] = "Vibe AI Builder";
  } else {
    headers["Authorization"] = `Bearer ${apiKey}`;
  }

  return headers;
}

export function validateConfig(config: ProviderConfig): boolean {
  return !!(config.apiKey && config.baseUrl);
}
