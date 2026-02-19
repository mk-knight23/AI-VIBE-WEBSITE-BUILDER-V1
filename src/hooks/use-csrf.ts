"use client";

import { useState, useEffect } from 'react';

/**
 * Hook to manage CSRF tokens for API requests
 *
 * Usage:
 * 1. Call this hook to get the current CSRF token
 * 2. Include it in the 'x-csrf-token' header for POST/PUT/DELETE/PATCH requests
 *
 * @returns The current CSRF token or null if not loaded
 */
export function useCSRFToken(): string | null {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch('/api/csrf');
        if (response.ok) {
          const data = await response.json();
          setToken(data.token);
        }
      } catch (error) {
        console.error('Failed to fetch CSRF token:', error);
      }
    }

    fetchToken();
  }, []);

  return token;
}

/**
 * Enhanced fetch wrapper that automatically includes CSRF token
 *
 * @param url - The URL to fetch
 * @param options - Fetch options (method, headers, body, etc.)
 * @returns The fetch response
 */
export async function fetchWithCSRF(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  // Get CSRF token first
  const csrfResponse = await fetch('/api/csrf');
  let csrfToken = '';

  if (csrfResponse.ok) {
    const data = await csrfResponse.json();
    csrfToken = data.token;
  }

  // Add CSRF token to headers
  const headers = {
    ...options.headers,
    'Content-Type': 'application/json',
    ...(csrfToken && { 'x-csrf-token': csrfToken }),
  };

  return fetch(url, {
    ...options,
    headers,
  });
}

/**
 * Hook to get a fetch function that includes CSRF tokens
 *
 * @returns A fetch function that includes CSRF tokens automatically
 */
export function useCSRFFetch() {
  const token = useCSRFToken();

  return async (url: string, options: RequestInit = {}): Promise<Response> => {
    const headers = {
      ...options.headers,
      'Content-Type': 'application/json',
      ...(token && { 'x-csrf-token': token }),
    };

    return fetch(url, {
      ...options,
      headers,
    });
  };
}
