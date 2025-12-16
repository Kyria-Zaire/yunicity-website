'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import FlowingMenu from './FlowingMenu'

// Stats impressionnantes sur Reims pour FlowingMenu
const reimsStatsMenu = [
  {
    link: '#habitants',
    text: '180K',
    label: 'Habitants',
    description: 'Une communauté dynamique et accueillante',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop'
  },
  {
    link: '#unesco',
    text: '4',
    label: 'Sites UNESCO',
    description: 'Patrimoine mondial exceptionnel',
    image: 'https://images.unsplash.com/photo-1632854270303-f5fdb97b697f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    link: '#evenements',
    text: '800+',
    label: 'Événements/an',
    description: 'Une ville qui vit toute l\'année',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop'
  },
  {
    link: '#champagne',
    text: '320',
    label: 'Millions €',
    description: 'Caves de champagne visitées',
    image: 'https://images.unsplash.com/photo-1562663729-4971d6802f4a?q=80&w=1200&auto=format&fit=crop'
  }
]

// Expériences uniques
const experiences = [
  {
    titre: 'Capitale du Champagne',
    description: 'Reims abrite les plus grandes maisons de champagne au monde. Plus de 300 caves à explorer.',
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Champagne', 'Dégustation', 'Prestige']
  },
  {
    titre: 'Histoire Royale',
    description: '33 rois de France sacrés à la cathédrale. 2000 ans d\'histoire à chaque coin de rue.',
    image: 'https://images.unsplash.com/photo-1632338395709-d264a42816ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1200',
    tags: ['Histoire', 'Patrimoine', 'Culture']
  },
  {
    titre: 'Art de Vivre',
    description: 'Gastronomie, terrasses animées, festivals. Une qualité de vie reconnue dans toute la France.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
    tags: ['Gastronomie', 'Culture', 'Lifestyle']
  }
]

export default function ReimsExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Section Stats avec FlowingMenu - Fond noir style Apple */}
      <div className="relative bg-black">
        <div className="relative container mx-auto px-6 pt-16 pb-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
              L'expérience{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Reims
              </span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
              Bien plus qu'une ville, une expérience unique
            </p>
          </motion.div>
        </div>
        
        {/* FlowingMenu Stats - Plein écran */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-full mx-auto"
        >
          <div style={{ height: '100vh', position: 'relative' }}>
            <FlowingMenu items={reimsStatsMenu} />
          </div>
        </motion.div>
      </div>

      {/* Section Expériences - Fond blanc */}
      <div className="relative bg-white py-32">
        {/* Grille subtile */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

      </div>
    </section>
  )
}