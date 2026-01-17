import { Metadata } from 'next'
import InvestirHeroSection from '@/components/InvestirHeroSection'
import InvestirOpportunitySection from '@/components/InvestirOpportunitySection'
import InvestirContactSection from '@/components/InvestirContactSection'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Investir | Yunicity',
  description: 'Decouvrez l\'opportunite d\'investissement Yunicity. Participez au developpement de la plateforme Smart City qui reconnecte les habitants a leur territoire.',
  metadataBase: new URL('https://yunicity-website.vercel.app'),
  alternates: { canonical: '/investir' },
  openGraph: {
    title: 'Investir | Yunicity',
    description: 'Decouvrez l\'opportunite d\'investissement Yunicity. Participez au developpement de la plateforme Smart City qui reconnecte les habitants a leur territoire.',
    url: 'https://yunicity-website.vercel.app/investir',
    siteName: 'Yunicity',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investir | Yunicity',
    description: 'Decouvrez l\'opportunite d\'investissement Yunicity. Participez au developpement de la plateforme Smart City qui reconnecte les habitants a leur territoire.',
  },
}

export default function InvestirPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation activeSection="" />

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
