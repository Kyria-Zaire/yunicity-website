'use client'
import Navigation from '@/components/Navigation'
import ProblemeSection from '@/components/ProblemeSection'
import Footer from '@/components/Footer'

export default function ProblemePage() {
  return (
    <div className="min-h-screen">
      <Navigation activeSection="" />
      <ProblemeSection />
      <Footer />
    </div>
  )
}
