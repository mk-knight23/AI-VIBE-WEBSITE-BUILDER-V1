
export interface AIProviderConfig {
    name: string;
    weight: number;
    envKey: string;
    header: string;
    baseUrl: string;
    defaultModel: string;
}

export const AI_PROVIDERS: AIProviderConfig[] = [
    {
        name: "openrouter",
        weight: 0.4,
        envKey: "OPENROUTER_API_KEY",
        header: "Authorization",
        baseUrl: "https://openrouter.ai/api/v1",
        defaultModel: "x-ai/grok-4.1-fast:free",
    },
    {
        name: "routeway",
        weight: 0.3,
        envKey: "ROUTEWAY_API_KEY",
        header: "Authorization",
        baseUrl: "https://api.routeway.ai/v1",
        defaultModel: "kimi-k2-0905:free",
    },
    {
        name: "megallm",
        weight: 0.2,
        envKey: "MEGALLM_API_KEY",
        header: "Authorization",
        baseUrl: "https://ai.megallm.io/v1",
        defaultModel: "llama3-8b-instruct",
    },
    {
        name: "agentrouter",
        weight: 0.1,
        envKey: "AGENTROUTER_API_KEY",
        header: "X-API-Key",
        baseUrl: "https://agentrouter.org/v1",
        defaultModel: "deepseek-v3.1",
    },
];

export function getWeightedProvider(): AIProviderConfig {
    const totalWeight = AI_PROVIDERS.reduce((sum, p) => sum + p.weight, 0);
    let random = Math.random() * totalWeight;

    for (const provider of AI_PROVIDERS) {
        if (random < provider.weight) {
            return provider;
        }
        random -= provider.weight;
    }

    return AI_PROVIDERS[0];
}

export function getFallbackProviders(excludeName: string): AIProviderConfig[] {
    return AI_PROVIDERS.filter(p => p.name !== excludeName)
        .sort((a, b) => b.weight - a.weight);
}
