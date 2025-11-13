'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import DomeGallery from './DomeGallery'

export default function ReimsCallToActionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">
      {/* Header */}
      <div className="relative container mx-auto px-6 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
            Découvrez les{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Hubs des Villes
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
            Yunicity s'étend dans toute la France. Explorez les lieux historiques et emblématiques de chaque ville.
          </p>
        </motion.div>
      </div>

      {/* Dome Gallery */}
      <div style={{ width: '100%', height: '100vh' }}>
        <DomeGallery
          fit={0.5}
          fitBasis="auto"
          minRadius={600}
          maxRadius={Infinity}
          padFactor={0.25}
          overlayBlurColor="#000000"
          maxVerticalRotationDeg={5}
          dragSensitivity={20}
          enlargeTransitionMs={300}
          segments={35}
          dragDampening={2}
          openedImageWidth="400px"
          openedImageHeight="500px"
          imageBorderRadius="20px"
          openedImageBorderRadius="30px"
          grayscale={false}
        />
      </div>
    </section>
  )
}
