'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FlowingMenu from './FlowingMenu'

const reimsStatsMenu = [
  {
    link: '#habitants',
    text: '180K',
    label: 'Habitants',
    description: 'Une communaute dynamique et accueillante',
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
    label: 'Evenements/an',
    description: 'Une ville qui vit toute l annee',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop'
  },
  {
    link: '#champagne',
    text: '320',
    label: 'Millions EUROS',
    description: 'Caves de champagne visitees',
    image: 'https://images.unsplash.com/photo-1562663729-4971d6802f4a?q=80&w=1200&auto=format&fit=crop'
  }
]

const experiences = [
  {
    titre: 'Capitale du Champagne',
    description: 'Reims abrite les plus grandes maisons de champagne au monde. Plus de 300 caves a explorer.',
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Champagne', 'Degustation', 'Prestige']
  },
  {
    titre: 'Histoire Royale',
    description: '33 rois de France sacres a la cathedrale. 2000 ans d histoire a chaque coin de rue.',
    image: 'https://images.unsplash.com/photo-1632338395709-d264a42816ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1200',
    tags: ['Histoire', 'Patrimoine', 'Culture']
  },
  {
    titre: 'Art de Vivre',
    description: 'Gastronomie, terrasses animees, festivals. Une qualite de vie reconnue dans toute la France.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
    tags: ['Gastronomie', 'Culture', 'Lifestyle']
  }
]

interface ReimsExperienceSectionProps {
  showExperiences?: boolean
}

export default function ReimsExperienceSection({ showExperiences = true }: ReimsExperienceSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-fullwidth relative w-full overflow-x-hidden">
      {/* Section Stats avec FlowingMenu - Fond noir pleine largeur */}
      <div className="relative bg-black w-full min-w-full">
        {/* Header */}
        <div className="w-full px-4 sm:px-6 pt-16 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
              L&apos;experience{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Reims
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-light">
              Bien plus qu&apos;une ville, une experience unique
            </p>
          </motion.div>
        </div>
        
        {/* FlowingMenu Stats - Pleine largeur sans conteneur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
          style={{ width: '100%', maxWidth: '100%' }}
        >
          <div className="w-full" style={{ height: '70vh', width: '100%' }}>
            <FlowingMenu items={reimsStatsMenu} />
          </div>
        </motion.div>

        {/* CTA Decouvrir Reims */}
        <div className="w-full px-4 sm:px-6 pb-16 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/reims">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-light text-white hover:text-gray-200 border border-white/30 rounded-lg hover:border-white/50 hover:bg-white/10 transition-all"
              >
                Decouvrir Reims
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Section Experiences - Fond blanc */}
      {showExperiences && (
        <div className="relative bg-white py-20 sm:py-32">
          <div className="px-4 sm:px-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center mb-16">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Ce qui rend Reims unique
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 font-light">
                  Trois piliers d&apos;une experience inoubliable
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.titre}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                    className="group relative overflow-hidden rounded-2xl sm:rounded-3xl"
                  >
                    <div className="relative h-64 sm:h-80 overflow-hidden">
                      <Image
                        src={exp.image}
                        alt={exp.titre}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                      <h4 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">{exp.titre}</h4>
                      <p className="text-sm sm:text-base text-gray-200 mb-3 sm:mb-4 font-light leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs sm:text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  )
}
