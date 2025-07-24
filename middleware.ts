// middleware.ts

import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/navigation';

const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: 'en',
});

import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  // If the response is a NextResponse and the status is 404, rewrite to /not-found
  if (response?.status === 404) {
    return NextResponse.rewrite('/not-found');
  }
  return response;
}

export const config = {
  matcher: [
    '/',
    '/(vi|en)/:path*',
    '/((?!api|_next|_vercel|.*\\.|robots.txt).*)',
    '/not-found',
    '/(vi|en)/not-found',
  ],
};
