'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  MapPin, 
  Camera, 
  Star, 
  Clock,
  Users,
  Coffee,
  Building2,
  Wine,
  Music,
  Utensils,
  ShoppingBag,
  TreePine,
  Church,
  Route,
  Compass,
  Eye,
  Heart,
  Navigation,
  Map
} from 'lucide-react'

// Découvertes authentiques de Reims
const reimsDiscoveries = [
  {
    id: 'cathedrale',
    title: 'Cathédrale Notre-Dame',
    category: 'Histoire & Culture',
    description: 'Joyau gothique où étaient sacrés les rois de France',
    image: '⛪',
    coordinates: '49.2540, 4.0335',
    ouverture: '7h30 - 19h30',
    prix: 'Gratuit',
    secret: 'Montez à 18h pour voir les vitraux s\'illuminer',
    ambiance: 'Majestueuse',
    difficulte: 'Facile',
    duree: '45 min',
    color: 'from-amber-500 to-yellow-600',
    tags: ['Patrimoine UNESCO', 'Gothique', 'Rois de France']
  },
  {
    id: 'champagne',
    title: 'Caves Veuve Clicquot',
    category: 'Gastronomie & Vins',
    description: 'Plongée dans l\'univers du champagne de prestige',
    image: '🍾',
    coordinates: '49.2497, 4.0603',
    ouverture: '10h - 18h',
    prix: '35€',
    secret: 'Réservez la visite "Madame Clicquot" pour l\'expérience VIP',
    ambiance: 'Élégante',
    difficulte: 'Facile',
    duree: '1h30',
    color: 'from-purple-500 to-pink-600',
    tags: ['Champagne', 'Dégustation', 'Prestige']
  },
  {
    id: 'halles',
    title: 'Halles du Boulingrin',
    category: 'Local & Authentique',
    description: 'Marché couvert Art Déco, temple de la gastronomie rémoise',
    image: '🥖',
    coordinates: '49.2514, 4.0247',
    ouverture: 'Mer, Ven, Sam matin',
    prix: 'Libre',
    secret: 'Goûtez les roses de Reims chez le boulanger du fond',
    ambiance: 'Conviviale',
    difficulte: 'Facile',
    duree: '1h',
    color: 'from-green-500 to-emerald-600',
    tags: ['Marché local', 'Art Déco', 'Gastronomie']
  },
  {
    id: 'palais-tau',
    title: 'Palais du Tau',
    category: 'Musée & Patrimoine',
    description: 'Ancien palais archiépiscopal, trésor des sacres royaux',
    image: '👑',
    coordinates: '49.2534, 4.0344',
    ouverture: '9h30 - 18h',
    prix: '11€',
    secret: 'Admirez la tapisserie de saint Remi, chef-d\'œuvre médiéval',
    ambiance: 'Solennelle',
    difficulte: 'Facile',
    duree: '1h15',
    color: 'from-blue-500 to-indigo-600',
    tags: ['Musée', 'Patrimoine', 'Art médiéval']
  },
  {
    id: 'parc-leo-lagrange',
    title: 'Parc Léo Lagrange',
    category: 'Nature & Détente',
    description: 'Poumon vert de Reims, parfait pour une pause nature',
    image: '🌳',
    coordinates: '49.2403, 4.0154',
    ouverture: '24h/24',
    prix: 'Gratuit',
    secret: 'Point de vue sublime depuis la butte Saint-Nicaise au coucher du soleil',
    ambiance: 'Apaisante',
    difficulte: 'Facile',
    duree: '2h',
    color: 'from-green-600 to-teal-500',
    tags: ['Nature', 'Jogging', 'Famille']
  },
  {
    id: 'place-drouet',
    title: 'Place Drouet d\'Erlon',
    category: 'Vie Nocturne & Shopping',
    description: 'Artère commerçante et festive, cœur battant de Reims',
    image: '🛍️',
    coordinates: '49.2584, 4.0294',
    ouverture: 'Variable',
    prix: 'Variable',
    secret: 'Prenez l\'apéro en terrasse au Café du Palais pour observer le va-et-vient',
    ambiance: 'Dynamique',
    difficulte: 'Facile',
    duree: '3h',
    color: 'from-orange-500 to-red-500',
    tags: ['Shopping', 'Bars', 'Animation']
  }
]

// Composant carte découverte style routard
function RouteCard({ discovery, delay, isActive, onClick }: { 
  discovery: typeof reimsDiscoveries[0], 
  delay: number,
  isActive: boolean,
  onClick: () => void 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`relative group cursor-pointer transition-all duration-500 ${
        isActive ? 'scale-105 z-10' : 'hover:scale-102'
      }`}
      onClick={onClick}
    >
      {/* Background effet routard */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/10 to-orange-100/5 rounded-2xl backdrop-blur-sm border border-amber-200/20 group-hover:border-amber-200/40 transition-all duration-300" />
      
      {/* Tampon style routard */}
      <div className="absolute -top-2 -right-2 z-20">
        <motion.div
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${discovery.color} flex items-center justify-center shadow-lg border-2 border-white/50`}
          whileHover={{ scale: 1.1, rotate: 10 }}
          animate={isActive ? { scale: 1.1, rotate: 5 } : {}}
        >
          <Star className="w-5 h-5 text-white" />
        </motion.div>
      </div>

      <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/10 transition-all duration-300">
        
        {/* Header avec emoji et coordonnées */}
        <div className="flex items-start justify-between mb-4">
          <div className="text-5xl mb-2">{discovery.image}</div>
          <div className="text-right text-xs text-white/60">
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              {discovery.coordinates}
            </div>
          </div>
        </div>

        {/* Titre et catégorie */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1">{discovery.title}</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${discovery.color} text-white`}>
            {discovery.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-white/80 text-sm leading-relaxed mb-4">
          {discovery.description}
        </p>

        {/* Infos pratiques style routard */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-xs text-white/70">
            <Clock className="w-3 h-3 mr-1 text-blue-400" />
            {discovery.ouverture}
          </div>
          <div className="flex items-center text-xs text-white/70">
            <Users className="w-3 h-3 mr-1 text-green-400" />
            {discovery.duree}
          </div>
          <div className="flex items-center text-xs text-white/70">
            <Route className="w-3 h-3 mr-1 text-purple-400" />
            {discovery.prix}
          </div>
          <div className="flex items-center text-xs text-white/70">
            <Heart className="w-3 h-3 mr-1 text-red-400" />
            {discovery.ambiance}
          </div>
        </div>

        {/* Secret du routard */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={isActive ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-3 border border-yellow-500/30 mb-4">
            <div className="flex items-start">
              <Eye className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-yellow-300 font-semibold text-xs mb-1">Secret du Routard :</div>
                <div className="text-white/90 text-xs leading-relaxed">{discovery.secret}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {discovery.tags.map((tag, index) => (
            <span key={tag} className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/70">
              {tag}
            </span>
          ))}
        </div>

        {/* Hover effect routard */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-orange-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          animate={isActive ? { opacity: 1 } : {}}
        />
      </div>
    </motion.div>
  )
}

// Composant carte interactive de Reims
function ReimsMiniMap({ activeDiscovery }: { activeDiscovery: string | null }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-white/20 backdrop-blur-sm h-96"
    >
      {/* Header carte */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center">
          <Map className="w-5 h-5 mr-2 text-blue-400" />
          Plan de Reims
        </h3>
        <div className="flex items-center text-sm text-white/60">
          <Compass className="w-4 h-4 mr-1" />
          Centre historique
        </div>
      </div>

      {/* Zone carte stylisée */}
      <div className="relative h-64 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl border border-white/10 overflow-hidden">
        
        {/* Rivières et routes principales */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <path d="M 20 180 Q 120 160 220 140 Q 280 130 340 120" stroke="#4FC3F7" strokeWidth="3" fill="none" />
          <path d="M 0 100 L 360 90" stroke="#FFB74D" strokeWidth="2" fill="none" />
          <path d="M 180 0 L 170 260" stroke="#FFB74D" strokeWidth="2" fill="none" />
        </svg>

        {/* Points d'intérêt sur la carte */}
        {reimsDiscoveries.map((discovery, index) => (
          <motion.div
            key={discovery.id}
            className={`absolute w-4 h-4 rounded-full border-2 border-white shadow-lg cursor-pointer transition-all duration-300 ${
              activeDiscovery === discovery.id 
                ? `bg-gradient-to-br ${discovery.color} scale-150 z-10` 
                : 'bg-white/20 hover:scale-125'
            }`}
            style={{
              left: `${20 + index * 50}%`,
              top: `${30 + (index % 3) * 30}%`
            }}
            whileHover={{ scale: 1.5 }}
            animate={activeDiscovery === discovery.id ? { 
              scale: 1.8,
              boxShadow: "0 0 20px rgba(255,255,255,0.5)"
            } : {}}
          >
            {activeDiscovery === discovery.id && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
              >
                {discovery.title}
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Légende */}
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 text-xs text-white/80">
          <div className="flex items-center mb-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
            <span>Patrimoine</span>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
            <span>Gastronomie</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            <span>Nature</span>
          </div>
        </div>
      </div>

      {/* Stats ville */}
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div className="bg-white/5 rounded-lg p-2">
          <div className="text-lg font-bold text-white">183K</div>
          <div className="text-xs text-white/60">Habitants</div>
        </div>
        <div className="bg-white/5 rounded-lg p-2">
          <div className="text-lg font-bold text-white">2000</div>
          <div className="text-xs text-white/60">Ans d'histoire</div>
        </div>
        <div className="bg-white/5 rounded-lg p-2">
          <div className="text-lg font-bold text-white">320</div>
          <div className="text-xs text-white/60">Monuments</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function DecouverteReimsSection() {
  const [activeDiscovery, setActiveDiscovery] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section 
      ref={ref}
      className="relative min-h-screen py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 overflow-hidden"
    >
      {/* Background effet parchemin/carte ancienne */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-amber-200/10 to-orange-200/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />
        
        {/* Texture parchemin */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3Ccircle cx='33' cy='5' r='1'/%3E%3Ccircle cx='3' cy='23' r='1'/%3E%3Ccircle cx='45' cy='17' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative container mx-auto px-6">
        
        {/* Header style guide routard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 border-2 border-amber-400/30 rounded-xl text-amber-200 font-bold text-sm tracking-wider uppercase mb-8"
          >
            <Navigation className="w-5 h-5" />
            <span>LE ROUTARD DES APPLICATIONS</span>
            <Camera className="w-5 h-5" />
          </motion.div>
          
          <h2 className="text-5xl lg:text-8xl font-black text-white mb-8 leading-tight">
            Découvrez
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
              REIMS
            </span>
            Autrement
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
            <span className="text-amber-300 font-semibold">Yunicity</span> vous guide comme un routard local 
            <br className="hidden lg:block" />
            vers les <span className="text-orange-300 font-semibold">pépites cachées</span> et les <span className="text-red-300 font-semibold">secrets authentiques</span> de la ville des Sacres.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-lg"
          >
            <div className="flex items-center space-x-2 text-amber-300">
              <Star className="w-5 h-5" />
              <span>6 découvertes authentiques</span>
            </div>
            <div className="flex items-center space-x-2 text-orange-300">
              <Eye className="w-5 h-5" />
              <span>Secrets d'initiés</span>
            </div>
            <div className="flex items-center space-x-2 text-red-300">
              <span>🏛️</span>
              <span>2000 ans d'histoire</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          
          {/* Carte interactive Reims */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <ReimsMiniMap activeDiscovery={activeDiscovery} />
          </motion.div>

          {/* Grille des découvertes */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {reimsDiscoveries.map((discovery, index) => (
                <RouteCard
                  key={discovery.id}
                  discovery={discovery}
                  delay={0.7 + index * 0.1}
                  isActive={activeDiscovery === discovery.id}
                  onClick={() => setActiveDiscovery(
                    activeDiscovery === discovery.id ? null : discovery.id
                  )}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA style routard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-20"
        >
          <div className="relative bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-xl rounded-3xl border-2 border-amber-400/20 p-12 max-w-4xl mx-auto overflow-hidden">
            
            {/* Tampon routard géant */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full border-4 border-red-400/30 flex items-center justify-center transform rotate-12">
              <div className="text-center">
                <div className="text-red-300 font-black text-lg">REIMS</div>
                <div className="text-red-400 font-bold text-xs">APPROUVÉ</div>
              </div>
            </div>

            <div className="relative">
              <h3 className="text-4xl font-bold text-white mb-6 flex items-center justify-center">
                <span className="mr-3">🗺️</span>
                Votre Guide Personnel Arrive
                <span className="ml-3">📍</span>
              </h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Mars 2026 : <span className="text-amber-300 font-semibold">Yunicity</span> transforme Reims en livre ouvert.
                <br />
                Découvertes, secrets, communauté... tout dans votre poche !
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-full text-white font-bold text-lg shadow-xl border-2 border-amber-400/50"
              >
                🚀 Découvrir en Avant-Première
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}