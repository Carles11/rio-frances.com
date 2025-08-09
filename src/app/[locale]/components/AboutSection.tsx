'use client'
import { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { useTabData } from '@/config/tabData'
import { useTranslations } from 'next-intl'

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [, startTransition] = useTransition()

  const t = useTranslations('AboutSection')
  const TAB_DATA = useTabData()

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <picture>
          <source
            srcSet="/images/dev-desktop-carles_316.webp"
            media="(max-width: 640px)"
            width="316"
            height="316"
            type="image/webp"
          />
          <source
            srcSet="/images/dev-desktop-carles_496.webp"
            media="(min-width: 641px)"
            width="496"
            height="496"
            type="image/webp"
          />
          <img
            src="/images/dev-desktop-carles_496.webp"
            alt="About me image"
            width="496"
            height="496"
            loading="eager"
            style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
          />
        </picture>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t('title')}</h2>
          <p className="text-base lg:text-lg">{t('description')}</p>
          <div className="flex flex-row justify-start overflow-x-auto mt-8">
            <div className="space-x-4">
              <TabButton
                selectTab={() => handleTabChange('skills')}
                active={tab === 'skills'}
              >
                {t('skills')}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange('education')}
                active={tab === 'education'}
              >
                {t('education')}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange('certifications')}
                active={tab === 'certifications'}
              >
                {t('certifications')}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange('languages')}
                active={tab === 'languages'}
              >
                {t('languages')}
              </TabButton>
            </div>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
