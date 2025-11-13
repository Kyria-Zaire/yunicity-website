import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Découvrez Reims - Ville Pilote Yunicity',
  description: 'Reims, ville pilote de Yunicity. Découvrez 6 lieux authentiques sélectionnés par nos ambassadeurs locaux. Lancement MVP en Mars 2026.',
  keywords: [
    'Reims',
    'ville Reims',
    'lieux Reims',
    'tourisme Reims',
    'Reims France',
    'Champagne',
    'ville pilote',
    'Reims local',
    'découvrir Reims'
  ],
  openGraph: {
    title: 'Découvrez Reims - Ville Pilote | YUNICITY',
    description: 'Reims, ville pilote de Yunicity. Découvrez les lieux authentiques de la ville.',
    url: 'https://yunicity-website.vercel.app/reims',
    type: 'website',
  },
  alternates: {
    canonical: '/reims',
  },
}

export default function ReimsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

