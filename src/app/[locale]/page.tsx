import { useTranslations } from 'next-intl'

import HeroSection from '@/app/[locale]/components/HeroSection'
import AboutSection from '@/app/[locale]/components/AboutSection'
import ProjectsSection from './components/ProjectSection'
import EmailSection from '@/app/[locale]/components/EmailSection'
import AchievementsSection from './components/AchievementsSection'
import Navbar from '@/app/[locale]/components/Navbar'

export default function Home() {
  const t = useTranslations('MainPage')
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Navbar />
      <h1 className="pt-44 text-xl text-white">{t('title')}wakawaka</h1>
      <div className="container mt-28 lg:mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
    </main>
  )
}
