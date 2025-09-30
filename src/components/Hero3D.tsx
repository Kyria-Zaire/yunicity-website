'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowRight, Play, MapPin, Users, Star, Zap } from 'lucide-react'

// Countdown élégant
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2026-03-01T00:00:00').getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center gap-4">
      {[
        { label: 'Jours', value: timeLeft.days },
        { label: 'Heures', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Secondes', value: timeLeft.seconds }
      ].map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 min-w-[80px]">
            <div className="text-3xl font-bold text-white mb-1">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function Hero3D() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      
      {/* Grille subtile en fond */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Gradient radial subtil */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent opacity-50" />

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">Lancement MVP • Mars 2026</span>
            </div>
          </motion.div>

          {/* Titre principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-6"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
              YUNICITY
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
              Faire battre le cœur de la ville
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-xl text-white/70 max-w-2xl mx-auto mb-12"
          >
            La première super-app qui reconnecte les habitants à leur territoire.
            <br />
            Découvrez, partagez et vivez votre ville autrement.
          </motion.p>

          {/* Stats rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { icon: MapPin, text: '6 lieux', subtext: 'à découvrir' },
              { icon: Users, text: '5 experts', subtext: 'dans l\'équipe' },
              { icon: Star, text: 'Reims', subtext: 'ville pilote' },
              { icon: Zap, text: 'Mars 2026', subtext: 'lancement' }
            ].map((stat, index) => (
              <motion.div
                key={stat.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <div className="text-white font-semibold">{stat.text}</div>
                  <div className="text-white/60 text-sm">{stat.subtext}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button className="group px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40">
              <Play className="w-5 h-5" />
              Voir la démo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-lg text-white font-semibold text-lg transition-all duration-300">
              En savoir plus
            </button>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-white/60 text-sm uppercase tracking-wider mb-2">Compte à rebours</h3>
            </div>
            <CountdownTimer />
          </motion.div>

          {/* Social proof subtil */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-center"
          >
            <p className="text-white/40 text-sm">
              Rejoignez les 2,847 personnes qui attendent le lancement
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator minimaliste */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2"
        >
          <div className="w-1 h-3 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}