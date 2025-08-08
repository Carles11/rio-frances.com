'use client'

import HeroSection from '@/app/[locale]/components/HeroSection'
import AboutSection from '@/app/[locale]/components/AboutSection'
import ProjectsSection from './components/ProjectSection'
import EmailSection from '@/app/[locale]/components/EmailSection'
import AchievementsSection from './components/AchievementsSection'
import FaqSection from './components/FaqSection'
import Navbar from '@/app/[locale]/components/Navbar'
import Footer from '@/app/[locale]/components/Footer'

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col bg-[#121212]"
      id="main-content"
      aria-label="Main content"
    >
      <Navbar />
      <div className="container mt-28 lg:mt-24 mx-auto px-8 md:px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <FaqSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
