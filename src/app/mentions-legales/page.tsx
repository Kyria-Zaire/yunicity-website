'use client'
import { motion } from 'framer-motion'
import { Building, Mail, Globe, Shield, FileText, Scale } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function MentionsLegalesPage() {
  const sections = [
    {
      id: 'editeur',
      title: 'Éditeur du Site',
      icon: Building,
      color: 'text-purple-400',
      content: [
        { label: 'Raison sociale', value: 'YUNICITY (en cours de création)' },
        { label: 'Forme juridique', value: 'SAS (Société par Actions Simplifiée)' },
        { label: 'Capital social', value: 'En cours de constitution' },
        { label: 'Siège social', value: 'Reims, Grand Est, France' },
        { label: 'SIRET', value: 'En cours d\'immatriculation' },
        { label: 'Directeur de la publication', value: 'Équipe Fondatrice YUNICITY' }
      ]
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: Mail,
      color: 'text-blue-400',
      content: [
        { label: 'Email', value: 'yu.entreprise@gmail.com', link: 'mailto:yu.entreprise@gmail.com' },
        { label: 'Site web', value: 'https://yunicity-website.vercel.app', link: 'https://yunicity-website.vercel.app' },
        { label: 'Formulaire de contact', value: 'Accéder au formulaire', link: '/contact', internal: true }
      ]
    },
    {
      id: 'hebergement',
      title: 'Hébergement',
      icon: Globe,
      color: 'text-green-400',
      content: [
        { label: 'Hébergeur', value: 'Vercel Inc.' },
        { label: 'Adresse', value: '340 S Lemon Ave #4133, Walnut, CA 91789, USA' },
        { label: 'Site web', value: 'vercel.com', link: 'https://vercel.com' }
      ]
    },
    {
      id: 'propriete',
      title: 'Propriété Intellectuelle',
      icon: FileText,
      color: 'text-orange-400',
      paragraphs: [
        'L\'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, design) est la propriété exclusive de YUNICITY ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.',
        'Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de YUNICITY.',
        'Les marques, logos et noms commerciaux mentionnés sur ce site appartiennent à leurs propriétaires respectifs.'
      ]
    },
    {
      id: 'responsabilite',
      title: 'Responsabilité',
      icon: Shield,
      color: 'text-red-400',
      paragraphs: [
        'YUNICITY s\'efforce d\'assurer l\'exactitude et la mise à jour des informations diffusées sur ce site, mais ne peut garantir l\'exactitude, la précision ou l\'exhaustivité des informations mises à disposition.',
        'YUNICITY ne saurait être tenue responsable des erreurs, d\'une absence de disponibilité des informations ou de la présence de virus sur son site.',
        'Les liens hypertextes présents sur le site peuvent renvoyer vers des sites externes. YUNICITY n\'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.'
      ]
    },
    {
      id: 'donnees',
      title: 'Données Personnelles',
      icon: Scale,
      color: 'text-cyan-400',
      paragraphs: [
        'Les informations recueillies via les formulaires du site sont traitées conformément à notre Politique de Confidentialité.',
        'Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d\'un droit d\'accès, de rectification, de suppression et d\'opposition au traitement de vos données personnelles.',
        'Pour exercer ces droits, contactez-nous à : yu.entreprise@gmail.com'
      ],
      links: [
        { text: 'Politique de Confidentialité', href: '/politique-confidentialite' }
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies',
      icon: FileText,
      color: 'text-yellow-400',
      paragraphs: [
        'Ce site utilise des cookies pour améliorer l\'expérience utilisateur et analyser le trafic via Google Analytics.',
        'Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, certaines fonctionnalités du site pourraient ne pas fonctionner correctement.'
      ]
    },
    {
      id: 'droit',
      title: 'Droit Applicable',
      icon: Scale,
      color: 'text-indigo-400',
      paragraphs: [
        'Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l\'utilisation du site sera de la compétence exclusive des tribunaux français.'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation activeSection="" />
      
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">
            Mentions Légales
          </h1>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
            Informations légales et réglementaires concernant le site Yunicity
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-white/10 pb-12 last:border-0"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center ${section.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-light text-white">{section.title}</h2>
                </div>

                <div className="space-y-4 text-white/70 font-light leading-relaxed pl-16">
                  {section.content && (
                    <div className="space-y-3">
                      {section.content.map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-2">
                          <span className="text-white font-medium min-w-[140px]">{item.label} :</span>
                          {item.link ? (
                            'internal' in item && item.internal ? (
                              <Link href={item.link} className="text-white/80 hover:text-white transition-colors underline">
                                {item.value}
                              </Link>
                            ) : (
                              <a 
                                href={item.link} 
                                target={item.link.startsWith('http') ? '_blank' : undefined}
                                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="text-white/80 hover:text-white transition-colors underline"
                              >
                                {item.value}
                              </a>
                            )
                          ) : (
                            <span>{item.value}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.paragraphs && (
                    <div className="space-y-4">
                      {section.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {section.links && (
                    <div className="mt-4 space-y-2">
                      {section.links.map((link, idx) => (
                        <Link 
                          key={idx}
                          href={link.href} 
                          className="text-white/80 hover:text-white transition-colors underline inline-block"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </motion.section>
            )
          })}
        </div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-sm text-white/50 font-light">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  )
}
