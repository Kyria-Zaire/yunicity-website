'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  TrendingUp,
  Users,
  Target,
  Building,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const opportunityPoints = [
  {
    icon: Target,
    title: "Marché Énorme & Inexploité",
    description: "Le marché des applications locales en France représente 15M€ adressables avec une croissance de 25% par an. Nous ciblons les villes moyennes (50K-200K habitants) totalement sous-servies.",
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: Users,
    title: "Équipe d'Excellence",
    description: "5 co-fondateurs complémentaires avec expertise en tech, finance, créatif, growth et leadership. Vision claire, roadmap détaillée, premiers partenaires signés.",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: TrendingUp,
    title: "Business Model Prouvé",
    description: "4 sources de revenus diversifiées : Freemium (40%), B2B (35%), Publicité (20%), Événements (5%). Marge brute de 85% et CAC/LTV ratio de 1:5.",
    color: "from-green-600 to-emerald-600"
  },
  {
    icon: Building,
    title: "Traction Pré-lancement",
    description: "2,847 inscrits sur la waitlist, 15 partenaires locaux signés à Reims, validation du besoin par 120+ interviews utilisateurs.",
    color: "from-orange-600 to-red-600"
  }
]

const investmentBenefits = [
  'Entrée au capital de la société',
  'Participation aux décisions stratégiques',
  'Reporting mensuel détaillé',
  'Accès privilégié aux metrics clés',
  'Réseau d\'investisseurs co-investisseurs',
  'Exit potentiel sous 5-7 ans'
]

export default function InvestirOpportunitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Grille subtile */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Pourquoi investir dans Yunicity ?
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
            Une opportunité unique de participer à la révolution des communautés locales
          </p>
        </motion.div>

        {/* Opportunity Points Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-7xl mx-auto">
          {opportunityPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-gray-900/10 backdrop-blur-md rounded-3xl p-10 border border-gray-300/40 hover:border-gray-400/60 transition-all duration-300 h-full shadow-sm">
                {/* Icon */}
                <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${point.color} flex items-center justify-center shadow-xl`}>
                  <point.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r ${point.color} bg-clip-text text-transparent`}>
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investment Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-md rounded-3xl p-12 border border-blue-100 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Avantages Investisseurs</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {investmentBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex items-center justify-center gap-2 text-blue-600 font-semibold text-lg group cursor-pointer"
              whileHover={{ x: 5 }}
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Contactez-nous pour le Pitch Deck complet</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
