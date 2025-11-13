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
    color: 'from-blue-500 to-cyan-500'
  },
  {
    label: 'Interactions mensuelles',
    value: '2.5K+',
    icon: MessageSquare,
    color: 'from-purple-500 to-pink-500'
  },
  {
    label: 'Contenus partagés',
    value: '890+',
    icon: Heart,
    color: 'from-orange-500 to-red-500'
  },
  {
    label: 'Croissance mensuelle',
    value: '+35%',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500'
  }
]

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/yunicity.app?igsh=MWlsNGl6a2g0ajFueQ==',
    color: 'from-purple-500 to-pink-500',
    description: 'Découvrez notre quotidien'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/yunicity-app-381bb7230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    color: 'from-blue-500 to-indigo-500',
    description: 'Rejoignez notre réseau professionnel'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/share/1Eu3J5rE9P/',
    color: 'from-blue-600 to-blue-700',
    description: 'Partagez vos moments'
  },
  {
    name: 'Newsletter',
    icon: Mail,
    url: '/newsletter',
    color: 'from-orange-500 to-yellow-500',
    description: 'Recevez nos actualités'
  }
]

export default function EquipeJoinSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />

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

      <div className="relative container mx-auto px-6">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight"
          >
            Rejoignez notre{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
              communauté
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-400 font-light leading-relaxed mb-6"
          >
            Participez à l'aventure Yunicity et découvrez votre ville autrement
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-500 font-light max-w-2xl mx-auto"
          >
            Ensemble, construisons le réseau social qui reconnecte les habitants à leur territoire. 
            Chaque membre compte, chaque partage compte, chaque interaction compte.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-24"
        >
          {communityStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="group text-center p-8 bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl sm:text-5xl font-light text-white mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-light">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-3xl sm:text-4xl font-light text-white mb-12 text-center"
          >
            Suivez-nous
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                  className="group relative flex items-center gap-4 p-6 bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-medium text-lg">{social.name}</h4>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <p className="text-sm text-gray-400 font-light truncate">{social.description}</p>
                  </div>

                  {/* Hover effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="text-center mt-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="text-gray-500 font-light text-lg mb-8"
          >
            Une question ? Une suggestion ? N'hésitez pas à nous contacter
          </motion.p>

          <motion.a
            href="mailto:yu.entreprise@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 2.8 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span>Nous contacter</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
