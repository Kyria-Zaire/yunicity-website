'use client'
import { motion } from 'framer-motion'
import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, Mail } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CGUPage() {
  const sections = [
    {
      id: 'intro',
      title: 'Introduction',
      icon: FileText,
      color: 'text-blue-400',
      paragraphs: [
        'Les présentes Conditions Générales d\'Utilisation (CGU) régissent l\'accès et l\'utilisation du site web yunicity-website.vercel.app et de ses services associés. En accédant au site, vous acceptez sans réserve les présentes CGU.'
      ]
    },
    {
      id: 'objet',
      title: 'Objet',
      icon: FileText,
      color: 'text-purple-400',
      paragraphs: [
        'Le site yunicity-website.vercel.app a pour objet de présenter le projet Yunicity, une application mobile de communauté locale visant à reconnecter les habitants à leur territoire.',
        'Le site permet aux visiteurs de :',
        '• Découvrir le projet Yunicity',
        '• S\'inscrire à la newsletter pour suivre le lancement',
        '• Contacter l\'équipe',
        '• Soumettre des demandes d\'investissement ou de partenariat'
      ]
    },
    {
      id: 'acces',
      title: 'Accès au Site',
      icon: CheckCircle,
      color: 'text-green-400',
      paragraphs: [
        'L\'accès au site est gratuit et ouvert à tous les internautes. Yunicity s\'efforce de maintenir le site accessible 24h/24 et 7j/7, mais ne peut garantir une disponibilité absolue.',
        'Yunicity se réserve le droit de suspendre, d\'interrompre ou de limiter l\'accès au site, notamment pour des raisons de maintenance, sans préavis ni indemnité.'
      ]
    },
    {
      id: 'newsletter',
      title: 'Inscription Newsletter',
      icon: CheckCircle,
      color: 'text-cyan-400',
      paragraphs: [
        'L\'inscription à la newsletter nécessite la fourniture d\'informations exactes et à jour (nom, email, centres d\'intérêt).',
        'Vous pouvez vous désinscrire à tout moment en cliquant sur le lien de désinscription présent dans chaque email ou en contactant : yu.entreprise@gmail.com'
      ]
    },
    {
      id: 'propriete',
      title: 'Propriété Intellectuelle',
      icon: FileText,
      color: 'text-orange-400',
      paragraphs: [
        'L\'ensemble du contenu du site (textes, images, logos, design, code source) est la propriété exclusive de Yunicity et est protégé par le droit de la propriété intellectuelle.',
        'Toute reproduction, représentation, modification ou exploitation de tout ou partie du site est strictement interdite sans autorisation écrite préalable de Yunicity.',
        'Les marques "YUNICITY", logos et éléments graphiques associés sont des marques déposées ou en cours de dépôt.'
      ]
    },
    {
      id: 'interdictions',
      title: 'Utilisation Interdite',
      icon: XCircle,
      color: 'text-red-400',
      items: [
        'Diffuser des contenus illégaux, offensants, diffamatoires ou portant atteinte aux droits de tiers',
        'Tenter de perturber le fonctionnement du site ou d\'accéder à des zones restreintes',
        'Collecter des données personnelles d\'autres utilisateurs',
        'Utiliser des robots, scripts ou autres moyens automatisés',
        'Usurper l\'identité d\'autrui ou d\'une entité',
        'Diffuser des virus, malwares ou codes malveillants'
      ],
      warning: 'Toute violation de ces interdictions pourra entraîner la suspension de l\'accès au site et des poursuites judiciaires.'
    },
    {
      id: 'donnees',
      title: 'Données Personnelles',
      icon: FileText,
      color: 'text-indigo-400',
      paragraphs: [
        'Les données personnelles collectées via le site sont traitées conformément à notre Politique de Confidentialité.',
        'Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification, de suppression et d\'opposition au traitement de vos données personnelles.'
      ],
      links: [
        { text: 'Politique de Confidentialité', href: '/politique-confidentialite' }
      ]
    },
    {
      id: 'responsabilite',
      title: 'Responsabilité',
      icon: AlertTriangle,
      color: 'text-yellow-400',
      subsections: [
        {
          title: 'Contenu du Site',
          paragraphs: [
            'Yunicity s\'efforce de fournir des informations exactes et à jour, mais ne garantit pas l\'exactitude, la complétude ou l\'actualité des informations diffusées sur le site.',
            'Les informations présentes sur le site sont fournies à titre informatif et n\'ont pas de valeur contractuelle.'
          ]
        },
        {
          title: 'Liens Externes',
          paragraphs: [
            'Le site peut contenir des liens vers des sites tiers. Yunicity n\'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leurs pratiques en matière de confidentialité.'
          ]
        },
        {
          title: 'Dommages',
          paragraphs: [
            'Yunicity ne saurait être tenue responsable des dommages directs ou indirects résultant de l\'accès au site, de son utilisation ou de l\'impossibilité d\'y accéder.'
          ]
        },
        {
          title: 'Virus et Sécurité',
          paragraphs: [
            'Yunicity met en œuvre des mesures de sécurité raisonnables, mais ne peut garantir l\'absence totale de virus ou autres éléments nuisibles. Il appartient à l\'utilisateur de prendre les mesures appropriées pour protéger ses propres données et équipements.'
          ]
        }
      ]
    },
    {
      id: 'suspension',
      title: 'Suspension du Site',
      icon: AlertTriangle,
      color: 'text-red-400',
      paragraphs: [
        'Yunicity se réserve le droit de suspendre, modifier ou interrompre tout ou partie du site à tout moment, temporairement ou définitivement, sans préavis ni indemnité.',
        'L\'utilisateur reconnaît que Yunicity ne pourra être tenue responsable des conséquences d\'une telle suspension, modification ou interruption.'
      ]
    },
    {
      id: 'modifications',
      title: 'Modifications des CGU',
      icon: FileText,
      color: 'text-purple-400',
      paragraphs: [
        'Yunicity se réserve le droit de modifier les présentes CGU à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour.',
        'Il est conseillé aux utilisateurs de consulter régulièrement les CGU. L\'utilisation continue du site après la modification des CGU vaut acceptation des nouvelles conditions.'
      ]
    },
    {
      id: 'droit',
      title: 'Droit Applicable et Juridiction',
      icon: Scale,
      color: 'text-blue-400',
      paragraphs: [
        'Les présentes CGU sont régies par le droit français.',
        'En cas de litige relatif à l\'interprétation, l\'exécution ou la validité des présentes CGU, les parties s\'efforceront de trouver une solution amiable.',
        'À défaut d\'accord amiable, tout litige sera porté devant les tribunaux compétents français.'
      ]
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: Mail,
      color: 'text-yellow-400',
      paragraphs: [
        'Pour toute question concernant les présentes CGU, vous pouvez nous contacter :'
      ],
      contact: {
        email: 'yu.entreprise@gmail.com',
        form: '/contact'
      }
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
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
            Conditions d'utilisation du site Yunicity
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
                  {section.paragraphs && (
                    <div className="space-y-4">
                      {section.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {section.items && (
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      {section.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.warning && (
                    <p className="mt-4 text-yellow-400/80 italic">{section.warning}</p>
                  )}

                  {section.subsections && (
                    <div className="space-y-6">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx}>
                          <h3 className="text-xl font-medium text-white mb-3">{subsection.title}</h3>
                          <div className="space-y-3">
                            {subsection.paragraphs.map((paragraph, pIdx) => (
                              <p key={pIdx}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
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

                  {section.contact && (
                    <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                      <p>
                        <span className="text-white font-medium">Email :</span>{' '}
                        <a href={`mailto:${section.contact.email}`} className="text-white/80 hover:text-white transition-colors underline">
                          {section.contact.email}
                        </a>
                      </p>
                      <p>
                        <span className="text-white font-medium">Formulaire :</span>{' '}
                        <Link href={section.contact.form} className="text-white/80 hover:text-white transition-colors underline">
                          Contacter l'équipe
                        </Link>
                      </p>
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
          transition={{ delay: 1.3 }}
          className="mt-16 pt-8 border-t border-white/10 text-center space-y-2"
        >
          <p className="text-sm text-white/50 font-light">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-sm text-white/50 font-light">
            En utilisant le site yunicity-website.vercel.app, vous reconnaissez avoir lu, compris et accepté les présentes Conditions Générales d'Utilisation.
          </p>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  )
}
