'use client'
import Hero3D from '@/components/Hero3D'
import Navigation from '@/components/Navigation'
import NewsletterSubscribeSection from '@/components/NewsletterSubscribeSection'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import Link from 'next/link'
import { ArrowRight, Users, Lightbulb, MapPin, Target, Star, Brain, Calendar, Activity, ChevronDown, Heart, Rocket, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import FranceMap from '@/components/FranceMap'
import ReimsExperienceSection from '@/components/ReimsExperienceSection'

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Yunicity',
    alternateName: 'YUNICITY',
    url: 'https://yunicity-website.vercel.app',
    logo: 'https://yunicity-website.vercel.app/yunicity-logo.png',
    description: 'La première super-app locale qui reconnecte les habitants à leur territoire. Événements, quartiers, commerces, communautés et actualités locales à Reims.',
    foundingDate: '2024',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Reims',
        addressRegion: 'Grand Est',
        addressCountry: 'FR',
        postalCode: '51100'
      }
    },
    contactPoint: [
      {
      '@type': 'ContactPoint',
      email: 'yu.entreprise@gmail.com',
      contactType: 'Customer Service',
      areaServed: 'FR',
      availableLanguage: 'French'
    },
      {
        '@type': 'ContactPoint',
        email: 'yu.entreprise@gmail.com',
        contactType: 'Business Inquiries',
        areaServed: 'FR',
        availableLanguage: 'French'
      }
    ],
    sameAs: [
      'https://www.instagram.com/yunicity.app',
      'https://www.linkedin.com/in/yunicity-app-381bb7230',
      'https://www.facebook.com/share/1Eu3J5rE9P/'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Reims',
      addressRegion: 'Grand Est',
      addressCountry: 'FR',
      postalCode: '51100'
    },
    areaServed: {
      '@type': 'City',
      name: 'Reims',
      '@id': 'https://www.wikidata.org/wiki/Q408'
    }
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Yunicity',
    description: 'Super-app locale pour événements, quartiers, commerces et vie locale à Reims',
    url: 'https://yunicity-website.vercel.app',
    image: 'https://yunicity-website.vercel.app/yunicity-logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Reims',
      addressRegion: 'Grand Est',
      addressCountry: 'FR',
      postalCode: '51100'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.2583,
      longitude: 4.0317
    },
    telephone: '+33',
    email: 'yu.entreprise@gmail.com',
    priceRange: 'Gratuit',
    areaServed: {
      '@type': 'City',
      name: 'Reims'
    },
    serviceType: 'Application mobile locale, Réseau social local, Événements locaux'
  }

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Yunicity',
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/PreOrder',
      availabilityStarts: '2026-07-01'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1'
    },
    description: 'Application mobile qui reconnecte les habitants à leur territoire local. Événements, quartiers, commerces, communautés et actualités locales à Reims.',
    releaseNotes: 'Lancement MVP prévu en Juillet 2026 à Reims',
    featureList: [
      'Événements locaux',
      'Carte des quartiers',
      'Commerces de proximité',
      'Actualités locales',
      'Communauté locale',
      'Bons plans Reims'
    ],
    screenshot: 'https://yunicity-website.vercel.app/yunicity-logo.png'
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Yunicity',
    alternateName: 'YUNICITY',
    url: 'https://yunicity-website.vercel.app',
    description: 'La première super-app locale qui reconnecte les habitants à leur territoire. Événements, quartiers, commerces, communautés et actualités locales à Reims.',
    publisher: {
      '@type': 'Organization',
      name: 'Yunicity'
    },
    inLanguage: 'fr-FR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://yunicity-website.vercel.app/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }

  // FAQ avec mentions Reims pour SEO local
  const faqs = [
    {
      question: 'Qu\'est-ce que Yunicity ?',
      answer: 'Yunicity est la première super-app locale qui reconnecte les habitants à leur territoire. Elle centralise toute l\'information locale (actualités, événements, commerces) et permet aux habitants de créer du lien social authentique dans leur ville, notamment à Reims.'
    },
    {
      question: 'Comment rejoindre la bêta ?',
      answer: 'Vous pouvez vous inscrire à notre newsletter pour être notifié dès l\'ouverture de la bêta. Nous sélectionnerons les premiers utilisateurs parmi les inscrits pour tester l\'application avant le lancement officiel à Reims en juillet 2026.'
    },
    {
      question: 'Reims sera-t-elle la première ville ?',
      answer: 'Oui, Reims sera la première ville pilote de Yunicity. Nous lançons en juillet 2026 à Reims, puis nous étendrons progressivement à Troyes et Châlons-en-Champagne. Reims a été choisie pour son dynamisme local et sa communauté engagée.'
    },
    {
      question: 'Yunicity est-elle gratuite ?',
      answer: 'Oui, Yunicity est entièrement gratuite pour les habitants de Reims et des autres villes. Les acteurs locaux (commerces, associations, mairies) peuvent choisir des options premium pour améliorer leur visibilité.'
    },
    {
      question: 'Quand Yunicity sera-t-elle disponible ?',
      answer: 'Yunicity sera lancée en juillet 2026 à Reims, puis progressivement dans d\'autres villes françaises. Reims est notre ville pilote et bénéficiera en premier de toutes les fonctionnalités.'
    },
    {
      question: 'Yunicity fonctionne-t-elle hors ligne ?',
      answer: 'Certaines fonctionnalités comme la consultation des informations sauvegardées et la carte des quartiers de Reims sont accessibles hors ligne. Cependant, une connexion internet est nécessaire pour la plupart des fonctionnalités interactives.'
    },
    {
      question: 'Comment les données sont-elles protégées ?',
      answer: 'La protection de vos données est notre priorité. Nous utilisons des technologies de chiffrement avancées et respectons strictement le RGPD. Vos données personnelles ne sont jamais partagées avec des tiers sans votre consentement explicite.'
    }
  ]

  // Schema FAQ pour Google (Featured Snippets)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <div className="min-h-screen">
      <StructuredData data={[organizationSchema, localBusinessSchema, softwareApplicationSchema, websiteSchema, faqSchema]} />
      <Navigation activeSection="" />

      <Hero3D />

      {/* Section Le Problème - Condensée */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-3 tracking-tight">
              Le{' '}
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-light">
                problème
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-4">
              Information éparpillée, sentiment d'exclusion : 50% des Français non engagés localement.
            </p>
            <Link href="/probleme">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-light text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-all"
              >
                En savoir plus
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {/* 2 Chiffres clés */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-xl border border-red-200/50 rounded-lg sm:rounded-xl p-4 sm:p-5"
            >
              <div className="text-3xl sm:text-4xl font-light bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                85%
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-light">
                des Français cherchent des infos locales sur leur téléphone
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-xl border border-orange-200/50 rounded-lg sm:rounded-xl p-4 sm:p-5"
            >
              <div className="text-3xl sm:text-4xl font-light bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">
                50%
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-light">
                des habitants se sentent déconnectés de leur ville
              </p>
            </motion.div>
          </div>

          {/* 3 Bullets */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { text: 'Information éparpillée sur 15+ sites', icon: Target },
              { text: 'Manque de visibilité pour les acteurs locaux', icon: Users },
              { text: 'Isolement urbain et faible engagement', icon: Heart }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200/50"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-200/50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 font-light">{item.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités clés */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
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
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-4">
              Tout ce dont vous avez besoin pour reconnecter avec votre ville en un seul endroit
            </p>
            <Link href="/solution">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-light text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-all"
              >
                Découvrir la solution complète
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className={`group bg-white/80 backdrop-blur-xl border ${feature.borderColor} rounded-lg sm:rounded-xl p-4 sm:p-5 sm:hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${feature.color} border ${feature.borderColor} flex items-center justify-center mb-3 sm:group-hover:scale-110 transition-transform duration-300`}>
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

      {/* Section Roadmap - Simple */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-3 tracking-tight">
              Roadmap{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
                produit
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Notre vision pour transformer la vie locale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'MVP 2026',
                description: 'Lancement à Reims avec les fonctionnalités essentielles',
                icon: Rocket,
                color: 'from-purple-500 to-blue-500',
                bgColor: 'from-purple-50 to-blue-50',
                borderColor: 'border-purple-200/50'
              },
              {
                title: 'V2 IA',
                description: 'Intelligence artificielle et recommandations personnalisées',
                icon: Brain,
                color: 'from-blue-500 to-cyan-500',
                bgColor: 'from-blue-50 to-cyan-50',
                borderColor: 'border-blue-200/50'
              },
              {
                title: 'V3 Smart City',
                description: 'Intégration IoT, blockchain et services urbains avancés',
                icon: Zap,
                color: 'from-green-500 to-emerald-500',
                bgColor: 'from-green-50 to-emerald-50',
                borderColor: 'border-green-200/50'
              }
            ].map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`bg-gradient-to-br ${step.bgColor} border ${step.borderColor} rounded-lg sm:rounded-xl p-5 sm:p-6`}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
                  <h3 className="text-base sm:text-lg font-light text-gray-900 mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
                </div>
      </section>

      {/* Section Villes en expansion */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
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
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Trois villes pilotes où Yunicity transforme déjà la vie locale
            </p>
          </motion.div>

          {/* Carte de France */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 sm:mb-12"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4 tracking-tight">
                Carte de France
              </h3>
              <div className="relative h-[300px] sm:h-[400px] bg-gradient-to-br from-gray-50 to-white rounded-lg overflow-hidden">
                <FranceMap />
              </div>
            </div>
          </motion.div>

          {/* Cartes des villes avec photos et stats */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { 
                name: 'Reims', 
                status: 'active', 
                population: '183 000', 
                acteurs: 180, 
                evenements: 45,
                quartiers: 12,
                image: 'https://images.unsplash.com/photo-1632854270303-f5fdb97b697f?q=80&w=800&auto=format&fit=crop',
                color: 'from-blue-500 to-cyan-500',
                bgColor: 'bg-blue-50',
                borderColor: 'border-blue-200',
                description: 'Capitale du Champagne, ville pilote Yunicity'
              },
              { 
                name: 'Troyes', 
                status: 'active', 
                population: '62 000', 
                acteurs: 150, 
                evenements: 32,
                quartiers: 8,
                image: 'https://francetoday.com/wp-content/uploads/2022/05/CLICHE-CATHEDRALE-%C2%A9-BC-IMAGE-02-min.jpg',
                color: 'from-purple-500 to-pink-500',
                bgColor: 'bg-purple-50',
                borderColor: 'border-purple-200',
                description: 'Ville médiévale au cœur de la Champagne'
              },
              { 
                name: 'Châlons-en-Champagne', 
                status: 'active', 
                population: '45 000', 
                acteurs: 120, 
                evenements: 28,
                quartiers: 6,
                image: 'https://api.cloudly.space/resize/crop/1200/627/60/aHR0cHM6Ly9jZHQ1MS5tZWRpYS50b3VyaW5zb2Z0LmV1L3VwbG9hZC9ob3RlbC1kZS12aWxsZS1jaGFsb25zLWVuLWNoYW1wYWduZS1mYWNhZGUuSlBH/image.jpg',
                color: 'from-green-500 to-emerald-500',
                bgColor: 'bg-green-50',
                borderColor: 'border-green-200',
                description: 'Préfecture dynamique et accueillante'
              }
            ].map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gray-200/50 sm:hover:border-gray-300 shadow-lg sm:hover:shadow-xl transition-all duration-300"
              >
                {/* Photo de la ville */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center sm:group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${city.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Badge actif */}
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-500/90 backdrop-blur-sm rounded-full">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      <span className="text-[10px] sm:text-xs font-medium text-white">Actif</span>
                    </div>
                  </div>

                  {/* Nom de la ville */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                      {city.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 font-light">
                      {city.description}
                    </p>
                  </div>
                </div>

                {/* Statistiques locales */}
                <div className="p-4 sm:p-5">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                    {/* Habitants */}
                    <div className={`rounded-lg p-3 border ${city.borderColor} ${city.bgColor}`}>
                      <div 
                        className="text-lg sm:text-xl font-semibold mb-1"
                        style={{
                          color: city.name === 'Reims' ? '#2563eb' :
                                 city.name === 'Troyes' ? '#9333ea' :
                                 '#16a34a'
                        }}
                      >
                        {city.population}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600 font-light">Habitants</div>
                    </div>
                    {/* Quartiers */}
                    <div className={`rounded-lg p-3 border ${city.borderColor} ${city.bgColor}`}>
                      <div 
                        className="text-lg sm:text-xl font-semibold mb-1"
                        style={{
                          color: city.name === 'Reims' ? '#2563eb' :
                                 city.name === 'Troyes' ? '#9333ea' :
                                 '#16a34a'
                        }}
                      >
                        {city.quartiers}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600 font-light">Quartiers</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-3 border-t border-gray-200">
                    <div>
                      <div className="text-base sm:text-lg font-medium text-gray-900 mb-0.5">{city.acteurs}</div>
                      <div className="text-[10px] sm:text-xs text-gray-600 font-light">Acteurs locaux</div>
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-medium text-gray-900 mb-0.5">{city.evenements}</div>
                      <div className="text-[10px] sm:text-xs text-gray-600 font-light">Événements/mois</div>
                    </div>
                  </div>
                </div>

                {/* Effet glow au hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${city.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section L'expérience Reims - Sans la section "Ce qui rend Reims unique" */}
      <ReimsExperienceSection showExperiences={false} />

      {/* Section Statistiques & Impact */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className={`group bg-white/80 backdrop-blur-xl border ${stat.borderColor} rounded-lg sm:rounded-xl p-4 sm:p-5 sm:hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${stat.bgColor} border ${stat.borderColor} flex items-center justify-center mb-3 sm:group-hover:scale-110 transition-transform duration-300`}>
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

      {/* Section Équipe - Condensée */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-3 tracking-tight">
              L'<span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
                équipe
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-4">
              4 passionnés complémentaires unis par une mission : reconnecter les habitants à leur territoire
            </p>
            <Link href="/equipe">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-light text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-all"
              >
                Découvrir l'équipe complète
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Rody', role: 'CEO & Co-Founder', bio: 'Passionné par l\'innovation locale et le design d\'expérience', color: 'from-purple-600 to-blue-600' },
              { name: 'Djiby', role: 'Co-Founder & CFO', bio: 'Expert en finance et stratégie d\'entreprise', color: 'from-emerald-600 to-teal-600' },
              { name: 'Freeway.jr', role: 'CTO & Lead Developer', bio: 'Architecte technique passionné', color: 'from-blue-600 to-indigo-600' },
              { name: 'Jores', role: 'Growth & Community', bio: 'Passionné par les communautés locales', color: 'from-orange-600 to-red-600' }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-4 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-lg sm:rounded-xl"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-xl font-bold mx-auto mb-3`}>
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-sm sm:text-base font-light text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className={`text-xs sm:text-sm font-semibold mb-2 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                  {member.role}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-600 font-light">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Blog Local */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-3 tracking-tight">
              Découvrez{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-light">
                Reims
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Guides locaux, événements et bons plans à Reims
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: 'Les 10 événements à Reims en 2026',
                excerpt: 'Découvrez les événements incontournables de Reims cette année : festivals, concerts, expositions et animations locales.',
                category: 'Événements',
                date: 'Janvier 2026',
                href: '/blog/evenements-reims-2026'
              },
              {
                title: 'Découvrir les quartiers de Reims : guide local',
                excerpt: 'Explorez les quartiers emblématiques de Reims : Centre-ville, Wilson, Orgeval, Croix-Rouge et leurs spécificités.',
                category: 'Quartiers',
                date: 'Décembre 2025',
                href: '/blog/quartiers-reims-guide'
              },
              {
                title: 'Top 10 commerces de proximité à Reims',
                excerpt: 'Les meilleurs commerces locaux de Reims : épiceries, boulangeries, cafés et boutiques à découvrir dans votre quartier.',
                category: 'Commerces',
                date: 'Novembre 2025',
                href: '/blog/commerces-proximite-reims'
              }
            ].map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-200/50 sm:hover:border-gray-300 shadow-lg sm:hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500 font-light">{article.date}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 cursor-not-allowed"
                  title="Article à venir"
                >
                  Lire l'article
                  <ArrowRight className="w-4 h-4" />
              </div>
              </motion.article>
            ))}
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
              Tout ce que vous devez savoir sur Yunicity et Reims
            </p>
          </motion.div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <NewsletterSubscribeSection />

      <Footer />
    </div>
  )
}

// Composant FAQ Accordion
function FAQAccordion({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
