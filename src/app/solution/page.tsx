'use client'
import Navigation from '@/components/Navigation'
import SolutionSection from '@/components/SolutionSection'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

export default function SolutionPage() {
  return (
    <div className="min-h-screen">
      <Navigation activeSection="" />
      <BackButton />
      <SolutionSection />
      <Footer />
    </div>
  )
}
