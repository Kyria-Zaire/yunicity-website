'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Smartphone, MapPin, Users } from 'lucide-react'

export default function ReimsCallToActionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Pattern background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main CTA */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Vivez Reims
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                Comme Jamais
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
            >
              Yunicity centralise tous les lieux, événements et bons plans de Reims.
              Découvrez votre ville autrement dès Mars 2026.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <a
                href="#newsletter"
                className="group inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-gray-900 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1"
              >
                <Smartphone className="w-6 h-6" />
                <span>Télécharger l'app</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/solution"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:-translate-y-1"
              >
                <span>Découvrir Yunicity</span>
              </a>
            </motion.div>
          </div>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                icon: MapPin,
                titre: '800+ Lieux',
                description: 'Tous les lieux touristiques, restaurants et commerces de Reims référencés',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Users,
                titre: 'Communauté Locale',
                description: 'Connectez-vous avec les Rémois passionnés et découvrez leurs bons plans',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Smartphone,
                titre: 'Simple & Gratuit',
                description: 'Une seule app pour tout. Gratuit pendant toute la beta à Reims',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.titre}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{feature.titre}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-24 text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <span className="text-blue-400 font-bold text-lg">Beta</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white font-bold text-lg">Mars 2026</span>
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              <span className="text-gray-400 font-light">Reims</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
