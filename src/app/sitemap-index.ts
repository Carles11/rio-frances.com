import { MetadataRoute } from 'next'

/**
 * Enhanced sitemap index for better SEO organization
 * Separating different types of content for better crawling
 */
export default function sitemapIndex(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rio-frances.com'
  const currentDate = new Date().toISOString()

  return [
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/sitemap-pages.xml`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/sitemap-services.xml`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/sitemap-locations.xml`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/sitemap-technologies.xml`,
      lastModified: currentDate,
    },
  ]
}
