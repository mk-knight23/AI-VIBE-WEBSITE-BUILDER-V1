export type AIProvider = "openrouter" | "routeway" | "megallm" | "agentrouter";

export interface AIProviderConfig {
  name: string;
  baseUrl: string;
  models: string[];
  requiresAuth: boolean;
  maxRetries?: number;
}

export const AI_PROVIDER_CONFIGS: Record<AIProvider, AIProviderConfig> = {
  openrouter: {
    name: "OpenRouter",
    baseUrl: "https://openrouter.ai/api/v1",
    requiresAuth: true,
    maxRetries: 3,
    models: [
      "x-ai/grok-4.1-fast:free",
      "deepseek/deepseek-chat-v3-0324:free",
      "qwen/qwen3-coder:free",
      "google/gemini-2.0-flash-exp:free",
      "z-ai/glm-4.5-air:free",
      "openai/gpt-oss-20b:free"
    ],
  },
  routeway: {
    name: "Routeway",
    baseUrl: "https://api.routeway.ai/v1",
    requiresAuth: true,
    maxRetries: 3,
    models: [
      "kimi-k2-0905:free",
      "minimax-m2:free",
      "glm-4.6:free",
      "mai-ds-r1:free",
      "deepseek-v3-0324:free",
      "llama-3.2-3b-instruct:free"
    ],
  },
  megallm: {
    name: "MegaLLM",
    baseUrl: "https://ai.megallm.io/v1",
    requiresAuth: true,
    maxRetries: 2,
    models: [
      "llama3-8b-instruct",
      "openai-gpt-oss-20b",
      "alibaba-qwen3-32b",
      "llama3.3-70b-instruct",
      "deepseek-ai/deepseek-v3.1"
    ],
  },
  agentrouter: {
    name: "AgentRouter",
    baseUrl: "https://agentrouter.org/v1",
    requiresAuth: true,
    maxRetries: 3,
    models: [
      "glm-4.5",
      "glm-4.6",
      "deepseek-v3.1",
      "deepseek-v3.2",
      "deepseek-r1-0528"
    ],
  },
};

export class AIProviderError extends Error {
  constructor(
    message: string,
    public provider: AIProvider,
    public model: string,
    public statusCode?: number,
    public retryable: boolean = true
  ) {
    super(message);
    this.name = "AIProviderError";
  }
}

export class AIAuthError extends AIProviderError {
  constructor(provider: AIProvider, model: string) {
    super(`Authentication failed for ${provider}`, provider, model, 401, false);
    this.name = "AIAuthError";
  }
}
