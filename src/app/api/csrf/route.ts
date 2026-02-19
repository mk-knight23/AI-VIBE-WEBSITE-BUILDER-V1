import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getCSRFTokenForClient } from '@/lib/csrf';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * GET /api/csrf
 *
 * Returns a CSRF token for authenticated users.
 * The client should include this token in the x-csrf-token header
 * for all state-changing requests (POST, PUT, DELETE, PATCH).
 */
export async function GET() {
  // Require authentication to get a CSRF token
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json(
      { error: 'Authentication required' },
      { status: 401 }
    );
  }

  const tokenData = await getCSRFTokenForClient();

  return NextResponse.json(tokenData);
}
