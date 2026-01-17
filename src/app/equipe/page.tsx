import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import EquipeHeroSection from '@/components/EquipeHeroSection'
import EquipeTeamSection from '@/components/EquipeTeamSection'
import EquipeJoinSection from '@/components/EquipeJoinSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Notre Equipe | Yunicity',
  description: 'Rencontrez l\'equipe fondatrice de Yunicity, une equipe passionnee qui travaille a reconnecter les habitants a leur territoire.',
  metadataBase: new URL('https://yunicity-website.vercel.app'),
  alternates: { canonical: '/equipe' },
  openGraph: {
    title: 'Notre Equipe | Yunicity',
    description: 'Rencontrez l\'equipe fondatrice de Yunicity, une equipe passionnee qui travaille a reconnecter les habitants a leur territoire.',
    url: 'https://yunicity-website.vercel.app/equipe',
    siteName: 'Yunicity',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notre Equipe | Yunicity',
    description: 'Rencontrez l\'equipe fondatrice de Yunicity, une equipe passionnee qui travaille a reconnecter les habitants a leur territoire.',
  },
}

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation activeSection="" />

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
