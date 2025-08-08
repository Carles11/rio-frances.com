import './globals.css'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Locale, routing } from '@/i18n/routing'
import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import JsonLdSchema from './components/JsonLdSchema'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const messages = await getMessages()
  const mainPageMessages = (messages as Record<string, Record<string, string>>)
    .MainPage

  // Enhanced localized keywords for better targeting
  const getLocalizedKeywords = (locale: string) => {
    const baseKeywords = [
      'Carles del Río Francés',
      'Web Developer',
      'Mobile Developer',
      'React Developer',
      'Next.js Developer',
      'SEO Specialist',
      'Freelance Developer',
      'TypeScript Developer',
      'React Native Developer',
    ]

    const localizedKeywords = {
      en: [
        ...baseKeywords,
        // Core services
        'Web Development Germany',
        'Mobile App Development Chile',
        'SEO Optimization Services',
        'AIO Optimization',
        'Freelance Web Developer',
        'Remote Developer',
        'Portfolio Website',
        'Custom Web Applications',
        'E-commerce Development',
        'Responsive Web Design',
        // Solo developer advantages
        'Solo Web Developer',
        'Independent Developer',
        'Small Business Web Developer',
        'Startup Web Developer',
        'Cost-effective Web Development',
        // Niche mobile keywords
        'React Native Apps',
        'Expo Development',
        'Cross-platform Mobile Apps',
        'Mobile-first Development',
        'Progressive Web Apps',
        // Technical SEO niches
        'Technical SEO Consultant',
        'Core Web Vitals Optimization',
        'Page Speed Optimization',
        'Mobile SEO Specialist',
        'Local SEO Germany',
        'International SEO',
      ],
      de: [
        ...baseKeywords,
        // Core German services
        'Webentwickler Deutschland',
        'Mobile App Entwicklung',
        'SEO Optimierung Deutschland',
        'AIO Optimierung',
        'Freiberuflicher Webentwickler',
        'Remote Entwickler',
        'Portfolio Website',
        'Maßgeschneiderte Webanwendungen',
        'E-Commerce Entwicklung',
        'Responsive Webdesign',
        'DSGVO konform',
        // German cities (less competitive niches)
        'Webentwicklung Berlin',
        'Webentwicklung München',
        'Webentwicklung Hamburg',
        'Webentwicklung Köln',
        'Webentwicklung Frankfurt',
        'Webentwicklung Stuttgart',
        'Webentwicklung Düsseldorf',
        // Solo developer advantages in German
        'Selbständiger Webentwickler',
        'Einzelunternehmer Webentwicklung',
        'KMU Webentwickler',
        'Startup Webentwickler',
        'Günstige Webentwicklung',
        // Mobile niches in German
        'React Native Entwicklung',
        'Cross-Platform Apps',
        'Mobile-First Entwicklung',
        'Progressive Web Apps',
        // SEO niches in German
        'Technisches SEO',
        'Core Web Vitals',
        'Pagespeed Optimierung',
        'Mobile SEO',
        'Lokales SEO Deutschland',
        'SEO für KMU',
      ],
      es: [
        ...baseKeywords,
        // Core Chilean/Spanish services
        'Desarrollador Web Chile',
        'Desarrollo de Apps Móviles',
        'Optimización SEO Chile',
        'Optimización AIO',
        'Desarrollador Freelance',
        'Desarrollador Remoto',
        'Sitio Web Portfolio',
        'Aplicaciones Web Personalizadas',
        'Desarrollo E-commerce',
        'Diseño Web Responsivo',
        // Chilean cities (less competitive niches)
        'Desarrollo Web Santiago',
        'Desarrollo Web Valparaíso',
        'Desarrollo Web Concepción',
        'Desarrollo Web Viña del Mar',
        'Desarrollo Web Antofagasta',
        'Desarrollo Web Temuco',
        'Desarrollo Web La Serena',
        // Solo developer advantages in Spanish
        'Desarrollador Independiente',
        'Freelancer Web Chile',
        'Desarrollador para PYMES',
        'Desarrollo Web Económico',
        'Programador Freelance',
        // Mobile niches in Spanish
        'Aplicaciones React Native',
        'Apps Multiplataforma',
        'Desarrollo Mobile-First',
        'Aplicaciones Web Progresivas',
        'PWA Chile',
        // SEO niches in Spanish
        'SEO Técnico Chile',
        'Optimización Core Web Vitals',
        'Velocidad de Página',
        'SEO Móvil',
        'SEO Local Chile',
        'Posicionamiento Web Chile',
      ],
    }

    return (
      localizedKeywords[locale as keyof typeof localizedKeywords] ||
      localizedKeywords.en
    )
  }

  const getLocalizedDescription = (locale: string) => {
    const descriptions = {
      en: 'Portfolio of Carles del Río Francés - Freelance Web & Mobile Developer specializing in React, Next.js, React Native, and SEO optimization. Serving clients in Germany, Chile, and worldwide with custom web applications, mobile apps, and digital solutions.',
      de: 'Portfolio von Carles del Río Francés - Freiberuflicher Web- & Mobile-Entwickler spezialisiert auf React, Next.js, React Native und SEO-Optimierung. Betreut Kunden in Deutschland, Chile und weltweit mit maßgeschneiderten Webanwendungen, mobilen Apps und digitalen Lösungen.',
      es: 'Portfolio de Carles del Río Francés - Desarrollador Web y Móvil Freelance especializado en React, Next.js, React Native y optimización SEO. Atendiendo clientes en Alemania, Chile y mundialmente con aplicaciones web personalizadas, apps móviles y soluciones digitales.',
    }

    return descriptions[locale as keyof typeof descriptions] || descriptions.en
  }

  const baseUrl = 'https://www.rio-frances.com'
  const canonicalUrl = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`

  return {
    title: {
      default: mainPageMessages?.title || 'Carles del Río Developer',
      template: '%s | Carles del Río Francés',
    },
    description: getLocalizedDescription(locale),
    keywords: getLocalizedKeywords(locale),
    authors: [
      { name: 'Carles del Río Francés', url: 'https://www.rio-frances.com' },
    ],
    creator: 'Carles del Río Francés',
    publisher: 'Carles del Río Francés',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: baseUrl,
        de: `${baseUrl}/de`,
        es: `${baseUrl}/es`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      title: 'Carles del Río Francés - Web & Mobile Developer',
      description: getLocalizedDescription(locale),
      images: [
        {
          url: '/images/carles-in-ids.webp',
          width: 1200,
          height: 630,
          alt: 'Carles del Río Francés - Web & Mobile Developer',
        },
      ],
      url: canonicalUrl,
      type: 'website',
      locale: locale,
      siteName: 'Carles del Río Francés Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Carles del Río Francés - Web & Mobile Developer',
      description: getLocalizedDescription(locale),
      images: ['/images/carles-in-ids.webp'],
      creator: '@carlesrio', // Add your actual Twitter handle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // Add your actual Google verification code
      // bing: 'your-bing-verification-code', // Add your Bing verification code if needed
    },
    category: 'technology',
    classification: 'Web Development Services',
    icons: {
      icon: [
        { url: '/favicon.ico' },
        {
          url: '/favicons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/favicons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
      apple: { url: '/favicons/apple-touch-icon.png', sizes: '180x180' },
    },
    manifest: '/favicons/site.webmanifest',
    other: {
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'theme-color': '#121212',
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  // Providing all messages to the client
  const messages = await getMessages()
  // Hreflang alternate links for SEO
  const hreflangs = [
    { href: 'https://www.rio-frances.com', hreflang: 'en' },
    { href: 'https://www.rio-frances.com/de', hreflang: 'de' },
    { href: 'https://www.rio-frances.com/es', hreflang: 'es' },
    { href: 'https://www.rio-frances.com', hreflang: 'x-default' },
  ]

  return (
    <html lang={locale}>
      <head>
        <JsonLdSchema locale={locale} />
        {hreflangs.map((link) => (
          <link
            key={link.hreflang}
            rel="alternate"
            hrefLang={link.hreflang}
            href={link.href}
          />
        ))}
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
