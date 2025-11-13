import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'L\'Équipe - 5 Experts Passionnés',
  description: 'Découvrez l\'équipe Yunicity : 5 experts complémentaires unis par une mission commune. Reconnecter les habitants à leur territoire.',
  keywords: [
    'équipe Yunicity',
    'fondateurs',
    'startup française',
    'équipe tech',
    'experts',
    'Yunicity team',
    'fondateurs application'
  ],
  openGraph: {
    title: 'L\'Équipe Yunicity - 5 Experts Passionnés',
    description: 'Découvrez l\'équipe Yunicity : 5 experts complémentaires unis par une mission commune.',
    url: 'https://yunicity-website.vercel.app/equipe',
    type: 'website',
  },
  alternates: {
    canonical: '/equipe',
  },
}

export default function EquipeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

