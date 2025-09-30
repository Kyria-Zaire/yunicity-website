'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  MapPin, 
  Users, 
  Smartphone, 
  Zap, 
  Target, 
  Globe,
  Heart,
  Star,
  TrendingUp,
  Shield,
  ChevronRight
} from 'lucide-react'

// Composant pour les features principales
function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  color,
  delay = 0,
  isActive = false,
  onClick
}: {
  icon: any
  title: string
  description: string
  color: string
  delay?: number
  isActive?: boolean
  onClick?: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={`relative group cursor-pointer ${isActive ? 'z-10' : ''}`}
      onClick={onClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl transition-all duration-500 ${
        isActive 
          ? 'opacity-20 scale-105 shadow-2xl' 
          : 'opacity-5 group-hover:opacity-15 group-hover:scale-102'
      }`} />
      
      <div className="relative p-8 backdrop-blur-sm border border-white/20 rounded-2xl group-hover:border-white/30 transition-all duration-300">
        <motion.div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/80 text-lg leading-relaxed">{description}</p>

        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex items-center text-green-400 font-semibold"
          >
            <ChevronRight className="w-5 h-5 mr-2" />
            Fonctionnalité active
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

// Démo interactive de l'app
function AppDemo() {
  const [activeTab, setActiveTab] = useState('map')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const tabs = [
    { id: 'map', label: 'Carte 3D', icon: MapPin },
    { id: 'community', label: 'Communauté', icon: Users },
    { id: 'events', label: 'Événements', icon: Star },
    { id: 'rewards', label: 'Récompenses', icon: Target }
  ]

  const demoScreens = {
    map: {
      title: "Carte Interactive 3D",
      description: "Explorez votre ville comme jamais auparavant",
      features: ["Géolocalisation en temps réel", "Filtres intelligents", "POI personnalisés", "Navigation augmentée"]
    },
    community: {
      title: "Tribus Locales",
      description: "Rejoignez votre communauté de quartier",
      features: ["Groupes par intérêts", "Ambassadeurs certifiés", "Chat de proximité", "Événements privés"]
    },
    events: {
      title: "Hub Événements",
      description: "Ne ratez plus jamais ce qui se passe près de chez vous",
      features: ["Agenda personnalisé", "Notifications smart", "Réservation intégrée", "Partage social"]
    },
    rewards: {
      title: "Passeport Yunicity",
      description: "Gagnez des points et débloquez des avantages",
      features: ["Points de fidélité", "Réductions partenaires", "Badges exclusifs", "Défis locaux"]
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1 }}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* iPhone 15 Pro mockup */}
        <div className="relative">
          <motion.div
            className="relative w-full max-w-sm mx-auto"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* iPhone frame */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3.5rem] p-2 shadow-2xl border border-gray-700">
              {/* Camera bump */}
              <div className="absolute top-4 left-6 w-20 h-12 bg-gray-800 rounded-2xl shadow-lg border border-gray-600">
                <div className="absolute top-2 left-2 w-6 h-6 bg-gray-900 rounded-full border border-gray-500">
                  <div className="absolute top-1 left-1 w-4 h-4 bg-blue-900 rounded-full"></div>
                </div>
                <div className="absolute top-2 right-2 w-6 h-6 bg-gray-900 rounded-full border border-gray-500">
                  <div className="absolute top-1 left-1 w-4 h-4 bg-blue-900 rounded-full"></div>
                </div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-gray-700 rounded"></div>
              </div>

              {/* Action button */}
              <div className="absolute left-0 top-20 w-1 h-12 bg-gray-600 rounded-r"></div>
              
              {/* Volume buttons */}
              <div className="absolute left-0 top-32 w-1 h-8 bg-gray-600 rounded-r"></div>
              <div className="absolute left-0 top-42 w-1 h-8 bg-gray-600 rounded-r"></div>

              {/* Power button */}
              <div className="absolute right-0 top-32 w-1 h-12 bg-gray-600 rounded-l"></div>

              {/* Screen */}
              <div className="bg-black rounded-[3rem] relative overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20 border-2 border-gray-800"></div>
                
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 h-[580px] relative overflow-hidden rounded-[3rem]">
                  
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 pt-12 pb-4 text-white text-sm font-medium">
                    <span>9:41</span>
                    <span className="font-bold tracking-wider">YUNICITY</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 border border-white rounded-sm">
                        <div className="w-full h-full bg-green-500 rounded-sm"></div>
                      </div>
                      <span className="text-xs">100%</span>
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
                            <div className="bg-white/20 backdrop-blur-sm rounded-2xl h-56 flex items-center justify-center relative overflow-hidden">
                              <MapPin className="w-16 h-16 text-white/60 z-10" />
                              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20"></div>
                              <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                              <div className="absolute bottom-8 left-6 w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <div className="absolute top-12 left-8 w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                            <div className="space-y-3 flex-1">
                              <motion.div 
                                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white text-sm flex items-center space-x-3"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-xs">☕</div>
                                <div>
                                  <div className="font-semibold">Café Central</div>
                                  <div className="text-white/70 text-xs">2min • Ouvert jusqu'à 19h</div>
                                </div>
                              </motion.div>
                              <motion.div 
                                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white text-sm flex items-center space-x-3"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs">🎭</div>
                                <div>
                                  <div className="font-semibold">Théâtre Municipal</div>
                                  <div className="text-white/70 text-xs">5min • Spectacle ce soir</div>
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        )}
                        
                        {activeTab === 'community' && (
                          <div className="space-y-4 flex-1">
                            <div className="text-white font-semibold text-lg">Mes Tribus 👥</div>
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
                            <div className="text-white font-semibold text-lg">Cette semaine 📅</div>
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

                        {activeTab === 'rewards' && (
                          <div className="space-y-4 flex-1">
                            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-yellow-400/30">
                              <div className="text-4xl font-black text-yellow-400 mb-1">1,247</div>
                              <div className="text-white/80 text-sm">Points Yunicity</div>
                              <div className="text-xs text-white/60 mt-1">Niveau: Ambassadeur 🏆</div>
                            </div>
                            <div className="space-y-3 flex-1">
                              <div className="text-white font-semibold text-sm">Récompenses:</div>
                              <motion.div 
                                className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="flex items-center space-x-2">
                                  <div className="text-lg">☕</div>
                                  <div className="text-white text-xs">
                                    <div className="font-semibold">Café offert</div>
                                  </div>
                                </div>
                                <div className="text-yellow-400 font-bold text-xs">500 pts</div>
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

            {/* Floating heart animation */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Controls & Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              {demoScreens[activeTab as keyof typeof demoScreens].title}
            </h3>
            <p className="text-xl text-white/80 mb-6">
              {demoScreens[activeTab as keyof typeof demoScreens].description}
            </p>
          </div>

          {/* Tab navigation */}
          <div className="grid grid-cols-2 gap-3">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
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
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center space-x-3 text-white/80"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function SolutionSection() {
  const [activeFeature, setActiveFeature] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: Smartphone,
      title: "Super App Locale",
      description: "Une seule application pour centraliser toute l'information locale : événements, commerces, communauté, et bons plans.",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Target,
      title: "IA Géolocalisée",
      description: "Recommandations personnalisées basées sur vos goûts, votre position et vos habitudes locales.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Communauté Active",
      description: "Ambassadeurs locaux certifiés qui créent et valident le contenu pour garantir l'authenticité.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Réseau Viral",
      description: "Expansion stratégique ville par ville avec effet réseau pour créer un maillage territorial.",
      color: "from-emerald-500 to-teal-500"
    }
  ]

  return (
    <section 
      ref={ref}
      className="relative min-h-screen py-20 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-green-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-6 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 font-semibold text-sm tracking-wider uppercase mb-6"
          >
            NOTRE SOLUTION
          </motion.span>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
              YUNICITY
            </span>
            <br />
            Change Tout
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
            "Le <span className="text-green-300 font-semibold">Routard des applications locales</span>" - 
            Une révolution dans la façon dont les habitants découvrent et vivent leur ville.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-lg"
          >
            <div className="flex items-center space-x-2 text-green-400">
              <Shield className="w-6 h-6" />
              <span>Sécurisé & Privé</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-400">
              <Zap className="w-6 h-6" />
              <span>Ultra Rapide</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <TrendingUp className="w-6 h-6" />
              <span>Évolutif</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index * 0.2}
              isActive={activeFeature === index}
              onClick={() => setActiveFeature(index)}
            />
          ))}
        </div>

        {/* Demo interactive */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold text-white mb-4">
              Découvrez l'Interface
            </h3>
            <p className="text-xl text-white/70">
              Explorez les fonctionnalités principales de Yunicity
            </p>
          </motion.div>
          
          <AppDemo />
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Une Solution. Mille Possibilités.
            </h3>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Yunicity transforme chaque ville en écosystème connecté où les habitants 
              redécouvrent leur territoire et créent du lien social authentique.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#newsletter"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Rejoindre la Communauté
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Nous Contacter
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}