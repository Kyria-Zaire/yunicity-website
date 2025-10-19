'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Users, Calendar, TrendingUp } from 'lucide-react'
import Image from 'next/image'

// Stats impressionnantes sur Reims
const reimsStats = [
  {
    icon: Users,
    chiffre: '180K',
    label: 'Habitants',
    description: 'Une communauté dynamique et accueillante',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Sparkles,
    chiffre: '4',
    label: 'Sites UNESCO',
    description: 'Patrimoine mondial exceptionnel',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Calendar,
    chiffre: '800+',
    label: 'Événements/an',
    description: 'Une ville qui vit toute l\'année',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    chiffre: '320',
    label: 'Millions € ',
    description: 'Caves de champagne visitées',
    color: 'from-orange-500 to-red-500'
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
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop',
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
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
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

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
            L'expérience
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Reims
            </span>
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
            Bien plus qu'une ville, une expérience unique
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32 max-w-7xl mx-auto">
          {reimsStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 h-full text-center shadow-lg hover:shadow-2xl">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.chiffre}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{stat.label}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expériences uniques */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Ce qui rend Reims unique
            </h3>
            <p className="text-xl text-gray-600 font-light">
              Trois piliers d'une expérience inoubliable
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.titre}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.titre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h4 className="text-3xl font-bold mb-3">{exp.titre}</h4>
                  <p className="text-gray-200 mb-4 font-light leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm"
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
    </section>
  )
}
