'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { useFaqData } from '@/config/faqData'
import { useTranslations } from 'next-intl'

const FaqSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([])
  const t = useTranslations('FAQ')
  const faqData = useFaqData()

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const categories = [
    { key: 'all', label: t('categories.all') },
    { key: 'services', label: t('categories.services') },
    { key: 'mobile', label: t('categories.mobile') },
    { key: 'seo', label: t('categories.seo') },
    { key: 'freelance', label: t('categories.freelance') },
  ]

  const [activeCategory, setActiveCategory] = useState('all')

  const filteredFaqs =
    activeCategory === 'all'
      ? faqData
      : faqData.filter((faq) => faq.category === activeCategory)

  return (
    <section className="py-16 px-4 xl:px-16" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{t('title')}</h2>
          <p className="text-[#ADB7BE] text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white border-transparent'
                  : 'text-[#ADB7BE] border-[#33353F] hover:border-primary-500'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <motion.div
              key={faq.id}
              layout
              className="border border-[#33353F] rounded-lg bg-[#181818] overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#1a1a1a] transition-colors duration-200"
                data-track="faq"
                data-faq-id={faq.id}
                data-faq-category={faq.category}
              >
                <h3 className="text-white font-semibold text-lg pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(faq.id) ? (
                  <ChevronUpIcon className="h-5 w-5 text-primary-500 flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-primary-500 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openItems.includes(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-[#ADB7BE] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-[#ADB7BE] mb-4">{t('contactCta')}</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
            data-track="service-interest"
            data-service="contact-from-faq"
          >
            {t('contactButton')}
          </a>
        </div>
      </div>

      {/* FAQ Schema structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: filteredFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}

export default FaqSection
