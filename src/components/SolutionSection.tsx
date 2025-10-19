'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  MapPin,
  Users,
  Star,
  CheckCircle2,
  Sparkles,
  Zap,
  Globe,
  Heart,
  MessageCircle
} from 'lucide-react'

// Démo interactive de l'app - minimaliste (Section 2 - Fond Noir)
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
      title: "Carte Interactive 3D (30% MVP)",
      description: "Une carte immersive de Reims avec événements, commerces, lieux culturels géolocalisés en temps réel",
      features: [
        "Filtres par catégorie (culture, gastronomie, loisirs)",
        "Géolocalisation + suggestions personnalisées",
        "Affichage temps réel des événements proximité",
        "Résout le problème n°1 : info locale éparpillée"
      ]
    },
    community: {
      title: "Mur Communautaire (40% MVP)",
      description: "Espace d'échange entre habitants : recommandations, avis, discussions locales",
      features: [
        "Publier des posts/recommandations",
        "Commenter et réagir",
        "Système de modération simple",
        "Crée le lien social manquant"
      ]
    },
    events: {
      title: "Hub d'Informations Local (30% MVP)",
      description: "Centralisation de TOUT ce qui se passe à Reims - LA référence unique",
      features: [
        "Flux d'actualités locales",
        "Notifications push personnalisées",
        "Fiches détaillées (commerces, asso, talents)",
        "50% des Français ne savent pas ce qui se passe"
      ]
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-8 lg:p-12 overflow-hidden"
    >
      {/* Effet de profondeur subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5 rounded-3xl" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* iPhone 15 Pro mockup */}
        <div className="relative order-2 lg:order-1">
          <motion.div
            className="relative w-full max-w-sm mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Effet de halo subtil style Apple */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-900/10 via-black/20 to-gray-900/10 rounded-[3.5rem] blur-2xl scale-110"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1.05, 1.1, 1.05]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* iPhone frame noir élégant */}
            <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-[3.5rem] p-2 shadow-2xl border border-gray-800">
              {/* Camera bump élégant */}
              <div className="absolute top-4 left-6 w-20 h-12 bg-gradient-to-b from-gray-800 to-black rounded-2xl shadow-2xl border border-gray-700">
                <div className="absolute top-2 left-2 w-6 h-6 bg-black rounded-full border border-gray-600">
                  <div className="absolute top-1 left-1 w-4 h-4 bg-blue-400 rounded-full shadow-lg"></div>
                </div>
                <div className="absolute top-2 right-2 w-6 h-6 bg-black rounded-full border border-gray-600">
                  <div className="absolute top-1 left-1 w-4 h-4 bg-blue-400 rounded-full shadow-lg"></div>
                </div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-gray-800 rounded shadow-inner"></div>
              </div>

              {/* Action button subtil */}
              <div className="absolute left-0 top-20 w-1 h-12 bg-gray-700 rounded-r shadow-lg"></div>

              {/* Volume buttons subtils */}
              <div className="absolute left-0 top-32 w-1 h-8 bg-gray-700 rounded-r shadow-lg"></div>
              <div className="absolute left-0 top-42 w-1 h-8 bg-gray-700 rounded-r shadow-lg"></div>

              {/* Power button subtil */}
              <div className="absolute right-0 top-32 w-1 h-12 bg-gray-700 rounded-l shadow-lg"></div>

              {/* Screen noir premium */}
              <div className="bg-black rounded-[3rem] relative overflow-hidden shadow-inner">
                {/* Dynamic Island élégant */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20 border border-gray-700 shadow-lg"></div>

                <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 h-[580px] relative overflow-hidden rounded-[3rem]">

                  {/* Status bar élégant */}
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
                              <div className="absolute bottom-8 left-6 w-2 h-2 bg-cyan-400 rounded-full shadow-sm"></div>
                              <div className="absolute top-12 left-8 w-2 h-2 bg-blue-300 rounded-full shadow-sm"></div>
                            </div>
                            <div className="space-y-3 flex-1">
                              <motion.div
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white text-sm flex items-center space-x-3 border border-white/20"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs shadow-lg">☕</div>
                                <div>
                                  <div className="font-medium text-white">Café Central</div>
                                  <div className="text-white/60 text-xs">2min • Ouvert jusqu'à 19h</div>
                                </div>
                              </motion.div>
                              <motion.div
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white text-sm flex items-center space-x-3 border border-white/20"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs shadow-lg">🎭</div>
                                <div>
                                  <div className="font-medium text-white">Théâtre Municipal</div>
                                  <div className="text-white/60 text-xs">5min • Spectacle ce soir</div>
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
                                  <div className="text-white/70 text-sm">247 membres • 5 nouveaux posts</div>
                                  <div className="flex items-center space-x-1 mt-1">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span className="text-xs text-green-300">Très actif</span>
                                  </div>
                                </div>
                              </motion.div>
                              <motion.div
                                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-4"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center font-bold text-white">S</div>
                                <div className="text-white flex-1">
                                  <div className="font-semibold">Sport & Bien-être</div>
                                  <div className="text-white/70 text-sm">189 membres • Course demain 7h</div>
                                  <div className="flex items-center space-x-1 mt-1">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                    <span className="text-xs text-orange-300">Modéré</span>
                                  </div>
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
                                <div className="flex justify-between items-start mb-2">
                                  <div className="text-white font-semibold">🎵 Concert Jazz</div>
                                  <div className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded-full">Gratuit</div>
                                </div>
                                <div className="text-white/70 text-sm mb-2">Demain 20h • Opéra</div>
                                <div className="text-green-400 text-xs">3 amis intéressés</div>
                              </motion.div>
                              <motion.div
                                className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="text-white font-semibold mb-1">🥕 Marché Bio</div>
                                <div className="text-white/70 text-sm">Samedi 8h • Place Drouet</div>
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
              className="text-3xl font-bold text-white mb-4"
            >
              {demoScreens[activeTab as keyof typeof demoScreens].title}
            </motion.h3>
            <p className="text-xl text-white/70 mb-6 font-light">
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
                className="flex items-center gap-3 text-white/70 bg-white/5 px-4 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function SolutionSection() {
  const piliers = [
    {
      icon: MapPin,
      title: "Carte Interactive 3D",
      percentage: "30%",
      description: "Visualisez Reims autrement",
      details: "Une carte immersive avec événements, commerces, lieux culturels géolocalisés en temps réel. Filtres par catégorie, suggestions personnalisées.",
      color: "blue"
    },
    {
      icon: Star,
      title: "Hub d'Informations",
      percentage: "30%",
      description: "Toute l'actualité locale",
      details: "Centralisation de TOUT ce qui se passe à Reims. Flux d'actualités, notifications push, fiches détaillées des acteurs locaux.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Mur Communautaire",
      percentage: "40%",
      description: "Créez du lien social",
      details: "Espace d'échange entre habitants : posts, recommandations, discussions. Modération simple pour un contenu authentique.",
      color: "green"
    }
  ]

  const benefices = [
    {
      icon: Sparkles,
      title: "Découverte Intuitive",
      description: "Ne ratez plus jamais un événement ou un lieu incroyable à deux pas de chez vous."
    },
    {
      icon: Heart,
      title: "Connexion Locale",
      description: "Rencontrez vos voisins, créez des liens et développez votre réseau local authentique."
    },
    {
      icon: Zap,
      title: "Tout en Un",
      description: "Une seule app remplace 15 applications fragmentées. Simplicité et efficacité."
    },
    {
      icon: Globe,
      title: "Impact Mesurable",
      description: "Visibilité pour les acteurs locaux, engagement communautaire et ville plus vivante."
    }
  ]

  return (
    <>
      {/* SECTION 1 - Les 3 Piliers (Fond Noir) */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Grille subtile blanche */}
        <div
          className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6">
          {/* Header Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
            >
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Yunicity
              </span>
              <span className="block text-white mt-2">Tout-en-Un</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light mb-10"
            >
              La solution complète pour transformer Reims
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold text-xl"
            >
              <span className="text-blue-400">30%</span>
              <span className="text-gray-400">+</span>
              <span className="text-purple-400">30%</span>
              <span className="text-gray-400">+</span>
              <span className="text-green-400">40%</span>
              <span className="text-gray-400">=</span>
              <span className="text-white">100% Yunicity</span>
            </motion.div>
          </motion.div>

          {/* Grid des 3 piliers - Ultra Classe */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {piliers.map((pilier, index) => (
              <motion.div
                key={pilier.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Card principale avec depth */}
                <div className="relative bg-white rounded-[2.5rem] p-12 border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.15)] overflow-hidden">

                  {/* Badge pourcentage */}
                  <div className="absolute top-8 right-8">
                    <div className={`text-4xl font-black leading-none ${
                      pilier.color === 'blue' ? 'text-blue-500' :
                      pilier.color === 'purple' ? 'text-purple-500' :
                      'text-green-500'
                    }`}>
                      {pilier.percentage}
                    </div>
                  </div>

                  {/* Ligne verticale décorative */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                    pilier.color === 'blue' ? 'bg-gradient-to-b from-blue-500 to-blue-600' :
                    pilier.color === 'purple' ? 'bg-gradient-to-b from-purple-500 to-purple-600' :
                    'bg-gradient-to-b from-green-500 to-green-600'
                  }`} />

                  {/* Icon - Style épuré */}
                  <div className={`inline-flex w-20 h-20 rounded-2xl ${
                    pilier.color === 'blue' ? 'bg-blue-500/10' :
                    pilier.color === 'purple' ? 'bg-purple-500/10' :
                    'bg-green-500/10'
                  } items-center justify-center mb-8`}>
                    <pilier.icon className={`w-10 h-10 ${
                      pilier.color === 'blue' ? 'text-blue-600' :
                      pilier.color === 'purple' ? 'text-purple-600' :
                      'text-green-600'
                    }`} />
          </div>

                  {/* Content - Typographie premium */}
                  <div className="relative max-w-[280px]">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight leading-tight">
                      {pilier.title}
                    </h3>

                    <div className={`w-12 h-1 rounded-full mb-6 ${
                      pilier.color === 'blue' ? 'bg-blue-500' :
                      pilier.color === 'purple' ? 'bg-purple-500' :
                      'bg-green-500'
                    }`} />

                    <p className="text-lg text-gray-700 mb-6 font-medium leading-relaxed">
                      {pilier.description}
                    </p>

                    <p className="text-base text-gray-500 leading-relaxed">
                      {pilier.details}
                    </p>
                  </div>

                  {/* Pattern décoratif subtil en background */}
                  <div
                    className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(circle, ${
                        pilier.color === 'blue' ? 'rgb(59, 130, 246)' :
                        pilier.color === 'purple' ? 'rgb(168, 85, 247)' :
                        'rgb(34, 197, 94)'
                      } 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats bar - Bonus en bas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24 max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    3
                  </div>
                  <div className="text-gray-400 font-medium">Piliers Innovants</div>
                </div>
                <div>
                  <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-gray-400 font-medium">Solution Complète</div>
                </div>
                <div>
                  <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    1
            </div>
                  <div className="text-gray-400 font-medium">App pour Tout</div>
            </div>
            </div>
          </div>
        </motion.div>
        </div>
      </section>

      {/* SECTION 2 - iPhone Demo (Fond Noir) */}
      <section className="relative py-24 bg-black overflow-hidden">
        {/* Background minimaliste style Apple */}
        <div className="absolute inset-0">
          {/* Grille subtile */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />

          {/* Effets de profondeur subtils */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 via-blue-400/5 to-transparent rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-600/10 via-blue-500/5 to-transparent rounded-full blur-3xl"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.4, 0.2, 0.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        <div className="relative container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h3
              className="text-4xl font-bold text-white mb-4"
            >
              Découvrez Notre MVP Complet
            </motion.h3>
            <p className="text-xl text-white/70 font-light">
              3 piliers pour une solution 100% locale
            </p>
          </motion.div>

          <AppDemo />
        </div>
      </section>

      {/* SECTION 3 - Impact & CTA (Fond Blanc) */}
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

          {/* Stats Impact - Style Tesla */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-900 font-medium text-sm mb-8">
                IMPACT MESURABLE
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
                Des Résultats Concrets
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
                Yunicity transforme radicalement la façon dont les habitants découvrent et vivent leur ville
              </p>
            </div>

            {/* Grid 2x2 Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefices.map((benefice, index) => (
                <motion.div
                  key={benefice.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 h-full shadow-lg hover:shadow-2xl">
                    {/* Icon */}
                    <div className="w-20 h-20 mb-6 bg-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <benefice.icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{benefice.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{benefice.description}</p>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Hero - Style épuré */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[3rem] p-20 overflow-hidden shadow-2xl">
              {/* Pattern background subtil */}
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

              {/* Glow effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

              <div className="relative z-10 text-center">
                {/* Titre principal */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-10 tracking-tight leading-tight"
                >
                  Prêt à rejoindre
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                    la révolution locale ?
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl text-gray-300 mb-14 leading-relaxed max-w-3xl mx-auto font-light"
                >
                  Transformez votre expérience locale avec Yunicity
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                  <motion.a
                href="#newsletter"
                    className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-gray-900 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Users className="w-6 h-6" />
                    <span>Rejoindre</span>
                  </motion.a>

                  <motion.a
                href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white/20 hover:border-white/50"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>Contact</span>
                  </motion.a>
                </motion.div>

                {/* Social proof micro */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span>Gratuit pendant la beta</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span>Lancé à Reims</span>
                  </div>
                </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
    </>
  )
}
