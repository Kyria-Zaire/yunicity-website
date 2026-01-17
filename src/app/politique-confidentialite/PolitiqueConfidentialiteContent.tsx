'use client'
import { motion } from 'framer-motion'
import { Shield, Database, Eye, Lock, UserCheck, Mail, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PolitiqueConfidentialiteContent() {
  const sections = [
    {
      id: 'intro',
      title: 'Introduction',
      icon: Shield,
      color: 'text-green-400',
      paragraphs: [
        'Chez YUNICITY, la protection de vos donnees personnelles est une priorite. Cette politique de confidentialite explique quelles donnees nous collectons, pourquoi, et comment nous les protegeons conformement au Reglement General sur la Protection des Donnees (RGPD).'
      ]
    },
    {
      id: 'collecte',
      title: 'Donnees Collectees',
      icon: Database,
      color: 'text-blue-400',
      subsections: [
        {
          title: 'Donnees d\'identification',
          items: ['Nom et prenom', 'Adresse email', 'Numero de telephone (optionnel)', 'Nom de societe (pour les professionnels)']
        },
        {
          title: 'Donnees de navigation',
          items: ['Adresse IP', 'Type de navigateur', 'Pages visitees et duree de visite', 'Cookies analytiques (Google Analytics)']
        },
        {
          title: 'Donnees de preferences',
          items: ['Centres d\'interet selectionnes', 'Type de demande (contact, investissement, partenariat)']
        }
      ]
    },
    {
      id: 'finalites',
      title: 'Finalites du Traitement',
      icon: Eye,
      color: 'text-purple-400',
      items: [
        { label: 'Inscription newsletter', value: 'Vous tenir informe du lancement de Yunicity et des actualites' },
        { label: 'Traitement des demandes de contact', value: 'Repondre a vos questions et demandes' },
        { label: 'Gestion des investisseurs', value: 'Traiter les demandes d\'investissement et planifier des rendez-vous' },
        { label: 'Amelioration du service', value: 'Analyser le trafic et optimiser l\'experience utilisateur' },
        { label: 'Communication marketing', value: 'Avec votre consentement explicite uniquement' }
      ]
    },
    {
      id: 'base-legale',
      title: 'Base Legale du Traitement',
      icon: Lock,
      color: 'text-red-400',
      items: [
        { label: 'Votre consentement', value: 'Pour l\'inscription newsletter et les communications marketing' },
        { label: 'L\'interet legitime', value: 'Pour l\'amelioration de nos services et l\'analyse du trafic' },
        { label: 'L\'execution d\'un contrat', value: 'Pour le traitement des demandes d\'investissement' }
      ]
    },
    {
      id: 'duree',
      title: 'Duree de Conservation',
      icon: UserCheck,
      color: 'text-green-400',
      items: [
        { label: 'Newsletter', value: 'Jusqu\'a votre desinscription ou 3 ans d\'inactivite' },
        { label: 'Messages de contact', value: '3 ans apres le dernier echange' },
        { label: 'Investisseurs', value: 'Duree legale de conservation (10 ans)' },
        { label: 'Donnees analytiques', value: '26 mois maximum (Google Analytics)' }
      ]
    },
    {
      id: 'partage',
      title: 'Partage des Donnees',
      icon: Database,
      color: 'text-cyan-400',
      paragraphs: [
        'Vos donnees personnelles ne sont jamais vendues a des tiers.',
        'Elles peuvent etre partagees uniquement avec :',
        '- Prestataires techniques : PostgreSQL (base de donnees), Vercel (hebergement)',
        '- Outils d\'analyse : Google Analytics (donnees anonymisees)',
        '- Service d\'emailing : Resend (pour l\'envoi d\'emails)',
        'Tous nos prestataires sont conformes au RGPD et situes dans l\'Union Europeenne ou beneficiant d\'une decision d\'adequation de la Commission Europeenne.'
      ]
    },
    {
      id: 'droits',
      title: 'Vos Droits',
      icon: Shield,
      color: 'text-yellow-400',
      items: [
        { label: 'Droit d\'acces', value: 'Obtenir une copie de vos donnees personnelles' },
        { label: 'Droit de rectification', value: 'Corriger des donnees inexactes' },
        { label: 'Droit a l\'effacement', value: 'Supprimer vos donnees ("droit a l\'oubli")' },
        { label: 'Droit a la limitation', value: 'Limiter le traitement de vos donnees' },
        { label: 'Droit a la portabilite', value: 'Recuperer vos donnees dans un format structure' },
        { label: 'Droit d\'opposition', value: 'S\'opposer au traitement de vos donnees' },
        { label: 'Droit de retirer votre consentement', value: 'A tout moment' }
      ],
      contact: 'Pour exercer ces droits, contactez-nous a : yu.entreprise@gmail.com'
    },
    {
      id: 'securite',
      title: 'Securite des Donnees',
      icon: Lock,
      color: 'text-orange-400',
      items: [
        'Chiffrement SSL/TLS pour toutes les communications',
        'Base de donnees securisee avec Row Level Security (RLS)',
        'Acces restreint aux donnees personnelles (equipe autorisee uniquement)',
        'Sauvegardes regulieres et redondance des donnees',
        'Audits de securite periodiques'
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies',
      icon: AlertCircle,
      color: 'text-indigo-400',
      paragraphs: [
        'Notre site utilise des cookies pour :',
        '- Cookies essentiels : Fonctionnement du site (pas de consentement requis)',
        '- Cookies analytiques : Google Analytics (avec votre consentement)',
        'Vous pouvez gerer vos preferences de cookies dans les parametres de votre navigateur.'
      ]
    },
    {
      id: 'modifications',
      title: 'Modifications',
      icon: Shield,
      color: 'text-pink-400',
      paragraphs: [
        'Nous nous reservons le droit de modifier cette politique de confidentialite a tout moment. Les modifications seront publiees sur cette page avec une date de mise a jour.'
      ]
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: Mail,
      color: 'text-yellow-400',
      paragraphs: [
        'Pour toute question concernant cette politique de confidentialite ou vos donnees personnelles :'
      ],
      contactInfo: {
        email: 'yu.entreprise@gmail.com',
        form: '/contact'
      },
      cnil: 'https://www.cnil.fr'
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
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">
            Politique de Confidentialite
          </h1>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
            Protection de vos donnees personnelles - RGPD
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

                  {section.subsections && (
                    <div className="space-y-6">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx}>
                          <h3 className="text-xl font-medium text-white mb-3">{subsection.title}</h3>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            {subsection.items.map((item, itemIdx) => (
                              <li key={itemIdx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.items && (
                    <div className="space-y-3">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-2">
                          {typeof item === 'object' ? (
                            <>
                              <span className="text-white font-medium min-w-[200px]">{item.label} :</span>
                              <span>{item.value}</span>
                            </>
                          ) : (
                            <span>{item}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.contact && typeof section.contact === 'string' && (
                    <p className="mt-4">
                      {section.contact.split(':')[0]} :{' '}
                      <a href={`mailto:${section.contact.split(':')[1]?.trim()}`} className="text-white/80 hover:text-white transition-colors underline">
                        {section.contact.split(':')[1]?.trim()}
                      </a>
                    </p>
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
                      {section.cnil && (
                        <p className="mt-4 text-sm">
                          Vous avez egalement le droit d'introduire une reclamation aupres de la{' '}
                          <a href={section.cnil} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors underline">
                            CNIL (Commission Nationale de l'Informatique et des Libertes)
                          </a>.
                        </p>
                      )}
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
          transition={{ delay: 1.2 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-sm text-white/50 font-light">
            Derniere mise a jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
