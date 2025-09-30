'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

// Composant pour les statistiques animées
function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }
      
      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

// Données pour les graphiques
const isolationData = [
  { name: '18-25 ans', value: 65, color: '#EF4444' },
  { name: '26-35 ans', value: 58, color: '#F97316' },
  { name: '36-50 ans', value: 45, color: '#EAB308' },
  { name: '50+ ans', value: 35, color: '#22C55E' }
]

const communicationData = [
  { category: 'Voisins connus', percentage: 20, color: '#8B5CF6' },
  { category: 'Voisins inconnus', percentage: 80, color: '#EF4444' }
]

const appUsageData = [
  { name: 'Facebook', usage: 85 },
  { name: 'Instagram', usage: 75 },
  { name: 'Leboncoin', usage: 60 },
  { name: 'Apps Mairie', usage: 25 },
  { name: 'WhatsApp', usage: 90 },
  { name: 'Maps', usage: 95 }
]

// Composant pour les cartes statistiques
function StatCard({ 
  number, 
  suffix, 
  title, 
  subtitle, 
  icon, 
  color,
  delay = 0 
}: {
  number: number
  suffix: string
  title: string
  subtitle: string
  icon: string
  color: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 group-hover:border-white/30 transition-all duration-300" />
      <div className="relative p-8 text-center">
        
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
          className={`text-6xl mb-4 filter drop-shadow-lg`}
        >
          {icon}
        </motion.div>

        {/* Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
          className={`text-6xl lg:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br ${color}`}
        >
          <AnimatedCounter end={number} suffix={suffix} />
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.6 }}
          className="text-2xl font-bold text-white mb-2"
        >
          {title}
        </motion.h3>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.8 }}
          className="text-white/70 text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.02 }}
        />
      </div>
    </motion.div>
  )
}

// Graphique interactif
function InteractiveChart() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedData, setSelectedData] = useState(appUsageData[0])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1 }}
      className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-8"
    >
      <h4 className="text-2xl font-bold text-white mb-6 text-center">
        Fragmentation des Applications
      </h4>
      
      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={appUsageData}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'white', fontSize: 12 }}
            />
            <YAxis hide />
            <Bar 
              dataKey="usage" 
              fill="url(#gradient)"
              radius={[4, 4, 0, 0]}
              onMouseEnter={(data) => setSelectedData(data)}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center text-white/80">
        <p className="text-lg">
          <span className="font-bold text-purple-300">{selectedData.usage}%</span> des utilisateurs
          utilisent <span className="font-semibold">{selectedData.name}</span>
        </p>
      </div>
    </motion.div>
  )
}

export default function ProblemeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section 
      ref={ref}
      className="relative min-h-screen py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
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
            className="inline-block px-6 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 font-semibold text-sm tracking-wider uppercase mb-6"
          >
            PROBLÉMATIQUE MAJEURE
          </motion.span>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8">
            Un Problème de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              SOCIÉTÉ
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
            L'isolement urbain n'est pas qu'une statistique. 
            <br className="hidden lg:block" />
            C'est une <span className="text-red-300 font-semibold">crise sociale</span> qui touche des millions de Français.
          </p>
        </motion.div>

        {/* Stats principales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <StatCard
            number={34}
            suffix="M"
            title="Français Isolés"
            subtitle="50% de la population se sent déconnectée de sa communauté locale"
            icon="😔"
            color="from-red-400 to-orange-500"
            delay={0.2}
          />
          
          <StatCard
            number={80}
            suffix="%"
            title="Voisins Inconnus"
            subtitle="4 Français sur 5 ne connaissent pas leurs voisins"
            icon="🏠"
            color="from-orange-400 to-yellow-500"
            delay={0.4}
          />
          
          <StatCard
            number={15}
            suffix="+"
            title="Apps Différentes"
            subtitle="Pour s'informer localement, les habitants jonglent entre de multiples applications"
            icon="📱"
            color="from-yellow-400 to-red-500"
            delay={0.6}
          />
        </div>

        {/* Graphique interactif */}
        <div className="mb-20">
          <InteractiveChart />
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Résultat ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <p className="text-white/80 text-lg">Perte du lien social local</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <p className="text-white/80 text-lg">Information locale éparpillée</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <p className="text-white/80 text-lg">Commerces locaux invisibles</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <p className="text-white/80 text-lg">Événements locaux ratés</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <p className="text-white/80 text-lg">Sentiment d'appartenance faible</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <p className="text-white/80 text-lg">Opportunités locales manquées</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}