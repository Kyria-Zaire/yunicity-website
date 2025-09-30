'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts'
import {
  TrendingUp,
  Users,
  Euro,
  Globe,
  Target,
  Zap,
  Crown,
  Building,
  Smartphone
} from 'lucide-react'

// Données pour les graphiques - MISE À JOUR 2026
const revenueProjection = [
  { year: '2025', revenue: 0, users: 0 },
  { year: '2026', revenue: 120000, users: 12000 },
  { year: '2027', revenue: 450000, users: 45000 },
  { year: '2028', revenue: 1200000, users: 120000 },
  { year: '2029', revenue: 3000000, users: 250000 },
  { year: '2030', revenue: 5000000, users: 400000 }
]

const businessModel = [
  { name: 'Freemium', value: 40, revenue: '2M€', color: '#8B5CF6' },
  { name: 'B2B Partenaires', value: 35, revenue: '1.75M€', color: '#3B82F6' },
  { name: 'Publicité Locale', value: 20, revenue: '1M€', color: '#10B981' },
  { name: 'Événements', value: 5, revenue: '0.25M€', color: '#F59E0B' }
]

const marketSize = [
  { segment: 'TAM', size: 50, label: 'Marché Total', description: '50M€ - France entière' },
  { segment: 'SAM', size: 15, label: 'Marché Adressable', description: '15M€ - Villes moyennes' },
  { segment: 'SOM', size: 5, label: 'Marché Atteignable', description: '5M€ - Grand Est' }
]

const competitionData = [
  { name: 'Apps Mairie', market: 15, innovation: 20, color: '#EF4444' },
  { name: 'Facebook Groups', market: 80, innovation: 30, color: '#F97316' },
  { name: 'Nextdoor', market: 25, innovation: 60, color: '#EAB308' },
  { name: 'YUNICITY', market: 5, innovation: 95, color: '#8B5CF6' }
]

// Composant pour les métriques animées
function MetricCard({ 
  icon: Icon, 
  value, 
  suffix, 
  label, 
  description, 
  color,
  delay = 0 
}: {
  icon: any
  value: number
  suffix: string
  label: string
  description: string
  color: string
  delay?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / 2000, 1)
        setCount(Math.floor(progress * value))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 group-hover:border-white/30 transition-all duration-300">
        
        <div className="flex items-center justify-between mb-6">
          <motion.div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.div
            className="text-right"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.5 }}
          >
            <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${color}`}>
              {count}{suffix}
            </div>
            <div className="text-white/60 text-sm">Objectif 2030</div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{label}</h3>
        <p className="text-white/70 leading-relaxed">{description}</p>

        <motion.div
          className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={isInView ? { width: '100%' } : {}}
          transition={{ duration: 1, delay: delay + 0.8 }}
        >
          <motion.div
            className={`h-full bg-gradient-to-r ${color} rounded-full`}
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : {}}
            transition={{ duration: 1.5, delay: delay + 1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

// Graphique de croissance revenue
function RevenueChart() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1 }}
      className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8"
    >
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-white mb-4">Projection de Revenus</h3>
        <p className="text-white/70 text-lg">Croissance exponentielle sur 5 ans - Lancement MVP Mars 2026</p>
      </div>

      <div className="h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueProjection}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="year" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'white', fontSize: 14 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'white', fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000000}M€`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '12px',
                color: 'white'
              }}
              formatter={(value: any) => [`${(value / 1000000).toFixed(1)}M€`, 'Revenus']}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#8B5CF6" 
              strokeWidth={3}
              fill="url(#revenueGradient)"
              dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-6 text-center">
        <div className="p-4 bg-white/10 rounded-xl">
          <div className="text-2xl font-bold text-purple-400">5M€</div>
          <div className="text-white/70 text-sm">ARR 2030</div>
        </div>
        <div className="p-4 bg-white/10 rounded-xl">
          <div className="text-2xl font-bold text-blue-400">400K</div>
          <div className="text-white/70 text-sm">Utilisateurs</div>
        </div>
        <div className="p-4 bg-white/10 rounded-xl">
          <div className="text-2xl font-bold text-green-400">85%</div>
          <div className="text-white/70 text-sm">Marge Brute</div>
        </div>
      </div>
    </motion.div>
  )
}

// Business Model breakdown
function BusinessModelChart() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
      className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8"
    >
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-white mb-4">Sources de Revenus</h3>
        <p className="text-white/70 text-lg">Modèle diversifié et récurrent</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={businessModel}
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={40}
                paddingAngle={5}
                dataKey="value"
              >
                {businessModel.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '12px',
                  color: 'white'
                }}
                formatter={(value: any, name: any) => [`${value}%`, name]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          {businessModel.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10"
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-white font-medium">{item.name}</span>
              </div>
              <div className="text-right">
                <div className="text-white font-bold">{item.revenue}</div>
                <div className="text-white/60 text-sm">{item.value}%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20">
        <h4 className="text-xl font-bold text-white mb-4">Stratégie de Monétisation</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <Crown className="w-4 h-4 text-purple-400 mt-0.5" />
              <div>
                <div className="text-purple-300 font-semibold">Freemium Premium</div>
                <div className="text-white/70">4,99€/mois • Fonctionnalités avancées</div>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Building className="w-4 h-4 text-blue-400 mt-0.5" />
              <div>
                <div className="text-blue-300 font-semibold">B2B Partenaires</div>
                <div className="text-white/70">Commission 5-15% • Visibilité premium</div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <Target className="w-4 h-4 text-green-400 mt-0.5" />
              <div>
                <div className="text-green-300 font-semibold">Publicité Locale</div>
                <div className="text-white/70">CPM géolocalisé • ROI mesurable</div>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Zap className="w-4 h-4 text-yellow-400 mt-0.5" />
              <div>
                <div className="text-yellow-300 font-semibold">Événements</div>
                <div className="text-white/70">Billetterie • Sponsoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Analyse de la concurrence
function CompetitionAnalysis() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8"
    >
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-white mb-4">Positionnement Concurrentiel</h3>
        <p className="text-white/70 text-lg">Innovation vs Part de marché</p>
      </div>

      <div className="h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={competitionData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'white', fontSize: 12 }}
            />
            <YAxis 
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'white', fontSize: 12 }}
              width={100}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '12px',
                color: 'white'
              }}
            />
            <Bar dataKey="innovation" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {competitionData.map((competitor, index) => (
          <motion.div
            key={competitor.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`p-4 rounded-xl border ${
              competitor.name === 'YUNICITY' 
                ? 'bg-purple-500/20 border-purple-500/50' 
                : 'bg-white/5 border-white/10'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium text-sm">{competitor.name}</span>
              {competitor.name === 'YUNICITY' && (
                <Crown className="w-4 h-4 text-purple-400" />
              )}
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-white/60">Innovation</span>
                <span className="text-white">{competitor.innovation}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Marché</span>
                <span className="text-white">{competitor.market}%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function MarcheSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <section 
      ref={ref}
      className="relative min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />
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
            className="inline-block px-6 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 font-semibold text-sm tracking-wider uppercase mb-6"
          >
            MARCHÉ & BUSINESS
          </motion.span>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8">
            Un Marché de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">
              MILLIARDS
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
            Le marché des applications locales explose. 
            <br className="hidden lg:block" />
            <span className="text-purple-300 font-semibold">Yunicity</span> est positionnée pour en capturer une part significative.
          </p>
        </motion.div>

        {/* Métriques principales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <MetricCard
            icon={Euro}
            value={5}
            suffix="M€"
            label="Revenus Objectif"
            description="ARR projeté en 2030 avec une croissance soutenue et une expansion territoriale progressive"
            color="from-purple-500 to-blue-500"
            delay={0.2}
          />
          
          <MetricCard
            icon={Users}
            value={400}
            suffix="K"
            label="Utilisateurs Actifs"
            description="Base d'utilisateurs cible sur le Grand Est, avec un taux d'engagement premium"
            color="from-blue-500 to-green-500"
            delay={0.4}
          />
          
          <MetricCard
            icon={Globe}
            value={50}
            suffix="+"
            label="Villes Connectées"
            description="Réseau territorial dense couvrant les principales agglomérations françaises"
            color="from-green-500 to-purple-500"
            delay={0.6}
          />
        </div>

        {/* Graphique de revenus */}
        <div className="mb-20">
          <RevenueChart />
        </div>

        {/* Business Model */}
        <div className="mb-20">
          <BusinessModelChart />
        </div>

        {/* Analyse concurrentielle */}
        <div className="mb-20">
          <CompetitionAnalysis />
        </div>

        {/* TAM SAM SOM */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold text-white mb-12">Taille du Marché</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {marketSize.map((market, index) => (
              <motion.div
                key={market.segment}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 h-full">
                  <div className={`text-6xl font-black mb-4 text-transparent bg-clip-text ${
                    index === 0 ? 'bg-gradient-to-r from-red-400 to-orange-400' :
                    index === 1 ? 'bg-gradient-to-r from-blue-400 to-purple-400' :
                    'bg-gradient-to-r from-green-400 to-blue-400'
                  }`}>
                    {market.size}M€
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{market.label}</h4>
                  <p className="text-white/70 leading-relaxed">{market.description}</p>
                  
                  <div className="mt-6">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          index === 0 ? 'bg-gradient-to-r from-red-400 to-orange-400' :
                          index === 1 ? 'bg-gradient-to-r from-blue-400 to-purple-400' :
                          'bg-gradient-to-r from-green-400 to-blue-400'
                        }`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${100 - index * 30}%` } : {}}
                        transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 p-8 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 backdrop-blur-xl rounded-3xl border border-white/20 max-w-4xl mx-auto"
          >
            <h4 className="text-2xl font-bold text-white mb-4">Opportunité d'Investissement</h4>
            <p className="text-lg text-white/80 leading-relaxed">
              Avec un marché addressable de <span className="text-purple-300 font-semibold">15M€</span> et 
              une stratégie d'expansion progressive, Yunicity représente une opportunité unique 
              de créer le <span className="text-blue-300 font-semibold">leader européen</span> des 
              applications de communauté locale.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}