'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, ArrowRight, X, Star, Clock, CheckCircle2,
  ChevronRight, Search, Filter, MoreVertical
} from 'lucide-react'

// Contenu de l'email newsletter
const emailContent = {
  from: 'Yunicity Newsletter',
  fromEmail: 'newsletter@yunicity.app',
  subject: 'Les 5 tendances Smart City qui vont transformer 2025',
  time: 'Il y a 2 minutes',
  preview: 'Découvrez les innovations qui façonnent les villes intelligentes de demain. Intelligence artificielle, mobilité durable, engagement citoyen...',
  body: [
    'Bonjour,',
    '',
    'Cette semaine, nous explorons les 5 tendances majeures qui vont révolutionner les Smart Cities en 2025 :',
    '',
    '• Intelligence artificielle et personnalisation locale',
    '• Mobilité durable et connectée',
    '• Engagement citoyen via les plateformes digitales',
    '• Données ouvertes et transparence',
    '• Résilience urbaine face aux défis climatiques',
    '',
    'Découvrez comment ces innovations transforment déjà des villes comme Reims, Lyon et Paris.',
    '',
    'Bonne lecture,',
    'L\'équipe Yunicity'
  ]
}

// Autres emails dans la boîte de réception
const otherEmails = [
  { from: 'Smart City Insights', subject: 'Rapport mensuel - Janvier 2025', time: 'Il y a 3j', read: true },
  { from: 'Yunicity Team', subject: 'Nouvelle fonctionnalité disponible', time: 'Il y a 5j', read: true },
  { from: 'Smart City Insights', subject: 'Webinaire : L\'IA dans les villes', time: 'Il y a 1 sem', read: true },
]

export default function NewsletterHeroSection() {
  const [isMounted, setIsMounted] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showEmail, setShowEmail] = useState(false)
  const [emailOpened, setEmailOpened] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Séquence d'animations : notification → email dans la liste → ouverture
    setTimeout(() => {
      setShowNotification(true)
    }, 1000)
    setTimeout(() => {
      setShowNotification(false)
      setShowEmail(true)
    }, 3000)
    setTimeout(() => {
      setEmailOpened(true)
    }, 4500)
  }, [])

  if (!isMounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
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
        <div className="relative z-10 w-full min-h-screen flex items-center justify-center py-20">
          <div className="text-gray-600 text-xl">Chargement...</div>
        </div>
      </section>
    )
  }

  return (
    <section data-section="newsletter-hero" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />

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

      <div className="relative z-10 w-full min-h-screen flex items-center justify-center py-20 px-6">
        <div className="w-full max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h1
              className="text-2xl md:text-4xl font-extralight text-gray-900 tracking-tight mb-3 leading-[1.1]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-extralight">
                Recevez l'avenir dans votre boîte mail
              </span>
            </motion.h1>
            <motion.p
              className="text-sm md:text-base text-gray-600 font-extralight max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Chaque semaine, des insights exclusifs sur les Smart Cities directement dans votre boîte de réception
            </motion.p>
          </motion.div>

          {/* Email Preview Container */}
          <div className="relative">
            {/* Notification iOS/macOS style */}
            <AnimatePresence>
              {showNotification && (
                <motion.div
                  initial={{ opacity: 0, y: -30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.16, 1, 0.3, 1],
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                  }}
                  className="absolute -top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                >
                  <div className="bg-white/80 backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/20 p-5 min-w-[360px] max-w-md">
                    <div className="flex items-start gap-4">
                  <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-xl"
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Mail className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1 min-w-0 pt-0.5">
                        <div className="flex items-center justify-between mb-1.5">
                          <p className="text-sm font-medium text-gray-900 tracking-tight">Nouveau message</p>
                          <motion.button
                            onClick={() => setShowNotification(false)}
                            className="text-gray-400 hover:text-gray-700 transition-colors pointer-events-auto p-1 rounded-full hover:bg-gray-100/50"
                          >
                            <X className="w-4 h-4" />
                          </motion.button>
                        </div>
                        <p className="text-sm text-gray-800 truncate font-medium mb-1">{emailContent.from}</p>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">{emailContent.subject}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Interface de boîte mail (style Apple Mail / Tesla) */}
                    <motion.div
              className="bg-gray-900/90 backdrop-blur-3xl rounded-[2rem] border border-gray-800/50 shadow-2xl overflow-hidden max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Barre d'outils macOS style */}
              <div className="bg-gray-900/95 backdrop-blur-2xl border-b border-white/10 px-6 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-sm" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-sm" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-sm" />
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-sm text-gray-300 font-extralight tracking-wide">Boîte de réception</div>
                    <div className="w-1 h-1 rounded-full bg-gray-400/30" />
                    <div className="text-sm text-gray-300 font-extralight tracking-wide">540+ messages</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2.5 hover:bg-white/5 rounded-xl transition-all duration-300 ease-out">
                      <Search className="w-4 h-4 text-gray-300" />
                    </button>
                    <button className="p-2.5 hover:bg-white/5 rounded-xl transition-all duration-300 ease-out">
                      <Filter className="w-4 h-4 text-gray-300" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-[240px_1fr] min-h-[550px]">
                {/* Sidebar - Liste des emails */}
                <div className="bg-gray-900/60 backdrop-blur-2xl border-r border-white/10 p-4 overflow-y-auto">
                  {/* Email non lu en haut de la liste */}
                  <AnimatePresence>
                    {showEmail && (
                      <motion.div
                        initial={{ opacity: 0, x: -20, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.5, 
                          ease: [0.16, 1, 0.3, 1],
                          type: 'spring',
                          stiffness: 200
                        }}
                        className="mb-3"
                      >
                        <motion.div
                          className="bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-purple-400/20 rounded-xl p-4 cursor-pointer hover:from-purple-500/25 hover:to-blue-500/25 transition-all duration-500 ease-out relative overflow-hidden group backdrop-blur-sm"
                          whileHover={{ scale: 1.005, y: -1 }}
                          whileTap={{ scale: 0.998 }}
                          onClick={() => setEmailOpened(true)}
                        >
                          {/* Indicateur de non lu */}
                          <motion.div
                            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-blue-400 rounded-l-2xl"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          />
                          
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2.5">
                              <motion.div
                                className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
                              >
                                <Mail className="w-4 h-4 text-white" />
                              </motion.div>
                              <div className="flex-1 min-w-0 pt-0.5">
                                <p className="text-sm font-medium text-white truncate tracking-tight">{emailContent.from}</p>
                                <p className="text-xs text-gray-300 truncate mt-0.5">{emailContent.fromEmail}</p>
                              </div>
                            </div>
                            <motion.div
                              className="w-2.5 h-2.5 rounded-full bg-purple-400 flex-shrink-0 mt-1 shadow-sm"
                              animate={{ scale: [1, 1.15, 1], opacity: [1, 0.85, 1] }}
                              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                            />
                          </div>
                          <p className="text-sm font-medium text-white mb-1.5 line-clamp-1 tracking-tight">{emailContent.subject}</p>
                          <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed mb-2">{emailContent.preview}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <Clock className="w-3.5 h-3.5" />
                              {emailContent.time}
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                        </motion.div>
                        </motion.div>
                      )}
                  </AnimatePresence>

                  {/* Autres emails */}
                  {otherEmails.map((email, index) => (
                    <motion.div
                      key={index}
                      className="p-3 rounded-lg mb-2 hover:bg-white/3 transition-all duration-300 ease-out cursor-pointer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <p className="text-sm font-light text-gray-300 truncate tracking-tight">{email.from}</p>
                        <p className="text-xs text-gray-500 ml-2 flex-shrink-0">{email.time}</p>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-1">{email.subject}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Zone de lecture de l'email */}
                <div className="bg-black/40 backdrop-blur-2xl p-8 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {!emailOpened ? (
            <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center h-full"
                      >
                        <div className="text-center">
                          <Mail className="w-20 h-20 text-gray-700/50 mx-auto mb-6" />
                          <p className="text-gray-400 text-base font-extralight tracking-wide">Sélectionnez un message</p>
                        </div>
            </motion.div>
                    ) : (
            <motion.div
                        key="email"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-3xl mx-auto"
                      >
                        {/* En-tête de l'email */}
                        <div className="mb-6 pb-4 border-b border-white/5">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
            <motion.div
                                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-2xl"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
            >
                                <Mail className="w-6 h-6 text-white" />
            </motion.div>
                              <div className="pt-0.5">
                                <h2 className="text-lg font-light text-white mb-1 tracking-tight">{emailContent.from}</h2>
                                <p className="text-xs text-gray-300 font-extralight">{emailContent.fromEmail}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="p-2 hover:bg-white/5 rounded-lg transition-all duration-300 ease-out">
                                <Star className="w-4 h-4 text-gray-300 hover:text-yellow-400 transition-colors duration-300" />
                              </button>
                              <button className="p-2 hover:bg-white/5 rounded-lg transition-all duration-300 ease-out">
                                <MoreVertical className="w-4 h-4 text-gray-300 hover:text-white transition-colors duration-300" />
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-300 mb-4 font-extralight">
                            <span>À : moi</span>
                            <span className="text-gray-500">•</span>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{emailContent.time}</span>
                            </div>
                          </div>
                          <h1 className="text-lg md:text-xl font-light text-white mt-4 leading-[1.2] tracking-tight">
                            {emailContent.subject}
                          </h1>
            </div>

                        {/* Corps de l'email */}
                        <motion.div
                          className="prose prose-invert max-w-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {emailContent.body.map((line, index) => (
                            <motion.p
                              key={index}
                              className={`text-gray-200 mb-2 leading-relaxed font-extralight text-sm ${
                                line.startsWith('•') ? 'ml-5 flex items-start gap-2' : ''
                              } ${line === '' ? 'mb-3' : ''}`}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + index * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                              {line.startsWith('•') && (
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-300 mt-0.5 flex-shrink-0" />
                              )}
                              <span className="tracking-wide">{line.replace('•', '')}</span>
                            </motion.p>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
          <motion.div
              className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
              <motion.button
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-light rounded-full overflow-hidden text-base tracking-wide shadow-xl"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Mail className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Rejoindre la newsletter</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
              </motion.button>
              <p className="text-sm text-gray-600 mt-5 font-extralight tracking-wide">
                Rejoignez 540+ pionniers qui reçoivent nos insights chaque semaine
              </p>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
