import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import SolutionSection from '@/components/SolutionSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Notre Solution | Yunicity',
  description: 'Decouvrez la plateforme Smart City de Yunicity : une application mobile qui centralise toute l\'information locale pour reconnecter les habitants a leur territoire.',
}

export default function SolutionPage() {
  return (
    <div className="min-h-screen">
      <Navigation activeSection="" />
      <SolutionSection />
      <Footer />
    </div>
  )
}
