import { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact | Yunicity',
  description: 'Contactez l\'equipe Yunicity. Une question, un projet ou une idee de partenariat ? Nous vous repondons sous 24h.',
  metadataBase: new URL('https://yunicity-website.vercel.app'),
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Yunicity',
    description: 'Contactez l\'equipe Yunicity. Une question, un projet ou une idee de partenariat ? Nous vous repondons sous 24h.',
    url: 'https://yunicity-website.vercel.app/contact',
    siteName: 'Yunicity',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Yunicity',
    description: 'Contactez l\'equipe Yunicity. Une question, un projet ou une idee de partenariat ? Nous vous repondons sous 24h.',
  },
}

export default function ContactPage() {
  return <ContactContent />
}
