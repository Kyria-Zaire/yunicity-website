'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  TrendingUp,
  Users,
  Target,
  MapPin,
  BarChart3,
  Zap,
  Award,
  Building2,
  CheckCircle2,
  DollarSign,
  ShoppingCart,
  Megaphone,
  Calendar,
  ArrowRight,
  PieChart
} from 'lucide-react'

const marketData = [
  { city: 'Paris', size: 2100000, status: 'Saturé', color: 'bg-red-500/20 border-red-500/40' },
  { city: 'Lyon', size: 520000, status: 'Saturé', color: 'bg-red-500/20 border-red-500/40' },
  { city: 'Marseille', size: 870000, status: 'Saturé', color: 'bg-red-500/20 border-red-500/40' },
  { city: 'Reims', size: 180000, status: 'Inexploité', color: 'bg-green-500/20 border-green-500/40' },
  { city: 'Strasbourg', size: 290000, status: 'Peu servi', color: 'bg-yellow-500/20 border-yellow-500/40' },
  { city: 'Nantes', size: 320000, status: 'Peu servi', color: 'bg-yellow-500/20 border-yellow-500/40' },
  { city: 'Toulouse', size: 500000, status: 'Peu servi', color: 'bg-yellow-500/20 border-yellow-500/40' },
  { city: 'Bordeaux', size: 260000, status: 'Peu servi', color: 'bg-yellow-500/20 border-yellow-500/40' },
]

const competitors = [
  {
    name: 'Nextdoor',
    coverage: 'Grandes villes uniquement',
    focus: 'International',
    localDepth: 'Faible',
    advantage: 'Yunicity : Focus 100% local français',
    color: 'from-red-500/20 to-red-600/20'
  },
  {
    name: 'Facebook Groups',
    coverage: 'Partout mais généraliste',
    focus: 'Généraliste',
    localDepth: 'Très faible',
    advantage: 'Yunicity : Dédié aux communautés locales',
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    name: 'Plateformes locales',
    coverage: 'Villes isolées',
    focus: 'Monoville',
    localDepth: 'Élevé mais limité',
    advantage: 'Yunicity : Réseau multi-villes unifié',
    color: 'from-gray-500/20 to-gray-600/20'
  },
]

const kpis = [
  {
    label: 'Marché adressable',
    value: '15M€',
    description: 'TAM français',
    icon: Target,
    color: 'from-purple-500 to-pink-500'
  },
  {
    label: 'Croissance annuelle',
    value: '25%',
    description: 'CAGR du marché',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500'
  },
  {
    label: 'Villes cibles',
    value: '50+',
    description: '50K-200K habitants',
    icon: MapPin,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    label: 'Utilisateurs potentiels',
    value: '400K',
    description: 'Première vague',
    icon: Users,
    color: 'from-orange-500 to-red-500'
  },
]

const competitiveAdvantages = [
  {
    title: 'Focus local exclusif',
    description: '100% dédié aux villes moyennes françaises, une niche inexploitée'
  },
  {
    title: 'Réseau multi-villes',
    description: 'Première plateforme unifiée connectant plusieurs villes'
  },
  {
    title: 'Profondeur locale',
    description: 'Contenu et services hyper-locaux, pas de généralisation'
  },
  {
    title: 'Business model diversifié',
    description: '4 sources de revenus réduisant les risques'
  },
]

const stats = [
  { label: 'TAM', value: '15M€', icon: Target },
  { label: 'CAGR', value: '25%', icon: TrendingUp },
  { label: 'Villes', value: '50+', icon: MapPin },
  { label: 'Marge brute', value: '85%', icon: BarChart3 },
]

const revenueStreams = [
  {
    id: 'freemium',
    name: 'Freemium',
    percentage: 40,
    icon: DollarSign,
    color: 'from-purple-500 to-pink-500',
    description: 'Modèle freemium avec fonctionnalités premium',
    details: [
      'Accès gratuit aux fonctionnalités de base',
      'Abonnement premium pour fonctionnalités avancées',
      'Tarifs : 4.99€/mois ou 49€/an',
      'Taux de conversion estimé : 5-8%',
      'Fonctionnalités premium : événements exclusifs, cartes personnalisées, analytics'
    ],
    target: 'Particuliers et communautés actives'
  },
  {
    id: 'b2b',
    name: 'B2B',
    percentage: 35,
    icon: ShoppingCart,
    color: 'from-blue-500 to-cyan-500',
    description: 'Solutions pour entreprises et collectivités',
    details: [
      'Abonnements B2B pour commerces locaux',
      'Partenariats avec municipalités et institutions',
      'Tarifs : 99€-499€/mois selon le package',
      'Fonctionnalités : visibilité accrue, analytics détaillés, support prioritaire',
      'Module événements pour organisateurs professionnels'
    ],
    target: 'Commerces, municipalités, institutions'
  },
  {
    id: 'publicite',
    name: 'Publicité',
    percentage: 20,
    icon: Megaphone,
    color: 'from-orange-500 to-red-500',
    description: 'Publicité locale ciblée et native',
    details: [
      'Bannières publicitaires dans l\'application',
      'Sponsoring d\'événements locaux',
      'Partenariats avec commerces locaux',
      'Tarifs : CPM ou CPC selon format',
      'Publicité native intégrée au contenu'
    ],
    target: 'Commerces locaux, annonceurs régionaux'
  },
  {
    id: 'evenements',
    name: 'Événements',
    percentage: 5,
    icon: Calendar,
    color: 'from-green-500 to-emerald-500',
    description: 'Commission sur événements payants',
    details: [
      'Commission de 10-15% sur événements payants',
      'Billeterie intégrée dans l\'application',
      'Événements organisés par Yunicity',
      'Partenariats avec organisateurs locaux',
      'Revenue complémentaire et croissant'
    ],
    target: 'Organisateurs d\'événements, utilisateurs premium'
  },
]

const getGradientColors = (colorClass: string) => {
  if (colorClass.includes('purple')) return { start: '#a855f7', end: '#ec4899' }
  if (colorClass.includes('blue')) return { start: '#3b82f6', end: '#06b6d4' }
  if (colorClass.includes('orange')) return { start: '#f97316', end: '#ef4444' }
  return { start: '#10b981', end: '#34d399' }
}

export default function InvestirOpportunitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedStream, setSelectedStream] = useState<string | null>(null)

  return (
    <section ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />

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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight"
          >
            Le marché{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
              & l'opportunité
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Une opportunité unique dans un marché en pleine croissance
          </motion.p>
        </motion.div>

        {/* Split-screen: Marché + KPIs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 max-w-7xl mx-auto">
          {/* Moitié gauche : Visualisation du marché français */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-light text-white">Marché français</h3>
            </div>

            {/* Légende */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-500/20 border border-green-500/40" />
                <span className="text-sm text-gray-400 font-light">Inexploité</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-yellow-500/20 border border-yellow-500/40" />
                <span className="text-sm text-gray-400 font-light">Peu servi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-red-500/20 border border-red-500/40" />
                <span className="text-sm text-gray-400 font-light">Saturé</span>
              </div>
            </div>

            {/* Cartes des villes */}
            <div className="space-y-4">
              {marketData.map((city, index) => {
                const sizeRatio = city.size / 2100000 // Ratio par rapport à Paris
                return (
                  <motion.div
                    key={city.city}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className={`p-4 rounded-xl border ${city.color} backdrop-blur-sm`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Building2 className="w-4 h-4 text-gray-400" />
                        <span className="text-white font-medium">{city.city}</span>
                      </div>
                      <span className="text-xs text-gray-400 font-light">{city.status}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${sizeRatio * 100}%` } : { width: 0 }}
                          transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                      <span className="text-sm text-gray-400 font-light">
                        {(city.size / 1000).toFixed(0)}K hab.
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10"
            >
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                <strong className="text-white">Notre stratégie :</strong> Cibler les villes moyennes (50K-200K habitants) totalement sous-servies, où la demande est forte mais l'offre inexistante.
              </p>
            </motion.div>
          </motion.div>

          {/* Moitié droite : Titre + KPIs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Titre section */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-light text-white mb-4">
                Une opportunité{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
                  exceptionnelle
                </span>
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Le marché des applications locales en France représente une opportunité massive dans un secteur encore largement inexploité.
              </p>
            </div>

            {/* KPIs Grid */}
            <div className="grid grid-cols-2 gap-6">
              {kpis.map((kpi, index) => {
                const Icon = kpi.icon
                return (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-3xl font-light mb-1 bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent`}>
                      {kpi.value}
                    </div>
                    <div className="text-sm text-white font-medium mb-1">{kpi.label}</div>
                    <div className="text-xs text-gray-400 font-light">{kpi.description}</div>
                  </motion.div>
                )
              })}
            </div>

            {/* Avantages concurrentiels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-purple-400" />
                <h4 className="text-lg font-light text-white">Avantage concurrentiel</h4>
              </div>
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                Première plateforme dédiée exclusivement aux villes moyennes françaises, combinant profondeur locale et réseau multi-villes.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Comparaison avec les concurrents */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-24 max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-light text-white mb-4">
              Pourquoi{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
                Yunicity
              </span>
              {' '}se démarque
            </h3>
            <p className="text-gray-400 font-light">
              Comparaison avec les solutions existantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {competitors.map((competitor, index) => (
              <motion.div
                key={competitor.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className={`bg-gradient-to-br ${competitor.color} border border-white/10 rounded-2xl p-6 backdrop-blur-sm`}
              >
                <h4 className="text-xl font-medium text-white mb-4">{competitor.name}</h4>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-xs text-gray-400 font-light mb-1">Couverture</div>
                    <div className="text-sm text-white font-light">{competitor.coverage}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-light mb-1">Focus</div>
                    <div className="text-sm text-white font-light">{competitor.focus}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-light mb-1">Profondeur locale</div>
                    <div className="text-sm text-white font-light">{competitor.localDepth}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Yunicity Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/40 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-light text-white">Yunicity</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-xs text-gray-300 font-light mb-1">Couverture</div>
                  <div className="text-lg text-white font-medium">Villes moyennes françaises</div>
                </div>
                <div>
                  <div className="text-xs text-gray-300 font-light mb-1">Focus</div>
                  <div className="text-lg text-white font-medium">100% local français</div>
                </div>
                <div>
                  <div className="text-xs text-gray-300 font-light mb-1">Profondeur locale</div>
                  <div className="text-lg text-white font-medium">Excellente</div>
                </div>
              </div>
              
              {/* Avantages */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competitiveAdvantages.map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-medium mb-1">{advantage.title}</div>
                      <div className="text-gray-300 text-sm font-light">{advantage.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Business Model Canvas interactif */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-24 max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-3xl sm:text-4xl font-light text-white mb-4"
            >
              Business Model{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
                Canvas
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-gray-400 font-light"
            >
              4 sources de revenus diversifiées pour une croissance pérenne
            </motion.p>
          </div>

          {/* Visualisation des revenus - Pie Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="mb-12 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <PieChart className="w-6 h-6 text-purple-400" />
              <h4 className="text-xl font-light text-white">Répartition des revenus</h4>
            </div>
            
            {/* Visualisation circulaire */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Pie Chart visuel */}
              <div className="relative w-64 h-64 flex-shrink-0">
                <svg viewBox="0 0 200 200" className="transform -rotate-90">
                  {revenueStreams.map((stream, index) => {
                    const cumulative = revenueStreams
                      .slice(0, index)
                      .reduce((sum, s) => sum + s.percentage, 0)
                    const offset = (cumulative / 100) * 628.32 // 2 * π * 100
                    const length = (stream.percentage / 100) * 628.32
                    
                    return (
                      <motion.circle
                        key={stream.id}
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke={`url(#${stream.id})`}
                        strokeWidth="20"
                        strokeDasharray={`${length} 628.32`}
                        strokeDashoffset={-offset}
                        initial={{ strokeDasharray: '0 628.32' }}
                        animate={isInView ? { strokeDasharray: `${length} 628.32` } : {}}
                        transition={{ duration: 1, delay: 1.8 + index * 0.1 }}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setSelectedStream(selectedStream === stream.id ? null : stream.id)}
                      />
                    )
                  })}
                  <defs>
                    {revenueStreams.map((stream) => {
                      const colors = getGradientColors(stream.color)
                      return (
                        <linearGradient key={stream.id} id={stream.id} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={colors.start} />
                          <stop offset="100%" stopColor={colors.end} />
                        </linearGradient>
                      )
                    })}
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-light text-white">4</div>
                    <div className="text-sm text-gray-400 font-light">Sources</div>
                  </div>
                </div>
              </div>

              {/* Légende */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {revenueStreams.map((stream, index) => {
                  const Icon = stream.icon
                  const isSelected = selectedStream === stream.id
                  return (
                    <motion.div
                      key={stream.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.9 + index * 0.1 }}
                      onClick={() => setSelectedStream(isSelected ? null : stream.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? `bg-gradient-to-br ${stream.color}/20 border-white/40 shadow-lg scale-105`
                          : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stream.color} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium">{stream.name}</div>
                          <div className={`text-lg font-light bg-gradient-to-r ${stream.color} bg-clip-text text-transparent`}>
                            {stream.percentage}%
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 font-light">{stream.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Détails de la source sélectionnée */}
          <AnimatePresence>
            {selectedStream && (
              <motion.div
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-12 overflow-hidden"
              >
                {revenueStreams
                  .filter((stream) => stream.id === selectedStream)
                  .map((stream) => {
                    const Icon = stream.icon
                    return (
                      <div
                        key={stream.id}
                        className={`bg-gradient-to-br ${stream.color}/10 border-2 border-white/20 rounded-3xl p-8 sm:p-12`}
                      >
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stream.color} flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-2xl font-light text-white mb-2">{stream.name}</h4>
                            <p className="text-gray-300 font-light mb-4">{stream.description}</p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                              <Target className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-300 font-light">{stream.target}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => setSelectedStream(null)}
                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                          >
                            <ArrowRight className="w-4 h-4 text-white rotate-45" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {stream.details.map((detail, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                            >
                              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 font-light text-sm">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Flux de revenus - Visualisation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
            className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <h4 className="text-xl font-light text-white">Flux de revenus</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {revenueStreams.map((stream, index) => {
                const Icon = stream.icon
                return (
                  <motion.div
                    key={stream.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 2.1 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stream.color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`text-2xl font-light mb-1 bg-gradient-to-r ${stream.color} bg-clip-text text-transparent`}>
                      {stream.percentage}%
                    </div>
                    <div className="text-sm text-gray-400 font-light">{stream.name}</div>
                    <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${stream.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 2.2 + index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${stream.color}`}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Bandeau de stats en bas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 2.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-4">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-light text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 font-light">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
