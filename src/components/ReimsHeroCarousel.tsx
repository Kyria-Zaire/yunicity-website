'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

// 6 Lieux touristiques emblématiques de Reims
const reimsLieux = [
  {
    id: 1,
    nom: 'Cathédrale Notre-Dame',
    categorie: 'Patrimoine UNESCO',
    image: 'https://images.unsplash.com/photo-1582139329536-9a1c1fad4be0?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: "Joyau gothique où étaient sacrés les rois de France. 2000 ans d'histoire gravés dans la pierre.",
    horaires: '7h30 - 19h30',
    conseil: 'Venez à 18h pour voir les vitraux s\'illuminer',
    tags: ['Histoire', 'Architecture', 'Gratuit']
  },
  {
    id: 2,
    nom: 'Caves Veuve Clicquot',
    categorie: 'Champagne & Prestige',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: "Plongée dans l'univers du champagne de prestige. 24 km de galeries souterraines.",
    horaires: '10h - 18h',
    conseil: 'Réservez la visite "Madame Clicquot" pour l\'expérience VIP',
    tags: ['Champagne', 'Dégustation', 'Visite']
  },
  {
    id: 3,
    nom: 'Place Drouet d\'Erlon',
    categorie: 'Vie Locale',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: "Cœur battant de Reims. Terrasses animées, commerces et ambiance authentique.",
    horaires: 'Toute la journée',
    conseil: 'Parfait pour l\'apéro le soir ou le brunch le dimanche',
    tags: ['Restaurants', 'Shopping', 'Ambiance']
  },
  {
    id: 4,
    nom: 'Palais du Tau',
    categorie: 'Musée Royal',
    image: 'https://images.unsplash.com/photo-1566127444979-b3d2b64d6e4d?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: "Ancien palais archiépiscopal, trésor des sacres royaux. Tapisseries médiévales exceptionnelles.",
    horaires: '9h30 - 18h',
    conseil: 'Ne manquez pas la tapisserie de saint Remi',
    tags: ['Culture', 'Histoire', 'Musée']
  },
  {
    id: 5,
    nom: 'Halles du Boulingrin',
    categorie: 'Marché Art Déco',
    image: 'https://images.unsplash.com/photo-1567696153798-96c5d15d9c87?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: "Temple de la gastronomie rémoise. Architecture Art Déco remarquable.",
    horaires: 'Mer, Ven, Sam matin',
    conseil: 'Goûtez les roses de Reims chez le boulanger du fond',
    tags: ['Gastronomie', 'Art Déco', 'Local']
  },
  {
    id: 6,
    nom: 'Parc de la Patte d\'Oie',
    categorie: 'Nature & Détente',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3',
    description: "Poumon vert de Reims. 22 hectares de nature pour une pause ressourçante.",
    horaires: '24h/24',
    conseil: 'Idéal pour un pique-nique en famille ou un jogging matinal',
    tags: ['Nature', 'Famille', 'Sport']
  }
]

export default function ReimsHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-slide toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % reimsLieux.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + reimsLieux.length) % reimsLieux.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const currentLieu = reimsLieux[currentIndex]

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 }
          }}
          className="absolute inset-0"
        >
          {/* Image background */}
          <div className="absolute inset-0">
            <Image
              src={currentLieu.image}
              alt={currentLieu.nom}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              sizes="100vw"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl">
                {/* Catégorie */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-6"
                >
                  <MapPin className="w-4 h-4" />
                  {currentLieu.categorie}
                </motion.div>

                {/* Nom du lieu */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                  {currentLieu.nom}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl sm:text-2xl text-gray-200 mb-8 font-light leading-relaxed"
                >
                  {currentLieu.description}
                </motion.p>

                {/* Info pratiques */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-6 mb-8"
                >
                  <div className="flex items-center gap-3 text-white">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="font-light">{currentLieu.horaires}</span>
                  </div>
                </motion.div>

                {/* Conseil local */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8"
                >
                  <p className="text-sm font-semibold text-blue-400 mb-2">Conseil local</p>
                  <p className="text-white font-light">{currentLieu.conseil}</p>
                </motion.div>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-3"
                >
                  {currentLieu.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        {/* Previous */}
        <button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white group"
          aria-label="Lieu précédent"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Dots */}
        <div className="flex gap-3">
          {reimsLieux.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-white'
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Aller au lieu ${index + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white group"
          aria-label="Lieu suivant"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Counter */}
      <div className="absolute top-24 right-12 z-20 text-white font-light text-lg">
        <span className="text-3xl font-bold">{(currentIndex + 1).toString().padStart(2, '0')}</span>
        <span className="text-white/50"> / {reimsLieux.length.toString().padStart(2, '0')}</span>
      </div>
    </section>
  )
}
