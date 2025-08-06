import { MetadataRoute } from 'next'

/**
 * Enhanced sitemap for better SEO targeting German and Chilean markets
 * Solo developer optimization with mobile and service-specific targeting
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rio-frances.com'
  const currentDate = new Date().toISOString()

  // Define main pages with their priorities and frequencies
  const pages = [
    // Homepage with highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    // German market targeting
    {
      url: `${baseUrl}/de`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    // Chilean market targeting
    {
      url: `${baseUrl}/es`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
  ]

  // Service-specific landing pages for better targeting
  const services = [
    'web-development',
    'mobile-app-development',
    'seo-optimization',
    'react-development',
    'nextjs-development',
    'react-native-development',
    'freelance-developer',
    'portfolio-website',
    'ecommerce-development',
    'performance-optimization',
  ]

  // Location-specific pages for local SEO
  const germanCities = [
    'berlin',
    'munich',
    'hamburg',
    'cologne',
    'frankfurt',
    'stuttgart',
    'dusseldorf',
    'dortmund',
    'essen',
    'leipzig',
  ]

  const chileanCities = [
    'santiago',
    'valparaiso',
    'concepcion',
    'vina-del-mar',
    'antofagasta',
    'temuco',
    'la-serena',
    'iquique',
  ]

  // Add section-specific URLs for better SEO granularity
  const sections = ['about', 'projects', 'contact', 'faq', 'services']
  const locales = ['en', 'de', 'es']

  // Add main sections for each locale
  locales.forEach((locale) => {
    sections.forEach((section) => {
      const baseRoute = locale === 'en' ? '' : `/${locale}`
      pages.push({
        url: `${baseUrl}${baseRoute}#${section}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })
    })
  })

  // Add service-specific pages (virtual pages for SEO)
  services.forEach((service) => {
    // English service pages
    pages.push({
      url: `${baseUrl}/services/${service}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })

    // German service pages
    pages.push({
      url: `${baseUrl}/de/dienstleistungen/${service}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })

    // Spanish service pages
    pages.push({
      url: `${baseUrl}/es/servicios/${service}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })
  })

  // Add location-specific pages for German market
  germanCities.forEach((city) => {
    pages.push({
      url: `${baseUrl}/de/webentwicklung-${city}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })
  })

  // Add location-specific pages for Chilean market
  chileanCities.forEach((city) => {
    pages.push({
      url: `${baseUrl}/es/desarrollo-web-${city}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })
  })

  // Add technology-specific pages
  const technologies = [
    'react',
    'nextjs',
    'typescript',
    'tailwindcss',
    'react-native',
    'expo',
    'nodejs',
    'mongodb',
  ]

  technologies.forEach((tech) => {
    locales.forEach((locale) => {
      const baseRoute = locale === 'en' ? '' : `/${locale}`
      const techPath =
        locale === 'de'
          ? 'technologie'
          : locale === 'es'
          ? 'tecnologia'
          : 'technology'

      pages.push({
        url: `${baseUrl}${baseRoute}/${techPath}/${tech}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.5,
      })
    })
  })

  // Add blog/portfolio project pages
  const projectSlugs = [
    'rio-frances-portfolio',
    'crix-design-portfolio',
    'mypension-app',
    'remoryo-mobile-app',
    'leo-leo-reading-contest',
    'mosaic-photography',
    'sweet-text-ai-generator',
  ]

  projectSlugs.forEach((slug) => {
    locales.forEach((locale) => {
      const baseRoute = locale === 'en' ? '' : `/${locale}`
      const projectPath =
        locale === 'de'
          ? 'projekte'
          : locale === 'es'
          ? 'proyectos'
          : 'projects'

      pages.push({
        url: `${baseUrl}${baseRoute}/${projectPath}/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      })
    })
  })

  return pages
}
