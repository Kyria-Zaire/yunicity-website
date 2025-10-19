'use client'
import Navigation from '@/components/Navigation'
import EquipeHeroSection from '@/components/EquipeHeroSection'
import EquipeTeamSection from '@/components/EquipeTeamSection'
import EquipeJoinSection from '@/components/EquipeJoinSection'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation activeSection="" />
      <BackButton />

      {/* Section 1 - Hero équipe */}
      <EquipeHeroSection />

      {/* Section 2 - Membres équipe */}
      <EquipeTeamSection />

      {/* Section 3 - CTA recrutement */}
      <EquipeJoinSection />

      <Footer />
    </div>
  )
}
