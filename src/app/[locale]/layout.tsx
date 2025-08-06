import './globals.css'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Locale, routing } from '@/i18n/routing'
import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: _locale } = await params
  const messages = await getMessages()
  const mainPageMessages = (messages as Record<string, any>).MainPage

  return {
    title: mainPageMessages?.title || 'Carles del Río Developer',
    description: mainPageMessages?.description || 'Carles del Río Portfolio',
    keywords:
      'Carles del Río Francés, Web Developer, Mobile Developer, Portfolio',
    openGraph: {
      title: 'Carles del Río Francés',
      description:
        'Portfolio website of Carles del Río Francés as Web and mobile developer',
      images: ['/images/carles-in-ids.webp'],
      url: 'https://www.rio-frances.com',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Carles del Río Francés',
      description:
        'Portfolio website of Carles del Río Francés as Web and mobile developer',
      images: ['/images/carles-in-ids.webp'],
    },
    alternates: {
      canonical: 'https://www.rio-frances.com',
    },
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
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
