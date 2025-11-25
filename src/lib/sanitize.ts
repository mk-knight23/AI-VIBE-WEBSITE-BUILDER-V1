/**
 * Input sanitization utilities
 */

/**
 * Sanitize user input to prevent XSS and injection attacks
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .slice(0, 10000); // Enforce max length
}

/**
 * Validate API key format
 */
export function validateApiKey(key: string, provider: string): boolean {
  if (!key || typeof key !== 'string') return false;
  
  const trimmed = key.trim();
  
  // Basic validation - keys should start with expected prefix
  const prefixes: Record<string, string> = {
    openrouter: 'sk-or-',
    megallm: 'sk-mega-',
    agentrouter: 'sk-',
    routeway: 'sk-',
  };
  
  const prefix = prefixes[provider];
  if (prefix && !trimmed.startsWith(prefix)) {
    return false;
  }
  
  // Keys should be at least 20 characters
  return trimmed.length >= 20;
}

/**
 * Validate URL format
 */
export function validateUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
