import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notre Solution - Hub Local Unique',
  description: 'Yunicity est le Hub unique qui centralise toute votre vie locale : événements, commerces, communauté. Découvrez comment nous reconnectons les habitants à leur territoire.',
  keywords: [
    'solution locale',
    'hub local',
    'application locale',
    'centraliser vie locale',
    'événements locaux',
    'commerces locaux',
    'communauté locale',
    'super-app',
    'plateforme locale'
  ],
  openGraph: {
    title: 'Notre Solution - Hub Local Unique | YUNICITY',
    description: 'Yunicity centralise toute votre vie locale : événements, commerces, communauté. Découvrez notre solution.',
    url: 'https://yunicity-website.vercel.app/solution',
    type: 'website',
  },
  alternates: {
    canonical: '/solution',
  },
}

export default function SolutionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

