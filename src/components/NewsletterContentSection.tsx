'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, ArrowRight, Filter } from 'lucide-react'
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

const categoryColors: Record<string, string> = {
  'Actualités': 'from-blue-500 to-cyan-500',
  'Découvertes': 'from-purple-500 to-pink-500',
  'Communauté': 'from-emerald-500 to-teal-500',
  'Événements': 'from-orange-500 to-red-500'
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
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Grille subtile */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold mb-8"
          >
            <Filter className="w-4 h-4" />
            Newsletter Yunicity
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Actualités &{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Découvertes
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Restez informé des dernières actualités et découvrez les secrets de votre ville
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Mosaic Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr"
          >
            {filteredItems.map((item) => {
              const heightClass = item.size === 'large' 
                ? 'md:row-span-2 lg:col-span-2' 
                : item.size === 'medium'
                ? 'md:row-span-1 lg:col-span-1'
                : 'md:row-span-1 lg:col-span-1'

              return (
                <motion.article
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative ${heightClass} rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-300`}
                >
                  {/* Image Background */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[item.category] || 'from-gray-500 to-gray-700'} opacity-20 mix-blend-overlay`} />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-8">
                    {/* Top - Category Badge */}
                    <div>
                      <span className={`inline-flex px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${categoryColors[item.category] || 'from-gray-500 to-gray-700'} text-white shadow-lg`}>
                        {item.category}
                      </span>
                    </div>

                    {/* Bottom - Content */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                        {item.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {item.date}
                          </span>
                          <span className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            {item.reads} lecteurs
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300">
                        <span>Lire l'article</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
