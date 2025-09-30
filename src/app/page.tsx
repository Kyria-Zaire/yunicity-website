'use client'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Hero3D from '@/components/Hero3D'
import Navigation from '@/components/Navigation'
import ProblemeSection from '@/components/ProblemeSection'
import SolutionSection from '@/components/SolutionSection'
import DecouverteReimsSection from '@/components/DecouverteReimsSection'
import MarcheSection from '@/components/MarcheSection'
import EquipeSection from '@/components/EquipeSection'
import NewsletterSection from '@/components/NewsletterSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  // Hooks pour détecter les sections visibles
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.5 })
  const { ref: problemeRef, inView: problemeInView } = useInView({ threshold: 0.3 })
  const { ref: solutionRef, inView: solutionInView } = useInView({ threshold: 0.3 })
  const { ref: demoRef, inView: demoInView } = useInView({ threshold: 0.3 })
  const { ref: marcheRef, inView: marcheInView } = useInView({ threshold: 0.3 })
  const { ref: equipeRef, inView: equipeInView } = useInView({ threshold: 0.3 })
  const { ref: newsletterRef, inView: newsletterInView } = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (heroInView) setActiveSection('hero')
    else if (problemeInView) setActiveSection('probleme')
    else if (solutionInView) setActiveSection('solution')
    else if (demoInView) setActiveSection('demo')
    else if (marcheInView) setActiveSection('marche')
    else if (equipeInView) setActiveSection('equipe')
    else if (newsletterInView) setActiveSection('newsletter')
  }, [heroInView, problemeInView, solutionInView, demoInView, marcheInView, equipeInView, newsletterInView])

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} />
      
      <div ref={heroRef} id="hero">
        <Hero3D />
      </div>

      <div ref={problemeRef} id="probleme">
        <ProblemeSection />
      </div>

      <div ref={solutionRef} id="solution">
        <SolutionSection />
      </div>

      <div ref={demoRef} id="demo">
        <DecouverteReimsSection />
      </div>

      <div ref={marcheRef} id="marche">
        <MarcheSection />
      </div>

      <div ref={equipeRef} id="equipe">
        <EquipeSection />
      </div>

      <div ref={newsletterRef} id="newsletter">
        <NewsletterSection />
      </div>

      <Footer />
    </div>
  )
}