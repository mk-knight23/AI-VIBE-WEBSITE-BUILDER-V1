import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// CSRF Protection
const CSRF_TOKEN_HEADER = "x-csrf-token";
const CSRF_COOKIE_NAME = "csrf-token";

export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

export function validateCSRFToken(request: NextRequest): boolean {
  const token = request.headers.get(CSRF_TOKEN_HEADER);
  const cookieToken = request.cookies.get(CSRF_COOKIE_NAME)?.value;
  
  if (!token || !cookieToken || token !== cookieToken) {
    return false;
  }
  
  return true;
}

// Security Headers
export function addSecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
  );
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  
  return response;
}

// Request Body Size Limit
export function validateRequestSize(request: NextRequest, maxSizeKB = 100): boolean {
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength) > maxSizeKB * 1024) {
    return false;
  }
  return true;
}

// IP-based Rate Limiting
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();

export function ipRateLimit(ip: string, maxRequests = 100, windowMs = 60000): boolean {
  const now = Date.now();
  const record = ipRequestCounts.get(ip);
  
  if (!record || now > record.resetTime) {
    ipRequestCounts.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

// Clean up old entries
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of ipRequestCounts.entries()) {
    if (now > record.resetTime) {
      ipRequestCounts.delete(ip);
    }
  }
}, 60000);

// SQL Injection Prevention
export function sanitizeSQL(input: string): string {
  return input.replace(/['";\\]/g, "");
}

// SSRF Prevention
const BLOCKED_HOSTS = [
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "169.254.169.254", // AWS metadata
  "metadata.google.internal", // GCP metadata
];

export function validateExternalUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.toLowerCase();
    
    if (BLOCKED_HOSTS.some(blocked => hostname.includes(blocked))) {
      return false;
    }
    
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return false;
    }
    
    return true;
  } catch {
    return false;
  }
}

// Password Hashing (for future use)
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// Environment Variable Validation
export function validateEnvVars(required: string[]): void {
  const missing = required.filter(key => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}
