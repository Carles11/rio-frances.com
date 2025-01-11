import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'de', 'es'],

  // Used when no locale matches
  defaultLocale: 'en',
  // change paths for SEO
  // still not working because these are not really paths, but hash fragments
  pathnames: {
    '/#about': {
      en: '/#about',
      de: '/#uber-mich',
      es: '/#sobre-mi',
    },
    '/#projects': {
      en: '/#projects',
      de: '/#projekte',
      es: '/#proyectos',
    },
    '/#contact': {
      en: '/#contact',
      de: '/#kontakt',
      es: '/#contacto',
    },
  },
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number]
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
