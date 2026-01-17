'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Mail,
  Send,
  User,
  MessageSquare,
  Phone,
  MapPin,
  CheckCircle,
  Calendar,
  Video,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'general' as 'general' | 'investor' | 'partnership' | 'press'
  })

  // Calendrier
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [meetingFormat, setMeetingFormat] = useState<'visio' | 'phone'>('visio')

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [step, setStep] = useState<'form' | 'confirmation'>('form')

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ]

  const contactTypes = [
    { id: 'general', label: 'Question generale', icon: MessageSquare },
    { id: 'investor', label: 'Investissement', icon: Phone },
    { id: 'partnership', label: 'Partenariat', icon: Mail },
    { id: 'press', label: 'Presse & Media', icon: Send }
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days: (Date | null)[] = []

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

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

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
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

    const title = encodeURIComponent('Rendez-vous - Yunicity')
    const details = encodeURIComponent(`Rendez-vous avec ${formData.name || 'Contact'}\n\nEmail: ${formData.email}\nFormat: ${meetingFormat === 'visio' ? 'Visio-conference' : 'Telephone'}`)
    const location = encodeURIComponent(meetingFormat === 'visio' ? 'Visio-conference (lien a envoyer)' : 'Appel telephonique')

    if (provider === 'google') {
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${details}&location=${location}`
    } else {
      return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=${startDate.toISOString()}&enddt=${endDate.toISOString()}&body=${details}&location=${location}`
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
          name: formData.name,
          email: formData.email,
          subject: `Contact ${contactTypes.find(t => t.id === formData.type)?.label || 'general'}`,
          message: formData.message,
          type: formData.type,
          meetingDate: selectedDate ? selectedDate.toISOString() : undefined,
          meetingTime: selectedTime ? selectedTime : undefined,
          meetingFormat: selectedDate && selectedTime ? meetingFormat : undefined
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi')
      }

      if (selectedDate && selectedTime) {
        setStep('confirmation')
      } else {
        setStatus('success')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success' && step !== 'confirmation') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="text-4xl font-light text-white mb-4">Message envoye</h1>
          <p className="text-white/60 text-lg mb-8">
            Merci <span className="text-white font-medium">{formData.name}</span> !
            <br />Nous vous repondrons sous 24h.
          </p>
        </motion.div>
      </div>
    )
  }

  const days = getDaysInMonth(currentDate)

  return (
    <div className="min-h-screen bg-black">
      <Navigation activeSection="" />

      <div className="container mx-auto px-6 py-20 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">
            Contactez-nous
          </h1>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
            Une question ? Un projet ? Une idee de partenariat ?
            <br />L'equipe Yunicity vous repond sous <span className="text-white">24h</span>.
          </p>
        </motion.div>

        {/* Split-screen: Formulaire + Calendrier */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">

          {/* GAUCHE: Formulaire minimaliste */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Type de contact */}
              <div>
                <label className="block text-white/60 font-light mb-4 text-sm uppercase tracking-wider">
                  Type de contact
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {contactTypes.map((type) => {
                    const Icon = type.icon
                    return (
                      <motion.button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, type: type.id as 'general' | 'investor' | 'partnership' | 'press' })}
                        className={`p-4 rounded-2xl border transition-all text-left ${
                          formData.type === type.id
                            ? 'bg-white/10 border-white/30 text-white'
                            : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5 mb-2" />
                        <div className="text-sm font-light">{type.label}</div>
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              {/* Nom */}
              <div>
                <label className="block text-white/60 font-light mb-3 text-sm">
                  Nom complet *
                </label>
                <div className="relative">
                  <div className="absolute inset-0 border-b border-white/10" />
                  <div className="relative flex items-center gap-4 pb-3">
                    <User className="w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="flex-1 bg-transparent text-white text-lg placeholder:text-white/30 focus:outline-none font-light"
                      placeholder="Jean Dupont"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/60 font-light mb-3 text-sm">
                  Email *
                </label>
                <div className="relative">
                  <div className="absolute inset-0 border-b border-white/10" />
                  <div className="relative flex items-center gap-4 pb-3">
                    <Mail className="w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="flex-1 bg-transparent text-white text-lg placeholder:text-white/30 focus:outline-none font-light"
                      placeholder="jean@exemple.com"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/60 font-light mb-3 text-sm">
                  Message *
                </label>
                <div className="relative">
                  <div className="absolute inset-0 border border-white/10 rounded-2xl" />
                  <div className="relative p-4">
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full bg-transparent text-white placeholder:text-white/30 focus:outline-none font-light resize-none"
                      placeholder="Decrivez votre projet, vos questions ou vos idees..."
                    />
                  </div>
                </div>
              </div>

              {/* Bouton submit */}
              <motion.button
                type="submit"
                disabled={status === 'loading' || !formData.name || !formData.email || !formData.message}
                className="w-full py-4 bg-white text-black rounded-2xl font-light text-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/90 transition-all flex items-center justify-center gap-3"
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
              >
                {status === 'loading' ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Envoi...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* DROITE: Calendrier avec creneaux visuels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-light text-white mb-2">Prendre rendez-vous</h2>
              <p className="text-white/50 font-light text-sm mb-8">
                Choisissez un creneau pour un echange personnalise
              </p>
            </div>

            {/* Format de rendez-vous */}
            <div>
              <label className="block text-white/60 font-light mb-3 text-sm">
                Format
              </label>
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  type="button"
                  onClick={() => setMeetingFormat('visio')}
                  className={`p-4 rounded-2xl border transition-all ${
                    meetingFormat === 'visio'
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Video className="w-5 h-5 mb-2 mx-auto" />
                  <div className="text-sm font-light">Visio-conference</div>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => setMeetingFormat('phone')}
                  className={`p-4 rounded-2xl border transition-all ${
                    meetingFormat === 'phone'
                      ? 'bg-white/10 border-white/30 text-white'
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PhoneCall className="w-5 h-5 mb-2 mx-auto" />
                  <div className="text-sm font-light">Telephone</div>
                </motion.button>
              </div>
            </div>

            {/* Calendrier */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <motion.button
                  type="button"
                  onClick={prevMonth}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5 text-white/60" />
                </motion.button>
                <h3 className="text-white font-light text-lg">
                  {currentDate.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                </h3>
                <motion.button
                  type="button"
                  onClick={nextMonth}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5 text-white/60" />
                </motion.button>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-3">
                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, index) => (
                  <div key={`day-${index}`} className="text-center text-white/40 text-xs font-light py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {days.map((date, idx) => {
                  if (!date) return <div key={idx} className="aspect-square" />

                  const isSelected = selectedDate &&
                    date.getDate() === selectedDate.getDate() &&
                    date.getMonth() === selectedDate.getMonth() &&
                    date.getFullYear() === selectedDate.getFullYear()
                  const isPast = isPastDate(date)
                  const isTodayDate = isToday(date)

                  return (
                    <motion.button
                      key={idx}
                      type="button"
                      onClick={() => handleDateSelect(date)}
                      disabled={isPast}
                      className={`aspect-square rounded-xl text-sm font-light transition-all ${
                        isSelected
                          ? 'bg-white text-black'
                          : isPast
                          ? 'text-white/20 cursor-not-allowed'
                          : isTodayDate
                          ? 'bg-white/10 text-white border border-white/20'
                          : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`}
                      whileHover={!isPast ? { scale: 1.1 } : {}}
                      whileTap={!isPast ? { scale: 0.9 } : {}}
                    >
                      {date.getDate()}
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Creneaux horaires */}
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-3"
              >
                <label className="block text-white/60 font-light text-sm">
                  Creneaux disponibles
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <motion.button
                      key={time}
                      type="button"
                      onClick={() => handleTimeSelect(time)}
                      className={`py-3 px-2 rounded-xl text-sm font-light transition-all ${
                        selectedTime === time
                          ? 'bg-white text-black'
                          : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Confirmation rendez-vous */}
            {selectedDate && selectedTime && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-white/60" />
                  <div className="text-white font-light">
                    {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} a {selectedTime}
                  </div>
                </div>
                <div className="text-white/50 text-sm font-light">
                  Format: {meetingFormat === 'visio' ? 'Visio-conference' : 'Telephone'}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Confirmation avec calendriers */}
        {step === 'confirmation' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setStep('form')}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black border border-white/10 rounded-3xl p-8 max-w-md w-full"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-light text-white mb-4 text-center">Rendez-vous confirme</h3>
              <p className="text-white/60 text-center mb-6 font-light">
                {selectedDate && selectedTime && (
                  <>
                    Le {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} a {selectedTime}
                  </>
                )}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <motion.a
                  href={generateCalendarLink('google')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm font-light"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Google</span>
                </motion.a>

                <motion.a
                  href={generateCalendarLink('outlook')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm font-light"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Outlook</span>
                </motion.a>
              </div>

              <motion.button
                onClick={() => {
                  setStep('form')
                  setStatus('idle')
                  setSelectedDate(null)
                  setSelectedTime(null)
                }}
                className="w-full py-3 bg-white text-black rounded-xl font-light hover:bg-white/90 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Fermer
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {/* Coordonnees en bas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/10"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-white/60" />
            </div>
            <div>
              <h3 className="text-white font-light mb-1">Email</h3>
              <a href="mailto:yu.entreprise@gmail.com" className="text-white/50 hover:text-white transition-colors font-light">
                yu.entreprise@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-white/60" />
            </div>
            <div>
              <h3 className="text-white font-light mb-1">Telephone</h3>
              <a href="tel:+33782663598" className="text-white/50 hover:text-white transition-colors font-light">
                +33 7 82 66 35 98
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white/60" />
            </div>
            <div>
              <h3 className="text-white font-light mb-1">Adresse</h3>
              <p className="text-white/50 font-light">Reims, Grand Est</p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
