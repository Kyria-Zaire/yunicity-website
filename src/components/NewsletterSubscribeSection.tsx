'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import LogoLoop from './LogoLoop'
import Image from 'next/image'
import { Building2, Store, Heart, MapPin, Coffee, Music, ShoppingBag, Users, Calendar, Sparkles, Zap, Network, ArrowRight, CheckCircle2, Mail } from 'lucide-react'

// Logos des partenaires et acteurs locaux
const partnerLogos = [
  {
    node: (
      <div className="flex items-center justify-center h-[110px] w-auto">
        <Image
          src="/images/la-turbine-incubateur-start-up-val-oise-removebg-preview.png"
          alt="La Turbine"
          width={240}
          height={110}
          className="h-full w-auto object-contain"
          style={{ maxHeight: '110px' }}
        />
      </div>
    ),
    title: 'La Turbine',
    href: 'https://laturbine-cergypontoise.fr/'
  },
  {
    node: (
      <div className="flex items-center justify-center h-[110px] w-auto">
        <Image
          src="/images/incubateur-innovact-reims-removebg-preview.png"
          alt="Innovact"
          width={240}
          height={110}
          className="h-full w-auto object-contain"
          style={{ maxHeight: '110px' }}
        />
      </div>
    ),
    title: 'Innovact',
    href: 'https://innovact.com/'
  },
  {
    node: (
      <div className="flex items-center justify-center h-[85px] w-auto">
        <Image
          src="/images/logoversion1-removebg-preview.png"
          alt="JETRO"
          width={180}
          height={85}
          className="h-full w-auto object-contain"
          style={{ maxHeight: '85px' }}
        />
      </div>
    ),
    title: 'JETRO',
    href: 'https://www.jetro.go.jp/france/'
  },
  {
    node: (
      <div className="flex items-center justify-center h-[110px] w-auto">
        <Image
          src="/images/logo-brand-orange-sa-text-yellow-removebg-preview.png"
          alt="Bpifrance"
          width={240}
          height={110}
          className="h-full w-auto object-contain"
          style={{ maxHeight: '110px' }}
        />
      </div>
    ),
    title: 'Bpifrance',
    href: 'https://www.bpifrance.fr/'
  },
  {
    node: (
      <div className="flex items-center justify-center h-[110px] w-auto">
        <Image
          src="/images/sans-titre-1-11-removebg-preview.png"
          alt="La French Tech Est"
          width={240}
          height={110}
          className="h-full w-auto object-contain"
          style={{ maxHeight: '110px' }}
        />
      </div>
    ),
    title: 'La French Tech Est',
    href: 'https://lafrenchtechest.fr/'
  },
  {
    node: (
      <div className="flex items-center justify-center h-[130px] w-auto">
        <Image
          src="/images/1f2aab25-bd3e-4bd3-8f47-c0f46dab3a12-removebg-preview.png"
          alt="Partenaire 6"
          width={280}
          height={130}
          className="h-full w-auto object-contain"
          style={{ maxHeight: '130px' }}
        />
      </div>
    ),
    title: 'Partenaire 6',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center h-[110px] w-auto">
        <Image
          src="/images/29ba47c1-eeaa-4eea-b833-d78328214cb5-removebg-preview.png"
          alt="Partenaire 7"
          width={240}
          height={110}
          className="h-full w-auto object-contain"
          style={{ maxHeight: '110px' }}
        />
      </div>
    ),
    title: 'Partenaire 7',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center h-[110px] w-auto">
        <Image
          src="/images/4918b801-373b-4373-a10e-6210752bbaab-removebg-preview.png"
          alt="Partenaire 8"
          width={240}
          height={110}
          className="h-full w-auto object-contain"
          style={{ maxHeight: '110px' }}
        />
      </div>
    ),
    title: 'Partenaire 8',
    href: '#'
  }
]

export default function NewsletterSubscribeSection() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, interests: [] })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'inscription')
        }

      setIsSuccess(true)
        setEmail('')
      setName('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section data-section="newsletter-subscribe" className="relative py-20 sm:py-24 md:py-32 bg-white overflow-hidden">
      {/* Glow effects subtils */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl" />

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

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Formulaire Newsletter - Mise en avant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 sm:mb-16"
          >
            <div className="max-w-3xl mx-auto">
              {/* Header avec incitation forte */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-6 sm:mb-8"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-3 tracking-tight leading-[1.1]">
                  Rejoignez les{' '}
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-normal">
                    100 premiers testeurs
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                  Soyez parmi les premiers à découvrir Yunicity et à façonner l'avenir de votre ville. Accès exclusif à la bêta en juillet 2026.
                </p>
              </motion.div>

              {/* Formulaire mis en avant */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/80 backdrop-blur-xl border-2 border-gray-200/50 rounded-xl p-4 sm:p-6 shadow-xl"
              >
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Inscription réussie !</h3>
                    <p className="text-gray-600 font-light">
                      Vous recevrez un email de confirmation sous peu. Merci de votre intérêt pour Yunicity !
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1.5">
                          Prénom / Nom
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none text-sm"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none text-sm"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700"
                      >
                        {error}
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 hover:from-purple-500 hover:via-blue-500 hover:to-purple-500 text-white font-medium text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Inscription en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>S'inscrire maintenant</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-gray-500 text-center font-light">
                      En vous inscrivant, vous acceptez de recevoir des emails de Yunicity. Vous pouvez vous désinscrire à tout moment.
                    </p>
                  </form>
                )}
              </motion.div>

              {/* Avantages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid sm:grid-cols-3 gap-4 mt-8"
              >
                {[
                  { icon: Mail, text: 'Accès prioritaire à la bêta' },
                  { icon: Sparkles, text: 'Influencez le développement' },
                  { icon: Users, text: 'Rejoignez une communauté exclusive' }
                ].map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-xs text-gray-700 font-light">{benefit.text}</p>
                    </div>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Section Partenaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-3 tracking-tight leading-[1.1]"
            >
              Nos{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
                partenaires
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto"
            >
              Rejoignez un écosystème dynamique d'acteurs locaux qui façonnent l'avenir de nos villes
            </motion.p>
          </motion.div>

          {/* Logo Loop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ height: '160px' }}
          >
            <LogoLoop
              logos={partnerLogos}
              speed={80}
              direction="left"
              logoHeight={110}
              gap={40}
              hoverSpeed={20}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Partenaires et acteurs locaux"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
