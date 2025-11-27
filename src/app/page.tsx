'use client'
import Hero3D from '@/components/Hero3D'
import Navigation from '@/components/Navigation'
import NewsletterSubscribeSection from '@/components/NewsletterSubscribeSection'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import Link from 'next/link'
import { ArrowRight, Users, Lightbulb, MapPin, Target, Star, Brain, Calendar, Activity, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import FranceMap from '@/components/FranceMap'

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'YUNICITY',
    url: 'https://yunicity-website.vercel.app',
    logo: 'https://yunicity-website.vercel.app/yunicity-logo.png',
    description: 'La première super-app locale qui reconnecte les habitants à leur territoire',
    foundingDate: '2024',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Reims',
        addressRegion: 'Grand Est',
        addressCountry: 'FR'
      }
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'yu.entreprise@gmail.com',
      contactType: 'Customer Service',
      areaServed: 'FR',
      availableLanguage: 'French'
    },
    sameAs: [
      'https://www.instagram.com/yunicity.app',
      'https://www.linkedin.com/in/yunicity-app-381bb7230',
      'https://www.facebook.com/share/1Eu3J5rE9P/'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Reims',
      addressRegion: 'Grand Est',
      addressCountry: 'FR'
    }
  }

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'YUNICITY',
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1'
    },
    description: 'Application mobile qui reconnecte les habitants à leur territoire local',
    releaseNotes: 'Lancement MVP prévu en Mars 2026 à Reims'
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'YUNICITY',
    url: 'https://yunicity-website.vercel.app',
    description: 'La première super-app locale qui reconnecte les habitants à leur territoire',
    publisher: {
      '@type': 'Organization',
      name: 'YUNICITY'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://yunicity-website.vercel.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <div className="min-h-screen">
      <StructuredData data={[organizationSchema, softwareApplicationSchema, websiteSchema]} />
      <Navigation activeSection="" />

      <Hero3D />

      {/* Introduction Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Redécouvrez votre ville
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Yunicity est la plateforme qui reconnecte les habitants à leur territoire.
              Découvrez les lieux, événements et la communauté autour de vous.
            </p>
          </div>

          {/* CTA Cards Grid - Apple Glass Gray */}
          <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto">
            <Link href="/probleme" className="group bg-gray-400/30 backdrop-blur-2xl border border-gray-400/40 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:bg-gray-500/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <Target className="w-5 h-5 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1.5 flex items-center gap-2">
                    Le Problème
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 font-light">
                    34M de Français non engagé, fragmentés entre 15+ applications
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/solution" className="group bg-gray-400/30 backdrop-blur-2xl border border-gray-400/40 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:bg-gray-500/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <Lightbulb className="w-5 h-5 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1.5 flex items-center gap-2">
                    Notre Solution
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 font-light">
                    Le Hub unique qui centralise toute votre vie locale
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/reims" className="group bg-gray-400/30 backdrop-blur-2xl border border-gray-400/40 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:bg-gray-500/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <MapPin className="w-5 h-5 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1.5 flex items-center gap-2">
                    Découverte Reims
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 font-light">
                    6 lieux authentiques sélectionnés par nos ambassadeurs
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/equipe" className="group bg-gray-400/30 backdrop-blur-2xl border border-gray-400/40 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:bg-gray-500/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <Users className="w-5 h-5 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1.5 flex items-center gap-2">
                    L'Équipe
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 font-light">
                    4 experts passionnés unis par une mission commune
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Villes en expansion */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-3 tracking-tight">
              Villes en{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
                expansion
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Yunicity s'étend progressivement à travers la France
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Carte de France stylisée */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-lg sm:rounded-xl p-6 sm:p-8"
            >
              <h3 className="text-base sm:text-lg font-light text-gray-900 mb-4 tracking-tight">
                Carte de France
              </h3>
              <div className="relative h-[300px] sm:h-[400px] bg-gradient-to-br from-gray-50 to-white rounded-lg overflow-hidden">
                <FranceMap />
              </div>
            </motion.div>

            {/* Liste des villes avec statistiques */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 sm:space-y-4"
            >
              {[
                { name: 'Reims', status: 'active', population: '183 000', acteurs: 180, evenements: 45, bgColor: 'from-blue-500/10 to-cyan-500/10', borderColor: 'border-blue-200/50' },
                { name: 'Troyes', status: 'active', population: '62 000', acteurs: 150, evenements: 32, bgColor: 'from-purple-500/10 to-pink-500/10', borderColor: 'border-purple-200/50' },
                { name: 'Châlons-en-Champagne', status: 'active', population: '45 000', acteurs: 120, evenements: 28, bgColor: 'from-green-500/10 to-emerald-500/10', borderColor: 'border-green-200/50' },
                { name: 'Paris', status: 'coming', population: '2,1M', acteurs: 0, evenements: 0, bgColor: 'from-gray-400/10 to-gray-500/10', borderColor: 'border-gray-300/50' },
                { name: 'Lyon', status: 'coming', population: '520 000', acteurs: 0, evenements: 0, bgColor: 'from-gray-400/10 to-gray-500/10', borderColor: 'border-gray-300/50' },
                { name: 'Bordeaux', status: 'coming', population: '260 000', acteurs: 0, evenements: 0, bgColor: 'from-gray-400/10 to-gray-500/10', borderColor: 'border-gray-300/50' }
              ].map((city, index) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  className={`bg-white/80 backdrop-blur-xl border ${city.borderColor} rounded-lg sm:rounded-xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${city.bgColor} border ${city.borderColor} flex items-center justify-center`}>
                        <MapPin className={`w-5 h-5 ${city.status === 'active' ? 'text-blue-600' : 'text-gray-500'}`} />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-light text-gray-900 tracking-tight">
                          {city.name}
                        </h3>
                        <span className={`text-[10px] sm:text-xs font-light ${city.status === 'active' ? 'text-green-600' : 'text-gray-500'}`}>
                          {city.status === 'active' ? 'Actif' : 'Bientôt disponible'}
                        </span>
                      </div>
                    </div>
                  </div>
                  {city.status === 'active' && (
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      <div>
                        <div className="text-xs sm:text-sm font-light text-gray-900 tabular-nums">{city.population}</div>
                        <div className="text-[10px] text-gray-600 font-light">Habitants</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-light text-gray-900 tabular-nums">{city.acteurs}</div>
                        <div className="text-[10px] text-gray-600 font-light">Acteurs</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-light text-gray-900 tabular-nums">{city.evenements}</div>
                        <div className="text-[10px] text-gray-600 font-light">Événements</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités clés */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-3 tracking-tight">
              Fonctionnalités{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
                clés
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour reconnecter avec votre ville en un seul endroit
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                icon: Star,
                title: 'Hub d\'informations',
                description: 'Centralisation de toute l\'information locale sur une seule plateforme',
                color: 'from-purple-500/10 to-pink-500/10',
                borderColor: 'border-purple-200/50',
                iconColor: 'text-purple-600'
              },
              {
                icon: Users,
                title: 'Communauté',
                description: 'Espace d\'échange et de connexion entre les habitants',
                color: 'from-blue-500/10 to-cyan-500/10',
                borderColor: 'border-blue-200/50',
                iconColor: 'text-blue-600'
              },
              {
                icon: MapPin,
                title: 'Carte interactive 3D',
                description: 'Géolocalisation et visualisation des points d\'intérêt',
                color: 'from-green-500/10 to-emerald-500/10',
                borderColor: 'border-green-200/50',
                iconColor: 'text-green-600'
              },
              {
                icon: Brain,
                title: 'Intelligence artificielle',
                description: 'Recommandations personnalisées et chatbot local',
                color: 'from-orange-500/10 to-red-500/10',
                borderColor: 'border-orange-200/50',
                iconColor: 'text-orange-600'
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`group bg-white/80 backdrop-blur-xl border ${feature.borderColor} rounded-lg sm:rounded-xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${feature.color} border ${feature.borderColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-sm sm:text-base font-light text-gray-900 mb-1.5 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-600 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <NewsletterSubscribeSection />

      {/* Section Statistiques & Impact */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-3 tracking-tight">
              Statistiques &{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
                Impact
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Des résultats concrets qui transforment la vie locale
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                icon: Users,
                value: '10 000+',
                label: 'Utilisateurs',
                description: 'Dans les 3 premiers mois',
                progress: 100,
                color: 'from-blue-500 to-cyan-500',
                bgColor: 'from-blue-500/10 to-cyan-500/10',
                borderColor: 'border-blue-200/50',
                iconColor: 'text-blue-600'
              },
              {
                icon: MapPin,
                value: '3',
                label: 'Villes pilotes',
                description: 'Reims, Troyes, Châlons',
                progress: 100,
                color: 'from-purple-500 to-pink-500',
                bgColor: 'from-purple-500/10 to-pink-500/10',
                borderColor: 'border-purple-200/50',
                iconColor: 'text-purple-600'
              },
              {
                icon: Calendar,
                value: '500+',
                label: 'Événements',
                description: 'Créés chaque mois',
                progress: 85,
                color: 'from-green-500 to-emerald-500',
                bgColor: 'from-green-500/10 to-emerald-500/10',
                borderColor: 'border-green-200/50',
                iconColor: 'text-green-600'
              },
              {
                icon: Activity,
                value: '65%',
                label: 'Engagement',
                description: 'Taux de participation actif',
                progress: 65,
                color: 'from-orange-500 to-red-500',
                bgColor: 'from-orange-500/10 to-red-500/10',
                borderColor: 'border-orange-200/50',
                iconColor: 'text-orange-600'
              }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`group bg-white/80 backdrop-blur-xl border ${stat.borderColor} rounded-lg sm:rounded-xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${stat.bgColor} border ${stat.borderColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.iconColor}`} />
                  </div>
                  <div className="text-xl sm:text-2xl font-light text-gray-900 mb-0.5 tabular-nums">
                    {stat.value}
                  </div>
                  <h3 className="text-sm sm:text-base font-light text-gray-900 mb-0.5 tracking-tight">
                    {stat.label}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-600 font-light mb-3 leading-relaxed">
                    {stat.description}
                  </p>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-3 tracking-tight">
              Questions{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
                fréquentes
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur Yunicity
            </p>
          </motion.div>

          <FAQAccordion />
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Composant FAQ Accordion
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Qu\'est-ce que Yunicity ?',
      answer: 'Yunicity est la première super-app locale qui reconnecte les habitants à leur territoire. Elle centralise toute l\'information locale (actualités, événements, commerces) et permet aux habitants de créer du lien social authentique dans leur ville.'
    },
    {
      question: 'Quand Yunicity sera-t-elle disponible ?',
      answer: 'Yunicity sera lancée en juillet 2026 dans 3 villes pilotes : Reims, Troyes et Châlons-en-Champagne. L\'expansion vers d\'autres villes françaises suivra progressivement.'
    },
    {
      question: 'Yunicity est-elle gratuite ?',
      answer: 'Oui, Yunicity est entièrement gratuite pour les habitants. Les acteurs locaux (commerces, associations, mairies) peuvent choisir des options premium pour améliorer leur visibilité.'
    },
    {
      question: 'Comment puis-je rejoindre la bêta ?',
      answer: 'Vous pouvez vous inscrire à notre newsletter pour être notifié dès l\'ouverture de la bêta. Nous sélectionnerons les premiers utilisateurs parmi les inscrits pour tester l\'application avant le lancement officiel.'
    },
    {
      question: 'Yunicity fonctionne-t-elle hors ligne ?',
      answer: 'Certaines fonctionnalités comme la consultation des informations sauvegardées et la carte sont accessibles hors ligne. Cependant, une connexion internet est nécessaire pour la plupart des fonctionnalités interactives.'
    },
    {
      question: 'Comment les données sont-elles protégées ?',
      answer: 'La protection de vos données est notre priorité. Nous utilisons des technologies de chiffrement avancées et respectons strictement le RGPD. Vos données personnelles ne sont jamais partagées avec des tiers sans votre consentement explicite.'
    }
  ]

  return (
    <div className="space-y-3 sm:space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-lg sm:rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 hover:bg-gray-50/50 transition-colors"
            >
              <h3 className="text-sm sm:text-base font-light text-gray-900 tracking-tight flex-1">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                    <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
