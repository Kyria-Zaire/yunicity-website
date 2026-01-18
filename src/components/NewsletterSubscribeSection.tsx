'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import LogoLoop from './LogoLoop'
import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

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
  },
  {
    node: (
      <div className="flex items-center justify-center h-[110px] w-auto">
        <Image
          src="/images/R.png"
          alt="Les Garçons Barbier"
          width={240}
          height={110}
          className="h-full w-auto object-contain"
          style={{ maxHeight: '110px' }}
        />
      </div>
    ),
    title: 'Les Garçons Barbier',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center h-[110px] w-auto">
        <Image
          src="/images/Tacos.png"
          alt="Tacos Gourmands"
          width={240}
          height={110}
          className="h-full w-auto object-contain"
          style={{ maxHeight: '110px' }}
        />
      </div>
    ),
    title: 'Tacos Gourmands',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center h-[110px] w-auto">
        <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-center">
          <Image
            src="/images/Logo-AS-Barber.png"
            alt="As Barber"
            width={200}
            height={90}
            className="h-auto w-auto object-contain"
            style={{ maxHeight: '80px' }}
          />
        </div>
      </div>
    ),
    title: 'As Barber',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center h-[110px] w-auto">
        <Image
          src="/images/le-gaulois-debit-de-boissons.png"
          alt="Le Gaulois"
          width={240}
          height={110}
          className="h-full w-auto object-contain"
          style={{ maxHeight: '110px' }}
        />
      </div>
    ),
    title: 'Le Gaulois',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center h-[110px] w-auto">
        <Image
          src="/images/Belga-queen.png"
          alt="Belga Queen"
          width={240}
          height={110}
          className="h-full w-auto object-contain"
          style={{ maxHeight: '110px' }}
        />
      </div>
    ),
    title: 'Belga Queen',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center h-[110px] w-auto">
        <Image
          src="/images/Marcel-Jane.png"
          alt="Marcel & Jane"
          width={240}
          height={110}
          className="h-full w-auto object-contain"
          style={{ maxHeight: '110px' }}
        />
      </div>
    ),
    title: 'Marcel & Jane',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center h-[110px] w-auto">
        <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-center">
          <Image
            src="/images/Daiboken.png"
            alt="Dai Bōken"
            width={200}
            height={90}
            className="h-auto w-auto object-contain"
            style={{ maxHeight: '80px' }}
          />
        </div>
      </div>
    ),
    title: 'Dai Bōken',
    href: '#'
  },
  {
    node: (
      <div className="flex items-center justify-center h-[110px] w-auto">
        <Image
          src="/images/EatNight2.png"
          alt="Eat Night"
          width={240}
          height={110}
          className="h-full w-auto object-contain"
          style={{ maxHeight: '110px' }}
        />
      </div>
    ),
    title: 'Eat Night',
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
    <section data-section="newsletter-subscribe" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Section Formulaire Newsletter - Style Apple/Tesla */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            {/* Header minimaliste */}
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-800 mb-4 tracking-tight">
                Rejoignez les 100 premiers testeurs
              </h2>
              <p className="text-lg text-gray-500">
                Accès exclusif à la bêta. Juillet 2026.
              </p>
            </div>

            {/* Formulaire épuré */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-blue-800" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">Inscription réussie</h3>
                <p className="text-gray-500">
                  Vous recevrez un email de confirmation sous peu.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-800 focus:ring-0 transition-colors outline-none text-base text-gray-900 placeholder:text-gray-400"
                    placeholder="Votre nom"
                  />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-800 focus:ring-0 transition-colors outline-none text-base text-gray-900 placeholder:text-gray-400"
                    placeholder="votre@email.com"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Inscription en cours...</span>
                  ) : (
                    <>
                      <span>S'inscrire</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-400 text-center">
                  Désabonnement possible à tout moment.
                </p>
              </form>
            )}
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
              <span className="text-blue-800 font-light">
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
