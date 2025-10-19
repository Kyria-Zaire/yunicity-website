'use client'
import { Rocket, MapPin, Globe, Trophy } from 'lucide-react'

const roadmap = [
  {
    periode: 'Été 2026',
    titre: 'Lancement Beta - Reims',
    description: 'Première ville pilote avec la carte 3D interactive, le Hub d\'informations et le Mur Communautaire',
    objectif: '5K utilisateurs actifs',
    icon: Rocket,
    color: 'from-blue-600 to-cyan-600'
  },
  {
    periode: 'Q4 2026',
    titre: 'Expansion Régionale',
    description: 'Déploiement dans 10 villes françaises majeures avec optimisation du modèle communautaire',
    objectif: '50K utilisateurs',
    icon: MapPin,
    color: 'from-purple-600 to-pink-600'
  },
  {
    periode: '2027-2028',
    titre: 'Scale National',
    description: 'Couverture complète de 50+ villes en France, intégration IA avancée et partenariats stratégiques',
    objectif: '500K utilisateurs',
    icon: Globe,
    color: 'from-emerald-600 to-teal-600'
  },
  {
    periode: '2029-2030',
    titre: 'Leader Européen',
    description: 'Expansion internationale, monétisation premium et référence du tourisme local connecté',
    objectif: '5M utilisateurs · 5M€ ARR',
    icon: Trophy,
    color: 'from-orange-600 to-red-600'
  }
]

export default function EquipeJoinSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

      {/* Grille pattern */}
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

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8">
            Notre Roadmap
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            L'évolution de
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
              Yunicity
            </span>
          </h2>

          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
            De Reims à l'Europe, notre vision 2026-2030
          </p>
        </div>

        {/* Timeline chronologique */}
        <div className="max-w-5xl mx-auto">
          {roadmap.map((etape, index) => (
            <div key={etape.periode} className="relative mb-16 last:mb-0">
              {/* Ligne verticale */}
              {index !== roadmap.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent" />
              )}

              <div className="flex gap-8">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${etape.color} flex items-center justify-center shadow-xl`}>
                  <etape.icon className="w-8 h-8 text-white" />
                </div>

                {/* Contenu */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  {/* Badge période */}
                  <div className={`inline-flex px-4 py-1.5 rounded-full text-sm font-bold mb-4 bg-gradient-to-r ${etape.color} text-white`}>
                    {etape.periode}
                  </div>

                  {/* Titre */}
                  <h3 className="text-3xl font-bold text-white mb-3">{etape.titre}</h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-4 text-lg">{etape.description}</p>

                  {/* Objectif */}
                  <div className="flex items-center gap-2">
                    <div className="px-4 py-2 bg-white/10 rounded-full border border-white/20">
                      <span className="text-white font-semibold text-sm">Objectif : {etape.objectif}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
