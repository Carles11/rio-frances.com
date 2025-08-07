import { MetadataRoute } from 'next'

export const dynamic = 'force-dynamic' // Optional, forces re-generation on each request

const baseUrl = 'https://www.rio-frances.com'
const currentDate = new Date().toISOString()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/de`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/es`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}
