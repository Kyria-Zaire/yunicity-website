'use client'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Users, Smartphone, MapPin, Calendar, MessageSquare, X, ArrowRight, Building2, Target, Heart } from 'lucide-react'

const problemes = [
  {
    id: 1,
    title: 'L\'information locale est éparpillée',
    description: 'Les actualités, événements ou initiatives de quartier sont disséminés sur des dizaines de sites et pages. Les habitants ne savent pas toujours où trouver les bons plans, événements ou actualités de leur quartier.',
    solution: 'Yunicity centralise toute l\'information locale sur une seule plateforme, pour que chaque habitant reste connecté à ce qui compte vraiment autour de lui.',
    stat: '85%',
    statLabel: 'des Français cherchent des infos locales sur leur téléphone',
    icon: Smartphone,
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20'
  },
  {
    id: 2,
    title: 'Les habitants sont déconnectés de leur territoire',
    description: 'Beaucoup ignorent ce qui se passe autour d\'eux et manquent d\'occasions de participer à la vie locale. 50% des Français se disent non engagés localement.',
    solution: 'Yunicity reconnecte les citoyens à leur ville, leurs voisins et leurs acteurs locaux, en valorisant les initiatives de chaque quartier.',
    stat: '50%',
    statLabel: 'des Français se sentent déconnectés de leur ville',
    icon: Users,
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20'
  },
  {
    id: 3,
    title: 'Manque de visibilité pour les acteurs locaux',
    description: 'Commerçants, associations, jeunes créateurs ou structures locales ont du mal à se faire connaître. Les commerces, associations et porteurs de projets peinent à toucher les habitants de leur propre ville.',
    solution: 'Yunicity leur offre une vitrine digitale pour valoriser leurs initiatives, adaptée à leurs besoins et à leurs valeurs.',
    stat: '70%',
    statLabel: 'des acteurs locaux manquent de visibilité numérique',
    icon: MessageSquare,
    color: 'from-yellow-500 to-amber-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20'
  },
  {
    id: 4,
    title: 'Faible engagement et sentiment d\'isolement urbain',
    description: '50% des Français se disent "non engagés localement". 68% disent vouloir participer davantage à la vie de leur quartier mais ne savent pas comment. Les réseaux classiques divisent ou éloignent.',
    solution: 'Yunicity crée du lien social à travers l\'information, les rencontres et les événements physiques, en mélangeant digital et réel : interviews, cartes interactives, événements et challenges locaux.',
    stat: '68%',
    statLabel: 'veulent participer davantage mais ne savent pas comment',
    icon: Calendar,
    color: 'from-amber-500 to-red-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20'
  }
]

// Animation visuelle pour chaque problème
function ProblemVisual({ problem }: { problem: typeof problemes[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className={`relative h-full min-h-[500px] flex items-center justify-center ${problem.bgColor} rounded-3xl overflow-hidden`}
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
      transition={{
          duration: 20,
        repeat: Infinity,
          ease: 'linear'
        }}
        className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-20 blur-3xl`}
      />

      {/* Floating icons */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {isInView && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute"
              style={{ left: '20%', top: '20%' }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center shadow-lg`}>
                <problem.icon className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 180 }}
              animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute"
              style={{ right: '20%', top: '30%' }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center shadow-lg`}>
                <X className="w-6 h-6 text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute"
              style={{ left: '30%', bottom: '25%' }}
    >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center shadow-lg`}>
                <problem.icon className="w-7 h-7 text-white" />
              </div>
            </motion.div>

        <motion.div 
              initial={{ opacity: 0, scale: 0, rotate: 90 }}
              animate={{ opacity: 0.5, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute"
              style={{ right: '25%', bottom: '20%' }}
        >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${problem.color} flex items-center justify-center shadow-lg`}>
                <X className="w-5 h-5 text-white" />
              </div>
        </motion.div>
          </>
        )}

        {/* Central icon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 200 }}
          className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${problem.color} flex items-center justify-center shadow-2xl`}
        >
          <problem.icon className="w-16 h-16 text-white" />
        </motion.div>
      </div>

      {/* Connection lines animation */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.line
          x1="20%"
          y1="20%"
          x2="50%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-gradient-to-r ${problem.color}`}
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.line
          x1="80%"
          y1="30%"
          x2="50%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </svg>
    </motion.div>
  )
}

// Split-screen problem card
function ProblemCard({ problem, index }: { problem: typeof problemes[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isReversed = index % 2 === 1

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Glow effects */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br ${problem.color} opacity-10 rounded-full blur-3xl`} />

      {/* Grille subtile */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />

      <div className="relative container mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 50 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={isReversed ? 'lg:col-start-2' : ''}
          >
            <ProblemVisual problem={problem} />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? -50 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}
          >
            <div className="space-y-4">
              {/* Problem number */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${problem.color} text-white text-lg font-bold shadow-lg`}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl sm:text-2xl lg:text-3xl font-light text-white tracking-tight leading-tight"
              >
                {problem.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm text-gray-300 leading-relaxed font-light mb-4"
              >
                {problem.description}
              </motion.p>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="mb-6 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20"
              >
                <p className="text-sm text-white leading-relaxed font-light">
                  <span className="font-semibold text-purple-400">➡️ Yunicity :</span> {problem.solution}
                </p>
              </motion.div>

              {/* Stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className={`mt-6 p-6 rounded-xl border ${problem.borderColor} ${problem.bgColor} backdrop-blur-sm`}
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.9, type: 'spring', stiffness: 200 }}
                    className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${problem.color} bg-clip-text text-transparent`}
                  >
                    {problem.stat}
                  </motion.div>
                </div>
                <p className="text-gray-400 text-sm font-light">{problem.statLabel}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

// Hero section
function ProblemeHeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative py-40 bg-black overflow-hidden"
    >
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl" />

      {/* Grille subtile */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
          >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight leading-tight"
          >
            Yunicity, le réseau qui{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
              reconnecte
            </span>
            {' '}les habitants à leur ville
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-light mb-4"
            >
            Découvrez, partagez et vivez votre territoire comme jamais auparavant
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 leading-relaxed font-light italic"
          >
            "Redonnons vie à nos quartiers, reconnectons les habitants à leur ville."
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// Section chiffres clés
function ChiffresClesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  
  const chiffres = [
    {
      id: 1,
    chiffre: '50%',
      label: 'des Français se sentent déconnectés de leur ville',
      icon: MapPin,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      chiffre: '85%',
      label: 'des Français cherchent des infos locales sur leur téléphone',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      chiffre: '68%',
      label: 'veulent participer davantage à la vie de leur quartier mais ne savent pas comment',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      chiffre: '8/10',
      label: 'Français utilisent les réseaux sociaux chaque jour, mais très peu pour leur vie locale',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      chiffre: '70%',
      label: 'des acteurs locaux (commerces, associations, artistes) manquent de visibilité numérique',
      icon: Building2,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      id: 6,
      chiffre: '1/2',
      label: 'ville sur 2 cherche à renforcer la cohésion et la participation citoyenne',
      icon: Heart,
      color: 'from-pink-500 to-red-500'
    }
  ]

  return (
    <section
      ref={ref}
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />

      {/* Grille subtile */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight"
          >
            Chiffres{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
              clés
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 leading-relaxed font-light max-w-3xl mx-auto"
          >
            Les statistiques qui illustrent les défis auxquels font face les villes et leurs habitants
          </motion.p>
        </motion.div>

        {/* Chiffres Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {chiffres.map((chiffre, index) => {
            const Icon = chiffre.icon
            return (
        <motion.div
                key={chiffre.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${chiffre.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Chiffre */}
          <motion.div 
            initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.2, type: 'spring', stiffness: 200 }}
                  className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${chiffre.color} bg-clip-text text-transparent mb-3`}
          >
                  {chiffre.chiffre}
                </motion.div>

                {/* Label */}
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {chiffre.label}
                </p>
          </motion.div>
            )
          })}
        </div>

        {/* Objectif Yunicity */}
          <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <div className="relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8">
            <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-light text-white mb-3">
              Objectif Yunicity
            </h3>
            <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
              Connecter 100 000 habitants locaux d'ici 3 ans
            </p>
            <p className="text-gray-300 text-sm font-light">
              La plateforme qui reconnecte les habitants à leur territoire, en simplifiant l'accès à l'information locale et en valorisant ceux qui font vivre la ville.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Section CTA vers Solution - Design minimaliste
function CTASolutionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 bg-black overflow-hidden"
    >
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />

      {/* Grille subtile */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />

      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Message principal */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-8 tracking-tight leading-tight whitespace-nowrap"
          >
            Découvrez comment{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
              Yunicity
            </span>
            {' '}résout ces défis
          </motion.h2>

          {/* Bouton CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/solution"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-2xl font-medium text-lg transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105"
            >
              <span>Voir la solution</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function ProblemeSection() {
  return (
    <>
      <ProblemeHeroSection />
      {problemes.map((problem, index) => (
        <ProblemCard key={problem.id} problem={problem} index={index} />
      ))}
      <ChiffresClesSection />
      <CTASolutionSection />
    </>
  )
}
