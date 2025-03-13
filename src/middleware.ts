import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing) // Creating middleware for handling internationalized routes

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|de|es)/:path*'],
}
