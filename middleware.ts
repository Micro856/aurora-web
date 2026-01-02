import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except static files and API routes
  // The locale matching is handled dynamically by next-intl middleware
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
