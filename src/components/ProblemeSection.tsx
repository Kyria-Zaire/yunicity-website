'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { AlertCircle, Users, Smartphone, MapPin, Calendar } from 'lucide-react'

// Floating app icons pour montrer la fragmentation
function FloatingAppIcon({ icon: Icon, name, delay }: { icon: React.ElementType, name: string, delay: number }) {
  const [position, setPosition] = useState({ left: 0, top: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setPosition({
      left: Math.random() * 80 + 10,
      top: Math.random() * 80 + 10
    })
    setMounted(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.8,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 3
      }}
      className="absolute"
      style={{
        left: mounted ? `${position.left}%` : '50%',
        top: mounted ? `${position.top}%` : '50%',
      }}
    >
      <div className="relative group">
        <div className="w-12 h-12 bg-gray-800/40 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-gray-700/50">
          <Icon className="w-6 h-6 text-gray-400" />
        </div>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {name}
        </div>
      </div>
    </motion.div>
  )
}

// Section 1 - NOIR: Header Émotionnel
function ProblemeHeroSection({ ref, isInView }: { ref: React.RefObject<HTMLElement | null>, isInView: boolean }) {
  const fragmentedApps = [
    { icon: MapPin, name: 'Google Maps' },
    { icon: Calendar, name: 'Eventbrite' },
    { icon: Users, name: 'Facebook' },
    { icon: Smartphone, name: 'Instagram' },
    { icon: MapPin, name: 'Waze' },
    { icon: Calendar, name: 'Meetup' },
  ]

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0"
      />

      {/* Floating fragmented apps background */}
      <div className="absolute inset-0 overflow-hidden">
        {fragmentedApps.map((app, index) => (
          <FloatingAppIcon key={index} icon={app.icon} name={app.name} delay={index * 0.3} />
        ))}
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container mx-auto px-6">
        {/* Header - Emotional Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          {/* Pulsing alert icon */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 border border-red-500/50 mb-8"
          >
            <AlertCircle className="w-8 h-8 text-red-500" />
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">
            <span className="block text-gray-400 text-3xl sm:text-4xl mb-4 font-light">Ressentez</span>
            l'isolement
            <span className="block font-normal text-red-400 mt-2">
              de 34 millions de Français
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl sm:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto font-light"
          >
            Imaginez ne pas connaître vos voisins. Rater tous les événements. Chercher l'info sur 15 apps différentes.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// Section 2 - BLANC: KPIs/Stats
function ProblemeStatsSection({ isInView }: { isInView: boolean }) {
  const mainStat = {
    chiffre: '50%',
    subChiffre: '34M',
    label: 'Français désengagés localement',
    description: 'Une déconnexion croissante du tissu social'
  }

  const pillars = [
    {
      chiffre: '12%',
      label: 'Sentiment de solitude',
      description: 'Absence de réseau de sociabilité local',
      source: 'Fondation de France 2024'
    },
    {
      chiffre: '20%',
      label: 'Manque de repères',
      description: 'Ne savent plus ce qui se passe autour d\'eux',
      source: 'Sondage démographique 2024'
    },
    {
      chiffre: '25%',
      label: 'Perte du lien social',
      description: 'Déconnexion progressive avec leur territoire',
      source: 'Étude INSEE 2024'
    }
  ]

  return (
    <section className="relative py-32 bg-white overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
            Les chiffres
            <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mt-2">
              du problème
            </span>
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
            Chiffres clés illustrant l'ampleur du défi
          </p>
        </motion.div>

        {/* STAT PRINCIPALE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-24 p-12 bg-gradient-to-br from-gray-900 to-black rounded-3xl text-white text-center border border-gray-800"
        >
          <div className="text-7xl sm:text-8xl font-black mb-3 tracking-tight">{mainStat.chiffre}</div>
          <div className="text-2xl font-light text-gray-300 mb-4">{mainStat.label}</div>
          <div className="text-lg text-gray-400 mb-6">{mainStat.description}</div>
          <div className="inline-block text-4xl font-bold text-red-500">{mainStat.subChiffre} personnes</div>
        </motion.div>

        {/* TROIS PILIERS */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="p-8 bg-white border-2 border-gray-900 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl font-black text-gray-900 mb-3">{pillar.chiffre}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.label}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">{pillar.description}</p>
              <p className="text-xs text-gray-500 italic">{pillar.source}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Section 3 - NOIR: Conséquences et Pain Points
function ProblemeConsequencesSection({ isInView }: { isInView: boolean }) {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container mx-auto px-6">
        {/* Emotional Pain Points - Story Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-light text-white mb-4">Les conséquences</h3>
            <p className="text-gray-400 font-light text-lg">Un cercle vicieux qui brise le tissu social</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Samedi 14h',
                story: 'Un concert gratuit a lieu à 500m. Vous ne le saurez jamais.',
                icon: Calendar,
                emotion: '😞'
              },
              {
                title: 'Depuis 3 ans',
                story: 'Vous croisez vos voisins tous les jours. Vous ne connaissez pas leurs prénoms.',
                icon: Users,
                emotion: '😶'
              },
              {
                title: 'Ce restaurant',
                story: 'Une pépite locale ferme ses portes. Vous ne l\'avez jamais découverte.',
                icon: MapPin,
                emotion: '😔'
              },
              {
                title: 'Votre quartier',
                story: '15 applications différentes. Aucune ne vous donne la vue complète.',
                icon: Smartphone,
                emotion: '😫'
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group relative bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-2xl p-8 hover:bg-gray-900/60 hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-medium text-white">{item.title}</h4>
                      <span className="text-2xl">{item.emotion}</span>
                    </div>
                    <p className="text-gray-400 font-light leading-relaxed">{item.story}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Big Reveal - Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-2xl border border-gray-800 rounded-3xl p-12 sm:p-16">
            {/* Quotation marks */}
            <div className="absolute top-8 left-8 text-6xl text-red-500/20 font-serif">"</div>

            <blockquote className="relative text-3xl sm:text-4xl font-light text-white leading-relaxed mb-8">
              Le territoire souffre d'un éparpillement de l'information et d'un manque de coordination entre les acteurs
            </blockquote>

            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8 rounded-full" />

            <p className="text-xl text-gray-400 font-light">
              <span className="text-white font-medium">Résultat :</span> Exclusion, désengagement, perte du lien social
            </p>

            <div className="absolute bottom-8 right-8 text-6xl text-red-500/20 font-serif rotate-180">"</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function ProblemeSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <ProblemeHeroSection ref={ref} isInView={isInView} />
      <ProblemeStatsSection isInView={isInView} />
      <ProblemeConsequencesSection isInView={isInView} />
    </>
  )
}
