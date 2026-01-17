import { Metadata } from 'next'
import CGUContent from './CGUContent'

export const metadata: Metadata = {
  title: 'CGU | Yunicity',
  description: 'Conditions Generales d\'Utilisation du site Yunicity. Regles d\'acces et d\'utilisation du site et de ses services.',
}

export default function CGUPage() {
  return <CGUContent />
}
