import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

// /** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {}

export default withNextIntl(nextConfig) // Exporting Next.js configuration with internationalization plugin
