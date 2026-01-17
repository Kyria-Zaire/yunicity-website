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
  PieChart,
  Network,
  Shield
} from 'lucide-react'

const marketData = [
  { city: 'Paris', size: 2100000, status: 'Saturé', color: 'bg-blue-500/20 border-blue-500/40' },
  { city: 'Lyon', size: 520000, status: 'Saturé', color: 'bg-blue-500/20 border-blue-500/40' },
  { city: 'Marseille', size: 870000, status: 'Saturé', color: 'bg-blue-500/20 border-blue-500/40' },
  { city: 'Reims', size: 180000, status: 'Inexploité', color: 'bg-blue-700/20 border-blue-700/40' },
  { city: 'Strasbourg', size: 290000, status: 'Peu servi', color: 'bg-blue-400/20 border-blue-400/40' },
  { city: 'Nantes', size: 320000, status: 'Peu servi', color: 'bg-blue-400/20 border-blue-400/40' },
  { city: 'Toulouse', size: 500000, status: 'Peu servi', color: 'bg-blue-400/20 border-blue-400/40' },
  { city: 'Bordeaux', size: 260000, status: 'Peu servi', color: 'bg-blue-400/20 border-blue-400/40' },
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
    color: 'from-blue-800 to-blue-600'
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
    color: 'from-blue-800 to-blue-600',
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
  if (colorClass.includes('blue-800')) return { start: '#1e40af', end: '#2563eb' }
  if (colorClass.includes('blue')) return { start: '#3b82f6', end: '#06b6d4' }
  if (colorClass.includes('orange')) return { start: '#f97316', end: '#ef4444' }
  return { start: '#10b981', end: '#34d399' }
}

export default function InvestirOpportunitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedStream, setSelectedStream] = useState<string | null>(null)

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-200/20 to-blue-100/20 rounded-full blur-3xl" />

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

      <div className="relative container mx-auto px-6">
        {/* Section Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Notre{' '}
              <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent font-normal">
                vision
              </span>
            </h2>
            <p className="text-sm text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Transformer la façon dont les habitants vivent et interagissent avec leur ville
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-500/10 to-blue-400/10 border-2 border-blue-800/30 rounded-xl p-5 sm:p-6 shadow-xl"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reconnecter les villes</h3>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  Yunicity naît d'un constat simple : 50% des habitants se sentent déconnectés de leur ville. 
                  Nous construisons la première plateforme qui centralise toute la vie locale (événements, commerces, actualités, communauté) 
                  pour créer du lien authentique entre les habitants et leur territoire.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cibler les villes moyennes</h3>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  Alors que les grandes métropoles sont saturées par les géants du numérique, les villes moyennes (50K-200K habitants) 
                  restent largement sous-servies. C'est là que se trouve notre opportunité : un marché de 15M€ en France, 
                  avec une croissance annuelle de 25%, et une demande forte mais une offre inexistante.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Devenir le leader européen</h3>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  Notre ambition est de devenir la référence des communautés locales en Europe. 
                  En partant de 3 villes pilotes (Reims, Troyes, Châlons-en-Champagne), nous visons 50+ villes françaises d'ici 2030, 
                  puis l'expansion européenne. Objectif : 5M€ d'ARR et 400K utilisateurs actifs.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight"
          >
            Le marché{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent font-normal">
              & l'opportunité
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-sm text-gray-600 font-light leading-relaxed max-w-3xl mx-auto"
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
            className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-light text-gray-900">Marché français</h3>
            </div>

            {/* Légende */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-green-500/20 border border-green-500/40" />
                <span className="text-xs text-gray-600 font-light">Inexploité</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-yellow-500/20 border border-yellow-500/40" />
                <span className="text-xs text-gray-600 font-light">Peu servi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-red-500/20 border border-red-500/40" />
                <span className="text-xs text-gray-600 font-light">Saturé</span>
              </div>
            </div>

            {/* Cartes des villes */}
            <div className="space-y-3">
              {marketData.map((city, index) => {
                const sizeRatio = city.size / 2100000 // Ratio par rapport à Paris
                return (
                  <motion.div
                    key={city.city}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className={`p-3 rounded-lg border ${city.color} backdrop-blur-sm`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-gray-500" />
                        <span className="text-sm text-gray-900 font-medium">{city.city}</span>
                      </div>
                      <span className="text-[10px] text-gray-600 font-light">{city.status}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${sizeRatio * 100}%` } : { width: 0 }}
                          transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                      <span className="text-xs text-gray-600 font-light">
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
              className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-200"
            >
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                <strong className="text-gray-900">Notre stratégie :</strong> Cibler les villes moyennes (50K-200K habitants) totalement sous-servies, où la demande est forte mais l'offre inexistante.
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
              <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
                Une opportunité{' '}
                <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent font-normal">
                  exceptionnelle
                </span>
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Le marché des applications locales en France représente une opportunité massive dans un secteur encore largement inexploité.
              </p>
            </div>

            {/* KPIs Grid */}
            <div className="grid grid-cols-2 gap-4">
              {kpis.map((kpi, index) => {
                const Icon = kpi.icon
                return (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 hover:border-gray-300/50 transition-all duration-300 shadow-md"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${kpi.color} flex items-center justify-center mb-3`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className={`text-2xl font-light mb-1 bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent`}>
                      {kpi.value}
                    </div>
                    <div className="text-xs text-gray-900 font-medium mb-0.5">{kpi.label}</div>
                    <div className="text-[10px] text-gray-600 font-light">{kpi.description}</div>
                  </motion.div>
                )
              })}
            </div>

            {/* Avantages concurrentiels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-br from-blue-500/10 to-blue-400/10 border border-blue-800/30 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-blue-800" />
                <h4 className="text-base font-light text-gray-900">Avantage concurrentiel</h4>
              </div>
              <p className="text-gray-700 font-light text-xs leading-relaxed">
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
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Pourquoi{' '}
              <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent font-normal">
                Yunicity
              </span>
              {' '}se démarque
            </h3>
            <p className="text-sm text-gray-600 font-light">
              Comparaison avec les solutions existantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {competitors.map((competitor, index) => (
              <motion.div
                key={competitor.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className={`bg-gradient-to-br ${competitor.color} border border-gray-200/50 rounded-xl p-4 backdrop-blur-sm shadow-md`}
              >
                <h4 className="text-lg font-medium text-gray-900 mb-3">{competitor.name}</h4>
                <div className="space-y-2 mb-4">
                  <div>
                    <div className="text-[10px] text-gray-600 font-light mb-0.5">Couverture</div>
                    <div className="text-xs text-gray-900 font-light">{competitor.coverage}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-600 font-light mb-0.5">Focus</div>
                    <div className="text-xs text-gray-900 font-light">{competitor.focus}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-600 font-light mb-0.5">Profondeur locale</div>
                    <div className="text-xs text-gray-900 font-light">{competitor.localDepth}</div>
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
            className="bg-gradient-to-br from-blue-500/20 to-blue-400/20 border-2 border-blue-800/50 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl -mr-12 -mt-12" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-light text-gray-900">Yunicity</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-[10px] text-gray-600 font-light mb-0.5">Couverture</div>
                  <div className="text-sm text-gray-900 font-medium">Villes moyennes françaises</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-600 font-light mb-0.5">Focus</div>
                  <div className="text-sm text-gray-900 font-medium">100% local français</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-600 font-light mb-0.5">Profondeur locale</div>
                  <div className="text-sm text-gray-900 font-medium">Excellente</div>
                </div>
              </div>
              
              {/* Avantages */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {competitiveAdvantages.map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="flex items-start gap-2 p-3 bg-white/50 rounded-lg border border-gray-200/50"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-800 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-900 font-medium mb-0.5">{advantage.title}</div>
                      <div className="text-gray-700 text-xs font-light">{advantage.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Section Traction attendue */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-center mb-8"
          >
            <h3             className="text-xl sm:text-2xl font-light text-gray-900 mb-3">
              Traction{' '}
              <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent font-normal">
                attendue
              </span>
            </h3>
            <p className="text-xs text-gray-600 font-light">
              Nos projections de croissance sur les 5 prochaines années
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                year: '2026',
                label: 'Lancement MVP',
                metrics: [
                  { label: 'Villes', value: '3', color: 'from-blue-500 to-cyan-500' },
                  { label: 'Utilisateurs', value: '10K', color: 'from-blue-800 to-blue-600' },
                  { label: 'ARR', value: '50K€', color: 'from-green-500 to-emerald-500' }
                ]
              },
              {
                year: '2027',
                label: 'Expansion régionale',
                metrics: [
                  { label: 'Villes', value: '10', color: 'from-blue-500 to-cyan-500' },
                  { label: 'Utilisateurs', value: '50K', color: 'from-blue-800 to-blue-600' },
                  { label: 'ARR', value: '500K€', color: 'from-green-500 to-emerald-500' }
                ]
              },
              {
                year: '2028',
                label: 'Croissance nationale',
                metrics: [
                  { label: 'Villes', value: '25', color: 'from-blue-500 to-cyan-500' },
                  { label: 'Utilisateurs', value: '150K', color: 'from-blue-800 to-blue-600' },
                  { label: 'ARR', value: '1.5M€', color: 'from-green-500 to-emerald-500' }
                ]
              },
              {
                year: '2030',
                label: 'Leader français',
                metrics: [
                  { label: 'Villes', value: '50+', color: 'from-blue-500 to-cyan-500' },
                  { label: 'Utilisateurs', value: '400K', color: 'from-blue-800 to-blue-600' },
                  { label: 'ARR', value: '5M€', color: 'from-green-500 to-emerald-500' }
                ]
              }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg p-4 hover:border-gray-300/50 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-xl font-light text-gray-900 mb-0.5">{milestone.year}</div>
                    <div className="text-xs text-gray-600 font-light">{milestone.label}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {milestone.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <span className="text-xs text-gray-700 font-light">{metric.label}</span>
                      <span className={`text-base font-semibold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Pourquoi Yunicity peut scaler */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-16 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="text-center mb-8"
          >
            <h3             className="text-xl sm:text-2xl font-light text-gray-900 mb-3">
              Pourquoi Yunicity{' '}
              <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent font-normal">
                peut scaler
              </span>
            </h3>
            <p className="text-xs text-gray-600 font-light">
              Les facteurs clés qui garantissent notre capacité de croissance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Modèle économique diversifié',
                description: '4 sources de revenus (Freemium, B2B, Publicité, Événements) réduisent les risques et maximisent les opportunités de croissance.',
                icon: DollarSign,
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Effet réseau local',
                description: 'Chaque nouvelle ville renforce l\'écosystème. Plus d\'utilisateurs = plus de contenu = plus de valeur pour tous.',
                icon: Network,
                color: 'from-blue-800 to-blue-600'
              },
              {
                title: 'Coûts d\'acquisition faibles',
                description: 'Le bouche-à-oreille local et les partenariats avec les mairies permettent une croissance organique à faible coût.',
                icon: TrendingUp,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Barrière à l\'entrée élevée',
                description: 'La profondeur locale et le réseau multi-villes créent une barrière naturelle pour les concurrents.',
                icon: Shield,
                color: 'from-orange-500 to-red-500'
              },
              {
                title: 'Scalabilité technique',
                description: 'Architecture cloud-native (AWS) conçue pour gérer des millions d\'utilisateurs sans refonte majeure.',
                icon: Zap,
                color: 'from-yellow-500 to-orange-500'
              },
              {
                title: 'Marché en croissance',
                description: 'Le marché des applications locales croît de 25% par an. La demande dépasse largement l\'offre actuelle.',
                icon: BarChart3,
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((factor, index) => {
              const Icon = factor.icon
              return (
                <motion.div
                  key={factor.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg p-4 hover:border-gray-300/50 transition-all duration-300 shadow-lg"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${factor.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1.5">{factor.title}</h4>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">{factor.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Business Model Canvas interactif */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-24 max-w-7xl mx-auto"
        >
          <div className="text-center mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-2xl sm:text-3xl font-light text-gray-900 mb-4"
            >
              Business Model{' '}
              <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent font-normal">
                Canvas
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-sm text-gray-600 font-light"
            >
              4 sources de revenus diversifiées pour une croissance pérenne
            </motion.p>
          </div>

          {/* Visualisation des revenus - Pie Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="mb-12 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-6">
              <PieChart className="w-5 h-5 text-blue-800" />
              <h4 className="text-lg font-light text-gray-900">Répartition des revenus</h4>
            </div>
            
            {/* Visualisation circulaire */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Pie Chart visuel */}
              <div className="relative w-48 h-48 flex-shrink-0">
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
                    <div className="text-2xl font-light text-gray-900">4</div>
                    <div className="text-xs text-gray-600 font-light">Sources</div>
                  </div>
                </div>
              </div>

              {/* Légende */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                      className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? `bg-gradient-to-br ${stream.color}/20 border-gray-300/50 shadow-lg scale-105`
                          : 'bg-gray-50 border-gray-200/50 hover:border-gray-300/50'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stream.color} flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-900 font-medium">{stream.name}</div>
                          <div className={`text-base font-light bg-gradient-to-r ${stream.color} bg-clip-text text-transparent`}>
                            {stream.percentage}%
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 font-light">{stream.description}</p>
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
                        className={`bg-gradient-to-br ${stream.color}/10 border-2 border-gray-300/50 rounded-3xl p-8 sm:p-12 shadow-xl`}
                      >
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stream.color} flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-2xl font-light text-gray-900 mb-2">{stream.name}</h4>
                            <p className="text-gray-700 font-light mb-4">{stream.description}</p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                              <Target className="w-4 h-4 text-gray-600" />
                              <span className="text-sm text-gray-700 font-light">{stream.target}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => setSelectedStream(null)}
                            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                          >
                            <ArrowRight className="w-4 h-4 text-gray-700 rotate-45" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {stream.details.map((detail, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              className="flex items-start gap-3 p-4 bg-white/50 rounded-xl border border-gray-200/50"
                            >
                              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 font-light text-sm">{detail}</span>
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
            className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 sm:p-6 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <h4 className="text-base font-light text-gray-900">Flux de revenus</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
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
                    <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${stream.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className={`text-lg font-light mb-0.5 bg-gradient-to-r ${stream.color} bg-clip-text text-transparent`}>
                      {stream.percentage}%
                    </div>
                    <div className="text-[10px] text-gray-600 font-light">{stream.name}</div>
                    <div className="mt-2 h-0.5 bg-gray-200 rounded-full overflow-hidden">
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
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 mb-3">
                      <Icon className="w-5 h-5 text-blue-800" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 font-light">{stat.label}</div>
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
