import "server-only";
import { AI_PROVIDER_CONFIGS, type AIProvider, AIProviderError, AIAuthError } from "./ai-types";

const FALLBACK_ORDER: AIProvider[] = ["openrouter", "routeway", "megallm", "agentrouter"];

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function createModelWithFallback(
  preferredProvider: AIProvider,
  preferredModel: string,
  eventData?: { apiKey?: string; baseUrl?: string }
): Promise<{ model: any; provider: AIProvider; modelName: string }> {
  const config = AI_PROVIDER_CONFIGS[preferredProvider];
  if (!config) throw new Error(`Invalid provider: ${preferredProvider}`);

  const apiKey = eventData?.apiKey || process.env[`${preferredProvider.toUpperCase()}_API_KEY`];
  
  if (!apiKey?.trim()) {
    throw new Error(`No API key configured for ${preferredProvider}`);
  }

  console.log(`✅ Using ${preferredProvider}/${preferredModel}`);
  
  return {
    model: {
      model: preferredModel,
      apiKey: apiKey.trim(),
      baseUrl: eventData?.baseUrl || config.baseUrl,
      provider: preferredProvider,
    },
    provider: preferredProvider,
    modelName: preferredModel,
  };
}
