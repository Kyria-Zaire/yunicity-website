'use client'
import { motion } from 'framer-motion'
import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, Mail } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CGUContent() {
  const sections = [
    {
      id: 'intro',
      title: 'Introduction',
      icon: FileText,
      color: 'text-blue-400',
      paragraphs: [
        'Les presentes Conditions Generales d\'Utilisation (CGU) regissent l\'acces et l\'utilisation du site web yunicity-website.vercel.app et de ses services associes. En accedant au site, vous acceptez sans reserve les presentes CGU.'
      ]
    },
    {
      id: 'objet',
      title: 'Objet',
      icon: FileText,
      color: 'text-purple-400',
      paragraphs: [
        'Le site yunicity-website.vercel.app a pour objet de presenter le projet Yunicity, une application mobile de communaute locale visant a reconnecter les habitants a leur territoire.',
        'Le site permet aux visiteurs de :',
        '- Decouvrir le projet Yunicity',
        '- S\'inscrire a la newsletter pour suivre le lancement',
        '- Contacter l\'equipe',
        '- Soumettre des demandes d\'investissement ou de partenariat'
      ]
    },
    {
      id: 'acces',
      title: 'Acces au Site',
      icon: CheckCircle,
      color: 'text-green-400',
      paragraphs: [
        'L\'acces au site est gratuit et ouvert a tous les internautes. Yunicity s\'efforce de maintenir le site accessible 24h/24 et 7j/7, mais ne peut garantir une disponibilite absolue.',
        'Yunicity se reserve le droit de suspendre, d\'interrompre ou de limiter l\'acces au site, notamment pour des raisons de maintenance, sans preavis ni indemnite.'
      ]
    },
    {
      id: 'newsletter',
      title: 'Inscription Newsletter',
      icon: CheckCircle,
      color: 'text-cyan-400',
      paragraphs: [
        'L\'inscription a la newsletter necessite la fourniture d\'informations exactes et a jour (nom, email, centres d\'interet).',
        'Vous pouvez vous desinscrire a tout moment en cliquant sur le lien de desinscription present dans chaque email ou en contactant : yu.entreprise@gmail.com'
      ]
    },
    {
      id: 'propriete',
      title: 'Propriete Intellectuelle',
      icon: FileText,
      color: 'text-orange-400',
      paragraphs: [
        'L\'ensemble du contenu du site (textes, images, logos, design, code source) est la propriete exclusive de Yunicity et est protege par le droit de la propriete intellectuelle.',
        'Toute reproduction, representation, modification ou exploitation de tout ou partie du site est strictement interdite sans autorisation ecrite prealable de Yunicity.',
        'Les marques "YUNICITY", logos et elements graphiques associes sont des marques deposees ou en cours de depot.'
      ]
    },
    {
      id: 'interdictions',
      title: 'Utilisation Interdite',
      icon: XCircle,
      color: 'text-red-400',
      items: [
        'Diffuser des contenus illegaux, offensants, diffamatoires ou portant atteinte aux droits de tiers',
        'Tenter de perturber le fonctionnement du site ou d\'acceder a des zones restreintes',
        'Collecter des donnees personnelles d\'autres utilisateurs',
        'Utiliser des robots, scripts ou autres moyens automatises',
        'Usurper l\'identite d\'autrui ou d\'une entite',
        'Diffuser des virus, malwares ou codes malveillants'
      ],
      warning: 'Toute violation de ces interdictions pourra entrainer la suspension de l\'acces au site et des poursuites judiciaires.'
    },
    {
      id: 'donnees',
      title: 'Donnees Personnelles',
      icon: FileText,
      color: 'text-indigo-400',
      paragraphs: [
        'Les donnees personnelles collectees via le site sont traitees conformement a notre Politique de Confidentialite.',
        'Conformement au RGPD, vous disposez d\'un droit d\'acces, de rectification, de suppression et d\'opposition au traitement de vos donnees personnelles.'
      ],
      links: [
        { text: 'Politique de Confidentialite', href: '/politique-confidentialite' }
      ]
    },
    {
      id: 'responsabilite',
      title: 'Responsabilite',
      icon: AlertTriangle,
      color: 'text-yellow-400',
      subsections: [
        {
          title: 'Contenu du Site',
          paragraphs: [
            'Yunicity s\'efforce de fournir des informations exactes et a jour, mais ne garantit pas l\'exactitude, la completude ou l\'actualite des informations diffusees sur le site.',
            'Les informations presentes sur le site sont fournies a titre informatif et n\'ont pas de valeur contractuelle.'
          ]
        },
        {
          title: 'Liens Externes',
          paragraphs: [
            'Le site peut contenir des liens vers des sites tiers. Yunicity n\'exerce aucun controle sur ces sites et decline toute responsabilite quant a leur contenu, leur disponibilite ou leurs pratiques en matiere de confidentialite.'
          ]
        },
        {
          title: 'Dommages',
          paragraphs: [
            'Yunicity ne saurait etre tenue responsable des dommages directs ou indirects resultant de l\'acces au site, de son utilisation ou de l\'impossibilite d\'y acceder.'
          ]
        },
        {
          title: 'Virus et Securite',
          paragraphs: [
            'Yunicity met en oeuvre des mesures de securite raisonnables, mais ne peut garantir l\'absence totale de virus ou autres elements nuisibles. Il appartient a l\'utilisateur de prendre les mesures appropriees pour proteger ses propres donnees et equipements.'
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
        'Yunicity se reserve le droit de suspendre, modifier ou interrompre tout ou partie du site a tout moment, temporairement ou definitivement, sans preavis ni indemnite.',
        'L\'utilisateur reconnait que Yunicity ne pourra etre tenue responsable des consequences d\'une telle suspension, modification ou interruption.'
      ]
    },
    {
      id: 'modifications',
      title: 'Modifications des CGU',
      icon: FileText,
      color: 'text-purple-400',
      paragraphs: [
        'Yunicity se reserve le droit de modifier les presentes CGU a tout moment. Les modifications seront publiees sur cette page avec une date de mise a jour.',
        'Il est conseille aux utilisateurs de consulter regulierement les CGU. L\'utilisation continue du site apres la modification des CGU vaut acceptation des nouvelles conditions.'
      ]
    },
    {
      id: 'droit',
      title: 'Droit Applicable et Juridiction',
      icon: Scale,
      color: 'text-blue-400',
      paragraphs: [
        'Les presentes CGU sont regies par le droit francais.',
        'En cas de litige relatif a l\'interpretation, l\'execution ou la validite des presentes CGU, les parties s\'efforceront de trouver une solution amiable.',
        'A defaut d\'accord amiable, tout litige sera porte devant les tribunaux competents francais.'
      ]
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: Mail,
      color: 'text-yellow-400',
      paragraphs: [
        'Pour toute question concernant les presentes CGU, vous pouvez nous contacter :'
      ],
      contactInfo: {
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
            Conditions Generales d'Utilisation
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

                  {section.contactInfo && (
                    <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                      <p>
                        <span className="text-white font-medium">Email :</span>{' '}
                        <a href={`mailto:${section.contactInfo.email}`} className="text-white/80 hover:text-white transition-colors underline">
                          {section.contactInfo.email}
                        </a>
                      </p>
                      <p>
                        <span className="text-white font-medium">Formulaire :</span>{' '}
                        <Link href={section.contactInfo.form} className="text-white/80 hover:text-white transition-colors underline">
                          Contacter l'equipe
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
            Derniere mise a jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-sm text-white/50 font-light">
            En utilisant le site yunicity-website.vercel.app, vous reconnaissez avoir lu, compris et accepte les presentes Conditions Generales d'Utilisation.
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
