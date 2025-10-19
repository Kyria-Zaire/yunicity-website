'use client'
import Navigation from '@/components/Navigation'
import ReimsHeroCarousel from '@/components/ReimsHeroCarousel'
import ReimsExperienceSection from '@/components/ReimsExperienceSection'
import ReimsCallToActionSection from '@/components/ReimsCallToActionSection'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

export default function ReimsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation activeSection="" />
      <BackButton />

      {/* Section 1 - Carousel des lieux touristiques */}
      <ReimsHeroCarousel />

      {/* Section 2 - Expérience Reims */}
      <ReimsExperienceSection />

      {/* Section 3 - CTA */}
      <ReimsCallToActionSection />

      <Footer />
    </div>
  )
}
