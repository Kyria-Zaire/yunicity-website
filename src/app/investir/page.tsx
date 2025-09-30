'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  TrendingUp, 
  Users, 
  Euro, 
  Target,
  Rocket,
  Building,
  Globe,
  Award,
  Download,
  Mail,
  Calendar,
  CheckCircle,
  ArrowLeft,
  ChevronRight,
  Crown
} from 'lucide-react'
import Link from 'next/link'

export default function InvestirPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    investmentRange: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const investmentRanges = [
    { id: '50k-100k', label: '50K - 100K €' },
    { id: '100k-250k', label: '100K - 250K €' },
    { id: '250k-500k', label: '250K - 500K €' },
    { id: '500k+', label: '500K+ €' }
  ]

  const keyMetrics = [
    {
      icon: Euro,
      value: '5M€',
      label: 'ARR Objectif 2030',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Users,
      value: '400K',
      label: 'Utilisateurs cibles',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      value: '85%',
      label: 'Marge brute',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Villes connectées',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const investmentBenefits = [
    'Entrée au capital de la société',
    'Participation aux décisions stratégiques',
    'Reporting mensuel détaillé',
    'Accès privilégié aux metrics clés',
    'Réseau d\'investisseurs co-investisseurs',
    'Exit potentiel sous 5-7 ans'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'investor',
          subject: `Demande d'investissement - ${formData.investmentRange}`
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi')
      }
      
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 text-center max-w-lg"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          
          <h1 className="text-4xl font-bold text-white mb-6">Demande Envoyée ! 🚀</h1>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Merci <span className="text-green-300 font-semibold">{formData.name}</span> !
            <br />Notre équipe vous contactera sous 48h pour planifier un rendez-vous.
          </p>
          
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold text-lg shadow-lg"
            >
              Retour à l'accueil
            </motion.button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative container mx-auto px-6 py-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Link href="/" className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l'accueil</span>
          </Link>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 border border-purple-500/30 rounded-full text-purple-300 font-semibold text-sm tracking-wider uppercase mb-8"
          >
            <Crown className="w-4 h-4" />
            <span>OPPORTUNITÉ D'INVESTISSEMENT</span>
            <Rocket className="w-4 h-4" />
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
            Investissez dans
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">
              L'AVENIR LOCAL
            </span>
          </h1>
          
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Rejoignez notre levée de fonds Seed et participez à la création du
            <br className="hidden lg:block" />
            <span className="text-purple-300 font-semibold">leader européen des applications de communauté locale</span>.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center"
            >
              <motion.div
                className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <metric.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div className={`text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-white/70">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Why Invest Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Pourquoi Investir dans Yunicity ?</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">🎯 Marché Énorme & Inexploité</h3>
                  <p className="text-white/80 leading-relaxed">
                    Le marché des applications locales en France représente <strong>15M€ adressables</strong> avec 
                    une croissance de 25% par an. Nous ciblons les villes moyennes (50K-200K habitants) 
                    totalement sous-servies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">🚀 Équipe d'Excellence</h3>
                  <p className="text-white/80 leading-relaxed">
                    5 co-fondateurs complémentaires avec expertise en tech, finance, créatif, growth et leadership. 
                    Vision claire, roadmap détaillée, premiers partenaires signés.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-300 mb-3">💰 Business Model Prouvé</h3>
                  <p className="text-white/80 leading-relaxed">
                    4 sources de revenus diversifiées : Freemium (40%), B2B (35%), Publicité (20%), Événements (5%). 
                    Marge brute de 85% et CAC/LTV ratio de 1:5.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-orange-300 mb-3">📈 Traction Pré-lancement</h3>
                  <p className="text-white/80 leading-relaxed">
                    2,847 inscrits sur la waitlist, 15 partenaires locaux signés à Reims, 
                    validation du besoin par 120+ interviews utilisateurs.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20 p-6">
                <h4 className="text-lg font-bold text-white mb-4">Avantages Investisseurs</h4>
                <div className="space-y-2">
                  {investmentBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 text-white/80">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Investment Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Demande de Rendez-vous</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/80 font-medium mb-2">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400"
                    placeholder="jean@fonds-investissement.com"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-medium mb-2">Société / Fonds</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400"
                    placeholder="Nom de votre société"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-medium mb-2">Ticket d'investissement *</label>
                  <select
                    required
                    value={formData.investmentRange}
                    onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="" disabled>Sélectionnez un montant</option>
                    {investmentRanges.map((range) => (
                      <option key={range.id} value={range.label}>{range.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 resize-none"
                    placeholder="Parlez-nous de votre intérêt..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold text-lg disabled:opacity-50 hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg flex items-center justify-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'loading' ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Envoi...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>Planifier un Rendez-vous</span>
                    </>
                  )}
                </motion.button>

                <div className="flex items-center space-x-2 text-sm text-white/60">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Réponse sous 48h • Confidentialité garantie</span>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a 
                  href="/pitch-deck-yunicity.pdf" 
                  download
                  className="flex items-center justify-center space-x-2 text-white/70 hover:text-white transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger le Pitch Deck</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
