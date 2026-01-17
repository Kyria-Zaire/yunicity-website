import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ReimsHeroCarousel from '@/components/ReimsHeroCarousel'
import ReimsExperienceSection from '@/components/ReimsExperienceSection'
import ReimsCallToActionSection from '@/components/ReimsCallToActionSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Reims | Yunicity',
  description: 'Decouvrez Reims, la ville pilote de Yunicity. Explorez la cite des sacres et son patrimoine exceptionnel a travers notre plateforme Smart City.',
}

export default function ReimsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation activeSection="" />

      {/* Section 1 - Carousel des lieux touristiques */}
      <ReimsHeroCarousel />

      {/* Section 2 - Expérience Reims */}
      <ReimsExperienceSection showCTA={false} />

      {/* Section 3 - CTA */}
      <ReimsCallToActionSection />

      <Footer />
    </div>
  )
}
