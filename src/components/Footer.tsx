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

      <div className="relative container mx-auto px-6 py-12">

        {/* Main horizontal layout */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 mb-8">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3"
          >
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
          </motion.div>

          {/* Navigation links - Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors text-sm font-light"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* Contact info - Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <a
              href="mailto:yu.entreprise@gmail.com"
              className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors text-sm font-light"
            >
              <Mail className="w-4 h-4" />
              <span>yu.entreprise@gmail.com</span>
            </a>

            <div className="flex items-center space-x-2 text-white/60 text-sm font-light">
              <MapPin className="w-4 h-4" />
              <span>Reims</span>
            </div>

            <div className="flex items-center space-x-2 text-white/60 text-sm font-light">
              <Rocket className="w-4 h-4" />
              <span>Juin 2026</span>
            </div>
          </motion.div>

          {/* Social - Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex space-x-3"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar - Horizontal compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-6 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
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
