import HeroSection from '@/app/components/HeroSection'
import AboutSection from '@/app/components/AboutSection'
import Navbar from '@/app/components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Navbar />
      <div className="container mt-28 lg:mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  )
}
