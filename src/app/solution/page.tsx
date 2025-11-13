'use client'
import Navigation from '@/components/Navigation'
import SolutionSection from '@/components/SolutionSection'
import Footer from '@/components/Footer'

export default function SolutionPage() {
  return (
    <div className="min-h-screen">
      <Navigation activeSection="" />
      <SolutionSection />
      <Footer />
    </div>
  )
}
