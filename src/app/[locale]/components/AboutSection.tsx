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
        <Image
          src="/images/dev-desktop-carles.jpeg"
          alt="About me image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t('title')}</h2>
          <p className="text-base lg:text-lg">{t('description')}</p>
          <div className="flex flex-row justify-start mt-8">
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
