import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/**
 * Enhanced Next.js configuration for SEO and performance optimization
 * Targeting German and Chilean markets with mobile-first approach
 */
const nextConfig: NextConfig = {
  // Disable image optimization to avoid Vercel payment limits
  images: {
    unoptimized: true,
  },

  // Compression and optimization
  compress: true,

  // Powered by header removal for security
  poweredByHeader: false,

  // Generate static sitemap
  trailingSlash: false,
}

export default withNextIntl(nextConfig)
