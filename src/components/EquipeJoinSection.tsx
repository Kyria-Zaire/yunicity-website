'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Users, 
  MessageSquare, 
  Heart, 
  TrendingUp,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  ArrowRight
} from 'lucide-react'

const communityStats = [
  {
    label: 'Membres actifs',
    value: '540+',
    icon: Users,
    color: 'from-blue-800 to-blue-600'
  },
  {
    label: 'Interactions mensuelles',
    value: '2.5K+',
    icon: MessageSquare,
    color: 'from-blue-800 to-blue-600'
  },
  {
    label: 'Contenus partagés',
    value: '890+',
    icon: Heart,
    color: 'from-blue-800 to-blue-600'
  },
  {
    label: 'Croissance mensuelle',
    value: '+35%',
    icon: TrendingUp,
    color: 'from-blue-800 to-blue-600'
  }
]

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/yunicity.app?igsh=MWlsNGl6a2g0ajFueQ==',
    color: 'from-blue-800 to-blue-600',
    description: 'Découvrez notre quotidien'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/yunicity-app-381bb7230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    color: 'from-blue-800 to-blue-600',
    description: 'Rejoignez notre réseau professionnel'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/share/1Eu3J5rE9P/',
    color: 'from-blue-800 to-blue-600',
    description: 'Partagez vos moments'
  },
  {
    name: 'Newsletter',
    icon: Mail,
    url: '/newsletter',
    color: 'from-blue-800 to-blue-600',
    description: 'Recevez nos actualités'
  }
]

export default function EquipeJoinSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-20 sm:py-24 md:py-32 bg-black overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-blue-500/5 to-blue-400/5 rounded-full blur-3xl" />

      {/* Grille subtile */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4 sm:mb-6 tracking-tight leading-tight"
          >
            Rejoignez notre{' '}
            <span className="text-blue-400 font-normal">
              communauté
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-base sm:text-lg text-gray-400 font-light leading-relaxed mb-4 sm:mb-6"
          >
            Participez à l'aventure Yunicity et découvrez votre ville autrement
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-sm sm:text-base text-gray-500 font-light max-w-2xl mx-auto"
          >
            Ensemble, construisons le réseau social qui reconnecte les habitants à leur territoire. 
            Chaque membre compte, chaque partage compte, chaque interaction compte.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20 px-2 sm:px-0"
        >
          {communityStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                className="group text-center p-4 sm:p-5 bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-2xl border border-white/5 rounded-xl sm:rounded-2xl hover:border-white/10 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-700"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <motion.div 
                  className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md sm:shadow-lg border-2 border-white/10`}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <motion.div 
                  className="text-xl sm:text-2xl font-extralight text-white mb-1.5 sm:mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-extralight">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="max-w-4xl mx-auto px-2 sm:px-0"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-2xl sm:text-3xl font-light text-white mb-8 sm:mb-10 text-center"
          >
            Suivez-nous
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('/') ? undefined : '_blank'}
                  rel={social.url.startsWith('/') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                  className="group relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-2xl border border-white/5 rounded-xl sm:rounded-2xl hover:border-white/10 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-700"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Icon */}
                  <motion.div 
                    className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-md sm:shadow-lg border-2 border-white/10`}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                      <h4 className="text-white font-medium text-base sm:text-lg">{social.name}</h4>
                      <motion.div
                        animate={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                      >
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 font-extralight truncate">{social.description}</p>
                  </div>

                  {/* Hover effect */}
                  <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-8 transition-opacity duration-700 pointer-events-none`}
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 2.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 2.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-gray-500 font-light text-sm sm:text-base mb-6 sm:mb-8"
          >
            Une question ? Une suggestion ? N'hésitez pas à nous contacter
          </motion.p>

          <motion.a
            href="mailto:yu.entreprise@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 2.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-blue-800 hover:bg-blue-700 text-white rounded-full font-extralight text-sm sm:text-base hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-500"
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Nous contacter</span>
            <motion.div
              animate={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
