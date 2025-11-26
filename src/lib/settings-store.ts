"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PROVIDER_INFO, type Provider } from "./api-config";

interface ProviderConfig {
  apiKey: string;
  baseUrl: string;
}

interface SettingsStore {
  provider: Provider;
  model: string;
  providers: Record<Provider, ProviderConfig>;
  setProvider: (provider: Provider) => void;
  setModel: (model: string) => void;
  setProviderConfig: (provider: Provider, config: ProviderConfig) => void;
  getActiveConfig: () => ProviderConfig | null;
}

export const PROVIDER_MODELS: Record<Provider, { id: string; name: string; free?: boolean }[]> = {
  openrouter: [
    { id: "x-ai/grok-4.1-fast:free", name: "Grok 4.1 Fast", free: true },
    { id: "deepseek/deepseek-chat-v3-0324:free", name: "DeepSeek Chat V3", free: true },
    { id: "qwen/qwen3-coder:free", name: "Qwen3 Coder", free: true },
    { id: "google/gemini-2.0-flash-exp:free", name: "Gemini 2.0 Flash", free: true },
    { id: "z-ai/glm-4.5-air:free", name: "GLM 4.5 Air", free: true },
    { id: "openai/gpt-oss-20b:free", name: "GPT-oss-20B", free: true },
  ],
  routeway: [
    { id: "kimi-k2-0905:free", name: "Kimi K2", free: true },
    { id: "minimax-m2:free", name: "MiniMax M2", free: true },
    { id: "glm-4.6:free", name: "GLM 4.6", free: true },
    { id: "mai-ds-r1:free", name: "MAI DS R1", free: true },
    { id: "deepseek-v3-0324:free", name: "DeepSeek V3", free: true },
    { id: "llama-3.2-3b-instruct:free", name: "Llama 3.2 3B", free: true },
  ],
  megallm: [
    { id: "llama3-8b-instruct", name: "Llama3 8B" },
    { id: "openai-gpt-oss-20b", name: "GPT-oss-20B" },
    { id: "alibaba-qwen3-32b", name: "Qwen3 32B" },
    { id: "llama3.3-70b-instruct", name: "Llama 3.3 70B" },
    { id: "deepseek-ai/deepseek-v3.1", name: "DeepSeek V3.1" },
    { id: "moonshotai/kimi-k2-instruct-0905", name: "Kimi K2" },
    { id: "qwen/qwen3-next-80b-a3b-instruct", name: "Qwen3 Next 80B" },
    { id: "mistralai/mistral-nemotron", name: "Mistral Nemotron" },
    { id: "minimaxai/minimax-m2", name: "MiniMax M2" },
    { id: "deepseek-r1-distill-llama-70b", name: "DeepSeek R1 Distill" },
    { id: "openai-gpt-oss-120b", name: "GPT-oss-120B" },
    { id: "deepseek-ai/deepseek-v3.1-terminus", name: "DeepSeek V3.1 Terminus" },
  ],
  agentrouter: [
    { id: "glm-4.5", name: "GLM 4.5" },
    { id: "glm-4.6", name: "GLM 4.6" },
    { id: "deepseek-v3.1", name: "DeepSeek V3.1" },
    { id: "deepseek-v3.2", name: "DeepSeek V3.2" },
    { id: "claude-haiku-4-5-20251001", name: "Claude Haiku 4.5" },
    { id: "claude-sonnet-4-5-20250929", name: "Claude Sonnet 4.5" },
    { id: "deepseek-r1-0528", name: "DeepSeek R1" },
  ],
};

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      provider: "openrouter",
      model: "x-ai/grok-4.1-fast:free",
      providers: {
        openrouter: {
          apiKey: typeof window !== 'undefined' ? "" : process.env.OPENROUTER_API_KEY || "",
          baseUrl: PROVIDER_INFO.openrouter.baseUrl,
        },
        routeway: {
          apiKey: typeof window !== 'undefined' ? "" : process.env.ROUTEWAY_API_KEY || "",
          baseUrl: PROVIDER_INFO.routeway.baseUrl,
        },
        megallm: {
          apiKey: typeof window !== 'undefined' ? "" : process.env.MEGALLM_API_KEY || "",
          baseUrl: PROVIDER_INFO.megallm.baseUrl,
        },
        agentrouter: {
          apiKey: typeof window !== 'undefined' ? "" : process.env.AGENTROUTER_API_KEY || "",
          baseUrl: PROVIDER_INFO.agentrouter.baseUrl,
        },
      },
      setProvider: (provider) => {
        const models = PROVIDER_MODELS[provider];
        set({ provider, model: models[0]?.id || "" });
      },
      setModel: (model) => set({ model }),
      setProviderConfig: (provider, config) =>
        set((state) => ({
          providers: {
            ...state.providers,
            [provider]: config,
          },
        })),
      getActiveConfig: () => {
        const state = get();
        return state.providers[state.provider];
      },
    }),
    {
      name: "vibe-settings",
    }
  )
);

export { PROVIDER_INFO, type Provider };
