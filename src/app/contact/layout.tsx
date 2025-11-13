import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contactez-nous - Yunicity',
  description: 'Contactez l\'équipe Yunicity. Une question ? Un projet ? Une idée de partenariat ? Réponse sous 24h. Formulaire de contact et prise de rendez-vous disponible.',
  keywords: [
    'contact Yunicity',
    'contacter équipe',
    'support Yunicity',
    'partenariat',
    'investissement',
    'presse',
    'rendez-vous'
  ],
  openGraph: {
    title: 'Contactez-nous - Yunicity',
    description: 'Contactez l\'équipe Yunicity. Réponse sous 24h. Formulaire de contact et prise de rendez-vous disponible.',
    url: 'https://yunicity-website.vercel.app/contact',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

