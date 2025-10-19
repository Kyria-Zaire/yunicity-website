'use client'
import InvestirHeroSection from '@/components/InvestirHeroSection'
import InvestirOpportunitySection from '@/components/InvestirOpportunitySection'
import InvestirContactSection from '@/components/InvestirContactSection'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

export default function InvestirPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation activeSection="" />
      <BackButton />

      {/* Section 1 - Hero investissement */}
      <InvestirHeroSection />

      {/* Section 2 - Opportunité */}
      <InvestirOpportunitySection />

      {/* Section 3 - CTA Contact */}
      <InvestirContactSection />

      <Footer />
    </div>
  )
}
