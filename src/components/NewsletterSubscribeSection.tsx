'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Check, ArrowRight, MapPin, Newspaper, Brain, Users, Rocket, Map } from 'lucide-react'

// Piliers du concept Smart City
const smartCityPillars = [
  {
    id: 1,
    title: 'Géolocalisation',
    subtitle: 'Carte 3D interactive (30%)',
    description: 'Exploration de la ville en 3D. Cartographie interactive pour découvrir les lieux, événements et acteurs locaux géolocalisés.',
    icon: MapPin,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Information locale',
    subtitle: 'Hub centralisé (30%)',
    description: 'Toute l\'information locale au même endroit. Actualités, événements, initiatives filtrées et vérifiées pour votre territoire.',
    icon: Newspaper,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Intelligence artificielle',
    subtitle: 'Personnalisation',
    description: 'L\'IA filtre et personnalise le contenu selon vos intérêts et votre localisation. Vous découvrez ce qui compte vraiment pour vous.',
    icon: Brain,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    title: 'Engagement citoyen',
    subtitle: 'Mur communautaire (40%)',
    description: 'Création de lien social local. Tribus, événements, challenges et mobilisations pour reconnecter les habitants entre eux.',
    icon: Users,
    color: 'from-green-500 to-emerald-500'
  }
]

// Timeline vers Smart City
const timelineSteps = [
  {
    id: 1,
    title: 'Beta Reims',
    period: 'Juillet 2026',
    description: 'Lancement MVP à Reims avec les pionniers. Test de l\'outil Smart City en conditions réelles.',
    status: 'upcoming',
    icon: Rocket,
    color: 'from-purple-500 to-blue-500'
  },
  {
    id: 2,
    title: 'Expansion France',
    period: '2026-2027',
    description: 'Déploiement dans 10+ villes françaises. Réplication du modèle Smart City à l\'échelle nationale.',
    status: 'upcoming',
    icon: Map,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'Smart City complète',
    period: '2027-2030',
    description: 'Yunicity devient l\'infrastructure digitale qui manquait aux villes françaises pour devenir vraiment "smart".',
    status: 'upcoming',
    icon: Check,
    color: 'from-green-500 to-emerald-500'
  }
]

export default function NewsletterSubscribeSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: email.split('@')[0] })
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        // Afficher un message selon si l'email a été envoyé
        if (data.emailSent === false) {
          setMessage('Inscription réussie ! Vous serez notifié(e) prochainement.')
        } else {
          setMessage('Inscription réussie ! Vérifiez votre boîte email (vérifiez aussi les spams).')
        }
        setEmail('')
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
          setShowForm(false)
        }, 5000)
      } else {
        setStatus('error')
        setMessage(data.error || 'Une erreur est survenue')
        // Afficher les détails en développement
        if (process.env.NODE_ENV === 'development' && data.details) {
          console.error('Détails erreur:', data.details)
        }
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5000)
      }
    } catch {
      setStatus('error')
      setMessage('Erreur de connexion')
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    }
  }

  const handleSubscribeClick = () => {
    setShowForm(true)
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  // Auto-complétion basique
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])

  useEffect(() => {
    const emailSuggestions = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com']
    
    if (email && email.includes('@') && !email.split('@')[1]?.includes('.')) {
      const domain = email.split('@')[1] || ''
      const filtered = emailSuggestions
        .filter(sug => sug.startsWith(domain.toLowerCase()))
        .map(sug => `${email.split('@')[0]}@${sug}`)
      
      if (filtered.length > 0 && email.split('@').length === 2) {
        setSuggestions(filtered)
        setShowSuggestions(true)
      } else {
        setShowSuggestions(false)
      }
    } else {
      setShowSuggestions(false)
    }
  }, [email])

  const selectSuggestion = (suggestion: string) => {
    setEmail(suggestion)
    setShowSuggestions(false)
    inputRef.current?.focus()
  }

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />

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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6"
            >
              <span className="text-purple-400 text-xs font-light">BIENTÔT</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-6 tracking-tight leading-[1.1]"
            >
              Yunicity = un futur{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
                outil Smart City
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto"
            >
              Yunicity, la couche sociale et citoyenne de la Smart City.
            </motion.p>
          </motion.div>

          {/* Piliers du concept */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {smartCityPillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-light text-white mb-1">{pillar.title}</h3>
                  <p className="text-sm text-purple-400 font-light mb-3">{pillar.subtitle}</p>
                  <p className="text-gray-400 font-light leading-relaxed text-sm">{pillar.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-xl sm:text-2xl font-light text-white mb-8 text-center">
              Vers la{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
                Smart City
              </span>
            </h3>
            
            <div className="relative">
              {/* Ligne de timeline */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 opacity-30 hidden md:block" />
              
              <div className="space-y-8">
                {timelineSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="relative flex items-start gap-6 pl-4 md:pl-0"
                    >
                      {/* Point sur la ligne */}
                      <div className={`absolute left-6 md:left-7 w-3 h-3 rounded-full bg-gradient-to-br ${step.color} border-2 border-black z-10 hidden md:block`} />
                      
                      {/* Carte */}
                      <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-white/20 transition-all duration-300">
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-lg font-light text-white">{step.title}</h4>
                              <span className="px-1.5 py-0.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-[7px] font-light">
                                {step.period}
                              </span>
                            </div>
                            <p className="text-gray-400 font-light text-xs leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* CTA pour afficher le formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <motion.button
              onClick={handleSubscribeClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-full text-sm font-light transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
            >
              <Mail className="w-4 h-4" />
              Rejoindre la révolution Smart City
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Formulaire d'inscription */}
          <AnimatePresence>
            {showForm && (
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12"
              >
                <div className="max-w-2xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center mb-8"
                    >
                    <h3 className="text-xl sm:text-2xl font-light text-white mb-3">
                      Rejoignez la révolution Smart City
                    </h3>
                    <p className="text-gray-400 font-light text-sm">
                      Soyez parmi les premiers à découvrir comment Yunicity transforme Reims en ville intelligente
                    </p>
                    <p className="text-gray-500 font-light text-xs mt-2">
                      540+ pionniers nous ont déjà rejoints
                    </p>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="relative">
                    {/* Input */}
                      <div className="relative">
                      <div
                        className={`absolute inset-0 border-b-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isFocused
                            ? 'border-white scale-x-100'
                            : status === 'success'
                            ? 'border-green-500 scale-x-100'
                            : status === 'error'
                            ? 'border-red-500 scale-x-100'
                            : 'border-gray-700 scale-x-50'
                        }`}
                      />
                      <div className="relative flex items-center gap-4 pb-4">
                        <Mail className={`w-5 h-5 transition-all duration-500 ${
                          isFocused ? 'text-white' : 'text-gray-600'
                        }`} />
                        <input
                          ref={inputRef}
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => {
                            setIsFocused(false)
                            setTimeout(() => setShowSuggestions(false), 200)
                          }}
                          placeholder="votre@email.com"
                          required
                          disabled={status === 'loading' || status === 'success'}
                          className="flex-1 bg-transparent text-white text-base placeholder:text-gray-600 focus:outline-none font-light tracking-tight disabled:opacity-50"
                        />
                        <motion.button
                          type="submit"
                          disabled={status === 'loading' || status === 'success' || !email}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${
                            email && status === 'idle'
                              ? 'bg-white text-black'
                              : status === 'success'
                              ? 'bg-green-500 text-white'
                              : status === 'error'
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-800 text-gray-600'
                          } disabled:cursor-not-allowed disabled:opacity-50`}
                        >
                          <AnimatePresence mode="wait">
                            {status === 'loading' ? (
                              <motion.div
                                key="loading"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                              />
                            ) : status === 'success' ? (
                              <motion.div
                                key="success"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                              >
                                <Check className="w-5 h-5" />
                              </motion.div>
                            ) : (
                              <motion.div
                                key="arrow"
                                initial={{ x: -5, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 5, opacity: 0 }}
                              >
                                <ArrowRight className="w-5 h-5" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      </div>
                    </div>

                    {/* Suggestions auto-complétion */}
                    <AnimatePresence>
                      {showSuggestions && suggestions.length > 0 && (
                    <motion.div
                          initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden shadow-2xl z-10"
                        >
                          {suggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => selectSuggestion(suggestion)}
                              className="w-full px-6 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors text-sm font-light"
                            >
                              {suggestion}
                            </button>
                          ))}
                    </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Message de statut */}
                    <AnimatePresence>
                      {message && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className={`mt-4 text-sm font-light ${
                            status === 'success' ? 'text-green-400' : 'text-red-400'
                          }`}
                      >
                        {message}
                      </motion.div>
                    )}
                      {status === 'success' && !message && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-4 text-sm font-light text-green-400"
                        >
                          Merci ! Vérifiez votre boîte de réception.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>

                  {/* Stats discrètes */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 flex items-center justify-center gap-6 text-gray-500 text-xs font-light"
                  >
                    <div className="text-center">
                      <div className="text-lg font-light text-white mb-1">540</div>
                      <div className="text-[10px]">abonnés</div>
                        </div>
                    <div className="w-px h-6 bg-gray-800" />
                    <div className="text-center">
                      <div className="text-lg font-light text-white mb-1">95%</div>
                      <div className="text-[10px]">taux d'ouverture</div>
                        </div>
                    <div className="w-px h-6 bg-gray-800" />
                    <div className="text-center">
                      <div className="text-lg font-light text-white mb-1">1x</div>
                      <div className="text-[10px]">par semaine</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
                )}
              </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
