import { metadata } from '../seo/seoMeta'
import JsonLdSchema from '../components/JsonLdSchema'
import { useLocale } from 'next-intl'

export default function Page() {
  const locale = useLocale()
  const meta = metadata[locale] || metadata['en']

  // Handle keywords as string or array
  const keywords = Array.isArray(meta.keywords)
    ? meta.keywords.join(', ')
    : meta.keywords || ''

  return (
    <main>
      <h1>{String(meta.title ?? 'SEO Services')}</h1>
      <p>{meta.description ?? ''}</p>
      <p style={{ fontStyle: 'italic', color: '#888' }}>{keywords}</p>
      <JsonLdSchema locale={locale} />
      {/* Add more detailed content, FAQs, and internal links here */}
    </main>
  )
}
