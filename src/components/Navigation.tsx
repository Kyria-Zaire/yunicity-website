'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Accueil', href: '/' },
    { id: 'probleme', label: 'Problème', href: '/probleme' },
    { id: 'solution', label: 'Solution', href: '/solution' },
    { id: 'demo', label: 'Ville', href: '/reims' },
    { id: 'equipe', label: 'Équipe', href: '/equipe' },
    { id: 'newsletter', label: 'Newsletter', href: '/newsletter' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href.startsWith('/#')) {
      // Navigation vers section sur page d'accueil
      const sectionId = href.substring(2)
      if (window.location.pathname === '/') {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        window.location.href = href
      }
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
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
                <span className="text-white font-bold text-xl tracking-tight">YUNICITY</span>
              </motion.div>
            </Link>

            {/* Navigation Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link key={item.id} href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => handleNavigation(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
                      activeSection === item.id
                        ? 'text-purple-300'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link href="/investir">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="relative group px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-sm overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Investir</span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </div>

            {/* Menu Mobile Button */}
            <motion.button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden"
          >
            <div className="bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
              <div className="container mx-auto px-6 py-6">
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <Link key={item.id} href={item.href}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => handleNavigation(item.href)}
                        className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
                          activeSection === item.id
                            ? 'bg-purple-600/20 text-purple-300 border-l-4 border-purple-500'
                            : 'text-white/80 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  ))}
                  
                  <Link href="/investir" className="block w-full mt-6">
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold text-center"
                    >
                      Investir Maintenant
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}