'use client'
import { motion } from 'framer-motion'
import LogoLoop from './LogoLoop'
import { Building2, Store, Heart, MapPin, Coffee, Music, ShoppingBag, Users, Calendar, Sparkles, Zap, Network } from 'lucide-react'

// Logos des partenaires et acteurs locaux
const partnerLogos = [
  {
    node: (
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-200/50">
        <Building2 className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: 'Mairies',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-200/50">
        <Store className="w-8 h-8 text-purple-600" />
      </div>
    ),
    title: 'Commerces',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-200/50">
        <Heart className="w-8 h-8 text-green-600" />
      </div>
    ),
    title: 'Associations',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-200/50">
        <MapPin className="w-8 h-8 text-orange-600" />
      </div>
    ),
    title: 'Villes',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-200/50">
        <Coffee className="w-8 h-8 text-cyan-600" />
      </div>
    ),
    title: 'Cafés & Restaurants',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-200/50">
        <Music className="w-8 h-8 text-pink-600" />
      </div>
    ),
    title: 'Événements',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-200/50">
        <ShoppingBag className="w-8 h-8 text-indigo-600" />
      </div>
    ),
    title: 'Commerces locaux',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-200/50">
        <Users className="w-8 h-8 text-violet-600" />
      </div>
    ),
    title: 'Communautés',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-200/50">
        <Calendar className="w-8 h-8 text-amber-600" />
      </div>
    ),
    title: 'Agendas',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-200/50">
        <Sparkles className="w-8 h-8 text-teal-600" />
      </div>
    ),
    title: 'Initiatives',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-200/50">
        <Zap className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: 'Innovation',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-200/50">
        <Network className="w-8 h-8 text-purple-600" />
      </div>
    ),
    title: 'Réseau',
    href: '#'
  }
]

export default function NewsletterSubscribeSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-white overflow-hidden">
      {/* Glow effects subtils */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl" />

      {/* Grille subtile */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-3 tracking-tight leading-[1.1]"
            >
              Nos{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
                partenaires
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto"
            >
              Rejoignez un écosystème dynamique d'acteurs locaux qui façonnent l'avenir de nos villes
            </motion.p>
          </motion.div>

          {/* Logo Loop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ height: '120px' }}
          >
            <LogoLoop
              logos={partnerLogos}
              speed={80}
              direction="left"
              logoHeight={64}
              gap={40}
              hoverSpeed={20}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Partenaires et acteurs locaux"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
