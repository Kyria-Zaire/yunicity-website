import { Metadata } from 'next'
import PolitiqueConfidentialiteContent from './PolitiqueConfidentialiteContent'

export const metadata: Metadata = {
  title: 'Politique de Confidentialite | Yunicity',
  description: 'Politique de confidentialite de Yunicity. Decouvrez comment nous protegeons vos donnees personnelles conformement au RGPD.',
}

export default function PolitiqueConfidentialitePage() {
  return <PolitiqueConfidentialiteContent />
}
