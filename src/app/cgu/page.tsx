'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, FileText, CheckCircle, XCircle, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function CGUPage() {
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
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">Conditions Générales d'Utilisation</h1>
                <p className="text-white/60 mt-2">Conditions d'utilisation du site Yunicity</p>
              </div>
            </div>
            
            <div className="space-y-8 text-white/80 leading-relaxed">
              
              <section>
                <p className="text-lg">
                  Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du site web <strong className="text-white">yunicity.fr</strong> 
                  et de ses services associés. En accédant au site, vous acceptez sans réserve les présentes CGU.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Objet</h2>
                <div className="space-y-3 pl-9">
                  <p>
                    Le site <strong className="text-white">yunicity.fr</strong> a pour objet de présenter le projet Yunicity, 
                    une application mobile de communauté locale visant à reconnecter les habitants à leur territoire.
                  </p>
                  <p>
                    Le site permet aux visiteurs de :
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Découvrir le projet Yunicity</li>
                    <li>S'inscrire à la newsletter pour suivre le lancement</li>
                    <li>Contacter l'équipe</li>
                    <li>Soumettre des demandes d'investissement ou de partenariat</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                  2. Accès au Site
                </h2>
                <div className="space-y-3 pl-9">
                  <p>
                    L'accès au site est gratuit et ouvert à tous les internautes. 
                    Yunicity s'efforce de maintenir le site accessible 24h/24 et 7j/7, mais ne peut garantir une disponibilité absolue.
                  </p>
                  <p>
                    Yunicity se réserve le droit de suspendre, d'interrompre ou de limiter l'accès au site, 
                    notamment pour des raisons de maintenance, sans préavis ni indemnité.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Inscription Newsletter</h2>
                <div className="space-y-3 pl-9">
                  <p>
                    L'inscription à la newsletter nécessite la fourniture d'informations exactes et à jour (nom, email, centres d'intérêt).
                  </p>
                  <p>
                    Vous pouvez vous désinscrire à tout moment en cliquant sur le lien de désinscription présent 
                    dans chaque email ou en contactant : <a href="mailto:yu.entreprise@gmail.com" className="text-purple-400 hover:text-purple-300">yu.entreprise@gmail.com</a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Propriété Intellectuelle</h2>
                <div className="space-y-3 pl-9">
                  <p>
                    L'ensemble du contenu du site (textes, images, logos, design, code source) est la propriété exclusive de Yunicity 
                    et est protégé par le droit de la propriété intellectuelle.
                  </p>
                  <p>
                    <strong className="text-white">Toute reproduction, représentation, modification ou exploitation</strong> de tout ou partie 
                    du site est strictement interdite sans autorisation écrite préalable de Yunicity.
                  </p>
                  <p>
                    Les marques "YUNICITY", logos et éléments graphiques associés sont des marques déposées ou en cours de dépôt.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <XCircle className="w-6 h-6 mr-3 text-red-400" />
                  5. Utilisation Interdite
                </h2>
                <div className="space-y-3 pl-9">
                  <p>Il est strictement interdit d'utiliser le site pour :</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Diffuser des contenus illégaux, offensants, diffamatoires ou portant atteinte aux droits de tiers</li>
                    <li>Tenter de perturber le fonctionnement du site ou d'accéder à des zones restreintes</li>
                    <li>Collecter des données personnelles d'autres utilisateurs</li>
                    <li>Utiliser des robots, scripts ou autres moyens automatisés</li>
                    <li>Usurper l'identité d'autrui ou d'une entité</li>
                    <li>Diffuser des virus, malwares ou codes malveillants</li>
                  </ul>
                  <p className="mt-3">
                    Toute violation de ces interdictions pourra entraîner la suspension de l'accès au site 
                    et des poursuites judiciaires.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Données Personnelles</h2>
                <div className="space-y-3 pl-9">
                  <p>
                    Les données personnelles collectées via le site sont traitées conformément à notre 
                    <Link href="/politique-confidentialite" className="text-purple-400 hover:text-purple-300 underline"> Politique de Confidentialité</Link>.
                  </p>
                  <p>
                    Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression 
                    et d'opposition au traitement de vos données personnelles.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-yellow-400" />
                  7. Responsabilité
                </h2>
                <div className="space-y-3 pl-9">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">7.1. Contenu du Site</h3>
                    <p>
                      Yunicity s'efforce de fournir des informations exactes et à jour, mais ne garantit pas l'exactitude, 
                      la complétude ou l'actualité des informations diffusées sur le site.
                    </p>
                    <p>
                      Les informations présentes sur le site sont fournies à titre informatif et n'ont pas de valeur contractuelle.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">7.2. Liens Externes</h3>
                    <p>
                      Le site peut contenir des liens vers des sites tiers. Yunicity n'exerce aucun contrôle sur ces sites 
                      et décline toute responsabilité quant à leur contenu, leur disponibilité ou leurs pratiques en matière de confidentialité.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">7.3. Dommages</h3>
                    <p>
                      Yunicity ne saurait être tenue responsable des dommages directs ou indirects résultant de l'accès 
                      au site, de son utilisation ou de l'impossibilité d'y accéder.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">7.4. Virus et Sécurité</h3>
                    <p>
                      Yunicity met en œuvre des mesures de sécurité raisonnables, mais ne peut garantir l'absence totale 
                      de virus ou autres éléments nuisibles. Il appartient à l'utilisateur de prendre les mesures appropriées 
                      pour protéger ses propres données et équipements.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Suspension du Site</h2>
                <div className="space-y-3 pl-9">
                  <p>
                    Yunicity se réserve le droit de suspendre, modifier ou interrompre tout ou partie du site 
                    à tout moment, temporairement ou définitivement, sans préavis ni indemnité.
                  </p>
                  <p>
                    L'utilisateur reconnaît que Yunicity ne pourra être tenue responsable des conséquences 
                    d'une telle suspension, modification ou interruption.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Modifications des CGU</h2>
                <div className="space-y-3 pl-9">
                  <p>
                    Yunicity se réserve le droit de modifier les présentes CGU à tout moment. 
                    Les modifications seront publiées sur cette page avec une date de mise à jour.
                  </p>
                  <p>
                    Il est conseillé aux utilisateurs de consulter régulièrement les CGU. 
                    L'utilisation continue du site après la modification des CGU vaut acceptation des nouvelles conditions.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Droit Applicable et Juridiction</h2>
                <div className="space-y-3 pl-9">
                  <p>
                    Les présentes CGU sont régies par le droit français.
                  </p>
                  <p>
                    En cas de litige relatif à l'interprétation, l'exécution ou la validité des présentes CGU, 
                    les parties s'efforceront de trouver une solution amiable.
                  </p>
                  <p>
                    À défaut d'accord amiable, tout litige sera porté devant les tribunaux compétents français.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Contact</h2>
                <div className="space-y-3 pl-9">
                  <p>Pour toute question concernant les présentes CGU, vous pouvez nous contacter :</p>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
                    <p><strong className="text-white">Email :</strong> <a href="mailto:yu.entreprise@gmail.com" className="text-purple-400 hover:text-purple-300">yu.entreprise@gmail.com</a></p>
                    <p><strong className="text-white">Formulaire :</strong> <Link href="/contact" className="text-purple-400 hover:text-purple-300">Contacter l'équipe</Link></p>
                  </div>
                </div>
              </section>

              <section className="pt-6 border-t border-white/20">
                <p className="text-sm text-white/60">
                  <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-sm text-white/60 mt-2">
                  En utilisant le site yunicity.fr, vous reconnaissez avoir lu, compris et accepté les présentes Conditions Générales d'Utilisation.
                </p>
              </section>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
