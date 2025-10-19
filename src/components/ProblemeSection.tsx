'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { AlertCircle, X, Users, Smartphone, MapPin, Calendar } from 'lucide-react'

// Composant pour les statistiques animées
function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

// Floating app icons pour montrer la fragmentation
function FloatingAppIcon({ icon: Icon, name, delay }: { icon: React.ElementType, name: string, delay: number }) {
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
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`,
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

export default function ProblemeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Simuler des apps fragmentées
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

        {/* Immersive Stats Grid - Large Impact Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 max-w-6xl mx-auto">
          {[
            { value: 34, suffix: 'M', label: 'Français isolés', sublabel: '50% de la population', icon: Users, color: 'red' },
            { value: 68, suffix: '%', label: "Sentiment d'exclusion", sublabel: 'Ne connaissent pas leurs voisins', icon: X, color: 'orange' },
            { value: 15, suffix: '+', label: 'Apps à jongler', sublabel: 'Pour accéder à l\'info locale', icon: Smartphone, color: 'yellow' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-${stat.color}-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 text-center hover:border-gray-700 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${stat.color}-500/10 flex items-center justify-center border border-${stat.color}-500/30`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
                </div>

                <div className={`text-7xl font-light text-${stat.color}-400 mb-3 tabular-nums`}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>

                <h3 className="text-2xl font-medium text-white mb-2">{stat.label}</h3>
                <p className="text-gray-500 font-light text-sm">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emotional Pain Points - Story Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
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
                transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
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
          transition={{ duration: 1, delay: 1.8 }}
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
