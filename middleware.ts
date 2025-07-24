// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/navigation';

export default createMiddleware({
  locales: locales,
  defaultLocale: 'en',
});

export const config = {
  matcher: [
    '/',
    '/(vi|en)/:path*',
    '/((?!api|_next|_vercel|.*\\.|robots.txt).*)',
  ],
};
