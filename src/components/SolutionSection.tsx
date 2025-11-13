'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  MapPin,
  Users,
  Star,
  CheckCircle2,
  MessageCircle
} from 'lucide-react'

// Solutions basées sur les problèmes de ProblemeSection
const solutions = [
  {
    id: 1,
    problemTitle: 'L\'information locale est éparpillée',
    title: 'Centralisation de l\'information',
    description: 'Yunicity centralise toute l\'information locale sur une seule plateforme, pour que chaque habitant reste connecté à ce qui compte vraiment autour de lui.',
    features: [
      'Hub d\'informations local (30% MVP)',
      'Flux d\'actualités locales en temps réel',
      'Notifications push personnalisées',
      'Fiches détaillées des acteurs locaux',
      'Une seule app remplace 15 applications'
    ],
    icon: Star,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    stat: '85%',
    statLabel: 'des Français cherchent des infos locales sur leur téléphone'
  },
  {
    id: 2,
    problemTitle: 'Les habitants sont déconnectés de leur territoire',
    title: 'Reconnexion au territoire',
    description: 'Yunicity reconnecte les citoyens à leur ville, leurs voisins et leurs acteurs locaux, en valorisant les initiatives de chaque quartier.',
    features: [
      'Mur communautaire (40% MVP)',
      'Espace d\'échange entre habitants',
      'Recommandations et discussions locales',
      'Rencontres et événements physiques',
      'Création de lien social authentique'
    ],
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    stat: '50%',
    statLabel: 'des Français se sentent déconnectés de leur ville'
  },
  {
    id: 3,
    problemTitle: 'Manque de visibilité pour les acteurs locaux',
    title: 'Vitrine digitale pour les acteurs locaux',
    description: 'Yunicity leur offre une vitrine digitale pour valoriser leurs initiatives, adaptée à leurs besoins et à leurs valeurs.',
    features: [
      'Profils dédiés pour commerces et associations',
      'Mise en avant des initiatives locales',
      'Visibilité ciblée sur le territoire',
      'Outils de communication adaptés',
      'Support pour jeunes créateurs'
    ],
    icon: MessageCircle,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    stat: '70%',
    statLabel: 'des acteurs locaux manquent de visibilité numérique'
  },
  {
    id: 4,
    problemTitle: 'Faible engagement et sentiment d\'isolement urbain',
    title: 'Création de lien social',
    description: 'Yunicity crée du lien social à travers l\'information, les rencontres et les événements physiques, en mélangeant digital et réel : interviews, cartes interactives, événements et challenges locaux.',
    features: [
      'Carte interactive 3D (30% MVP)',
      'Événements et challenges locaux',
      'Interviews et contenus locaux',
      'Mélange digital et réel',
      'Participation active à la vie locale'
    ],
    icon: MapPin,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    stat: '68%',
    statLabel: 'veulent participer davantage mais ne savent pas comment'
  }
]

// Démo interactive de l'app - Section iPhone (à garder et adapter)
function AppDemo() {
  const [activeTab, setActiveTab] = useState('map')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const tabs = [
    { id: 'map', label: 'Carte 3D (30%)', icon: MapPin },
    { id: 'community', label: 'Communauté (40%)', icon: Users },
    { id: 'events', label: 'Hub Info (30%)', icon: Star }
  ]

  const demoScreens = {
    map: {
      title: "Carte Interactive 3D",
      description: "Visualisez Reims autrement avec une carte immersive",
      features: [
        "Événements et commerces géolocalisés",
        "Filtres par catégorie",
        "Suggestions personnalisées",
        "Résout : information éparpillée"
      ]
    },
    community: {
      title: "Mur Communautaire",
      description: "Espace d'échange entre habitants",
      features: [
        "Posts et recommandations",
        "Discussions locales",
        "Rencontres et événements",
        "Résout : déconnexion du territoire"
      ]
    },
    events: {
      title: "Hub d'Informations",
      description: "Toute l'actualité locale centralisée",
      features: [
        "Flux d'actualités en temps réel",
        "Notifications personnalisées",
        "Fiches détaillées des acteurs",
        "Résout : manque de visibilité"
      ]
    }
  }

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-40 bg-black overflow-hidden"
    >
      {/* Glow effects très subtils */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />

      {/* Grille ultra-subtile */}
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
        {/* Header minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-tight"
          >
            Découvrez{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
              Yunicity
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-400 leading-relaxed font-light max-w-3xl mx-auto"
          >
            Trois piliers pour une solution complète
          </motion.p>
        </motion.div>

        <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-8 lg:p-12 overflow-hidden max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* iPhone 15 Pro mockup */}
        <div className="relative order-2 lg:order-1">
          <motion.div
            className="relative w-full max-w-sm mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* iPhone frame noir élégant */}
            <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-[3.5rem] p-2 shadow-2xl border border-gray-800">
                  {/* Camera bump */}
              <div className="absolute top-4 left-6 w-20 h-12 bg-gradient-to-b from-gray-800 to-black rounded-2xl shadow-2xl border border-gray-700">
                <div className="absolute top-2 left-2 w-6 h-6 bg-black rounded-full border border-gray-600">
                  <div className="absolute top-1 left-1 w-4 h-4 bg-blue-400 rounded-full shadow-lg"></div>
                </div>
                <div className="absolute top-2 right-2 w-6 h-6 bg-black rounded-full border border-gray-600">
                  <div className="absolute top-1 left-1 w-4 h-4 bg-blue-400 rounded-full shadow-lg"></div>
                </div>
              </div>

                  {/* Screen */}
              <div className="bg-black rounded-[3rem] relative overflow-hidden shadow-inner">
                    {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20 border border-gray-700 shadow-lg"></div>

                <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 h-[580px] relative overflow-hidden rounded-[3rem]">
                      {/* Status bar */}
                  <div className="flex justify-between items-center px-6 pt-12 pb-4 text-white/90 text-sm font-light">
                    <span className="font-medium">9:41</span>
                    <span className="font-semibold tracking-wide text-white">YUNICITY</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 border border-white/30 rounded-sm bg-black/20">
                        <div className="w-full h-full bg-white rounded-sm shadow-sm"></div>
                      </div>
                      <span className="text-xs text-white/70">100%</span>
                    </div>
                  </div>

                  {/* Content dynamique */}
                  <div className="px-4 pb-4 h-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full flex flex-col"
                      >
                        {activeTab === 'map' && (
                          <div className="space-y-4 flex-1">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-56 flex items-center justify-center relative overflow-hidden border border-white/20">
                              <MapPin className="w-16 h-16 text-white/80 z-10" />
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
                              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg"></div>
                            </div>
                            <div className="space-y-3 flex-1">
                              <motion.div
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white text-sm flex items-center space-x-3 border border-white/20"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs shadow-lg">☕</div>
                                <div>
                                  <div className="font-medium text-white">Café Central</div>
                                      <div className="text-white/60 text-xs">2min • Ouvert</div>
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        )}

                        {activeTab === 'community' && (
                          <div className="space-y-4 flex-1">
                            <div className="text-white font-semibold text-lg">Mes Tribus</div>
                            <div className="space-y-3 flex-1">
                              <motion.div
                                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-4"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center font-bold text-white">F</div>
                                <div className="text-white flex-1">
                                  <div className="font-semibold">Foodistas Reims</div>
                                      <div className="text-white/70 text-sm">247 membres</div>
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        )}

                        {activeTab === 'events' && (
                          <div className="space-y-4 flex-1">
                            <div className="text-white font-semibold text-lg">Cette semaine</div>
                            <div className="space-y-3 flex-1">
                              <motion.div
                                className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
                                whileHover={{ scale: 1.02 }}
                              >
                                    <div className="text-white font-semibold mb-1">🎵 Concert Jazz</div>
                                    <div className="text-white/70 text-sm">Demain 20h • Opéra</div>
                              </motion.div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Controls & Info */}
        <div className="space-y-8 order-1 lg:order-2 relative">
          <div>
            <motion.h3
                  className="text-3xl font-light text-white mb-4"
            >
              {demoScreens[activeTab as keyof typeof demoScreens].title}
            </motion.h3>
                <p className="text-xl text-gray-300 mb-6 font-light">
              {demoScreens[activeTab as keyof typeof demoScreens].description}
            </p>
          </div>

          {/* Tab navigation */}
          <div className="grid grid-cols-3 gap-3">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center justify-center gap-2 p-4 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium text-sm hidden sm:block">{tab.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Features list */}
          <div className="space-y-3">
            {demoScreens[activeTab as keyof typeof demoScreens].features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300 bg-white/5 px-4 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="font-light">{feature}</span>
              </motion.div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

// Section solution individuelle - Design minimaliste
function SolutionCard({ solution, index }: { solution: typeof solutions[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-40 bg-black overflow-hidden"
    >
      {/* Glow effect subtil */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br ${solution.color} opacity-5 rounded-full blur-3xl`} />

      {/* Grille ultra-subtile */}
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
        <div className="max-w-5xl mx-auto">
          {/* Numéro de solution */}
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            className="mb-12"
          >
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${solution.color} text-white text-3xl font-light shadow-lg`}>
              {String(index + 1).padStart(2, '0')}
            </div>
          </motion.div>

          {/* Titre principal - Grande typographie */}
            <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-[1.1]"
          >
            {solution.title}
            </motion.h2>

          {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl sm:text-3xl text-gray-300 leading-relaxed font-light mb-16 max-w-4xl"
            >
            {solution.description}
            </motion.p>

          {/* Features list - Minimaliste */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-6 mb-16"
          >
            {solution.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${solution.color} mt-3 group-hover:scale-150 transition-transform`} />
                <p className="text-xl text-gray-400 font-light leading-relaxed flex-1">
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stat card - Discrète */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className={`p-8 rounded-2xl border ${solution.borderColor} ${solution.bgColor} backdrop-blur-sm max-w-md`}
          >
            <div className={`text-5xl font-light bg-gradient-to-r ${solution.color} bg-clip-text text-transparent mb-2`}>
              {solution.stat}
            </div>
            <p className="text-gray-400 text-lg font-light">{solution.statLabel}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

// Hero section
function SolutionHeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative py-40 bg-black overflow-hidden"
    >
      {/* Glow effects très subtils */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />

      {/* Grille ultra-subtile */}
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
          className="text-center max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight leading-[1.1]"
                >
            La{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
              solution
                  </span>
          </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl text-gray-300 leading-relaxed font-light mb-6"
                >
            Yunicity reconnecte les habitants à leur ville
                </motion.p>

          <motion.p
                  initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-400 leading-relaxed font-light"
          >
            Découvrez comment nous transformons chaque défi en opportunité
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default function SolutionSection() {
  return (
    <>
      <SolutionHeroSection />
      <SolutionCard solution={solutions[0]} index={0} />
      <SolutionCard solution={solutions[1]} index={1} />
      <AppDemo />
      <SolutionCard solution={solutions[2]} index={2} />
      <SolutionCard solution={solutions[3]} index={3} />
    </>
  )
}
