/**
 * Production-ready rate limiting for serverless environments
 *
 * This module provides two rate limiting strategies:
 * 1. IP-based rate limiting using Next.js built-in rate limiting (for unauthenticated requests)
 * 2. Database-backed rate limiting for authenticated users (more accurate, shareable across instances)
 */

import { headers } from "next/headers";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "./db";

interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetTime: number;
  limit: number;
}

/**
 * Rate limit configuration for different endpoint types
 */
export const RATE_LIMITS = {
  // API validation endpoints - stricter limits
  validation: { limit: 10, windowMs: 60000 }, // 10 requests per minute

  // Generation endpoints - very expensive, strict limits
  generation: { limit: 5, windowMs: 300000 }, // 5 requests per 5 minutes

  // General API endpoints
  api: { limit: 60, windowMs: 60000 }, // 60 requests per minute

  // tRPC endpoints
  trpc: { limit: 100, windowMs: 60000 }, // 100 requests per minute
} as const;

/**
 * Get client identifier for rate limiting
 * Prefers user ID for authenticated users, falls back to IP hash
 */
async function getClientIdentifier(): Promise<{
  userId: string | null;
  ipHash: string;
}> {
  const headersList = await headers();

  // Try to get authenticated user
  try {
    const { userId } = await auth();
    if (userId) {
      return { userId, ipHash: "" };
    }
  } catch {
    // Auth failed, fall back to IP
  }

  // Get IP from headers (works with proxies like Vercel)
  const forwardedFor = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");
  const ip = forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";

  // Hash IP for privacy
  const encoder = new TextEncoder();
  const data = encoder.encode(
    ip + process.env.RATE_LIMIT_SECRET || "vibe-salt",
  );
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const ipHash = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

  return { userId: null, ipHash };
}

/**
 * Clean up old rate limit records from database
 * This should be called periodically (e.g., via cron or occasionally on requests)
 */
export async function cleanupOldRateLimitRecords(): Promise<void> {
  const now = Date.now();
  const oldestValid = now - 300000; // Keep records from last 5 minutes max

  try {
    await prisma.rateLimit.deleteMany({
      where: { resetTime: { lt: new Date(oldestValid) } },
    });
  } catch (error) {
    console.error("Failed to cleanup old rate limit records:", error);
  }
}

/**
 * Database-backed rate limiting using Prisma
 * This works across multiple server instances and survives restarts
 *
 * NOTE: Requires RateLimit model in Prisma schema. Add this to schema.prisma:
 * model RateLimit {
 *   id        String   @id @default(cuid())
 *   identifier String
 *   count     Int
 *   resetTime DateTime
 *   createdAt DateTime @default(now())
 *
 *   @@index([identifier, resetTime])
 * }
 */
export async function rateLimitDb(
  identifier: string,
  limit: number,
  windowMs: number,
): Promise<RateLimitResult> {
  const now = Date.now();
  const resetTime = now + windowMs;

  try {
    // Use a transaction to safely increment and check
    const result = await prisma.$transaction(async (tx) => {
      // Find or create rate limit record
      let record = await tx.rateLimit.findFirst({
        where: {
          identifier,
          resetTime: { gt: new Date(now) },
        },
        orderBy: { resetTime: "desc" },
      });

      if (!record) {
        // Create new record for this window
        record = await tx.rateLimit.create({
          data: {
            identifier,
            count: 1,
            resetTime: new Date(resetTime),
          },
        });
        return {
          success: true,
          remaining: limit - 1,
          resetTime,
          limit,
        };
      }

      // Check if limit exceeded
      if (record.count >= limit) {
        return {
          success: false,
          remaining: 0,
          resetTime: record.resetTime.getTime(),
          limit,
        };
      }

      // Increment count
      await tx.rateLimit.update({
        where: { id: record.id },
        data: { count: { increment: 1 } },
      });

      return {
        success: true,
        remaining: limit - record.count - 1,
        resetTime: record.resetTime.getTime(),
        limit,
      };
    });

    // Occasionally cleanup old records (1 in 100 requests)
    if (Math.random() < 0.01) {
      cleanupOldRateLimitRecords().catch(() => {});
    }

    return result;
  } catch (error) {
    console.error("Rate limit database error:", error);
    // Fail open - allow request on database error
    return {
      success: true,
      remaining: limit,
      resetTime: now + windowMs,
      limit,
    };
  }
}

/**
 * Main rate limiting function for API routes
 * Uses database for authenticated users, IP-based fallback for anonymous
 *
 * @param type - Rate limit type from RATE_LIMITS
 * @returns Rate limit result
 */
export async function rateLimitApi(
  type: keyof typeof RATE_LIMITS = "api",
): Promise<RateLimitResult> {
  const config = RATE_LIMITS[type];
  const { userId, ipHash } = await getClientIdentifier();

  const identifier = userId || `ip:${ipHash}`;

  return rateLimitDb(identifier, config.limit, config.windowMs);
}

/**
 * Check rate limit and return error response if exceeded
 * Use this in API routes for easy rate limiting
 *
 * @param type - Rate limit type from RATE_LIMITS
 * @returns Response object if rate limited, null if allowed
 */
export async function checkRateLimit(
  type: keyof typeof RATE_LIMITS = "api",
): Promise<Response | null> {
  const result = await rateLimitApi(type);

  if (!result.success) {
    return new Response(
      JSON.stringify({
        error: "Rate limit exceeded",
        retryAfter: Math.ceil((result.resetTime - Date.now()) / 1000),
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "X-RateLimit-Limit": result.limit.toString(),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": new Date(result.resetTime).toISOString(),
          "Retry-After": Math.ceil(
            (result.resetTime - Date.now()) / 1000,
          ).toString(),
        },
      },
    );
  }

  return null;
}

/**
 * In-memory rate limiter for use in tRPC procedures
 * This is a synchronous version that works within tRPC context
 * Note: For API routes, use the async rateLimit() function instead
 */
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

/**
 * Synchronous rate limit function for tRPC procedures
 * @deprecated For API routes, use the async checkRateLimit() function instead
 */
export function rateLimit(
  identifier: string,
  limit: number = 10,
  windowMs: number = 60000,
): { success: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  // Clean up expired entries
  if (entry && now > entry.resetTime) {
    rateLimitMap.delete(identifier);
  }

  const current = rateLimitMap.get(identifier);

  if (!current) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true, remaining: limit - 1, resetTime: now + windowMs };
  }

  if (current.count >= limit) {
    return {
      success: false,
      remaining: 0,
      resetTime: current.resetTime,
    };
  }

  current.count++;
  return {
    success: true,
    remaining: limit - current.count,
    resetTime: current.resetTime,
  };
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 60000); // Clean every minute
