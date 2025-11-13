'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Calendar,
  CheckCircle,
  Mail,
  User,
  Building,
  Clock,
  ChevronLeft,
  ChevronRight,
  Phone,
  ArrowRight,
  ExternalLink
} from 'lucide-react'

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30'
]

const months = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
]

const weekDays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']

export default function InvestirContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [step, setStep] = useState<'calendar' | 'form' | 'confirmation'>('calendar')
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    investmentRange: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // Générer les jours du mois
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days: (Date | null)[] = []
    
    // Jours vides avant le premier jour du mois
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Jours du mois
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }

  const isPastDate = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear()
  }

  const handleDateSelect = (date: Date | null) => {
    if (date && !isPastDate(date)) {
      setSelectedDate(date)
      setSelectedTime(null)
    }
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      setStep('form')
    }
  }

  const handlePrevious = () => {
    if (step === 'form') {
      setStep('calendar')
    }
  }

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
          subject: `Demande d'investissement - ${formData.investmentRange}`,
          meetingDate: selectedDate?.toISOString(),
          meetingTime: selectedTime
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi')
      }

      setStatus('success')
      setStep('confirmation')
    } catch {
      setStatus('error')
    }
  }

  const generateCalendarLink = (provider: 'google' | 'outlook') => {
    if (!selectedDate || !selectedTime) return '#'
    
    const [hours, minutes] = selectedTime.split(':').map(Number)
    const startDate = new Date(selectedDate)
    startDate.setHours(hours, minutes, 0, 0)
    const endDate = new Date(startDate)
    endDate.setHours(hours + 1, minutes, 0, 0)

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    }

    const title = encodeURIComponent('Rendez-vous investissement - Yunicity')
    const details = encodeURIComponent(`Rendez-vous avec ${formData.name || 'Investisseur potentiel'}\n\nEmail: ${formData.email}\nSociété: ${formData.company || 'N/A'}\nMontant: ${formData.investmentRange || 'À discuter'}`)
    const location = encodeURIComponent('Visio-conférence (lien à envoyer)')

    if (provider === 'google') {
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${details}&location=${location}`
    } else {
      return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=${startDate.toISOString()}&enddt=${endDate.toISOString()}&body=${details}&location=${location}`
    }
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const days = getDaysInMonth(currentDate)

  if (step === 'confirmation') {
    return (
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="relative container mx-auto px-6 flex items-center justify-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
              className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>

            <h2 className="text-5xl sm:text-6xl font-light text-white mb-6">Rendez-vous confirmé !</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Merci <span className="text-purple-400 font-normal">{formData.name}</span> !
              <br />
              Votre rendez-vous est prévu le{' '}
              <span className="text-white font-normal">
                {selectedDate?.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à {selectedTime}
              </span>
            </p>

            {/* Liens calendrier */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href={generateCalendarLink('google')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-light border border-white/20 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Ajouter à Google Calendar
                <ExternalLink className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={generateCalendarLink('outlook')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-light border border-white/20 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Ajouter à Outlook
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>

            <motion.a
              href="/investir"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 rounded-full text-white font-light text-lg transition-colors"
            >
              Retour
            </motion.a>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={ref}
      id="contact-section"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />

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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-light text-sm mb-8"
          >
            <Calendar className="w-4 h-4" />
            PRENEZ RENDEZ-VOUS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight"
          >
            Prêt à investir dans{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
              l'avenir ?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Réservez un créneau pour discuter de votre investissement
          </motion.p>
        </motion.div>

        {/* Calendrier et Formulaire */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {step === 'calendar' ? (
        <motion.div
                key="calendar"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12"
        >
                {/* Navigation du mois */}
                <div className="flex items-center justify-between mb-8">
                  <motion.button
                    onClick={prevMonth}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </motion.button>
                  
                  <h3 className="text-2xl font-light text-white">
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h3>
                  
                  <motion.button
                    onClick={nextMonth}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </motion.button>
                  </div>

                {/* Jours de la semaine */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {weekDays.map((day) => (
                    <div key={day} className="text-center text-sm text-gray-400 font-light py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendrier */}
                <div className="grid grid-cols-7 gap-2 mb-8">
                  {days.map((date, index) => {
                    if (!date) {
                      return <div key={`empty-${index}`} className="aspect-square" />
                    }
                    
                    const isSelected = selectedDate?.getTime() === date.getTime()
                    const isDisabled = isPastDate(date)
                    const isTodayDate = isToday(date)
                    
                    return (
                      <motion.button
                        key={date.getTime()}
                        onClick={() => handleDateSelect(date)}
                        disabled={isDisabled}
                        whileHover={!isDisabled ? { scale: 1.1 } : {}}
                        whileTap={!isDisabled ? { scale: 0.9 } : {}}
                        className={`aspect-square rounded-xl text-sm font-light transition-all ${
                          isSelected
                            ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg'
                            : isTodayDate
                            ? 'bg-white/10 text-white border-2 border-purple-500/50'
                            : isDisabled
                            ? 'bg-white/5 text-gray-600 cursor-not-allowed'
                            : 'bg-white/5 text-white hover:bg-white/10'
                        }`}
                      >
                        {date.getDate()}
                      </motion.button>
              )
            })}
          </div>

                {/* Créneaux horaires */}
                {selectedDate && (
            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 pt-8 border-t border-white/10"
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <h4 className="text-lg font-light text-white">
                        Créneaux disponibles le {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                      </h4>
                    </div>
                    
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
                      {timeSlots.map((time) => {
                        const isSelected = selectedTime === time
                        const [hours] = time.split(':').map(Number)
                        const slotDate = new Date(selectedDate)
                        slotDate.setHours(hours, 0, 0, 0)
                        const isPast = isPastDate(slotDate) && isToday(selectedDate) && new Date().getHours() >= hours
                        
                        return (
                          <motion.button
                            key={time}
                            onClick={() => !isPast && handleTimeSelect(time)}
                            disabled={isPast}
                            whileHover={!isPast ? { scale: 1.05 } : {}}
                            whileTap={!isPast ? { scale: 0.95 } : {}}
                            className={`px-4 py-2 rounded-xl text-sm font-light transition-all ${
                              isSelected
                                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                                : isPast
                                ? 'bg-white/5 text-gray-600 cursor-not-allowed'
                                : 'bg-white/5 text-white hover:bg-white/10'
                            }`}
                          >
                            {time}
                          </motion.button>
                        )
                      })}
          </div>
        </motion.div>
                )}

                {/* Bouton suivant */}
                {selectedDate && selectedTime && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 flex justify-end"
                  >
                    <motion.button
                      onClick={handleNext}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 rounded-full text-white font-light text-lg transition-colors flex items-center gap-2"
                    >
                      Continuer
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12"
              >
                {/* Récapitulatif du rendez-vous */}
                <div className="mb-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-light text-white mb-2">Récapitulatif du rendez-vous</h3>
                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-light">
                            {selectedDate?.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-light">{selectedTime}</span>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      onClick={handlePrevious}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-white" />
                    </motion.button>
                  </div>
                    </div>

                {/* Formulaire */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 font-light mb-3 text-sm">Nom complet *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors font-light"
                          placeholder="Jean Dupont"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/80 font-light mb-3 text-sm">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors font-light"
                          placeholder="jean@fonds-investissement.com"
                        />
                      </div>
                      </div>
                    </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 font-light mb-3 text-sm">Société / Fonds</label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors font-light"
                          placeholder="Nom de votre société"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/80 font-light mb-3 text-sm">Téléphone</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors font-light"
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                    </div>
                    </div>

                  <div>
                    <label className="block text-white/80 font-light mb-3 text-sm">Montant souhaité *</label>
                        <div className="relative">
                      <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                          <input
                            type="text"
                            required
                        value={formData.investmentRange}
                        onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors font-light"
                        placeholder="Ex: 100 000€ ou 50K-100K€"
                      />
                    </div>
                    <p className="text-white/40 text-sm mt-2 font-light">Indiquez le montant ou la fourchette d'investissement souhaitée</p>
                    </div>

                    <div>
                    <label className="block text-white/80 font-light mb-3 text-sm">Message</label>
                      <textarea
                        value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors resize-none font-light"
                      placeholder="Parlez-nous de votre intérêt..."
                      />
                    </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-5 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 rounded-full text-white font-light text-lg disabled:opacity-50 transition-all flex items-center justify-center gap-3"
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
                        <CheckCircle className="w-5 h-5" />
                        <span>Confirmer le rendez-vous</span>
                      </>
                    )}
                  </motion.button>

                  <div className="flex items-center justify-center gap-2 text-sm text-white/50 font-light">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span>Réponse sous 48h • Confidentialité garantie</span>
              </div>
                </form>
                </motion.div>
              )}
          </AnimatePresence>
          </div>
      </div>
    </section>
  )
}
