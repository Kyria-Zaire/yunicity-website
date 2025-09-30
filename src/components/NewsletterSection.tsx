'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  Mail, 
  Send, 
  Check, 
  AlertCircle,
  Bell,
  Gift,
  Zap,
  Users,
  Calendar,
  TrendingUp,
  Star,
  Crown,
  Smartphone,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Facebook,
  Globe,
  Rocket,
  Heart,
  Award,
  Target,
  MessageCircle
} from 'lucide-react'

// Réseaux sociaux avec stats - VRAIS LIENS YUNICITY
const socialNetworks = [
  {
    name: 'Instagram',
    icon: Instagram,
    handle: '@yunicity.app',
    followers: '2.4K',
    color: 'from-pink-500 to-orange-500',
    description: 'Découvertes locales & stories exclusives',
    link: 'https://www.instagram.com/yunicity.app?igsh=MWhzam53cm9kMGxtNQ=='
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    handle: 'Yunicity App',
    followers: '1.8K',
    color: 'from-blue-600 to-blue-700',
    description: 'Insights business & networking pro',
    link: 'https://www.linkedin.com/in/yunicity-app-381bb7230'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    handle: 'Yunicity Official',
    followers: '3.1K',
    color: 'from-blue-500 to-blue-700',
    description: 'Communauté & discussions locales',
    link: 'https://www.facebook.com/share/17FsREHfzM/'
  },
  {
    name: 'Email',
    icon: Mail,
    handle: 'yu.entreprise@gmail.com',
    followers: 'Contact',
    color: 'from-red-500 to-red-600',
    description: 'Contact direct avec l\'équipe',
    link: 'mailto:yu.entreprise@gmail.com'
  }
]

// Avantages newsletter immersifs
const premiumBenefits = [
  {
    icon: Crown,
    title: 'Accès VIP Exclusif',
    description: 'Testez Yunicity 30 jours avant tout le monde',
    value: '30 jours',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Gift,
    title: 'Pack Fondateur',
    description: 'Abonnement Premium gratuit à vie + goodies',
    value: '149€ offerts',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Target,
    title: 'Co-création',
    description: 'Participez aux décisions produit et features',
    value: 'Influence directe',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Award,
    title: 'Statut Ambassadeur',
    description: 'Badge spécial + revenus de parrainage',
    value: 'Jusqu\'à 500€/mois',
    color: 'from-blue-500 to-cyan-500'
  }
]

// Composant formulaire premium
function PremiumNewsletterForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const interestOptions = [
    { id: 'tech', label: '💻 Tech & Innovation', color: 'from-blue-500 to-purple-500' },
    { id: 'business', label: '💼 Business Local', color: 'from-green-500 to-emerald-500' },
    { id: 'community', label: '👥 Communauté', color: 'from-pink-500 to-red-500' },
    { id: 'events', label: '🎉 Événements', color: 'from-yellow-500 to-orange-500' }
  ]

  const toggleInterest = (interestId: string) => {
    setInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    )
  }

  const handleNext = () => {
    if (step === 1 && email && name) {
      setStep(2)
    } else if (step === 2 && interests.length > 0) {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    setStatus('loading')
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          interests
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'inscription')
      }

      setStatus('success')
      setMessage('🎉 Bienvenue dans la communauté VIP Yunicity !')
      setStep(3)
    } catch (error: any) {
      setStatus('error')
      setMessage(error.message || 'Une erreur s\'est produite. Veuillez réessayer.')
    }
  }

  if (step === 3 && status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-3xl border border-green-500/30"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Crown className="w-10 h-10 text-white" />
        </motion.div>
        
        <h3 className="text-3xl font-bold text-white mb-4">
          Vous êtes maintenant VIP ! 👑
        </h3>
        <p className="text-green-300 text-lg mb-6">
          Merci {name} ! Vous recevrez votre pack fondateur par email dans 24h.
        </p>
        
        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
          <div className="p-3 bg-white/10 rounded-lg">
            <div className="font-semibold text-white">Accès Beta</div>
            <div className="text-white/70">Février 2026</div>
          </div>
          <div className="p-3 bg-white/10 rounded-lg">
            <div className="font-semibold text-white">Pack Valeur</div>
            <div className="text-white/70">149€ offerts</div>
          </div>
        </div>

        {/* Bouton vers contact */}
        <motion.a
          href="/contact"
          className="inline-block w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold text-center hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg mb-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          📧 Nous contacter directement
        </motion.a>
        
        <p className="text-white/60 text-sm">
          Une question spécifique ? Écrivez-nous !
        </p>
      </motion.div>
    )
  }

  return (
    <div className="max-w-lg mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-white/60 mb-2">
          <span>Étape {step}/2</span>
          <span>{Math.round((step / 2) * 100)}% complété</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(step / 2) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Rejoignez l'élite Yunicity</h3>
              <p className="text-white/70">Accès VIP + Pack Fondateur 149€ offert</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Votre prénom *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Marie"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Email professionnel *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="marie@entreprise.com"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>
            </div>

            <motion.button
              onClick={handleNext}
              disabled={!email || !name}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Continuer vers les préférences →
            </motion.button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Vos centres d'intérêt</h3>
              <p className="text-white/70">Personnalisez votre expérience VIP</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {interestOptions.map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => toggleInterest(option.id)}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    interests.includes(option.id)
                      ? `bg-gradient-to-br ${option.color} border-white/30 shadow-lg`
                      : 'bg-white/5 border-white/20 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-lg font-medium text-white">{option.label}</div>
                  {interests.includes(option.id) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="mt-2"
                    >
                      <Check className="w-5 h-5 text-white mx-auto" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-3 border border-white/30 rounded-xl text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                ← Retour
              </button>
              <motion.button
                onClick={handleNext}
                disabled={interests.length === 0 || status === 'loading'}
                className="flex-2 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg px-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'loading' ? (
                  <div className="flex items-center justify-center">
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Finalisation...
                  </div>
                ) : (
                  'Devenir VIP 👑'
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message d'erreur */}
      <AnimatePresence>
        {message && status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 p-3 rounded-lg flex items-center space-x-2 text-sm bg-red-500/20 border border-red-500/30 text-red-300"
          >
            <AlertCircle className="w-4 h-4" />
            <span>{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Composant réseau social
function SocialCard({ network, delay }: { network: typeof socialNetworks[0], delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      ref={ref}
      href={network.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${network.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
      
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 group-hover:border-white/30 transition-all duration-300 h-full">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${network.color} flex items-center justify-center shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <network.icon className="w-6 h-6 text-white" />
          </motion.div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-white">{network.followers}</div>
            <div className="text-white/60 text-sm">followers</div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-1">{network.name}</h3>
        <p className="text-white/60 text-sm mb-3">{network.handle}</p>
        <p className="text-white/80 text-sm leading-relaxed">{network.description}</p>
        
        <motion.div
          className="mt-4 flex items-center text-white/70 text-sm group-hover:text-white transition-colors"
          animate={{ x: isHovered ? 5 : 0 }}
        >
          <span>Suivre</span>
          <motion.div
            animate={{ x: isHovered ? 3 : 0 }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.div>
        </motion.div>
      </div>
    </motion.a>
  )
}

export default function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-yellow-400 rounded-full"
          animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-3 h-3 bg-green-400 rounded-full"
          animate={{ y: [0, -15, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full"
          animate={{ y: [0, -10, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative container mx-auto px-6">
        
        {/* Header avec impact */}
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
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 border border-purple-500/30 rounded-full text-purple-300 font-semibold text-sm tracking-wider uppercase mb-8"
          >
            <Crown className="w-4 h-4" />
            <span>COMMUNAUTÉ VIP EXCLUSIVE</span>
            <Rocket className="w-4 h-4" />
          </motion.div>
          
          <h2 className="text-5xl lg:text-8xl font-black text-white mb-8 leading-tight">
            Devenez
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              Ambassadeur
            </span>
            Yunicity
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-12">
            Rejoignez l'élite des 1000 premiers membres. 
            <br className="hidden lg:block" />
            <span className="text-purple-300 font-semibold">Pack Fondateur 149€ offert</span> + accès VIP exclusif.
          </p>
        </motion.div>

        {/* Avantages premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Pourquoi devenir Fondateur ?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {premiumBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-2xl opacity-15 group-hover:opacity-25 transition-opacity duration-300`} />
                
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 group-hover:border-white/30 transition-all duration-300 text-center h-full">
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-3">{benefit.description}</p>
                  <div className={`text-lg font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                    {benefit.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Formulaire premium */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12 max-w-4xl mx-auto">
            <PremiumNewsletterForm />
          </div>
        </motion.div>

        {/* Réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Suivez notre Aventure
            </h3>
            <p className="text-white/70 text-lg">
              Restez connectés sur tous nos réseaux pour ne rien manquer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {socialNetworks.map((network, index) => (
              <SocialCard 
                key={network.name} 
                network={network} 
                delay={1.4 + index * 0.1} 
              />
            ))}
          </div>
        </motion.div>

        {/* CTA final immersif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-indigo-500/20 backdrop-blur-xl rounded-3xl border border-white/20 p-12 max-w-4xl mx-auto overflow-hidden">
            
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-indigo-600/10">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-6"
              >
                🚀
              </motion.div>
              
              <h3 className="text-4xl font-bold text-white mb-6">
                L'Aventure Commence Maintenant
              </h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Plus que <span className="text-purple-300 font-bold">847 places</span> disponibles 
                dans le programme Fondateur.
                <br />
                <span className="text-pink-300">Soyez parmi les élus de la révolution locale !</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center space-x-2 text-white/60">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Accès VIP garanti</span>
                </div>
                <div className="flex items-center space-x-2 text-white/60">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>149€ d'avantages offerts</span>
                </div>
                <div className="flex items-center space-x-2 text-white/60">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Statut Fondateur à vie</span>
                </div>
              </div>

              <motion.div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-6 py-2 text-green-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400" />
                <span className="font-medium">Rejoignez 2,847 visionnaires</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}