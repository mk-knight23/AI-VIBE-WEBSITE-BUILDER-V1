import { AI_PROVIDER_CONFIGS, type AIProvider } from "./ai-types";

export type Provider = AIProvider;

export interface ProviderConfig {
  apiKey: string;
  baseUrl: string;
}

export interface ProviderInfo {
  name: string;
  baseUrl: string;
  color: string;
  requiresAuth: boolean;
  fallbackModels: string[];
}

export const PROVIDER_INFO: Record<Provider, ProviderInfo> = {
  openrouter: {
    name: "OpenRouter",
    baseUrl: "https://openrouter.ai/api/v1",
    color: "bg-blue-500",
    requiresAuth: true,
    fallbackModels: AI_PROVIDER_CONFIGS.openrouter.models,
  },
  routeway: {
    name: "Routeway",
    baseUrl: "https://api.routeway.ai/v1",
    color: "bg-orange-500",
    requiresAuth: true,
    fallbackModels: AI_PROVIDER_CONFIGS.routeway.models,
  },
  megallm: {
    name: "MegaLLM",
    baseUrl: "https://ai.megallm.io/v1",
    color: "bg-purple-500",
    requiresAuth: true,
    fallbackModels: AI_PROVIDER_CONFIGS.megallm.models,
  },
  agentrouter: {
    name: "AgentRouter",
    baseUrl: "https://agentrouter.org/v1",
    color: "bg-green-500",
    requiresAuth: true,
    fallbackModels: AI_PROVIDER_CONFIGS.agentrouter.models,
  },
};
