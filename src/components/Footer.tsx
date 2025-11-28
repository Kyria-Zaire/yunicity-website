'use client'
import { motion } from 'framer-motion'
import { Mail, MapPin, Instagram, Linkedin, Facebook, Heart, Rocket, Building2, Users, Target, Briefcase, Phone, Globe, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/yunicity.app?igsh=MWlsNGl6a2g0ajFueQ=='
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/yunicity-app-381bb7230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/1Eu3J5rE9P/'
    }
  ]

  const legalLinks = [
    { name: 'Mentions Légales', href: '/mentions-legales' },
    { name: 'Politique de Confidentialité', href: '/politique-confidentialite' },
    { name: 'CGU', href: '/cgu' }
  ]

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/equipe' },
    { name: 'Investir', href: '/investir' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">

      {/* Background effect - kept subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-8 max-w-7xl py-12 sm:py-16">
        {/* Main content - Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand + Mini Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/10">
                <Image
                  src="/yunicity-logo.png"
                  alt="Yunicity Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-white font-light text-xl tracking-tight block">YUNICITY</span>
                <p className="text-white/50 text-xs font-light">Reconnecte les habitants à leur territoire</p>
              </div>
            </div>
            {/* Mini Pitch */}
            <p className="text-white/70 text-sm font-light leading-relaxed mb-4">
              La première super-app locale qui centralise toute la vie de votre ville : événements, commerces, actualités et communauté.
            </p>
            {/* Social Links - More prominent */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 sm:hover:bg-white/10 flex items-center justify-center text-white/60 sm:hover:text-white transition-all sm:hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-4 h-4 text-purple-400" />
              <h3 className="text-white font-medium text-sm">Navigation</h3>
            </div>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm font-light flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Général */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-4 h-4 text-blue-400" />
              <h3 className="text-white font-medium text-sm">Contact</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:yu.entreprise@gmail.com"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-light group"
                >
                  <Mail className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                  <span>yu.entreprise@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-white/60 text-sm font-light">
                  <MapPin className="w-4 h-4" />
                  <span>Reims, Grand Est</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 text-white/60 text-sm font-light">
                  <Rocket className="w-4 h-4" />
                  <span>Lancement : Juillet 2026</span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Contact Pro / Partenariats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-4 h-4 text-green-400" />
              <h3 className="text-white font-medium text-sm">Partenariats</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:yu.entreprise@gmail.com?subject=Partenariat"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-light group"
                >
                  <Building2 className="w-4 h-4 group-hover:text-green-400 transition-colors" />
                  <span>Partenariats entreprises</span>
                </a>
              </li>
              <li>
                <a
                  href="/investir"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-light group"
                >
                  <Target className="w-4 h-4 group-hover:text-green-400 transition-colors" />
                  <span>Investir dans Yunicity</span>
                </a>
              </li>
              <li>
                <a
                  href="/contact?type=partnership"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-light group"
                >
                  <Users className="w-4 h-4 group-hover:text-green-400 transition-colors" />
                  <span>Devenir partenaire</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left: Copyright + Legal links */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-light text-white/50">
              <span>© {currentYear} YUNICITY</span>
              <span className="hidden md:inline text-white/20">•</span>
              {legalLinks.map((link, index) => (
                <div key={link.name} className="flex items-center gap-x-4">
                  <Link
                    href={link.href}
                    className="hover:text-white/70 transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-white/20">•</span>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Made with love */}
            <div className="flex items-center space-x-2 text-white/50 text-xs font-light">
              <span>Fait avec</span>
              <Heart className="w-3 h-3 text-red-400" />
              <span>à Reims</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
