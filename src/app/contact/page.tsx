import { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact | Yunicity',
  description: 'Contactez l\'equipe Yunicity. Une question, un projet ou une idee de partenariat ? Nous vous repondons sous 24h.',
}

export default function ContactPage() {
  return <ContactContent />
}
