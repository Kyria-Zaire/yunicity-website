'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { DollarSign, Calendar, BarChart3, Target, Zap, TrendingUp, Users, Building2, Award } from 'lucide-react'
import Image from 'next/image'

export default function InvestirHeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const [investmentAmount, setInvestmentAmount] = useState(50000)
  const [timeHorizon, setTimeHorizon] = useState(5)
  const [roi, setRoi] = useState(0)
  const [projectedValue, setProjectedValue] = useState(0)

  // Calcul du ROI basé sur un modèle de croissance
  useEffect(() => {
    // Modèle simplifié : croissance progressive
    // Seed: ~15-20% CAGR (taux de croissance annuel composé)
    const annualGrowthRate = 0.18 // 18% par an (réaliste pour une startup tech)
    const years = timeHorizon
    const growthMultiplier = Math.pow(1 + annualGrowthRate, years)
    const projected = investmentAmount * growthMultiplier
    const calculatedRoi = ((projected - investmentAmount) / investmentAmount) * 100
    
    setProjectedValue(projected)
    setRoi(calculatedRoi)
  }, [investmentAmount, timeHorizon])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(value)
  }

  const getRoiColor = () => {
    if (roi < 50) return 'from-gray-500 to-gray-600'
    if (roi < 100) return 'from-blue-800 to-blue-600'
    if (roi < 200) return 'from-blue-800 to-blue-600'
    return 'from-green-500 to-emerald-500'
  }

  const milestones = [
    { year: 1, label: 'Année 1', value: investmentAmount * Math.pow(1.18, 1) },
    { year: 2, label: 'Année 2', value: investmentAmount * Math.pow(1.18, 2) },
    { year: 3, label: 'Année 3', value: investmentAmount * Math.pow(1.18, 3) },
    { year: 4, label: 'Année 4', value: investmentAmount * Math.pow(1.18, 4) },
    { year: 5, label: 'Année 5', value: investmentAmount * Math.pow(1.18, 5) },
  ].filter(m => m.year <= timeHorizon)


  const heroStats = [
    { icon: TrendingUp, label: 'ARR Objectif 2030', value: '5M€', color: 'from-blue-800 to-blue-600' },
    { icon: Users, label: 'Utilisateurs cibles', value: '400K', color: 'from-blue-800 to-blue-600' },
    { icon: Award, label: 'Marge brute', value: '85%', color: 'from-green-500 to-emerald-500' },
    { icon: Building2, label: 'Villes connectées', value: '50+', color: 'from-orange-500 to-red-500' }
  ]

  return (
    <>
      {/* Hero avec image de fond */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1639117474926-9e22670f6bf8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
              alt="Ville moderne"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            {/* Overlay avec gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-800/20" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Titre */}
            <div className="mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight leading-[1.1]">
                Investissez dans{' '}
                <span className="text-blue-400 font-normal">
                  l'avenir local
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                Rejoignez notre levée de fonds Seed et participez à la création du leader européen des communautés locales
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {heroStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className={`text-2xl font-light mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-gray-400 font-light">{stat.label}                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Calculateur de ROI */}
    <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-blue-500/5 to-blue-400/5 rounded-full blur-3xl" />

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

        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
              initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
              className="text-center mb-16"
        >
              <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight leading-[1.1]"
          >
                Visualisez votre{' '}
                <span className="text-blue-400 font-normal">
                  retour sur investissement
            </span>
              </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto"
          >
                Calculez votre ROI potentiel avec notre simulateur interactif
          </motion.p>
        </motion.div>

          {/* ROI Calculator */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Calculateur */}
                <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              {/* Montant investi */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-white font-light text-base flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-blue-400" />
                    Montant investi
                  </label>
                  <span className="text-xl font-light text-white">
                    {formatCurrency(investmentAmount)}
                  </span>
                      </div>
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  step="5000"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, rgb(30, 64, 175) 0%, rgb(30, 64, 175) ${((investmentAmount - 10000) / (1000000 - 10000)) * 100}%, rgb(31, 41, 55) ${((investmentAmount - 10000) / (1000000 - 10000)) * 100}%, rgb(31, 41, 55) 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>10K€</span>
                  <span>1M€</span>
                      </div>
                    </div>

              {/* Horizon temporel */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-white font-light text-base flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    Horizon temporel
                  </label>
                  <span className="text-xl font-light text-white">
                    {timeHorizon} {timeHorizon > 1 ? 'années' : 'année'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={timeHorizon}
                  onChange={(e) => setTimeHorizon(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, rgb(59, 130, 246) 0%, rgb(59, 130, 246) ${((timeHorizon - 1) / (10 - 1)) * 100}%, rgb(31, 41, 55) ${((timeHorizon - 1) / (10 - 1)) * 100}%, rgb(31, 41, 55) 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1 an</span>
                  <span>10 ans</span>
                      </div>
                    </div>

              {/* Projection visuelle */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-light text-sm">Investissement initial</span>
                    <span className="text-white font-light text-sm">{formatCurrency(investmentAmount)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-light text-sm">Croissance annuelle</span>
                    <span className="text-green-400 font-light text-sm">18%</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <span className="text-white font-light text-base">Valeur projetée</span>
                    <motion.span
                      key={projectedValue}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-2xl font-light text-blue-400"
                    >
                      {formatCurrency(projectedValue)}
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Résultats visuels */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              {/* ROI Card */}
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full text-xs text-gray-400 mb-3">
                    <Target className="w-3.5 h-3.5" />
                    Retour sur investissement
                  </div>
                  <motion.div
                    key={roi}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`text-5xl sm:text-6xl font-light mb-3 bg-gradient-to-r ${getRoiColor()} bg-clip-text text-transparent`}
                  >
                    {roi.toFixed(0)}%
                  </motion.div>
                  <p className="text-gray-400 font-light text-sm">
                    Gain estimé : {formatCurrency(projectedValue - investmentAmount)}
                  </p>
                      </div>

                {/* Barre de progression */}
                <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    key={roi}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(roi / 3, 100)}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${getRoiColor()} rounded-full`}
                  />
                      </div>
                    </div>

              {/* Timeline de croissance */}
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                  <h3 className="text-white font-light text-lg">Projection de croissance</h3>
                </div>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => {
                    const progress = (milestone.value / projectedValue) * 100
                    const isLast = index === milestones.length - 1
                    return (
                      <div key={milestone.year} className="relative">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-gray-400 font-light text-xs">{milestone.label}</span>
                          <span className="text-white font-light text-sm">
                            {formatCurrency(milestone.value)}
                          </span>
                      </div>
                        <div className="relative h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                            className={`h-full bg-gradient-to-r ${
                              isLast ? 'from-blue-800 to-blue-600' : 'from-gray-600 to-gray-500'
                            } rounded-full`}
                          />
                      </div>
                      </div>
                    )
                  })}
                      </div>
                    </div>

              {/* Disclaimer */}
                      <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300 font-light text-xs leading-relaxed">
                      <strong className="text-white">Note importante :</strong> Cette projection est basée sur un modèle de croissance estimé (18% CAGR). Les résultats réels peuvent varier en fonction de nombreux facteurs. Consultez notre documentation complète pour plus de détails.
                    </p>
                  </div>
                  </div>
                </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
    </>
  )
}
