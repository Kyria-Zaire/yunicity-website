import { Metadata } from 'next'
import CGUContent from './CGUContent'

export const metadata: Metadata = {
  title: 'CGU | Yunicity',
  description: 'Conditions Generales d\'Utilisation du site Yunicity. Regles d\'acces et d\'utilisation du site et de ses services.',
  metadataBase: new URL('https://yunicity-website.vercel.app'),
  alternates: { canonical: '/cgu' },
  openGraph: {
    title: 'CGU | Yunicity',
    description: 'Conditions Generales d\'Utilisation du site Yunicity. Regles d\'acces et d\'utilisation du site et de ses services.',
    url: 'https://yunicity-website.vercel.app/cgu',
    siteName: 'Yunicity',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CGU | Yunicity',
    description: 'Conditions Generales d\'Utilisation du site Yunicity. Regles d\'acces et d\'utilisation du site et de ses services.',
  },
}

export default function CGUPage() {
  return <CGUContent />
}
