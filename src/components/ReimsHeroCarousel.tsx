'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MapPin, Clock } from 'lucide-react'
import Image from 'next/image'

// 6 Lieux touristiques emblématiques de Reims
const reimsLieux = [
  {
    id: 1,
    nom: 'Cathédrale Notre-Dame',
    categorie: 'Patrimoine UNESCO',
    image: 'https://images.unsplash.com/photo-1632854270303-f5fdb97b697f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935',
    description: "Joyau gothique où étaient sacrés les rois de France. 2000 ans d'histoire gravés dans la pierre.",
    horaires: '7h30 - 19h30',
    conseil: 'Venez à 18h pour voir les vitraux s\'illuminer',
    tags: ['Histoire', 'Architecture', 'Gratuit']
  },
  {
    id: 2,
    nom: 'Caves Veuve Clicquot',
    categorie: 'Champagne & Prestige',
    image: 'https://images.unsplash.com/photo-1562663729-4971d6802f4a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935',
    description: "Plongée dans l'univers du champagne de prestige. 24 km de galeries souterraines.",
    horaires: '10h - 18h',
    conseil: 'Réservez la visite "Madame Clicquot" pour l\'expérience VIP',
    tags: ['Champagne', 'Dégustation', 'Visite']
  },
  {
    id: 3,
    nom: 'Place Drouet d\'Erlon',
    categorie: 'Vie Locale',
    image: 'https://i0.wp.com/leblogduherisson.com/wp-content/uploads/2022/05/flaner-a-reims-1.jpg?fit=800%2C445&ssl=1',
    description: "Cœur battant de Reims. Terrasses animées, commerces et ambiance authentique.",
    horaires: 'Toute la journée',
    conseil: 'Parfait pour l\'apéro le soir ou le brunch le dimanche',
    tags: ['Restaurants', 'Shopping', 'Ambiance']
  },
  {
    id: 4,
    nom: 'Palais du Tau',
    categorie: 'Musée Royal',
    image: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-176197761_full.jpg?auto=format&q=40&ar=16:9&fit=crop&crop=center&fm=auto&w=1946',
    description: "Ancien palais archiépiscopal, trésor des sacres royaux. Tapisseries médiévales exceptionnelles.",
    horaires: '9h30 - 18h',
    conseil: 'Ne manquez pas la tapisserie de saint Remi',
    tags: ['Culture', 'Histoire', 'Musée']
  },
  {
    id: 5,
    nom: 'Halles du Boulingrin',
    categorie: 'Marché Art Déco',
    image: 'https://live.staticflickr.com/65535/32719178617_9fa260eece_b.jpg',
    description: "Temple de la gastronomie rémoise. Architecture Art Déco remarquable.",
    horaires: 'Mer, Ven, Sam matin',
    conseil: 'Goûtez les roses de Reims chez le boulanger du fond',
    tags: ['Gastronomie', 'Art Déco', 'Local']
  },
  {
    id: 6,
    nom: 'Parc de la Patte d\'Oie',
    categorie: 'Nature & Détente',
    image: 'https://img-4.linternaute.com/SOOZnjqOe0krRzWkt6jbRJHn8H4=/1240x/smart/3458804f0432447292a8efb84974d65d/ccmcms-linternaute/24012238.jpg',
    description: "Poumon vert de Reims. 22 hectares de nature pour une pause ressourçante.",
    horaires: '24h/24',
    conseil: 'Idéal pour un pique-nique en famille ou un jogging matinal',
    tags: ['Nature', 'Famille', 'Sport']
  }
]

export default function ReimsHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-slide toutes les 15 secondes
  useEffect(() => {
  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % reimsLieux.length)
  }

    const timer = setInterval(() => {
      nextSlide()
    }, 15000)

    return () => clearInterval(timer)
  }, [])

  // Navigation manuelle supprimée pour une expérience fluide

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
                  className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6"
                >
                  <MapPin className="w-4 h-4" />
                  {currentLieu.categorie}
                </motion.div>

                {/* Nom du lieu */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
                >
                  {currentLieu.nom}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 font-light leading-relaxed"
                >
                  {currentLieu.description}
                </motion.p>

                {/* Info pratiques */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8"
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
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8"
                >
                  <p className="text-xs sm:text-sm font-semibold text-blue-400 mb-1.5 sm:mb-2">Conseil local</p>
                  <p className="text-white font-light text-sm sm:text-base">{currentLieu.conseil}</p>
                </motion.div>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-2 sm:gap-3"
                >
                  {currentLieu.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs sm:text-sm font-light"
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

      {/* Navigation supprimée pour une expérience fluide */}
    </section>
  )
}
