'use client'
import Navigation from '@/components/Navigation'
import ProblemeSection from '@/components/ProblemeSection'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

export default function ProblemePage() {
  return (
    <div className="min-h-screen">
      <Navigation activeSection="" />
      <BackButton />
      <ProblemeSection />
      <Footer />
    </div>
  )
}
