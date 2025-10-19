'use client'
import { useState } from 'react'
import { Mail, ArrowRight, Check } from 'lucide-react'

export default function NewsletterSubscribeSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Inscription réussie ! Vérifiez votre boîte mail.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Une erreur est survenue')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Erreur de connexion')
    }
  }

  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

      {/* Grille pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white tracking-tight">
              Prêt à découvrir plus ?
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed font-light">
              Rejoignez 10K+ explorateurs qui reçoivent nos meilleures découvertes
            </p>
          </div>

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@exemple.com"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="group w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white font-semibold text-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  'Inscription en cours...'
                ) : status === 'success' ? (
                  <>
                    <Check className="w-5 h-5" />
                    Inscrit !
                  </>
                ) : (
                  <>
                    S'inscrire gratuitement
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {message && (
                <div
                  className={`text-center text-sm ${
                    status === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {message}
                </div>
              )}
            </form>

            {/* Features */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="text-gray-300 text-sm">
                  <div className="font-semibold text-white mb-1">100% Gratuit</div>
                  <div className="text-xs text-gray-400">Toujours</div>
                </div>
                <div className="text-gray-300 text-sm">
                  <div className="font-semibold text-white mb-1">Désinscription facile</div>
                  <div className="text-xs text-gray-400">En 1 clic</div>
                </div>
                <div className="text-gray-300 text-sm">
                  <div className="font-semibold text-white mb-1">Pas de spam</div>
                  <div className="text-xs text-gray-400">1 email/semaine max</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex items-center justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>10K+ abonnés</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>95% taux d'ouverture</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Chaque vendredi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
