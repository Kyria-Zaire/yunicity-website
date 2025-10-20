'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

// Carousel stories - 6 histoires avec messages impactants et vraies images de Reims
const heroStories = [
  {
    id: 1,
    // Cathédrale Notre-Dame de Reims
    image: 'https://images.unsplash.com/photo-1582139329536-9a1c1fad4be0?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3',
    title: 'Le territoire souffre',
    subtitle: "d'un manque de lien",
    description: "Information éparpillée, sentiment d'exclusion : 50% des Français (34M) non engagés localement.",
    stats: [
      { value: '34M', label: 'Français désengagés' },
      { value: '68%', label: "Sentiment d'isolement" },
      { value: '0', label: 'Solution centralisée' }
    ]
  },
  {
    id: 2,
    // Place Drouet d'Erlon - Terrasses et vie locale à Reims
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3',
    title: 'Yunicity répond',
    subtitle: 'au vide du marché',
    description: "En centralisant, filtrant et rendant accessible l'information locale. Une solution unique.",
    stats: [
      { value: '1 app', label: 'Toute l\'info locale' },
      { value: '100%', label: 'Contenu vérifié' },
      { value: 'IA', label: 'Personnalisation' }
    ]
  },
  {
    id: 3,
    // Marché local et commerces de Reims
    image: 'https://images.unsplash.com/photo-1567696153798-96c5d15d9c87?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3',
    title: 'Soutenons',
    subtitle: "l'économie locale",
    description: "Chaque euro dépensé localement génère 3€ de retombées. Consommons local, vivons mieux.",
    stats: [
      { value: '150+', label: 'Commerces partenaires' },
      { value: '25%', label: 'Réduction moyenne' },
      { value: 'x3', label: 'Effet multiplicateur' }
    ]
  },
  {
    id: 4,
    // Cave de Champagne à Reims
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3',
    title: 'Redécouvrez',
    subtitle: 'votre patrimoine',
    description: "Des caves de champagne à la cathédrale : 2000 ans d'histoire. Retrouvez la fierté locale.",
    stats: [
      { value: '800+', label: 'Lieux authentiques' },
      { value: '12', label: 'Quartiers mappés' },
      { value: '2000', label: "Ans d'histoire" }
    ]
  },
  {
    id: 5,
    // Groupe de personnes connectées - Communauté
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3',
    title: 'Recréons',
    subtitle: 'du lien social',
    description: "Brisons l'isolement urbain. Tribus locales, événements de proximité, connexions authentiques.",
    stats: [
      { value: '5,200', label: 'Membres actifs' },
      { value: '45', label: 'Événements/mois' },
      { value: '1,800', label: 'Connexions créées' }
    ]
  },
  {
    id: 6,
    // Vue aérienne moderne de ville française
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3',
    title: 'De Reims',
    subtitle: 'à toute la France',
    description: "Un mouvement national pour reconnecter 34M de Français à leur territoire. Rejoignez-nous.",
    stats: [
      { value: 'Reims', label: 'Ville pilote 2026' },
      { value: '50+', label: 'Villes ciblées 2030' },
      { value: '5M€', label: 'ARR objectif 2030' }
    ]
  },
]

// Countdown timer component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2026-03-01T00:00:00').getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { label: 'Jours', value: timeLeft.days },
    { label: 'Heures', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds }
  ]

  return (
    <div className="flex justify-center gap-3">
      {units.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl px-3 py-2 min-w-[60px] border border-white/20">
            <div className="text-2xl font-light text-white mb-0.5 tabular-nums">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-xs text-white/80 font-light">
              {item.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function Hero3D() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-scroll carousel every 15 seconds (increased from 8s)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroStories.length)
    }, 15000)

    return () => clearInterval(timer)
  }, [])

  const currentStory = heroStories[currentIndex]

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background carousel with images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStory.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${currentStory.image})`,
            }}
          />

          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full py-24">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left column - Story content */}
            <div>
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-8"
              >
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/80 text-sm font-light">Lancement Mars 2026 • Reims</span>
              </motion.div>

              {/* Animated story title */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStory.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mb-8"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-3 tracking-tight leading-[1.1]">
                    {currentStory.title}
                    <span className="block font-normal text-white/90 mt-2">
                      {currentStory.subtitle}
                    </span>
                  </h1>
                </motion.div>
              </AnimatePresence>

              {/* Animated story description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${currentStory.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed max-w-xl font-light"
                >
                  {currentStory.description}
                </motion.p>
              </AnimatePresence>

              {/* Stats - Dynamic KPIs per slide */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`stats-${currentStory.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-8 mb-12 pb-12 border-b border-white/20"
                >
                  {currentStory.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="text-3xl font-light text-white mb-1 tabular-nums">{stat.value}</div>
                      <div className="text-sm text-white/70 font-light">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#solution"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-light text-lg transition-colors duration-200 rounded-full"
                >
                  Découvrir Yunicity
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#newsletter"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-light text-lg transition-all duration-200 rounded-full"
                >
                  Rejoindre le mouvement
                </a>
              </motion.div>
            </div>

            {/* Right column - Countdown & Indicators */}
            <div className="space-y-6">

              {/* Countdown card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
              >
                <div className="text-center mb-6">
                  <h3 className="text-white font-light text-lg mb-1">Lancement dans</h3>
                  <p className="text-white/70 text-sm font-light">Mars 2026 • Reims</p>
                </div>
                <CountdownTimer />
              </motion.div>

              {/* Carousel indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center gap-2"
              >
                {heroStories.map((story, index) => (
                  <button
                    key={story.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-white'
                        : 'w-1.5 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Aller à l'histoire ${index + 1}`}
                  />
                ))}
              </motion.div>

              {/* Story counter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center"
              >
                <p className="text-white/60 text-sm font-light">
                  {currentIndex + 1} / {heroStories.length}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <p className="text-white/70 text-sm font-light">
              Rejoignez les 2,847 personnes qui construisent la ville de demain
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
