import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investir dans Yunicity - Opportunité d\'Investissement',
  description: 'Investissez dans l\'avenir local. Yunicity recherche des investisseurs pour accélérer le développement de la super-app qui reconnecte les habitants à leur territoire. ROI attractif, marché en croissance.',
  keywords: [
    'investir Yunicity',
    'investissement startup',
    'levée de fonds',
    'investir application',
    'opportunité investissement',
    'startup tech',
    'investissement français',
    'ROI',
    'business model'
  ],
  openGraph: {
    title: 'Investir dans Yunicity - Opportunité d\'Investissement',
    description: 'Investissez dans l\'avenir local. Yunicity recherche des investisseurs pour accélérer le développement.',
    url: 'https://yunicity-website.vercel.app/investir',
    type: 'website',
  },
  alternates: {
    canonical: '/investir',
  },
}

export default function InvestirLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

