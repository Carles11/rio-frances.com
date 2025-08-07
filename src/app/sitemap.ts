import { MetadataRoute } from 'next'

/**
 * Clean sitemap for better Google Search Console compatibility
 * Only includes real, indexable pages without fragments or virtual URLs
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rio-frances.com'
  const currentDate = new Date().toISOString()

  // Only include real pages that actually exist and are indexable
  return [
    // Main homepage (English default)
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
    // Spanish/Chilean market targeting
    {
      url: `${baseUrl}/es`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
  ]
}
