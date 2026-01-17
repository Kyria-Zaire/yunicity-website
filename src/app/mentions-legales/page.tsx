import { Metadata } from 'next'
import MentionsLegalesContent from './MentionsLegalesContent'

export const metadata: Metadata = {
  title: 'Mentions Legales | Yunicity',
  description: 'Mentions legales du site Yunicity. Informations sur l\'editeur, l\'hebergement, la propriete intellectuelle et la protection des donnees.',
}

export default function MentionsLegalesPage() {
  return <MentionsLegalesContent />
}
