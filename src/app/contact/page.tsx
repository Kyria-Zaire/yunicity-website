'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Mail, 
  Send, 
  User, 
  Building, 
  MessageSquare, 
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  ArrowLeft,
  Linkedin,
  Instagram,
  Facebook,
  Rocket,
  Heart,
  Zap
} from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const contactTypes = [
    { id: 'general', label: '💬 Question Générale', color: 'from-blue-500 to-cyan-500' },
    { id: 'investor', label: '💰 Investissement', color: 'from-purple-500 to-pink-500' },
    { id: 'partnership', label: '🤝 Partenariat', color: 'from-green-500 to-emerald-500' },
    { id: 'press', label: '📰 Presse & Media', color: 'from-orange-500 to-red-500' }
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
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi')
      }
      
      setStatus('success')
    } catch (error: unknown) {
      console.error('Erreur:', error)
      setStatus('error')
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
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
          
          <h1 className="text-4xl font-bold text-white mb-6">Message Envoyé ! 🚀</h1>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Merci <span className="text-green-300 font-semibold">{formData.name}</span> ! 
            <br />Nous vous répondrons sous 24h.
          </p>
          
          <div className="space-y-4">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold text-lg shadow-lg"
              >
                Retour à l'accueil
              </motion.button>
            </Link>
            
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/in/yunicity-app-381bb7230" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/yunicity.app" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/17FsREHfzM/" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
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
            <Mail className="w-4 h-4" />
            <span>CONTACT YUNICITY</span>
            <Rocket className="w-4 h-4" />
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
            Parlons de votre
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">
              PROJET
            </span>
          </h1>
          
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Une question ? Un projet d'investissement ? Une idée de partenariat ?
            <br className="hidden lg:block" />
            L'équipe Yunicity vous répond sous <span className="text-purple-300 font-semibold">24h</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          
          {/* Formulaire principal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12">
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Type de contact */}
                <div>
                  <label className="block text-white font-semibold text-lg mb-6">
                    Quel est l'objet de votre message ?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contactTypes.map((type) => (
                      <motion.button
                        key={type.id}
                        type="button"
                        onClick={() => handleInputChange('type', type.id)}
                        className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                          formData.type === type.id
                            ? `bg-gradient-to-br ${type.color} border-white/30 shadow-lg`
                            : 'bg-white/5 border-white/20 hover:bg-white/10'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="text-white font-medium">{type.label}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Informations personnelles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    animate={{ scale: focusedField === 'name' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-white/80 font-medium mb-2">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="Ex: Marie Dupont"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-white/80 font-medium mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="marie@entreprise.com"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    animate={{ scale: focusedField === 'company' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-white/80 font-medium mb-2">
                      Entreprise
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ scale: focusedField === 'phone' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-white/80 font-medium mb-2">
                      Téléphone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="+33 7 82 66 35 98"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Sujet */}
                <motion.div
                  animate={{ scale: focusedField === 'subject' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-white/80 font-medium mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                    placeholder="Ex: Proposition d'investissement"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  animate={{ scale: focusedField === 'message' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-white/80 font-medium mb-2">
                    Votre message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/50" />
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 resize-none"
                      placeholder="Décrivez votre projet, vos questions ou vos idées..."
                    />
                  </div>
                </motion.div>

                {/* Bouton submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading' || !formData.name || !formData.email || !formData.subject || !formData.message}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg flex items-center justify-center space-x-3"
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
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar infos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            
            {/* Contact direct */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                Contact Rapide
              </h3>
              
              <div className="space-y-4">
                <a href="mailto:yu.entreprise@gmail.com" className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>yu.entreprise@gmail.com</span>
                </a>
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>Reims, Grand Est</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>Réponse sous 24h</span>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-pink-400" />
                Nos Réseaux
              </h3>
              
              <div className="space-y-3">
                <a href="https://www.linkedin.com/in/yunicity-app-381bb7230" className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <span className="text-white/80 group-hover:text-white">LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/yunicity.app" className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
                  <Instagram className="w-5 h-5 text-pink-400" />
                  <span className="text-white/80 group-hover:text-white">Instagram</span>
                </a>
                <a href="https://www.facebook.com/share/17FsREHfzM/" className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
                  <Facebook className="w-5 h-5 text-blue-500" />
                  <span className="text-white/80 group-hover:text-white">Facebook</span>
                </a>
              </div>
            </div>

            {/* Stats équipe */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6">
              <h3 className="text-xl font-bold text-white mb-6">L'équipe Yunicity</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">Membres :</span>
                  <span className="text-white font-semibold">5 experts</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Expérience :</span>
                  <span className="text-white font-semibold">10+ ans</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Lancement MVP :</span>
                  <span className="text-white font-semibold">Mars 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Objectif :</span>
                  <span className="text-white font-semibold">5M€ ARR 2030</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}