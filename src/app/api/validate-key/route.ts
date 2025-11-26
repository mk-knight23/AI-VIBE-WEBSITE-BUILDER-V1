import { NextRequest, NextResponse } from "next/server";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const VALIDATION_MODELS: Record<string, string> = {
  openrouter: "x-ai/grok-4.1-fast:free",
  routeway: "kimi-k2-0905:free",
  megallm: "llama3-8b-instruct",
  agentrouter: "deepseek-v3.1",
};

export async function POST(req: NextRequest) {
  try {
    const { provider, apiKey, baseUrl } = await req.json();

    if (!provider || !apiKey || !baseUrl) {
      return NextResponse.json(
        { valid: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const model = VALIDATION_MODELS[provider];
    if (!model) {
      return NextResponse.json(
        { valid: false, error: "Unknown provider" },
        { status: 400 }
      );
    }

    // AgentRouter uses X-API-Key header instead of Authorization
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (provider === "agentrouter") {
      headers["X-API-Key"] = apiKey;
    } else {
      headers["Authorization"] = `Bearer ${apiKey}`;
    }

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: "hi" }],
        max_tokens: 5,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ valid: true });
    }

    const errorData = await response.json().catch(() => ({}));
    const errorMsg = errorData?.error?.message || errorData?.message || `HTTP ${response.status}`;

    return NextResponse.json({
      valid: false,
      error: errorMsg,
    });
  } catch (error: any) {
    return NextResponse.json({
      valid: false,
      error: error.message || "Validation failed",
    });
  }
}
