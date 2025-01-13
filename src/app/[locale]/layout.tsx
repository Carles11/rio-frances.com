import './globals.css'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Locale, routing } from '@/i18n/routing'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Carles del Río Developer',
  description: 'Carles` del Río Portfolio',
}

interface MainPageMessages {
  title: string
  description: string
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
    <>
      <Head>
        <title>{(messages as unknown as MainPageMessages).title}</title>
        <meta
          name="description"
          content={(messages as unknown as MainPageMessages).description}
        />
        <meta
          name="keywords"
          content="Carles del Río Francés, Web Developer, Mobile Developer, Portfolio"
        />
        <meta property="og:title" content="Carles del Río Francés" />
        <meta
          property="og:description"
          content="Portfolio website of Carles del Río Francés as Web and mobile developer"
        />
        <meta property="og:image" content="/images/carles-in-ids.png" />
        <meta property="og:url" content="https://www.rio-frances.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Carles del Río Francés" />
        <meta
          name="twitter:description"
          content="Portfolio website of Carles del Río Francés as Web and mobile developer"
        />
        <meta name="twitter:image" content="/images/carles-in-ids.png" />
        <link rel="canonical" href="https://www.rio-frances.com" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>
      <html lang={locale}>
        <body className={inter.className}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  )
}
