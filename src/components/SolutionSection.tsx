'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import {
  MapPin,
  Users,
  Star,
  CheckCircle2,
  Calendar,
  Building2,
  Code,
  Database,
  Smartphone,
  Bell,
  Globe,
  X,
  Coffee,
  Music,
  ShoppingBag,
  Heart,
  Brain,
  MessageSquare,
  BarChart3,
  Award,
  CreditCard,
  TrendingUp,
  ArrowRight,
  Zap,
  Wifi,
  Link2,
  Eye,
  Vote,
  Car,
  TrendingDown,
  Sparkles,
  Sun,
  Network,
  Activity
} from 'lucide-react'

// KPI's de lancement MVP
const mvpKPIs = [
  {
    id: 1,
    value: '10 000',
    label: 'Utilisateurs dans les 3 premiers mois',
    icon: Users,
    color: 'from-blue-800 to-blue-600'
  },
  {
    id: 2,
    value: '3',
    label: 'Villes pilotes',
    icon: MapPin,
    color: 'from-blue-800 to-blue-600'
  },
  {
    id: 3,
    value: '500',
    label: 'Acteurs locaux référencés',
    icon: Building2,
    color: 'from-blue-700 to-blue-500'
  },
  {
    id: 4,
    value: '3',
    label: 'Fonctionnalités principales',
    icon: Star,
    color: 'from-blue-600 to-blue-400'
  }
]

// 3 Features principales - Style produit avec maquettes
const mainFeatures = [
  {
    id: 1,
    title: 'Découverte des événements',
    description: 'Trouvez tous les événements de votre ville en un seul endroit. Concerts, marchés, festivals, conférences... Ne manquez plus rien de ce qui se passe près de chez vous.',
    icon: Calendar,
    color: 'from-blue-800 to-blue-600',
    bgColor: 'bg-blue-50',
    mockupImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
    benefits: [
      'Événements géolocalisés en temps réel',
      'Filtres par date, type et quartier',
      'Notifications pour ne rien manquer',
      'Partage avec votre communauté'
    ],
    unique: 'La seule app qui centralise TOUS les événements locaux'
  },
  {
    id: 2,
    title: 'Carte des quartiers',
    description: 'Explorez votre ville comme jamais. Découvrez les commerces, services et points d\'intérêt de chaque quartier avec une carte interactive et intuitive.',
    icon: MapPin,
    color: 'from-blue-800 to-blue-600',
    bgColor: 'bg-blue-50',
    mockupImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop',
    benefits: [
      'Carte interactive 3D de votre ville',
      'Commerces et services géolocalisés',
      'Filtres par catégorie et horaires',
      'Navigation intuitive'
    ],
    unique: 'La première carte 3D dédiée à la vie locale'
  },
  {
    id: 3,
    title: 'Actualité locale',
    description: 'Restez informé de tout ce qui se passe dans votre ville. Actualités, initiatives, projets municipaux... Toute l\'info locale vérifiée et centralisée.',
    icon: Globe,
    color: 'from-blue-700 to-blue-500',
    bgColor: 'bg-blue-50',
    mockupImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop',
    benefits: [
      'Actualités locales en temps réel',
      'Contenu vérifié et fiable',
      'Personnalisation selon vos intérêts',
      'Notifications push intelligentes'
    ],
    unique: 'L\'info locale centralisée, vérifiée et personnalisée'
  }
]

// Solutions MVP (conservé pour compatibilité)
const mvpSolutions = [
  {
    id: 1,
    title: 'Hub d\'informations local',
    percentage: '30%',
    description: 'Centralisation de toute l\'information locale sur une seule plateforme',
    features: [
      'Actualités locales en temps réel',
      'Événements et sorties',
      'Fiches détaillées des commerces',
      'Notifications push personnalisées'
    ],
    icon: Star,
    color: 'from-blue-800 to-blue-600'
  },
  {
    id: 2,
    title: 'Mur communautaire',
    percentage: '40%',
    description: 'Espace d\'échange et de connexion entre les habitants',
    features: [
      'Posts et recommandations',
      'Discussions locales',
      'Rencontres et événements',
      'Création de lien social authentique'
    ],
    icon: Users,
    color: 'from-blue-800 to-blue-600'
  },
  {
    id: 3,
    title: 'Carte interactive 3D',
    percentage: '30%',
    description: 'Géolocalisation et visualisation des points d\'intérêt',
    features: [
      'Événements géolocalisés',
      'Commerces et services',
      'Filtres par catégorie',
      'Navigation intuitive'
    ],
    icon: MapPin,
    color: 'from-blue-700 to-blue-500'
  }
]

// Technologies MVP
const mvpTechnologies = [
  {
    name: 'React Native',
    category: 'Frontend Mobile',
    icon: Smartphone,
    description: 'Application mobile cross-platform'
  },
  {
    name: 'Node.js',
    category: 'Backend',
    icon: Code,
    description: 'API REST pour les données locales'
  },
  {
    name: 'PostgreSQL',
    category: 'Base de données',
    icon: Database,
    description: 'Stockage des données locales'
  },
  {
    name: 'Notifications Push',
    category: 'Services',
    icon: Bell,
    description: 'Alertes et notifications basiques'
  }
]

// Villes pilotes avec détails
const pilotCities = [
  {
    name: 'Reims',
    status: 'Principal',
    population: '183 000',
    acteursLocaux: 180,
    evenementsMois: 45,
    commerces: 120,
    associations: 60,
    description: 'Capitale de la Champagne, Reims est une ville dynamique riche en histoire et en culture.',
    pointsFort: [
      { icon: Coffee, label: 'Cafés & Restaurants', count: 85 },
      { icon: Music, label: 'Événements culturels', count: 45 },
      { icon: ShoppingBag, label: 'Commerces locaux', count: 120 },
      { icon: Heart, label: 'Associations', count: 60 }
    ],
    couleur: 'from-blue-800 to-blue-600',
    image: 'https://images.unsplash.com/photo-1632854270303-f5fdb97b697f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935'
  },
  {
    name: 'Troyes',
    status: 'Secondaire',
    population: '62 000',
    acteursLocaux: 150,
    evenementsMois: 32,
    commerces: 95,
    associations: 55,
    description: 'Ville médiévale au cœur de la Champagne, Troyes allie patrimoine historique et dynamisme économique.',
    pointsFort: [
      { icon: Coffee, label: 'Cafés & Restaurants', count: 65 },
      { icon: Music, label: 'Événements culturels', count: 32 },
      { icon: ShoppingBag, label: 'Commerces locaux', count: 95 },
      { icon: Heart, label: 'Associations', count: 55 }
    ],
    couleur: 'from-blue-800 to-blue-600',
    image: 'https://plus.unsplash.com/premium_photo-1661901917996-4bfa706f84c5?q=80&w=802&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Châlons-en-Champagne',
    status: 'Secondaire',
    population: '45 000',
    acteursLocaux: 170,
    evenementsMois: 28,
    commerces: 110,
    associations: 60,
    description: 'Préfecture de la Marne, Châlons-en-Champagne est une ville à taille humaine avec une vie associative riche.',
    pointsFort: [
      { icon: Coffee, label: 'Cafés & Restaurants', count: 70 },
      { icon: Music, label: 'Événements culturels', count: 28 },
      { icon: ShoppingBag, label: 'Commerces locaux', count: 110 },
      { icon: Heart, label: 'Associations', count: 60 }
    ],
    couleur: 'from-blue-700 to-blue-500',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80'
  }
]

// Composant compteur animé
function AnimatedCounter({ value, duration = 2 }: { value: string, duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const numericValue = parseInt(value.replace(/\s/g, ''))
    if (isNaN(numericValue)) {
      setCount(parseInt(value) || 0)
      return
    }

    const increment = numericValue / (duration * 60)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  // Si la valeur contient des espaces (comme "10 000"), formater avec espace
  if (value.includes(' ')) {
    return <span ref={ref}>{count.toLocaleString('fr-FR')}</span>
  }

  return <span ref={ref}>{count}</span>
}

// KPI's V2
const v2KPIs = [
  {
    id: 1,
    value: '100 000',
    label: 'Utilisateurs actifs',
    icon: Users,
    color: 'from-blue-800 to-blue-600',
    comparison: '10 000 (MVP)',
    growth: '+900%'
  },
  {
    id: 2,
    value: '15',
    label: 'Villes françaises',
    icon: MapPin,
    color: 'from-blue-800 to-blue-600',
    comparison: '3 (MVP)',
    growth: '+400%'
  },
  {
    id: 3,
    value: '5 000',
    label: 'Acteurs locaux',
    icon: Building2,
    color: 'from-blue-700 to-blue-500',
    comparison: '500 (MVP)',
    growth: '+900%'
  },
  {
    id: 4,
    value: '65%',
    label: 'Taux d\'engagement',
    icon: TrendingUp,
    color: 'from-blue-600 to-blue-400',
    comparison: '40% (MVP)',
    growth: '+62.5%'
  }
]

// Nouvelles fonctionnalités V2 (utilisé dans ComparisonSection - défini directement dans le composant)

// Technologies avancées V2
const v2Technologies = [
  {
    name: 'Machine Learning',
    category: 'IA & Recommandations',
    icon: Brain,
    description: 'Algorithmes de recommandation personnalisés'
  },
  {
    name: 'NLP',
    category: 'Traitement du langage',
    icon: MessageSquare,
    description: 'Compréhension et génération de texte naturel'
  },
  {
    name: 'Analytics temps réel',
    category: 'Données',
    icon: BarChart3,
    description: 'Analyse et visualisation en temps réel'
  },
  {
    name: 'Stripe',
    category: 'Paiements',
    icon: CreditCard,
    description: 'Intégration sécurisée des paiements'
  }
]

// KPI's V3
const v3KPIs = [
  {
    id: 1,
    value: '1 million',
    label: 'Utilisateurs',
    icon: Users,
    color: 'from-blue-800 to-blue-600',
    comparison: '100 000 (V2)',
    growth: '+900%'
  },
  {
    id: 2,
    value: '50+',
    label: 'Villes françaises',
    icon: MapPin,
    color: 'from-blue-800 to-blue-600',
    comparison: '15 (V2)',
    growth: '+233%'
  },
  {
    id: 3,
    value: '50 000',
    label: 'Acteurs locaux',
    icon: Building2,
    color: 'from-blue-700 to-blue-500',
    comparison: '5 000 (V2)',
    growth: '+900%'
  },
  {
    id: 4,
    value: '-30%',
    label: 'Isolement urbain',
    icon: TrendingDown,
    color: 'from-blue-600 to-blue-400',
    comparison: 'Impact mesuré',
    growth: 'Réduction'
  }
  ]

// Fonctionnalités Smart City V3
const v3Features = [
  {
    id: 1,
    title: 'IA prédictive',
    description: 'Prédiction d\'événements, trafic et affluence en temps réel',
    icon: Brain,
    color: 'from-blue-800 to-blue-600',
    details: ['Prédictions d\'événements', 'Optimisation du trafic', 'Gestion de l\'affluence']
  },
  {
    id: 2,
    title: 'IoT intégré',
    description: 'Données capteurs pour qualité air, bruit et trafic',
    icon: Wifi,
    color: 'from-blue-800 to-blue-600',
    details: ['Capteurs environnementaux', 'Données en temps réel', 'Monitoring continu']
  },
  {
    id: 3,
    title: 'Blockchain',
    description: 'Transparence des données publiques et tokens locaux',
    icon: Link2,
    color: 'from-blue-700 to-blue-500',
    details: ['Données décentralisées', 'Tokens locaux', 'Transparence totale']
  },
  {
    id: 4,
    title: 'AR/VR',
    description: 'Visites virtuelles et réalité augmentée pour navigation',
    icon: Eye,
    color: 'from-blue-600 to-blue-400',
    details: ['Visites immersives', 'Navigation AR', 'Expériences 3D']
  },
  {
    id: 5,
    title: 'Gouvernance participative',
    description: 'Votes citoyens et budgets participatifs intégrés',
    icon: Vote,
    color: 'from-blue-800 to-blue-600',
    details: ['Votes en ligne', 'Budgets participatifs', 'Décisions collectives']
    },
  {
    id: 6,
    title: 'Mobilité intelligente',
    description: 'Optimisation des transports et covoiturage connecté',
    icon: Car,
    color: 'from-blue-600 to-blue-400',
    details: ['Optimisation trafic', 'Covoiturage intelligent', 'Transports adaptatifs']
  }
  ]

// Technologies de pointe V3
const v3Technologies = [
  {
    name: 'Deep Learning',
    category: 'IA Prédictive',
    icon: Brain,
    description: 'Réseaux de neurones pour prédictions avancées'
  },
  {
    name: 'IoT & Edge Computing',
    category: 'Connectivité',
    icon: Wifi,
    description: 'Capteurs connectés et traitement à la source'
  },
  {
    name: 'Blockchain',
    category: 'Décentralisation',
    icon: Link2,
    description: 'Données sécurisées et transparentes'
  },
  {
    name: 'AR/VR',
    category: 'Immersion',
    icon: Eye,
    description: 'Expériences immersives et réalité augmentée'
  },
  {
    name: 'Big Data Analytics',
    category: 'Analyse',
    icon: BarChart3,
    description: 'Traitement massif de données en temps réel'
  }
]

// Impact mesurable V3 (remplacé par Vision 2030 - Scénarios d'utilisation quotidiens)

// Hero section
function SolutionHeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      data-section="solution-hero"
      className="relative py-20 sm:py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Glow effects très subtils */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-200/20 to-blue-100/20 rounded-full blur-3xl" />

      {/* Grille ultra-subtile */}
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

      <div className="relative container mx-auto px-4 sm:px-8 max-w-7xl">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-[1.1]"
          >
            L'évolution de{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent font-normal">
              Yunicity
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed font-light mb-4 sm:mb-6"
          >
            De la fondation à la Smart City
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base text-gray-600 leading-relaxed font-light mb-8 sm:mb-12"
          >
            Découvrez notre roadmap d'évolution depuis le lancement du MVP
          </motion.p>
        </motion.div>

        {/* Statistiques clés en avant-première */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto"
        >
          {/* Carte 1 : Utilisateurs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-gray-200/50 p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-800 to-blue-600 text-white shadow-md">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              <div>
                <h3 className="text-sm sm:text-base font-light text-gray-900">Utilisateurs</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 font-extralight">Croissance</p>
                </div>
              </div>

            {/* Comparaison MVP vs V3 */}
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">MVP (2026)</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900">10 000</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '10%' } : { width: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">V3 (2029-2030)</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900">1 million</span>
                      </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-800 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 1, delay: 1.4 }}
                  />
                </div>
                    </div>
                  </div>

            {/* Croissance */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-xs sm:text-sm font-medium text-blue-700">+9 900%</span>
              </div>
            </div>
          </motion.div>

          {/* Carte 2 : Villes */}
                      <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-gray-200/50 p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-800 to-blue-600 text-white shadow-md">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
              <div>
                <h3 className="text-sm sm:text-base font-light text-gray-900">Villes</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 font-extralight">Expansion</p>
              </div>
            </div>
            
            {/* Comparaison MVP vs V3 */}
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">MVP (2026)</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900">3</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '12%' } : { width: 0 }}
                    transition={{ duration: 1, delay: 1.3 }}
                  />
                </div>
              </div>
              
                                <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">V3 (2029-2030)</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900">50+</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-800 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  />
                </div>
              </div>
            </div>
            
            {/* Croissance */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-xs sm:text-sm font-medium text-blue-700">+1 567%</span>
              </div>
                                </div>
                              </motion.div>

          {/* Carte 3 : Fonctionnalités */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-gray-200/50 p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 text-white shadow-md">
                <Star className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
              <div>
                <h3 className="text-sm sm:text-base font-light text-gray-900">Fonctionnalités</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 font-extralight">Innovation</p>
                          </div>
            </div>
            
            {/* Comparaison MVP vs V3 */}
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">MVP (2026)</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900">3</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '21%' } : { width: 0 }}
                    transition={{ duration: 1, delay: 1.4 }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">V3 (2029-2030)</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900">14</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-800 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 1, delay: 1.6 }}
                  />
                </div>
              </div>
            </div>
            
            {/* Croissance */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-xs sm:text-sm font-medium text-blue-700">+367%</span>
              </div>
            </div>
          </motion.div>

          {/* Carte 4 : Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-gray-200/50 p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-md">
                <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-light text-gray-900">Impact</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 font-extralight">Engagement</p>
              </div>
            </div>
            
            {/* Comparaison MVP vs V3 */}
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">MVP (2026)</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900">40%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '40%' } : { width: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">V3 (2029-2030)</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900">85%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-800 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '85%' } : { width: 0 }}
                    transition={{ duration: 1, delay: 1.7 }}
                  />
                </div>
              </div>
            </div>
            
            {/* Croissance */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-xs sm:text-sm font-medium text-blue-700">+113%</span>
              </div>
                                </div>
                              </motion.div>
        </motion.div>

        {/* CTA de navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12"
        >
          {/* Bouton Découvrir MVP */}
          <motion.button
            onClick={() => {
              const element = document.querySelector('[data-section="solution-mvp"]')
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-5 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-blue-800 to-blue-700 text-white rounded-xl sm:rounded-2xl font-light text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Effet de brillance au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <div className="relative flex items-center gap-2 sm:gap-2.5">
              <Star className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Découvrir MVP</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
          </motion.button>

          {/* Bouton Explorer V2 */}
          <motion.button
            onClick={() => {
              const element = document.querySelector('[data-section="solution-v2"]')
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-5 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-blue-800 to-blue-700 text-white rounded-xl sm:rounded-2xl font-light text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Effet de brillance au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <div className="relative flex items-center gap-2 sm:gap-2.5">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Explorer V2</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
          </motion.button>

          {/* Bouton Voir V3 */}
          <motion.button
            onClick={() => {
              const element = document.querySelector('[data-section="solution-v3"]')
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-5 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-blue-800 to-blue-700 text-white rounded-xl sm:rounded-2xl font-light text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Effet de brillance au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <div className="relative flex items-center gap-2 sm:gap-2.5">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Voir V3</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

// Section MVP - Lancement (Juillet 2026)
function MVPSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [selectedCity, setSelectedCity] = useState<typeof pilotCities[0] | null>(null)

  return (
    <motion.section
      ref={ref}
      data-section="solution-mvp"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-20 sm:py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Glow effect subtil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-full blur-3xl" />

      {/* Grille ultra-subtile */}
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

      <div className="relative container mx-auto px-4 sm:px-8 max-w-7xl">
        {/* Header */}
                              <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
        >
            <Calendar className="w-4 h-4" />
            <span>Lancement : Juillet 2026</span>
                              </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight leading-[1.1]"
          >
            MVP - Les Fondations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
          >
            La première version de Yunicity, conçue pour reconnecter les habitants à leur ville avec les fonctionnalités essentielles
          </motion.p>
        </motion.div>

        {/* Timeline horizontale */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Ligne de timeline */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 transform -translate-y-1/2" />
            
            {/* Point de lancement */}
            <div className="relative flex items-center justify-center">
              <div className="relative z-10 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-blue-500 shadow-md sm:shadow-lg">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-light text-blue-800 mb-0.5">Juillet 2026</div>
                  <div className="text-xs sm:text-sm text-gray-600">Lancement MVP</div>
                            </div>
                          </div>
              </div>
          </div>
                      </motion.div>

        {/* KPI Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          {mvpKPIs.map((kpi, index) => (
            <motion.div
              key={kpi.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/50 p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${kpi.color} text-white mb-2 sm:mb-3`}>
                <kpi.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
              <div className={`text-xl sm:text-2xl font-light bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent mb-1.5 sm:mb-2`}>
                <AnimatedCounter value={kpi.value} />
                {kpi.id === 1 && <span className="text-base sm:text-lg">+</span>}
              </div>
              <p className="text-[10px] sm:text-xs text-gray-600 font-light leading-relaxed">
                {kpi.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Solutions MVP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8 text-center">
            Fonctionnalités principales
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            {mvpSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/50 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${solution.color} text-white`}>
                    <solution.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                  <div className={`text-base sm:text-lg font-light bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                    {solution.percentage}
              </div>
            </div>

                <h4 className="text-base sm:text-lg font-light text-gray-900 mb-2">
                  {solution.title}
                </h4>
                
                <p className="text-xs sm:text-sm text-gray-600 font-light mb-3 sm:mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="space-y-1.5 sm:space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 sm:gap-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-transparent bg-gradient-to-r ${solution.color} bg-clip-text flex-shrink-0 mt-0.5`} />
                      <span className="text-[10px] sm:text-xs text-gray-600 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
          </motion.div>
            ))}
        </div>
        </motion.div>

        {/* Technologies Stack */}
                      <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8 text-center">
            Stack technique
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {mvpTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/50 p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-100 text-gray-700 mb-2">
                  <tech.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                <div className="text-[10px] text-gray-500 font-light mb-0.5">{tech.category}</div>
                <h4 className="text-sm sm:text-base font-light text-gray-900 mb-1.5">{tech.name}</h4>
                <p className="text-[10px] sm:text-xs text-gray-600 font-light leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Villes pilotes */}
                              <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-xl sm:rounded-2xl border border-blue-200/50 p-4 sm:p-6"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-800" />
            <h3 className="text-lg sm:text-xl font-light text-gray-900">
              Villes pilotes
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
            {pilotCities.map((city, index) => (
              <motion.button
                key={city.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 2.1 + index * 0.1 }}
                onClick={() => setSelectedCity(city)}
                className="bg-white/80 backdrop-blur-sm rounded-lg border border-blue-200/50 p-3 sm:p-4 hover:border-blue-400/50 hover:shadow-md transition-all duration-300 text-left w-full cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-sm sm:text-base font-light text-gray-900 mb-0.5">{city.name}</div>
                <div className="text-[10px] sm:text-xs text-gray-600 font-light">{city.status}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Modal Ville */}
        <AnimatePresence>
          {selectedCity && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCity(null)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              />
              
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-4 sm:inset-8 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full z-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Image de fond */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedCity.image})` }}
                />
                
                {/* Overlay sombre pour lisibilité */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                
                {/* Contenu */}
                <div className="relative h-full max-h-[90vh] overflow-y-auto">
                  {/* Bouton fermer */}
                  <button
                    onClick={() => setSelectedCity(null)}
                    className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full transition-all duration-300 border border-white/20"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </button>

                  {/* Header simplifié */}
                  <div className="p-5 sm:p-6 pt-12 sm:pt-14">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <h3 className="text-2xl sm:text-3xl font-extralight text-white mb-2 tracking-tight">
                        {selectedCity.name}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-base font-extralight leading-relaxed max-w-xl">
                        {selectedCity.description}
                      </p>
              </motion.div>
              </div>

                  {/* Stats simplifiées */}
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                              <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
                    >
                      <div className="bg-white/10 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/20">
                        <div className="text-xl sm:text-2xl font-extralight text-white mb-0.5">
                          {selectedCity.acteursLocaux}
            </div>
                        <div className="text-[10px] sm:text-xs text-white/70 font-extralight">
                          Acteurs locaux
          </div>
        </div>
                      <div className="bg-white/10 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/20">
                        <div className="text-xl sm:text-2xl font-extralight text-white mb-0.5">
                          {selectedCity.evenementsMois}
                        </div>
                        <div className="text-[10px] sm:text-xs text-white/70 font-extralight">
                          Événements/mois
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/20">
                        <div className="text-xl sm:text-2xl font-extralight text-white mb-0.5">
                          {selectedCity.commerces}
                        </div>
                        <div className="text-[10px] sm:text-xs text-white/70 font-extralight">
                          Commerces
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/20">
                        <div className="text-xl sm:text-2xl font-extralight text-white mb-0.5">
                          {selectedCity.associations}
                        </div>
                        <div className="text-[10px] sm:text-xs text-white/70 font-extralight">
                          Associations
                        </div>
                                </div>
                              </motion.div>

                    {/* Points forts simplifiés */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="grid sm:grid-cols-2 gap-3"
                    >
                      {selectedCity.pointsFort.map((point, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                          className="bg-white/10 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/20"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br ${selectedCity.couleur} flex items-center justify-center`}>
                              <point.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-lg sm:text-xl font-extralight text-white mb-0.5">
                                {point.count}
                          </div>
                              <div className="text-[10px] sm:text-xs text-white/70 font-extralight">
                                {point.label}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Population simplifiée */}
                              <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="mt-6 pt-6 border-t border-white/20"
                              >
                      <div className="flex items-center gap-2 text-white/80 font-extralight">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base">
                          {selectedCity.population} <span className="text-white/60">habitants</span>
                        </span>
                      </div>
                              </motion.div>
                            </div>
                          </div>
                      </motion.div>
            </>
          )}
                    </AnimatePresence>
      </div>
    </motion.section>
  )
}

// Composant de comparaison visuelle MVP vs V2
function ComparisonSection({ isInView }: { isInView: boolean }) {
  const [sliderPosition, setSliderPosition] = useState(50)

  const mvpFeatures = [
    { icon: Star, label: 'Hub Info', color: 'text-blue-800' },
    { icon: Users, label: 'Communauté', color: 'text-blue-800' },
    { icon: MapPin, label: 'Carte 3D', color: 'text-blue-600' }
  ]

  const v2NewFeatures = [
    { icon: Brain, label: 'IA Recommandations', color: 'text-blue-800', highlight: true },
    { icon: MessageSquare, label: 'Chatbot', color: 'text-blue-800', highlight: true },
    { icon: BarChart3, label: 'Analytics', color: 'text-blue-700', highlight: true },
    { icon: Award, label: 'Gamification', color: 'text-blue-600', highlight: true },
    { icon: CreditCard, label: 'Paiements', color: 'text-blue-600', highlight: true }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="mb-10 sm:mb-12 md:mb-16"
    >
      <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8 text-center">
        Comparaison visuelle
      </h3>

      <div className="relative max-w-6xl mx-auto">
        {/* Container split-screen */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-200/50 p-4 sm:p-6 overflow-hidden shadow-lg">
          <div className="relative h-[500px] sm:h-[550px] md:h-[600px]">
            {/* MVP Side (Left) */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-50 rounded-xl overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="h-full p-4 sm:p-6 flex flex-col">
                <div className="mb-3 sm:mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>MVP - Juillet 2026</span>
                </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-light text-gray-900 mb-2">Version initiale</h4>
              </div>
                
                {/* MVP Interface Mockup */}
                <div className="flex-1 bg-white rounded-xl p-3 sm:p-4 md:p-5 border border-gray-200/50 overflow-y-auto">
          <div className="space-y-2 sm:space-y-3">
                    {mvpFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-gray-50 rounded-lg">
                        <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${feature.color}`} />
                        <span className="text-xs sm:text-sm text-gray-700 font-light">{feature.label}</span>
            </div>
                    ))}
                    <div className="pt-2 border-t border-gray-200">
                      <div className="text-[10px] sm:text-xs text-gray-500 font-light">Fonctionnalités de base</div>
        </div>
                  </div>
                </div>
              </div>
          </div>

            {/* V2 Side (Right) */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-50 rounded-xl overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <div className="h-full p-4 sm:p-6 flex flex-col">
                <div className="mb-3 sm:mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mb-3">
                    <Zap className="w-3 h-3" />
                    <span>V2 - 2027-2028</span>
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-light text-gray-900 mb-2">Avec Intelligence Locale</h4>
          </div>

                {/* V2 Interface Mockup */}
                <div className="flex-1 bg-white rounded-xl p-3 sm:p-4 md:p-5 border border-gray-200/50 overflow-y-auto">
          <div className="space-y-2 sm:space-y-3">
                    {mvpFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-gray-50 rounded-lg">
                        <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${feature.color}`} />
                        <span className="text-xs sm:text-sm text-gray-700 font-light">{feature.label}</span>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-gray-200">
                      <div className="text-[10px] sm:text-xs text-gray-500 font-light mb-2">Nouvelles fonctionnalités</div>
                      <div className="space-y-1.5 sm:space-y-2">
                        {v2NewFeatures.map((feature, idx) => (
              <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, delay: 1.2 + idx * 0.1 }}
                            className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 bg-gradient-to-r ${feature.highlight ? 'from-blue-50 to-blue-50 border border-blue-200' : 'bg-gray-50'} rounded-lg`}
              >
                            <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${feature.color}`} />
                            <span className="text-xs sm:text-sm text-gray-700 font-light flex-1">{feature.label}</span>
                            {feature.highlight && (
                              <span className="ml-auto px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-[9px] sm:text-[10px] font-medium whitespace-nowrap">
                                Nouveau
                              </span>
                            )}
              </motion.div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>

            {/* Slider Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-800 to-blue-600 z-10 cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border-2 border-blue-800 shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
              </div>
            </div>

            {/* Slider Input (invisible but functional) */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-sm font-light text-gray-900 mb-1">MVP</div>
              <div className="text-xs text-gray-500 font-extralight">3 fonctionnalités</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-light text-gray-900 mb-1">V2</div>
              <div className="text-xs text-gray-500 font-extralight">8 fonctionnalités</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Section V2 - Expansion (12-18 mois après MVP)
function V2Section() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      ref={ref}
      data-section="solution-v2"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-20 sm:py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Glow effect subtil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-full blur-3xl" />

      {/* Grille ultra-subtile */}
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

      <div className="relative container mx-auto px-4 sm:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
          >
            <Calendar className="w-4 h-4" />
            <span>12-18 mois après MVP</span>
          </motion.div>

            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight leading-[1.1]"
          >
            V2 - L'Intelligence Locale
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
            >
            L'intelligence artificielle au service de la connexion locale
            </motion.p>
        </motion.div>

        {/* Timeline horizontale */}
            <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Ligne de timeline */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 transform -translate-y-1/2" />
            
            {/* Points de timeline */}
            <div className="relative flex items-center justify-between">
              <div className="relative z-10 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-blue-500 shadow-md sm:shadow-lg">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-light text-blue-800 mb-0.5">Juillet 2026</div>
                  <div className="text-xs sm:text-sm text-gray-600">MVP</div>
                </div>
              </div>
              <div className="relative z-10 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-blue-800 shadow-md sm:shadow-lg">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-light text-blue-800 mb-0.5">2027-2028</div>
                  <div className="text-xs sm:text-sm text-gray-600">V2</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* KPI Cards avec comparaison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12"
          >
          {v2KPIs.map((kpi, index) => (
              <motion.div
              key={kpi.id}
              initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/50 p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
              <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${kpi.color} text-white mb-2 sm:mb-3`}>
                <kpi.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className={`text-xl sm:text-2xl font-light bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent mb-1.5 sm:mb-2`}>
                <AnimatedCounter value={kpi.value} />
              </div>
              <p className="text-[10px] sm:text-xs text-gray-600 font-light leading-relaxed mb-1.5">
                {kpi.label}
              </p>
              <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-gray-500 font-extralight">
                <ArrowRight className="w-3 h-3" />
                <span>{kpi.comparison}</span>
              </div>
              <div className={`text-[10px] sm:text-xs font-medium bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent mt-1`}>
                {kpi.growth}
              </div>
              </motion.div>
            ))}
          </motion.div>

        {/* Comparaison visuelle avant/après */}
        <ComparisonSection isInView={isInView} />

        {/* Écosystème & Partenariats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8 text-center">
            Écosystème & Partenariats
          </h3>
          
          {/* Cartes par catégorie d'acteurs */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {/* Carte Commerces */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 2.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/50 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300"
          >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-800 to-blue-600 text-white mb-3">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
              
              <h4 className="text-base sm:text-lg font-light text-gray-900 mb-2">
                Commerces locaux
              </h4>
              
              <p className="text-xs sm:text-sm text-gray-600 font-light mb-3 sm:mb-4 leading-relaxed">
                Augmentez votre visibilité et votre clientèle locale
              </p>
              
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-800 flex-shrink-0 mt-0.5" />
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">Profil optimisé avec photos et horaires</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-800 flex-shrink-0 mt-0.5" />
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">Analytics détaillées sur votre audience</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-800 flex-shrink-0 mt-0.5" />
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">Paiement intégré pour réservations</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-800 flex-shrink-0 mt-0.5" />
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">Promotions ciblées vers les habitants</span>
                </li>
              </ul>
          </motion.div>
            
            {/* Carte Associations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/50 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 text-white mb-3">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
              
              <h4 className="text-base sm:text-lg font-light text-gray-900 mb-2">
                Associations
              </h4>
              
              <p className="text-xs sm:text-sm text-gray-600 font-light mb-3 sm:mb-4 leading-relaxed">
                Mobilisez votre communauté et organisez vos événements
              </p>
              
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">Création et promotion d'événements</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">Gestion des inscriptions en ligne</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">Communication directe avec les membres</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">Statistiques d'engagement et participation</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Carte Mairies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 2.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/50 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 text-white mb-3">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              
              <h4 className="text-base sm:text-lg font-light text-gray-900 mb-2">
                Mairies & Collectivités
              </h4>
              
              <p className="text-xs sm:text-sm text-gray-600 font-light mb-3 sm:mb-4 leading-relaxed">
                Connectez-vous avec vos citoyens et améliorez la vie locale
              </p>
              
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">Communication directe avec les habitants</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">Diffusion d'annonces et actualités municipales</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">Dashboard de données locales en temps réel</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[10px] sm:text-xs text-gray-600 font-light">Gouvernance participative et consultations</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Technologies avancées */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8 text-center">
            Technologies avancées
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {v2Technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/50 p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300"
          >
                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-100 text-gray-700 mb-2">
                  <tech.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
                <div className="text-xs sm:text-sm text-gray-500 font-light mb-0.5">{tech.category}</div>
                <h4 className="text-sm sm:text-base font-light text-gray-900 mb-1.5">{tech.name}</h4>
                <p className="text-[10px] sm:text-xs text-gray-600 font-light leading-relaxed">
                  {tech.description}
                </p>
          </motion.div>
            ))}
        </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

// Composant de comparaison visuelle V2 → V3
function V2V3ComparisonSection({ isInView }: { isInView: boolean }) {
  const [sliderPosition, setSliderPosition] = useState(50)

  const v2BaseFeatures = [
    { icon: Star, label: 'Hub Info', color: 'text-blue-800' },
    { icon: Users, label: 'Communauté', color: 'text-blue-800' },
    { icon: MapPin, label: 'Carte 3D', color: 'text-blue-600' }
  ]

  const v2NewFeatures = [
    { icon: Brain, label: 'IA Recommandations', color: 'text-blue-800' },
    { icon: MessageSquare, label: 'Chatbot', color: 'text-blue-800' },
    { icon: BarChart3, label: 'Analytics', color: 'text-blue-700' },
    { icon: Award, label: 'Gamification', color: 'text-blue-600' },
    { icon: CreditCard, label: 'Paiements', color: 'text-blue-600' }
  ]

  const colorMap: Record<string, string> = {
    'from-blue-800 to-blue-600': 'text-blue-800',
    'from-blue-700 to-blue-500': 'text-blue-700',
    'from-blue-600 to-blue-400': 'text-blue-600'
  }

  const v3NewFeatures = v3Features.map((feature) => ({
    icon: feature.icon,
    label: feature.title,
    color: colorMap[feature.color] || 'text-gray-700',
    highlight: true
  }))

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="mb-10 sm:mb-12 md:mb-16"
    >
      <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8 text-center">
        Évolution V2 → V3
      </h3>

      <div className="relative max-w-6xl mx-auto">
        {/* Container split-screen */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-200/50 p-4 sm:p-6 overflow-hidden shadow-lg">
          <div className="relative h-[450px] sm:h-[550px] md:h-[650px]">
            {/* V2 Side (Left) */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-50 rounded-xl overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="h-full p-4 sm:p-6 flex flex-col pointer-events-auto">
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mb-3">
                    <Zap className="w-3 h-3" />
                    <span>V2 - 2027-2028</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-light text-gray-900 mb-2">Intelligence Locale</h4>
                </div>
                
                {/* V2 Interface Mockup */}
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-5 border border-gray-200/50 overflow-y-auto min-h-0">
                  <div className="space-y-3">
                    {v2BaseFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <feature.icon className={`w-5 h-5 ${feature.color}`} />
                        <span className="text-sm text-gray-700 font-light">{feature.label}</span>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-gray-200">
                      <div className="text-xs text-gray-500 font-light mb-2">Fonctionnalités V2</div>
                      <div className="space-y-2">
                        {v2NewFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
                            <feature.icon className={`w-4 h-4 ${feature.color}`} />
                            <span className="text-xs text-gray-700 font-light">{feature.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* V3 Side (Right) */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-50 rounded-xl overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <div className="h-full p-4 sm:p-6 flex flex-col pointer-events-auto">
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 rounded-full text-xs font-medium mb-3">
                    <Sparkles className="w-3 h-3" />
                    <span>V3 - 2029</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-light text-gray-900 mb-2">Ville Intelligente</h4>
                </div>
                
                {/* V3 Interface Mockup */}
                <div className="flex-1 bg-white rounded-xl p-4 sm:p-5 border border-gray-200/50 overflow-y-auto min-h-0" style={{ scrollbarWidth: 'thin' }}>
                  <div className="space-y-3">
                    {v2BaseFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <feature.icon className={`w-5 h-5 ${feature.color}`} />
                        <span className="text-sm text-gray-700 font-light">{feature.label}</span>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-gray-200">
                      <div className="text-xs text-gray-500 font-light mb-2">Fonctionnalités V2</div>
                      <div className="space-y-2">
                        {v2NewFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg">
                            <feature.icon className={`w-4 h-4 ${feature.color}`} />
                            <span className="text-xs text-gray-700 font-light">{feature.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-blue-200">
                      <div className="text-xs text-blue-600 font-medium mb-2">Nouvelles fonctionnalités Smart City</div>
                      <div className="space-y-2">
                        {v3NewFeatures.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, delay: 1.3 + idx * 0.1 }}
                            className={`flex items-center gap-3 p-2.5 bg-gradient-to-r ${feature.highlight ? 'from-blue-50 to-blue-50 border border-blue-200' : 'bg-gray-50'} rounded-lg`}
                          >
                            <feature.icon className={`w-4 h-4 ${feature.color}`} />
                            <span className="text-xs text-gray-700 font-light flex-1">{feature.label}</span>
                            {feature.highlight && (
                              <span className="ml-auto px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-[10px] font-medium">
                                Nouveau
                              </span>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 sm:w-1.5 bg-gradient-to-b from-blue-800 to-blue-600 z-10 cursor-ew-resize pointer-events-auto"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border-2 border-blue-600 shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-600 rounded-full" />
              </div>
            </div>

            {/* Slider Input - support tactile et souris */}
            <div
              className="absolute top-0 bottom-0 w-12 sm:w-8 z-20 cursor-ew-resize touch-none"
              style={{ left: `calc(${sliderPosition}% - 24px)` }}
              onMouseDown={(e) => {
                e.preventDefault()
                const startX = e.clientX
                const startPosition = sliderPosition
                const container = (e.currentTarget as HTMLElement).closest('.relative') as HTMLElement
                
                if (!container) return
                
                const handleMouseMove = (moveEvent: MouseEvent) => {
                  const containerWidth = container.offsetWidth
                  const deltaX = moveEvent.clientX - startX
                  const deltaPercent = (deltaX / containerWidth) * 100
                  const newPosition = Math.max(0, Math.min(100, startPosition + deltaPercent))
                  setSliderPosition(newPosition)
                }
                
                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove)
                  document.removeEventListener('mouseup', handleMouseUp)
                }
                
                document.addEventListener('mousemove', handleMouseMove)
                document.addEventListener('mouseup', handleMouseUp)
              }}
              onTouchStart={(e) => {
                e.preventDefault()
                const touch = e.touches[0]
                const startX = touch.clientX
                const startPosition = sliderPosition
                const container = (e.currentTarget as HTMLElement).closest('.relative') as HTMLElement
                
                if (!container) return
                
                const handleTouchMove = (moveEvent: TouchEvent) => {
                  moveEvent.preventDefault()
                  const touch = moveEvent.touches[0]
                  const containerWidth = container.offsetWidth
                  const deltaX = touch.clientX - startX
                  const deltaPercent = (deltaX / containerWidth) * 100
                  const newPosition = Math.max(0, Math.min(100, startPosition + deltaPercent))
                  setSliderPosition(newPosition)
                }
                
                const handleTouchEnd = () => {
                  document.removeEventListener('touchmove', handleTouchMove)
                  document.removeEventListener('touchend', handleTouchEnd)
                }
                
                document.addEventListener('touchmove', handleTouchMove, { passive: false })
                document.addEventListener('touchend', handleTouchEnd)
              }}
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-sm font-light text-gray-900 mb-1">V2</div>
              <div className="text-xs text-gray-500 font-extralight">8 fonctionnalités</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-light text-gray-900 mb-1">V3</div>
              <div className="text-xs text-gray-500 font-extralight">14 fonctionnalités</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Section V3 - Vision Smart City (3 ans)
function V3Section() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      ref={ref}
      data-section="solution-v3"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-20 sm:py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Glow effect futuriste */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 to-blue-300/10 rounded-full blur-3xl" />

      {/* Grille ultra-subtile */}
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

      <div className="relative container mx-auto px-4 sm:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 rounded-full text-sm font-medium mb-6"
        >
            <Sparkles className="w-4 h-4" />
            <span>3 ans après MVP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight leading-[1.1]"
                >
            V3 - La Ville Intelligente
          </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
                >
            La ville de demain, connectée, intelligente et participative
                </motion.p>
        </motion.div>

        {/* Timeline horizontale complète */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Ligne de timeline */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 transform -translate-y-1/2" />
            
            {/* Points de timeline */}
            <div className="relative flex items-center justify-between">
              <div className="relative z-10 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-blue-500 shadow-md sm:shadow-lg">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-light text-blue-800 mb-0.5">Juillet 2026</div>
                  <div className="text-xs sm:text-sm text-gray-600">MVP</div>
                </div>
              </div>
              <div className="relative z-10 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-blue-800 shadow-md sm:shadow-lg">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-light text-blue-800 mb-0.5">2027-2028</div>
                  <div className="text-xs sm:text-sm text-gray-600">V2</div>
                </div>
              </div>
              <div className="relative z-10 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-blue-600 shadow-md sm:shadow-lg">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-light text-blue-600 mb-0.5">2029-2030</div>
                  <div className="text-xs sm:text-sm text-gray-600">V3</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* KPI Cards V3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          {v3KPIs.map((kpi, index) => (
            <motion.div
              key={kpi.id}
                  initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/50 p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${kpi.color} text-white mb-2 sm:mb-3`}>
                <kpi.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className={`text-xl sm:text-2xl font-light bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent mb-1.5 sm:mb-2`}>
                {kpi.value.includes('million') ? (
                  <>
                    <AnimatedCounter value="1" /> million
                  </>
                ) : (
                  kpi.value
                )}
              </div>
              <p className="text-[10px] sm:text-xs text-gray-600 font-light leading-relaxed mb-1.5">
                {kpi.label}
              </p>
              <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-gray-500 font-extralight">
                <ArrowRight className="w-3 h-3" />
                <span>{kpi.comparison}</span>
              </div>
              <div className={`text-[10px] sm:text-xs font-medium bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent mt-1`}>
                {kpi.growth}
              </div>
        </motion.div>
          ))}
        </motion.div>

        {/* Comparaison visuelle V2 → V3 */}
        <V2V3ComparisonSection isInView={isInView} />

        {/* Technologies de pointe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8 text-center">
            Technologies de pointe
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {v3Technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/50 p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-100 text-gray-700 mb-2">
                  <tech.icon className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
                <div className="text-xs sm:text-sm text-gray-500 font-light mb-0.5">{tech.category}</div>
                <h4 className="text-sm sm:text-base font-light text-gray-900 mb-1.5">{tech.name}</h4>
                <p className="text-[10px] sm:text-xs text-gray-600 font-light leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision 2030 - Scénarios d'utilisation quotidiens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <h3 className="text-xl sm:text-2xl font-light text-gray-900">
              Vision 2030 - Une journée dans la Smart City
            </h3>
          </div>
          
          {/* Timeline d'une journée améliorée */}
          <div className="relative mb-8 sm:mb-12">
            <div className="flex items-center justify-between max-w-5xl mx-auto px-4 sm:px-6">
              {/* Ligne de timeline de fond */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200/50 rounded-full transform -translate-y-1/2" />
              
              {/* Ligne de progression */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 rounded-full transform -translate-y-1/2" />
              
              {/* Points de timeline */}
              {[
                { time: '07h00', label: 'Matin', icon: Sun, color: 'from-blue-700 to-blue-500', bgColor: 'from-blue-50 to-blue-100' },
                { time: '09h00', label: 'Transport', icon: Car, color: 'from-blue-800 to-blue-600', bgColor: 'from-blue-50 to-blue-100' },
                { time: '14h00', label: 'Gouvernance', icon: Vote, color: 'from-blue-800 to-blue-600', bgColor: 'from-blue-50 to-blue-50' },
                { time: '20h00', label: 'Soirée', icon: Network, color: 'from-blue-600 to-blue-400', bgColor: 'from-blue-50 to-blue-100' }
              ].map((point, index) => (
                <div
                  key={index}
                  className="relative z-10 flex flex-col items-center group cursor-pointer"
                >
                  {/* Point principal avec icône */}
                  <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${point.color} border-2 border-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    
                    {/* Effet de brillance au hover */}
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  
                  {/* Badge avec heure */}
                  <div className={`mt-3 px-2.5 py-1 rounded-full bg-gradient-to-r ${point.bgColor} border border-gray-200/50 shadow-sm`}>
                    <div className="text-xs sm:text-sm font-medium text-gray-900">{point.time}</div>
                  </div>
                  
                  {/* Label */}
                  <div className="mt-1.5 text-[10px] sm:text-xs font-light text-gray-500">
                    {point.label}
                  </div>
                  
                  {/* Ligne de connexion vers le point */}
                  <div className={`absolute top-1/2 left-1/2 w-0.5 h-6 sm:h-8 bg-gradient-to-b ${point.color} opacity-30 transform -translate-x-1/2 -translate-y-full`} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Scénarios */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Scénario 1 : Matin intelligent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-xl sm:rounded-2xl border border-blue-200/50 p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              {/* Effet de lumière animé */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 text-white shadow-lg">
                    <Sun className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-light text-gray-500 mb-1">07h00</div>
                    <h4 className="text-lg sm:text-xl font-light text-gray-900">
                      Matin intelligent
                    </h4>
                  </div>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600 font-light mb-4 leading-relaxed">
                  Réveil intelligent : votre app vous informe de la qualité de l'air, des événements du jour, et optimise votre trajet matinal en temps réel.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-xs text-gray-600 font-light">Qualité de l'air en temps réel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-xs text-gray-600 font-light">Optimisation automatique du trajet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-xs text-gray-600 font-light">Suggestions d'événements personnalisés</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Scénario 2 : Transport optimisé */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 2.3 }}
              className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-xl sm:rounded-2xl border border-blue-200/50 p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-300/30 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-800 to-blue-600 text-white shadow-lg">
                    <Car className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-light text-gray-500 mb-1">09h00</div>
                    <h4 className="text-lg sm:text-xl font-light text-gray-900">
                      Transport optimisé
                    </h4>
                  </div>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600 font-light mb-4 leading-relaxed">
                  Mobilité intelligente : covoiturage connecté, transports en commun adaptatifs, et navigation AR pour une expérience fluide et écologique.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-800 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-xs text-gray-600 font-light">Covoiturage intelligent avec matching IA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-800 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-xs text-gray-600 font-light">Navigation AR en temps réel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-800 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-xs text-gray-600 font-light">Optimisation du trafic en temps réel</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Scénario 3 : Gouvernance participative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-xl sm:rounded-2xl border border-blue-200/50 p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-300/30 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-800 to-blue-600 text-white shadow-lg">
                    <Vote className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-light text-gray-500 mb-1">14h00</div>
                    <h4 className="text-lg sm:text-xl font-light text-gray-900">
                      Gouvernance participative
                    </h4>
                  </div>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600 font-light mb-4 leading-relaxed">
                  Démocratie directe : votez sur les projets locaux, participez aux budgets participatifs, et influencez les décisions de votre ville en temps réel.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-800 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-xs text-gray-600 font-light">Votes en ligne sécurisés par blockchain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-800 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-xs text-gray-600 font-light">Budgets participatifs transparents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-800 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-xs text-gray-600 font-light">Consultations publiques digitales</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Scénario 4 : Vie connectée */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-xl sm:rounded-2xl border border-blue-200/50 p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-lg">
                    <Network className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-light text-gray-500 mb-1">20h00</div>
                    <h4 className="text-lg sm:text-xl font-light text-gray-900">
                      Vie connectée
                    </h4>
                  </div>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600 font-light mb-4 leading-relaxed">
                  Communauté intelligente : connexions sociales renforcées, événements locaux personnalisés, et écosystème d'acteurs locaux interconnectés.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-xs text-gray-600 font-light">Réseau social local intelligent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-xs text-gray-600 font-light">Recommandations d'événements par IA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-xs text-gray-600 font-light">Écosystème de 50 000+ acteurs locaux</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

// Section Features principales - Style produit avec maquettes
function MainFeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="relative container mx-auto px-4 sm:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight leading-[1.1]"
          >
            Découvrez{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent font-normal">
              Yunicity
            </span>
          </motion.h2>
          <motion.p
                  initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
          >
            Trois fonctionnalités principales qui reconnectent les habitants à leur ville
          </motion.p>
        </motion.div>

        {/* Features avec maquettes */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className={`grid md:grid-cols-2 gap-8 sm:gap-12 items-center`}
              >
                {/* Contenu texte */}
                <div className={`${!isEven ? 'md:order-2' : ''}`}>
                  {/* Badge unique */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                    className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200"
                  >
                    <Sparkles className="w-4 h-4 text-blue-800" />
                    <span className="text-xs sm:text-sm font-medium text-blue-800">
                      {feature.unique}
                    </span>
                  </motion.div>

                  {/* Icône + Titre */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light mb-6">
                    {feature.description}
                  </p>

                  {/* Bénéfices */}
                  <ul className="space-y-3 mb-6">
                    {feature.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.2 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} />
                        <span className="text-sm sm:text-base text-gray-700 font-light">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Maquette visuelle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  className={`${!isEven ? 'md:order-1' : ''} relative`}
                >
                  {/* Mockup phone frame */}
                  <div className="relative mx-auto max-w-[280px] sm:max-w-[360px] lg:max-w-none overflow-hidden">
                    {/* Phone frame */}
                    <div className="relative bg-gray-900 rounded-[2.5rem] p-2 sm:p-3 shadow-2xl">
                      {/* Screen */}
                      <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                        {/* Mockup image */}
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${feature.mockupImage})`,
                          }}
                        />
                        {/* Overlay gradient pour effet app */}
                        <div className={`absolute inset-0 bg-gradient-to-b ${feature.color} opacity-20`} />
                        
                        {/* Mockup content overlay */}
                        <div className="absolute inset-0 p-6 flex flex-col">
                          {/* Status bar mockup */}
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex gap-1">
                              <div className="w-1 h-1 bg-white/80 rounded-full" />
                              <div className="w-1 h-1 bg-white/80 rounded-full" />
                              <div className="w-1 h-1 bg-white/60 rounded-full" />
                            </div>
                            <div className="text-white/90 text-[10px] font-medium">9:41</div>
                            <div className="flex gap-1">
                              <div className="w-4 h-2 border border-white/80 rounded-sm" />
                              <div className="w-1 h-1 bg-white/80 rounded-full" />
                            </div>
                          </div>

                          {/* App content mockup */}
                          <div className="flex-1 flex flex-col justify-center items-center text-white">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-4 flex items-center justify-center shadow-lg`}>
                              <Icon className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                            <p className="text-xs text-center text-white/80 px-4">
                              {feature.description.split('.')[0]}.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 blur-3xl -z-10`} />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function SolutionSection() {
  return (
    <>
      <SolutionHeroSection />
      <MVPSection />
      <V2Section />
      <V3Section />
    </>
  )
}
