import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ProblemeSection from '@/components/ProblemeSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Le Probleme | Yunicity',
  description: 'L\'information locale est eparpillee entre des dizaines de sources. Decouvrez comment Yunicity resout ce probleme pour reconnecter les habitants a leur territoire.',
}

export default function ProblemePage() {
  return (
    <div className="min-h-screen">
      <Navigation activeSection="" />
      <ProblemeSection />
      <Footer />
    </div>
  )
}
