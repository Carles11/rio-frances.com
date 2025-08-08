import Navbar from '@/app/[locale]/components/Navbar'
import Footer from '@/app/[locale]/components/Footer'
import { metadata } from '../seo/seoMeta'
import JsonLdSchema from '../components/JsonLdSchema'
import { useLocale, useTranslations } from 'next-intl'

export default function SeoPage() {
  const locale = useLocale()
  const t = useTranslations('SEO')
  const meta = metadata[locale] || metadata['en']
  const keywords = Array.isArray(meta.keywords)
    ? meta.keywords.join(', ')
    : meta.keywords || ''

  return (
    <>
      <Navbar />
      <section
        className="pt-32 md:pt-36 lg:pt-40 pb-16 px-4 xl:px-16 min-h-[60vh] bg-[#181818]"
        id="seo-service"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              {String(meta.title ?? t('title'))}
            </h1>
            <p className="text-[#ADB7BE] text-lg max-w-2xl mx-auto mb-4">
              {meta.description ?? t('description')}
            </p>
            <p className="text-sm text-primary-400 font-medium mb-8">
              {keywords}
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary-400 mb-4">
              {t('whyTitle')}
            </h2>
            <p className="text-[#ADB7BE] mb-4">{t('whyText')}</p>
            <h3 className="text-xl font-semibold text-white mt-8 mb-2">
              {t('issuesTitle')}
            </h3>
            <ul className="list-disc list-inside text-[#ADB7BE] mb-4">
              <li>{t('issue1')}</li>
              <li>{t('issue2')}</li>
              <li>{t('issue3')}</li>
              <li>{t('issue4')}</li>
              <li>{t('issue5')}</li>
              <li>{t('issue6')}</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-8 mb-2">
              {t('techniquesTitle')}
            </h3>
            <ul className="list-disc list-inside text-[#ADB7BE] mb-4">
              <li>{t('technique1')}</li>
              <li>{t('technique2')}</li>
              <li>{t('technique3')}</li>
              <li>{t('technique4')}</li>
              <li>{t('technique5')}</li>
              <li>{t('technique6')}</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-8 mb-2">
              {t('whyChooseTitle')}
            </h3>
            <ul className="list-disc list-inside text-[#ADB7BE] mb-4">
              <li>{t('whyChoose1')}</li>
              <li>{t('whyChoose2')}</li>
              <li>{t('whyChoose3')}</li>
            </ul>
          </div>
          <div className="text-center mt-12">
            <p className="text-[#ADB7BE] mb-4">{t('contactCta')}</p>
            <a
              href={`/${locale}/#contact`}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
              data-track="service-interest"
              data-service="contact-from-seo"
            >
              {t('contactButton')}
            </a>
          </div>
          <JsonLdSchema locale={locale} />
        </div>
      </section>
      <Footer />
    </>
  )
}
