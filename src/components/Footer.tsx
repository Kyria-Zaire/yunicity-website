'use client'
import { motion } from 'framer-motion'
import { Mail, MapPin, Instagram, Linkedin, Facebook, Heart, Rocket } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/yunicity.app?igsh=MWhzam53cm9kMGxtNQ==',
      color: 'hover:text-pink-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/yunicity-app-381bb7230',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/17FsREHfzM/',
      color: 'hover:text-blue-500'
    }
  ]

  const legalLinks = [
    { name: 'Mentions Légales', href: '/mentions-legales' },
    { name: 'Politique de Confidentialité', href: '/politique-confidentialite' },
    { name: 'CGU', href: '/cgu' }
  ]

  const quickLinks = [
    { name: 'Accueil', href: '/#hero' },
    { name: 'À propos', href: '/#equipe' },
    { name: 'Investir', href: '/investir' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 border-t border-white/10 overflow-hidden">
      
      {/* Background effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5">
                <Image 
                  src="/yunicity-logo.png" 
                  alt="Yunicity Logo" 
                  width={48} 
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">YUNICITY</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              La super-app qui reconnecte les habitants à leur territoire. 
              Découvrez, partagez et vivez votre ville autrement.
            </p>
            <div className="flex items-center space-x-2 text-white/60">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Reims, Grand Est</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60 mt-2">
              <Rocket className="w-4 h-4" />
              <span className="text-sm">Lancement MVP : Mars 2026</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Légal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Restons Connectés</h3>
            <div className="space-y-4 mb-6">
              <a 
                href="mailto:yu.entreprise@gmail.com"
                className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">yu.entreprise@gmail.com</span>
              </a>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/70 ${social.color} transition-all`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} YUNICITY. Tous droits réservés.
            </p>
            
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>à Reims</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
