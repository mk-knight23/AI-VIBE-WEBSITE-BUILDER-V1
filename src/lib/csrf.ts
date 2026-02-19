/**
 * CSRF Protection Utilities
 *
 * This module provides CSRF token generation and validation for Next.js API routes.
 * CSRF tokens are stored in httpOnly cookies and sent via custom headers.
 */

import { cookies } from 'next/headers';
import crypto from 'crypto';

const CSRF_TOKEN_HEADER = 'x-csrf-token';
const CSRF_COOKIE_NAME = 'csrf-token';
const TOKEN_LENGTH = 32; // bytes

/**
 * Generate a cryptographically secure CSRF token
 */
export function generateCSRFToken(): string {
  return crypto.randomBytes(TOKEN_LENGTH).toString('hex');
}

/**
 * Set CSRF token in httpOnly cookie
 * This should be called on authenticated requests or page loads
 */
export async function setCSRFCookie(): Promise<string> {
  const token = generateCSRFToken();
  const cookieStore = await cookies();

  cookieStore.set(CSRF_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24, // 24 hours
  });

  return token;
}

/**
 * Get CSRF token from cookie
 */
export async function getCSRFCookie(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(CSRF_COOKIE_NAME)?.value;
}

/**
 * Validate CSRF token from request headers against cookie
 * Returns true if valid, false otherwise
 */
export async function validateCSRFToken(tokenHeader: string | null): Promise<boolean> {
  const cookieToken = await getCSRFCookie();

  if (!tokenHeader || !cookieToken || tokenHeader !== cookieToken) {
    return false;
  }

  return true;
}

/**
 * Ensure a valid CSRF token exists and return it
 * Creates a new token if none exists
 */
export async function ensureCSRFToken(): Promise<string> {
  const existing = await getCSRFCookie();
  if (existing) {
    return existing;
  }
  return await setCSRFCookie();
}

/**
 * Middleware function to validate CSRF on state-changing requests
 * Use this in API routes that handle POST, PUT, DELETE, PATCH
 *
 * @param token - CSRF token from request header
 * @returns Response object if CSRF validation fails, null if valid
 */
export async function requireValidCSRF(token: string | null): Promise<Response | null> {
  const isValid = await validateCSRFToken(token);

  if (!isValid) {
    return new Response(
      JSON.stringify({
        error: 'Invalid CSRF token',
        message: 'CSRF validation failed. Please refresh the page and try again.',
      }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  return null;
}

/**
 * Generate a new CSRF token for client-side use
 * Call this from an API endpoint to provide a token to the client
 */
export async function getCSRFTokenForClient(): Promise<{ token: string; headerName: string }> {
  const token = await ensureCSRFToken();
  return {
    token,
    headerName: CSRF_TOKEN_HEADER,
  };
}
