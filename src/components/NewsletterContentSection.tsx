'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const categories = ['Toutes', 'Actualités', 'Découvertes', 'Communauté', 'Événements']

const newsletterItems = [
  {
    id: 1,
    category: 'Découvertes',
    title: 'Les secrets de la Cathédrale Notre-Dame',
    excerpt: 'Plongez dans l\'histoire millénaire de ce joyau gothique où furent sacrés 33 rois de France. Découvrez ses vitraux exceptionnels et ses galeries cachées.',
    image: 'https://images.unsplash.com/photo-1632854270303-f5fdb97b697f?q=80&w=1200&auto=format&fit=crop',
    date: '15 Jan 2025',
    reads: '2.4K',
    size: 'large'
  },
  {
    id: 2,
    category: 'Actualités',
    title: 'Reims dévoile son plan d\'urbanisme 2025-2030',
    excerpt: 'La municipalité présente ses projets de rénovation urbaine et de développement durable pour les prochaines années.',
    image: 'https://images.unsplash.com/photo-1760553120324-d3d2bf53852b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    date: '12 Jan 2025',
    reads: '5.1K',
    size: 'medium'
  },
  {
    id: 3,
    category: 'Communauté',
    title: 'Portrait : Les vignerons rémois passionnés',
    excerpt: 'Rencontre avec les artisans du champagne qui perpétuent les traditions séculaires de la région champenoise.',
    image: 'https://plus.unsplash.com/premium_photo-1664299278426-7b0c654e5617?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
    date: '10 Jan 2025',
    reads: '3.8K',
    size: 'medium'
  },
  {
    id: 4,
    category: 'Événements',
    title: 'Festival Flâneries Musicales de Reims 2025',
    excerpt: 'Le festival classique revient cet été avec 50 concerts dans les plus beaux lieux patrimoniaux de la ville.',
    image: 'https://images.unsplash.com/photo-1591341066369-3536f913190b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    date: '8 Jan 2025',
    reads: '1.9K',
    size: 'small'
  },
  {
    id: 5,
    category: 'Découvertes',
    title: 'Les Halles du Boulingrin révélées',
    excerpt: 'Explorez l\'architecture Art Déco exceptionnelle de ce marché emblématique, joyau des années 1920 au cœur de Reims.',
    image: 'https://live.staticflickr.com/65535/32719178617_9fa260eece_b.jpg',
    date: '5 Jan 2025',
    reads: '2.2K',
    size: 'small'
  },
  {
    id: 6,
    category: 'Actualités',
    title: 'Nouveau musée dédié à la Grande Guerre',
    excerpt: 'Reims inaugure un espace muséal moderne pour commémorer son histoire pendant la Première Guerre mondiale.',
    image: 'https://images.unsplash.com/photo-1604263368964-458cd7644b37?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1073',
    date: '3 Jan 2025',
    reads: '6.3K',
    size: 'large'
  },
  {
    id: 7,
    category: 'Communauté',
    title: 'L\'association des commerçants rémois se mobilise',
    excerpt: 'Les acteurs du commerce local lancent une campagne pour promouvoir les commerces de proximité et l\'artisanat.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    date: '1 Jan 2025',
    reads: '4.5K',
    size: 'medium'
  },
  {
    id: 8,
    category: 'Découvertes',
    title: 'Parc de la Patte d\'Oie : votre escape nature',
    excerpt: '22 hectares de verdure au cœur de Reims pour se ressourcer. Un écrin de nature à deux pas du centre-ville.',
    image: 'https://img-4.linternaute.com/SOOZnjqOe0krRzWkt6jbRJHn8H4=/1240x/smart/3458804f0432447292a8efb84974d65d/ccmcms-linternaute/24012238.jpg',
    date: '29 Dec 2024',
    reads: '1.7K',
    size: 'small'
  },
  {
    id: 9,
    category: 'Événements',
    title: 'Marché de Noël et animations hivernales',
    excerpt: 'Le marché de Noël de Reims illumine la Place Drouet d\'Erlon jusqu\'à fin janvier avec ses chalets et animations.',
    image: 'https://images.unsplash.com/photo-1638295508084-3a83cccd1667?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
    date: '27 Dec 2024',
    reads: '2.8K',
    size: 'large'
  },
  {
    id: 10,
    category: 'Actualités',
    title: 'Extension du réseau de transports en commun',
    excerpt: 'La ville annonce de nouvelles lignes de bus et l\'amélioration de la connectivité vers les quartiers périphériques.',
    image: 'https://images.unsplash.com/photo-1690266607188-e7e39d00b894?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    date: '25 Dec 2024',
    reads: '3.2K',
    size: 'medium'
  },
  {
    id: 11,
    category: 'Découvertes',
    title: 'Les caves de champagne Veuve Clicquot',
    excerpt: 'Parcourez les 24 km de galeries souterraines classées au patrimoine mondial de l\'UNESCO sous la ville.',
    image: 'https://images.unsplash.com/photo-1724082111671-eb2a4c01d40d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    date: '22 Dec 2024',
    reads: '4.8K',
    size: 'medium'
  },
  {
    id: 12,
    category: 'Événements',
    title: 'Festival de jazz "Reims en Scène"',
    excerpt: 'Le festival de jazz revient en mai avec des concerts dans les jardins de l\'Hôtel de Ville et la Basilique Saint-Remi.',
    image: 'https://images.unsplash.com/photo-1562593623-9731b885cd0d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    date: '20 Dec 2024',
    reads: '2.1K',
    size: 'small'
  }
]

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Actualités': { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  'Découvertes': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
  'Communauté': { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  'Événements': { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20' }
}

export default function NewsletterContentSection() {
  const [activeCategory, setActiveCategory] = useState('Toutes')

  const filteredItems = activeCategory === 'Toutes' 
    ? newsletterItems 
    : newsletterItems.filter(item => item.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  }

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-indigo-900 via-violet-800 to-indigo-900 overflow-hidden">
      {/* Glow effects subtils */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full blur-sm"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Grille subtile */}
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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
          >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight leading-[1.1]">
            Actualités &{' '}
            <span className="bg-gradient-to-r from-violet-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent font-extralight">
              Découvertes
            </span>
          </h2>
          <p className="text-base md:text-lg text-violet-200/80 leading-relaxed max-w-2xl mx-auto font-extralight">
            Restez informé des dernières actualités et découvrez les secrets de votre ville
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
        >
          {categories.map((category, index) => {
            const isActive = activeCategory === category
            return (
              <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-2.5 rounded-full font-extralight text-sm transition-all duration-500 tracking-wide ${
                  isActive
                    ? 'text-white'
                    : 'text-violet-200/70 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-lg"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full border border-white/10" />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredItems.map((item) => {
              const categoryColor = categoryColors[item.category] || { bg: 'bg-gray-500/10', text: 'text-gray-400', border: 'border-gray-500/20' }
              const isLarge = item.size === 'large'

              return (
                <motion.article
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative ${isLarge ? 'md:col-span-2' : ''} rounded-2xl overflow-hidden cursor-pointer bg-black/40 backdrop-blur-xl border border-gray-800/50 hover:border-gray-700/70 shadow-xl hover:shadow-2xl transition-all duration-700`}
                >
                  {/* Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    />
                    {/* Gradient overlay - Plus clair */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-extralight tracking-wide backdrop-blur-xl border ${categoryColor.bg} ${categoryColor.text} ${categoryColor.border} shadow-lg`}>
                        {item.category}
                      </span>
                    </div>
                    </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-light text-white mb-3 leading-tight tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:to-indigo-300 transition-all duration-700">
                        {item.title}
                      </h3>
                    <p className="text-violet-200/70 mb-6 leading-relaxed line-clamp-2 text-sm md:text-base font-extralight group-hover:text-violet-100 transition-colors duration-500">
                        {item.excerpt}
                      </p>

                      {/* Meta Info */}
                    <div className="flex items-center justify-between mb-6 text-xs text-violet-300/60 font-extralight">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                            {item.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                            {item.reads} lecteurs
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                    <div className="flex items-center gap-2 text-white/80 font-extralight text-sm group-hover:gap-3 group-hover:text-white transition-all duration-500">
                      <span>Lire l'article</span>
                      <ArrowRight 
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-indigo-500/0 to-violet-500/0 group-hover:from-violet-500/5 group-hover:via-indigo-500/5 group-hover:to-violet-500/5 transition-all duration-700 pointer-events-none rounded-2xl" />
                </motion.article>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
