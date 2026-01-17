'use client'
import { motion } from 'framer-motion'

export default function ReimsBannerSection() {
  return (
    <section className="w-full bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden"
      >
        {/* Image de Reims - Grande et lumineuse */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1632854270303-f5fdb97b697f?q=80&w=2000&auto=format&fit=crop')`
          }}
        />

        {/* Léger overlay pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Contenu superposé */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 md:p-16">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="inline-block px-3 py-1 bg-white/90 text-blue-800 text-sm font-semibold rounded-full mb-3">
                Ville Pilote
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                Reims
              </h2>
              <p className="text-lg sm:text-xl text-white/90 font-medium max-w-xl">
                Capitale du Champagne, berceau de l'histoire de France et première ville Yunicity.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Section Partenaires sous l'image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="py-12 sm:py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-sm text-gray-400 font-medium text-center mb-8 uppercase tracking-widest">
            Ils nous soutiennent
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16">
            {/* Innovact */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <span className="text-xl sm:text-2xl font-bold text-gray-300 group-hover:text-blue-800 transition-colors duration-300 tracking-tight">
                INNOVACT
              </span>
            </motion.div>

            {/* Bpifrance */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <span className="text-xl sm:text-2xl font-bold text-gray-300 group-hover:text-blue-800 transition-colors duration-300 tracking-tight">
                Bpifrance
              </span>
            </motion.div>

            {/* French Tech */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <span className="text-xl sm:text-2xl font-bold text-gray-300 group-hover:text-blue-800 transition-colors duration-300 tracking-tight">
                La French Tech
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
