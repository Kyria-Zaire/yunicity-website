'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Send, Check, AlertCircle, Crown, Gift, Users, Sparkles, Instagram, Linkedin, Facebook } from 'lucide-react'

// Réseaux sociaux
const socialNetworks = [
  {
    name: 'Instagram',
    icon: Instagram,
    handle: '@yunicity.app',
    color: 'from-pink-500 to-orange-500',
    link: 'https://www.instagram.com/yunicity.app?igsh=MWhzam53cm9kMGxtNQ=='
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    handle: 'Yunicity App',
    color: 'from-blue-600 to-blue-700',
    link: 'https://www.linkedin.com/in/yunicity-app-381bb7230'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    handle: 'Yunicity Official',
    color: 'from-blue-500 to-blue-700',
    link: 'https://www.facebook.com/share/17FsREHfzM/'
  }
]

// Newsletter benefits
const benefits = [
  {
    icon: Crown,
    title: 'Accès VIP',
    description: 'Testez l\'app 30 jours avant tout le monde',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Gift,
    title: 'Premium Offert',
    description: '3 mois gratuits à l\'abonnement Premium',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Badge Ambassadeur',
    description: 'Devenez ambassadeur officiel Yunicity',
    color: 'from-blue-500 to-indigo-500'
  }
]

export default function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'inscription')
      }

      setStatus('success')
      setEmail('')
      setName('')

      setTimeout(() => setStatus('idle'), 5000)
    } catch (error: any) {
      setStatus('error')
      setErrorMessage(error.message || 'Une erreur est survenue')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, #000 1px, transparent 0)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-600 font-medium text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              REJOIGNEZ LA COMMUNAUTÉ
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-black mb-8 tracking-tight">
              Ne ratez pas
              <span className="block font-normal text-gray-600">
                le lancement
              </span>
            </h2>

            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-light">
              Inscrivez-vous à notre newsletter et débloquez des avantages exclusifs
            </p>
          </motion.div>

          {/* Main content */}
          <div className="max-w-2xl mx-auto">
            {/* Newsletter form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-12 border border-gray-200"
            >
              <div className="mb-10 text-center">
                <h3 className="text-2xl font-light text-black mb-3">Accès Anticipé VIP</h3>
                <p className="text-gray-500 font-light">
                  Rejoignez les <span className="font-medium text-black">2,847 early adopters</span> déjà inscrits
                </p>
              </div>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white border border-gray-200 rounded-xl p-8 text-center"
                >
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-medium text-black mb-2">Bienvenue dans la communauté</h4>
                  <p className="text-gray-500 text-sm">Consultez votre boîte mail pour confirmer votre inscription</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Prénom"
                      required
                      className="w-full px-6 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-black transition-all text-black font-light placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                      className="w-full px-6 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-black transition-all text-black font-light placeholder-gray-400"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4 text-red-600">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <p className="text-sm font-light">{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-8 py-4 bg-black hover:bg-gray-800 rounded-xl text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Inscription...
                      </>
                    ) : (
                      <>
                        Rejoindre la liste VIP
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center font-light">
                    En vous inscrivant, vous acceptez de recevoir nos newsletters. Désinscription possible à tout moment.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16"
            >
              <h3 className="text-xl font-light text-black mb-8 text-center">Vos Avantages Exclusifs</h3>

              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:border-gray-300 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <h4 className="text-lg font-medium text-black mb-2">{benefit.title}</h4>
                    <p className="text-gray-500 text-sm font-light">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social networks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 text-center"
            >
              <h3 className="text-xl font-light text-black mb-6">Suivez-nous</h3>

              <div className="flex justify-center gap-6">
                {socialNetworks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="group w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <social.icon className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}
