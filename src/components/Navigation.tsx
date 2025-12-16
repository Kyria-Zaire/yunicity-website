'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface NavigationProps {
  activeSection?: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLightBackground, setIsLightBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Vérifier si on est sur une page avec fond blanc
      const currentPath = window.location.pathname
      const isWhiteBackgroundPage = currentPath === '/solution' || 
                                    currentPath === '/equipe' || 
                                    currentPath === '/newsletter' ||
                                    currentPath === '/probleme'
      
      // Détecter si on est sur une section avec fond blanc
      const newsletterSection = document.querySelector('[data-section="newsletter-hero"]')
      const equipeHeroSection = document.querySelector('[data-section="equipe-hero"]')
      const equipeTeamSection = document.querySelector('[data-section="equipe-team"]')
      const solutionHeroSection = document.querySelector('[data-section="solution-hero"]')
      const solutionCardSection = document.querySelector('[data-section="solution-card"]')
      const solutionDemoSection = document.querySelector('[data-section="solution-demo"]')
      const problemeHeroSection = document.querySelector('[data-section="probleme-hero"]')
      
      let isVisible = false
      
      // Si on est sur une page avec fond blanc, activer le fond blanc par défaut
      if (isWhiteBackgroundPage) {
        isVisible = true
      } else {
        // Fonction helper pour vérifier si une section est visible
        const checkSection = (section: Element | null) => {
          if (!section) return false
          const rect = section.getBoundingClientRect()
          // Vérifier si la section est dans la zone visible (avec marge pour le header)
          return rect.top <= 150 && rect.bottom >= -100
        }
        
        // Vérifier toutes les sections avec fond blanc
        isVisible = checkSection(newsletterSection) ||
                    checkSection(equipeHeroSection) ||
                    checkSection(equipeTeamSection) ||
                    checkSection(solutionHeroSection) ||
                    checkSection(solutionCardSection) ||
                    checkSection(solutionDemoSection) ||
                    checkSection(problemeHeroSection)
      }
      
      setIsLightBackground(isVisible)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Vérifier au chargement initial avec un petit délai pour laisser le DOM se charger
    setTimeout(handleScroll, 100)
    
    // Écouter les changements de route
    const handleRouteChange = () => {
      setTimeout(handleScroll, 300)
    }
    
    window.addEventListener('popstate', handleRouteChange)
    
    // Vérifier aussi après un court délai pour les changements de route Next.js
    const checkInterval = setInterval(() => {
      handleScroll()
    }, 1000)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', handleRouteChange)
      clearInterval(checkInterval)
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? isLightBackground
              ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-2xl'
              : 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : isLightBackground
              ? 'bg-white/50 backdrop-blur-xl'
              : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="flex items-center space-x-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <Image 
                    src="/yunicity-logo.png" 
                    alt="Yunicity Logo" 
                    width={40} 
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
                  isLightBackground ? 'text-gray-900' : 'text-white'
                }`}>YUNICITY</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Bouton Retour en haut - Position fixe en bas à droite */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={handleScrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-2.5 sm:p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white shadow-lg sm:shadow-2xl hover:shadow-purple-500/25 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}