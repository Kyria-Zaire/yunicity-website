import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newsletter Yunicity - Restez Informé',
  description: 'Inscrivez-vous à la newsletter Yunicity et restez informé du lancement de l\'application, des actualités locales de Reims et des événements à venir.',
  keywords: [
    'newsletter Yunicity',
    'inscription newsletter',
    'actualités Reims',
    'événements locaux',
    'newsletter locale',
    's\'abonner Yunicity'
  ],
  openGraph: {
    title: 'Newsletter Yunicity - Restez Informé',
    description: 'Inscrivez-vous à la newsletter Yunicity et restez informé du lancement et des actualités locales.',
    url: 'https://yunicity-website.vercel.app/newsletter',
    type: 'website',
  },
  alternates: {
    canonical: '/newsletter',
  },
}

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

