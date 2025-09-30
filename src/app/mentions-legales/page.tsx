'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail, MapPin, Building } from 'lucide-react'
import Link from 'next/link'

export default function MentionsLegalesPage() {
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
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Mentions Légales</h1>
            
            <div className="space-y-8 text-white/80 leading-relaxed">
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Building className="w-6 h-6 mr-3 text-purple-400" />
                  Éditeur du Site
                </h2>
                <div className="space-y-2 pl-9">
                  <p><strong className="text-white">Raison sociale :</strong> YUNICITY (en cours de création)</p>
                  <p><strong className="text-white">Forme juridique :</strong> SAS (Société par Actions Simplifiée)</p>
                  <p><strong className="text-white">Capital social :</strong> En cours de constitution</p>
                  <p><strong className="text-white">Siège social :</strong> Reims, Grand Est, France</p>
                  <p><strong className="text-white">SIRET :</strong> En cours d'immatriculation</p>
                  <p><strong className="text-white">Directeur de la publication :</strong> Équipe Fondatrice YUNICITY</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-blue-400" />
                  Contact
                </h2>
                <div className="space-y-2 pl-9">
                  <p><strong className="text-white">Email :</strong> yu.entreprise@gmail.com</p>
                  <p><strong className="text-white">Site web :</strong> https://yunicity.fr</p>
                  <p><strong className="text-white">Formulaire de contact :</strong> <Link href="/contact" className="text-purple-400 hover:text-purple-300">Accéder au formulaire</Link></p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Hébergement</h2>
                <div className="space-y-2 pl-9">
                  <p><strong className="text-white">Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong className="text-white">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                  <p><strong className="text-white">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">vercel.com</a></p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Propriété Intellectuelle</h2>
                <div className="space-y-3 pl-9">
                  <p>
                    L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, design) est la propriété exclusive de YUNICITY 
                    ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, 
                    quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de YUNICITY.
                  </p>
                  <p>
                    Les marques, logos et noms commerciaux mentionnés sur ce site appartiennent à leurs propriétaires respectifs.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Responsabilité</h2>
                <div className="space-y-3 pl-9">
                  <p>
                    YUNICITY s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, 
                    mais ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
                  </p>
                  <p>
                    YUNICITY ne saurait être tenue responsable des erreurs, d'une absence de disponibilité des informations 
                    ou de la présence de virus sur son site.
                  </p>
                  <p>
                    Les liens hypertextes présents sur le site peuvent renvoyer vers des sites externes. YUNICITY n'exerce 
                    aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Données Personnelles</h2>
                <div className="space-y-3 pl-9">
                  <p>
                    Les informations recueillies via les formulaires du site sont traitées conformément à notre 
                    <Link href="/politique-confidentialite" className="text-purple-400 hover:text-purple-300 underline"> Politique de Confidentialité</Link>.
                  </p>
                  <p>
                    Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, 
                    de rectification, de suppression et d'opposition au traitement de vos données personnelles.
                  </p>
                  <p>
                    Pour exercer ces droits, contactez-nous à : <a href="mailto:yu.entreprise@gmail.com" className="text-purple-400 hover:text-purple-300">yu.entreprise@gmail.com</a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
                <div className="space-y-3 pl-9">
                  <p>
                    Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic via Google Analytics.
                  </p>
                  <p>
                    Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, certaines fonctionnalités 
                    du site pourraient ne pas fonctionner correctement.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Droit Applicable</h2>
                <div className="space-y-3 pl-9">
                  <p>
                    Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l'utilisation 
                    du site sera de la compétence exclusive des tribunaux français.
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
