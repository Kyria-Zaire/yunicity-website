'use client'
import Hero3D from '@/components/Hero3D'
import Navigation from '@/components/Navigation'
import NewsletterSubscribeSection from '@/components/NewsletterSubscribeSection'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Users, Lightbulb, MapPin, Target } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation activeSection="" />

      <Hero3D />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Redécouvrez votre ville
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Yunicity est la plateforme qui reconnecte les habitants à leur territoire.
              Découvrez les lieux, événements et la communauté autour de vous.
            </p>
          </div>

          {/* CTA Cards Grid - Apple Glass Gray */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link href="/probleme" className="group bg-gray-400/30 backdrop-blur-2xl border border-gray-400/40 rounded-3xl p-8 hover:bg-gray-500/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <Target className="w-6 h-6 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2 flex items-center gap-2">
                    Le Problème
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-gray-700 font-light">
                    34M de Français isolés, fragmentés entre 15+ applications
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/solution" className="group bg-gray-400/30 backdrop-blur-2xl border border-gray-400/40 rounded-3xl p-8 hover:bg-gray-500/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <Lightbulb className="w-6 h-6 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2 flex items-center gap-2">
                    Notre Solution
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-gray-700 font-light">
                    Le Hub unique qui centralise toute votre vie locale
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/reims" className="group bg-gray-400/30 backdrop-blur-2xl border border-gray-400/40 rounded-3xl p-8 hover:bg-gray-500/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2 flex items-center gap-2">
                    Découverte Reims
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-gray-700 font-light">
                    6 lieux authentiques sélectionnés par nos ambassadeurs
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/equipe" className="group bg-gray-400/30 backdrop-blur-2xl border border-gray-400/40 rounded-3xl p-8 hover:bg-gray-500/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <Users className="w-6 h-6 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2 flex items-center gap-2">
                    L'Équipe
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-gray-700 font-light">
                    5 experts passionnés unis par une mission commune
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSubscribeSection />

      <Footer />
    </div>
  )
}
