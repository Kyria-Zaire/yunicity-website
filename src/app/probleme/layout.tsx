import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Le Problème - Isolement Urbain en France',
  description: '34 millions de Français se sentent déconnectés de leur ville. Découvrez les problématiques d\'isolement urbain que Yunicity résout : information éparpillée, manque de lien social, faible visibilité des acteurs locaux.',
  keywords: [
    'isolement urbain',
    'déconnexion sociale',
    'problème ville',
    'communauté locale',
    'information locale',
    'isolement France',
    'lien social',
    'quartier',
    'vie locale'
  ],
  openGraph: {
    title: 'Le Problème - Isolement Urbain | YUNICITY',
    description: '34 millions de Français se sentent déconnectés de leur ville. Découvrez les problématiques que Yunicity résout.',
    url: 'https://yunicity-website.vercel.app/probleme',
    type: 'website',
  },
  alternates: {
    canonical: '/probleme',
  },
}

export default function ProblemeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

