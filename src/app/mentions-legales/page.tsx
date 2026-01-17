import { Metadata } from 'next'
import MentionsLegalesContent from './MentionsLegalesContent'

export const metadata: Metadata = {
  title: 'Mentions Legales | Yunicity',
  description: 'Mentions legales du site Yunicity. Informations sur l\'editeur, l\'hebergement, la propriete intellectuelle et la protection des donnees.',
  metadataBase: new URL('https://yunicity-website.vercel.app'),
  alternates: { canonical: '/mentions-legales' },
  openGraph: {
    title: 'Mentions Legales | Yunicity',
    description: 'Mentions legales du site Yunicity. Informations sur l\'editeur, l\'hebergement, la propriete intellectuelle et la protection des donnees.',
    url: 'https://yunicity-website.vercel.app/mentions-legales',
    siteName: 'Yunicity',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentions Legales | Yunicity',
    description: 'Mentions legales du site Yunicity. Informations sur l\'editeur, l\'hebergement, la propriete intellectuelle et la protection des donnees.',
  },
}

export default function MentionsLegalesPage() {
  return <MentionsLegalesContent />
}
