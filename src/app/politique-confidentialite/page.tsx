import { Metadata } from 'next'
import PolitiqueConfidentialiteContent from './PolitiqueConfidentialiteContent'

export const metadata: Metadata = {
  title: 'Politique de Confidentialite | Yunicity',
  description: 'Politique de confidentialite de Yunicity. Decouvrez comment nous protegeons vos donnees personnelles conformement au RGPD.',
  metadataBase: new URL('https://yunicity-website.vercel.app'),
  alternates: { canonical: '/politique-confidentialite' },
  openGraph: {
    title: 'Politique de Confidentialite | Yunicity',
    description: 'Politique de confidentialite de Yunicity. Decouvrez comment nous protegeons vos donnees personnelles conformement au RGPD.',
    url: 'https://yunicity-website.vercel.app/politique-confidentialite',
    siteName: 'Yunicity',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Politique de Confidentialite | Yunicity',
    description: 'Politique de confidentialite de Yunicity. Decouvrez comment nous protegeons vos donnees personnelles conformement au RGPD.',
  },
}

export default function PolitiqueConfidentialitePage() {
  return <PolitiqueConfidentialiteContent />
}
