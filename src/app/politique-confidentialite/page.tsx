'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Mail } from 'lucide-react'
import Link from 'next/link'

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/" className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l'accueil</span>
          </Link>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12">
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">Politique de Confidentialité</h1>
                <p className="text-white/60 mt-2">Protection de vos données personnelles - RGPD</p>
              </div>
            </div>
            
            <div className="space-y-8 text-white/80 leading-relaxed">
              
              <section>
                <p className="text-lg">
                  Chez <strong className="text-white">YUNICITY</strong>, la protection de vos données personnelles est une priorité. 
                  Cette politique de confidentialité explique quelles données nous collectons, pourquoi, et comment nous les protégeons 
                  conformément au <strong className="text-white">Règlement Général sur la Protection des Données (RGPD)</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Database className="w-6 h-6 mr-3 text-blue-400" />
                  1. Données Collectées
                </h2>
                <div className="space-y-4 pl-9">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Données d'identification</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone (optionnel)</li>
                      <li>Nom de société (pour les professionnels)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Données de navigation</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Adresse IP</li>
                      <li>Type de navigateur</li>
                      <li>Pages visitées et durée de visite</li>
                      <li>Cookies analytiques (Google Analytics)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Données de préférences</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Centres d'intérêt sélectionnés</li>
                      <li>Type de demande (contact, investissement, partenariat)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-purple-400" />
                  2. Finalités du Traitement
                </h2>
                <div className="space-y-3 pl-9">
                  <p>Nous utilisons vos données personnelles uniquement pour les finalités suivantes :</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-white">Inscription newsletter :</strong> Vous tenir informé du lancement de Yunicity et des actualités</li>
                    <li><strong className="text-white">Traitement des demandes de contact :</strong> Répondre à vos questions et demandes</li>
                    <li><strong className="text-white">Gestion des investisseurs :</strong> Traiter les demandes d'investissement et planifier des rendez-vous</li>
                    <li><strong className="text-white">Amélioration du service :</strong> Analyser le trafic et optimiser l'expérience utilisateur</li>
                    <li><strong className="text-white">Communication marketing :</strong> Avec votre consentement explicite uniquement</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-red-400" />
                  3. Base Légale du Traitement
                </h2>
                <div className="space-y-3 pl-9">
                  <p>Le traitement de vos données personnelles repose sur :</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-white">Votre consentement :</strong> Pour l'inscription newsletter et les communications marketing</li>
                    <li><strong className="text-white">L'intérêt légitime :</strong> Pour l'amélioration de nos services et l'analyse du trafic</li>
                    <li><strong className="text-white">L'exécution d'un contrat :</strong> Pour le traitement des demandes d'investissement</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <UserCheck className="w-6 h-6 mr-3 text-green-400" />
                  4. Durée de Conservation
                </h2>
                <div className="space-y-3 pl-9">
                  <p>Nous conservons vos données personnelles pendant les durées suivantes :</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-white">Newsletter :</strong> Jusqu'à votre désinscription ou 3 ans d'inactivité</li>
                    <li><strong className="text-white">Messages de contact :</strong> 3 ans après le dernier échange</li>
                    <li><strong className="text-white">Investisseurs :</strong> Durée légale de conservation (10 ans)</li>
                    <li><strong className="text-white">Données analytiques :</strong> 26 mois maximum (Google Analytics)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Partage des Données</h2>
                <div className="space-y-3 pl-9">
                  <p>Vos données personnelles ne sont <strong className="text-white">jamais vendues</strong> à des tiers.</p>
                  <p>Elles peuvent être partagées uniquement avec :</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-white">Prestataires techniques :</strong> Supabase (base de données), Vercel (hébergement)</li>
                    <li><strong className="text-white">Outils d'analyse :</strong> Google Analytics (données anonymisées)</li>
                    <li><strong className="text-white">Service d'emailing :</strong> Resend (pour l'envoi d'emails)</li>
                  </ul>
                  <p className="mt-3">
                    Tous nos prestataires sont conformes au RGPD et situés dans l'Union Européenne ou bénéficiant 
                    d'une décision d'adéquation de la Commission Européenne.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Vos Droits</h2>
                <div className="space-y-3 pl-9">
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-white">Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                    <li><strong className="text-white">Droit de rectification :</strong> Corriger des données inexactes</li>
                    <li><strong className="text-white">Droit à l'effacement :</strong> Supprimer vos données ("droit à l'oubli")</li>
                    <li><strong className="text-white">Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                    <li><strong className="text-white">Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                    <li><strong className="text-white">Droit d'opposition :</strong> S'opposer au traitement de vos données</li>
                    <li><strong className="text-white">Droit de retirer votre consentement :</strong> À tout moment</li>
                  </ul>
                  <p className="mt-4">
                    Pour exercer ces droits, contactez-nous à : 
                    <a href="mailto:yu.entreprise@gmail.com" className="text-purple-400 hover:text-purple-300 underline ml-1">
                      yu.entreprise@gmail.com
                    </a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Sécurité des Données</h2>
                <div className="space-y-3 pl-9">
                  <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données :</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Chiffrement SSL/TLS pour toutes les communications</li>
                    <li>Base de données sécurisée avec Row Level Security (RLS)</li>
                    <li>Accès restreint aux données personnelles (équipe autorisée uniquement)</li>
                    <li>Sauvegardes régulières et redondance des données</li>
                    <li>Audits de sécurité périodiques</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Cookies</h2>
                <div className="space-y-3 pl-9">
                  <p>Notre site utilise des cookies pour :</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-white">Cookies essentiels :</strong> Fonctionnement du site (pas de consentement requis)</li>
                    <li><strong className="text-white">Cookies analytiques :</strong> Google Analytics (avec votre consentement)</li>
                  </ul>
                  <p className="mt-3">
                    Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Modifications</h2>
                <div className="space-y-3 pl-9">
                  <p>
                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                    Les modifications seront publiées sur cette page avec une date de mise à jour.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-yellow-400" />
                  10. Contact
                </h2>
                <div className="space-y-3 pl-9">
                  <p>Pour toute question concernant cette politique de confidentialité ou vos données personnelles :</p>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
                    <p><strong className="text-white">Email :</strong> <a href="mailto:yu.entreprise@gmail.com" className="text-purple-400 hover:text-purple-300">yu.entreprise@gmail.com</a></p>
                    <p><strong className="text-white">Formulaire :</strong> <Link href="/contact" className="text-purple-400 hover:text-purple-300">Contacter l'équipe</Link></p>
                  </div>
                  <p className="mt-4 text-sm">
                    Vous avez également le droit d'introduire une réclamation auprès de la 
                    <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline ml-1">
                      CNIL (Commission Nationale de l'Informatique et des Libertés)
                    </a>.
                  </p>
                </div>
              </section>

              <section className="pt-6 border-t border-white/20">
                <p className="text-sm text-white/60">
                  <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </section>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
