/**
 * OpenAI Wrapper with Custom Headers
 * Wraps the OpenAI SDK to add provider-specific headers
 */

import { openai as inngestOpenai } from "@inngest/agent-kit";
import type { Provider } from "./api-config";

interface OpenAIWrapperOptions {
  model: string;
  baseUrl: string;
  apiKey: string;
  provider?: Provider;
  defaultParameters?: Record<string, any>;
}

/**
 * Create an OpenAI model with provider-specific headers
 * Note: The Inngest OpenAI adapter doesn't support custom headers directly,
 * but the OpenAI SDK it uses internally will handle Authorization headers
 * automatically via the apiKey parameter.
 * 
 * For OpenRouter's HTTP-Referer and X-Title headers, these are optional
 * and only used for rankings on openrouter.ai - they don't affect functionality.
 */
export function createOpenAIModel(options: OpenAIWrapperOptions) {
  const { model, baseUrl, apiKey, defaultParameters } = options;

  // The OpenAI SDK (used by Inngest) automatically adds:
  // - Authorization: Bearer <apiKey>
  // - Content-Type: application/json
  //
  // This is sufficient for all three providers:
  // - OpenRouter: Works with just Authorization (HTTP-Referer is optional)
  // - MegaLLM: Only needs Authorization
  // - AgentRouter: Only needs Authorization

  return inngestOpenai({
    model,
    baseUrl,
    apiKey,
    defaultParameters,
  });
}
