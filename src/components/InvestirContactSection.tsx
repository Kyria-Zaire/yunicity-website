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
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-8 h-8 text-white" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">Rendez-vous confirmé !</h2>
            <p className="text-base text-gray-300 mb-6 leading-relaxed">
              Merci <span className="text-purple-400 font-normal">{formData.name}</span> !
              <br />
              Votre rendez-vous est prévu le{' '}
              <span className="text-white font-normal">
                {selectedDate?.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à {selectedTime}
              </span>
            </p>

            {/* Liens calendrier */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <motion.a
                href={generateCalendarLink('google')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white font-light text-sm border border-white/20 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                Ajouter à Google Calendar
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href={generateCalendarLink('outlook')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white font-light text-sm border border-white/20 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                Ajouter à Outlook
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </div>

            <motion.a
              href="/investir"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 rounded-full text-white font-light text-base transition-colors"
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
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-light text-xs mb-6"
          >
            <Calendar className="w-3.5 h-3.5" />
            PRENEZ RENDEZ-VOUS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight"
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
            className="text-base text-gray-400 font-light leading-relaxed max-w-3xl mx-auto"
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
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8"
        >
                {/* Navigation du mois */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <motion.button
                    onClick={prevMonth}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </motion.button>
                  
                  <motion.h3 
                    key={`${currentDate.getMonth()}-${currentDate.getFullYear()}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                    className="text-lg sm:text-xl font-light text-white text-center px-2"
                  >
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </motion.h3>
                  
                  <motion.button
                    onClick={nextMonth}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </motion.button>
                  </div>

                {/* Jours de la semaine */}
                <div className="grid grid-cols-7 gap-1 sm:gap-1.5 mb-2 sm:mb-3">
                  {weekDays.map((day) => (
                    <div key={day} className="text-center text-[10px] sm:text-xs text-gray-400 font-extralight py-1">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendrier */}
                <div className="grid grid-cols-7 gap-1 sm:gap-1.5 mb-4 sm:mb-6">
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
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { 
                            duration: 0.3, 
                            delay: index * 0.01,
                            ease: [0.16, 1, 0.3, 1] as const
                          }
                        }}
                        whileHover={!isDisabled ? { 
                          scale: 1.05,
                          transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }
                        } : {}}
                        whileTap={!isDisabled ? { 
                          scale: 0.95,
                          transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] as const }
                        } : {}}
                        className={`relative aspect-square rounded-md text-[10px] sm:text-xs font-extralight transition-all duration-300 ${
                          isSelected
                            ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-md shadow-purple-500/30'
                            : isTodayDate
                            ? 'bg-white/10 text-white border border-purple-400/40'
                            : isDisabled
                            ? 'bg-transparent text-gray-600/50 cursor-not-allowed'
                            : 'bg-transparent text-white/80 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="selectedDate"
                            className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                        {isTodayDate && !isSelected && (
                          <motion.div
                            className="absolute inset-0 border border-purple-400/40 rounded-lg"
                            animate={{
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                          />
                        )}
                        <span className="relative z-10">{date.getDate()}</span>
                      </motion.button>
              )
            })}
          </div>

                {/* Créneaux horaires */}
                {selectedDate && (
            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.5, 
                        ease: [0.16, 1, 0.3, 1] as const
                      }
                    }}
                    className="mt-6 pt-6 border-t border-white/10"
                  >
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                      >
                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                      </motion.div>
                      <h4 className="text-sm sm:text-base font-light text-white">
                        <span className="hidden sm:inline">Créneaux disponibles le </span>
                        <span className="sm:hidden">Le </span>
                        {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                      </h4>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-1.5 sm:gap-2">
                      {timeSlots.map((time, index) => {
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
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ 
                              opacity: 1, 
                              scale: 1,
                              transition: { 
                                duration: 0.3, 
                                delay: index * 0.02,
                                ease: [0.16, 1, 0.3, 1] as const
                              }
                            }}
                            whileHover={!isPast ? { 
                              scale: 1.05,
                              transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }
                            } : {}}
                            whileTap={!isPast ? { 
                              scale: 0.95,
                              transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] as const }
                            } : {}}
                            className={`relative px-3 py-1.5 rounded-lg text-xs font-extralight transition-all duration-300 ${
                              isSelected
                                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md shadow-purple-500/30'
                                : isPast
                                ? 'bg-transparent text-gray-600/50 cursor-not-allowed border border-white/5'
                                : 'bg-transparent text-white/80 hover:bg-white/5 hover:text-white border border-white/10'
                            }`}
                          >
                            {isSelected && (
                              <motion.div
                                layoutId="selectedTime"
                                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                              />
                            )}
                            <span className="relative z-10">{time}</span>
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
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                    className="mt-6 sm:mt-8 flex justify-end"
                  >
                    <motion.button
                      onClick={handleNext}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                      className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 rounded-full text-white font-extralight text-xs sm:text-sm transition-all duration-500 flex items-center gap-1.5 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                      Continuer
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
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
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8"
              >
                {/* Récapitulatif du rendez-vous */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                  className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base font-light text-white mb-1.5 sm:mb-2">Récapitulatif du rendez-vous</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span className="text-[10px] sm:text-xs font-light">
                            {selectedDate?.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span className="text-[10px] sm:text-xs font-light">{selectedTime}</span>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      onClick={handlePrevious}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                      className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                      <ChevronLeft className="w-3.5 h-3.5 text-white" />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Formulaire */}
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                      <label className="block text-white/60 font-extralight mb-1.5 text-[10px] sm:text-xs tracking-wide">Nom complet *</label>
                      <div className="relative group">
                        <motion.div
                          animate={{ 
                            scale: formData.name ? 1 : 0.95,
                            opacity: formData.name ? 1 : 0.7
                          }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                        >
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-white/40 group-focus-within:text-purple-400 transition-colors duration-300" />
                        </motion.div>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/8 focus:shadow-lg focus:shadow-purple-500/10 transition-all duration-500 font-extralight text-sm"
                          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                          placeholder="Jean Dupont"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                      <label className="block text-white/60 font-extralight mb-1.5 text-[10px] sm:text-xs tracking-wide">Email *</label>
                      <div className="relative group">
                        <motion.div
                          animate={{ 
                            scale: formData.email ? 1 : 0.95,
                            opacity: formData.email ? 1 : 0.7
                          }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                        >
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-white/40 group-focus-within:text-purple-400 transition-colors duration-300" />
                        </motion.div>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/8 focus:shadow-lg focus:shadow-purple-500/10 transition-all duration-500 font-extralight text-sm"
                          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                          placeholder="jean@fonds-investissement.com"
                        />
                      </div>
                      </motion.div>
                    </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                      <label className="block text-white/60 font-extralight mb-1.5 text-[10px] sm:text-xs tracking-wide">Société / Fonds</label>
                      <div className="relative group">
                        <motion.div
                          animate={{ 
                            scale: formData.company ? 1 : 0.95,
                            opacity: formData.company ? 1 : 0.7
                          }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                        >
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-white/40 group-focus-within:text-purple-400 transition-colors duration-300" />
                        </motion.div>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-9 pr-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/8 focus:shadow-lg focus:shadow-purple-500/10 transition-all duration-500 font-extralight text-sm"
                          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                          placeholder="Nom de votre société"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                      <label className="block text-white/60 font-extralight mb-1.5 text-[10px] sm:text-xs tracking-wide">Téléphone</label>
                      <div className="relative group">
                        <motion.div
                          animate={{ 
                            scale: formData.phone ? 1 : 0.95,
                            opacity: formData.phone ? 1 : 0.7
                          }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                        >
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-white/40 group-focus-within:text-purple-400 transition-colors duration-300" />
                        </motion.div>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/8 focus:shadow-lg focus:shadow-purple-500/10 transition-all duration-500 font-extralight text-sm"
                          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                    </motion.div>
                    </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                  >
                    <label className="block text-white/60 font-extralight mb-1.5 text-[10px] sm:text-xs tracking-wide">Montant souhaité *</label>
                        <div className="relative group">
                      <motion.div
                        animate={{ 
                          scale: formData.investmentRange ? 1 : 0.95,
                          opacity: formData.investmentRange ? 1 : 0.7
                        }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                      >
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-white/40 group-focus-within:text-purple-400 transition-colors duration-300" />
                      </motion.div>
                          <input
                            type="text"
                            required
                        value={formData.investmentRange}
                        onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/8 focus:shadow-lg focus:shadow-purple-500/10 transition-all duration-500 font-extralight text-sm"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                        placeholder="Ex: 100 000€ ou 50K-100K€"
                      />
                    </div>
                    <p className="text-white/30 text-[10px] sm:text-xs mt-1 font-extralight">Indiquez le montant ou la fourchette d'investissement souhaitée</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                    <label className="block text-white/60 font-extralight mb-1.5 text-[10px] sm:text-xs tracking-wide">Message</label>
                      <textarea
                        value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/8 focus:shadow-lg focus:shadow-purple-500/10 transition-all duration-500 resize-none font-extralight text-sm"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                      placeholder="Parlez-nous de votre intérêt..."
                      />
                    </motion.div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 rounded-full text-white font-extralight text-sm sm:text-base disabled:opacity-50 transition-all duration-500 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    whileHover={{ 
                      scale: status !== 'loading' ? 1.02 : 1,
                      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }
                    }}
                    whileTap={{ 
                      scale: status !== 'loading' ? 0.98 : 1,
                      transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] as const }
                    }}
                  >
                    <AnimatePresence mode="wait">
                    {status === 'loading' ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                          className="flex items-center gap-2"
                        >
                          <motion.div
                            className="w-4 h-4 border-2 border-white/80 border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Envoi...</span>
                        </motion.div>
                    ) : (
                        <motion.div
                          key="confirm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4" />
                        <span>Confirmer le rendez-vous</span>
                        </motion.div>
                    )}
                    </AnimatePresence>
                  </motion.button>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
                    className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-white/40 font-extralight"
                  >
                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400" />
                    <span>Réponse sous 48h • Confidentialité garantie</span>
              </motion.div>
                </form>
                </motion.div>
              )}
          </AnimatePresence>
          </div>
      </div>
    </section>
  )
}
