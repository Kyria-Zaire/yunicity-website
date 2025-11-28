'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Mail } from 'lucide-react'

const teamMembers = [
  {
    name: "Rody",
    role: "CEO & Co-Founder",
    bio: "Passionné par l'innovation locale et le design d'expérience. Transforme les défis urbains en opportunités de reconnexion.",
    description: "Dirige la vision stratégique et l'innovation produit. Transforme les idées en expériences utilisateur exceptionnelles.",
    skills: ["Vision Stratégique", "Leadership", "Product Design", "UX"],
    linkedin: "https://www.linkedin.com/in/rody-kimuanga-2832191a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    email: "rodyyunicity@gmail.com",
    color: "from-purple-600 to-blue-600",
    initial: "R",
    photo: null // Peut être remplacé par une URL d'image
  },
  {
    name: "Djiby",
    role: "Co-Founder & CFO",
    bio: "Expert en finance et stratégie d'entreprise. Garantit la pérennité et la croissance maîtrisée de Yunicity.",
    description: "Architecte de la solidité financière et juridique de Yunicity. Garantit une croissance durable et maîtrisée.",
    skills: ["Finance", "Comptabilité", "Stratégie", "Conformité"],
    linkedin: "https://www.linkedin.com/in/djiby-ndione-103553196?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "djiby.yunicity@gmail.com",
    color: "from-emerald-600 to-teal-600",
    initial: "D",
    photo: null
  },
  {
    name: "Freeway.jr",
    role: "CTO & Lead Developer",
    bio: "Architecte technique passionné. Construit l'infrastructure qui reconnecte les villes avec performance et innovation.",
    description: "Construit l'infrastructure technique de demain. Crée des solutions scalables et performantes.",
    skills: ["React/Next.js", "Node.js", "Architecture", "DevOps"],
    linkedin: "#",
    email: "kyriamambu1@gmail.com",
    color: "from-blue-600 to-indigo-600",
    initial: "F",
    photo: null
  },
  {
    name: "Jores",
    role: "Growth & Community Manager",
    bio: "Passionné par les communautés locales. Transforme chaque utilisateur en ambassadeur engagé de sa ville.",
    description: "Cultive et engage notre communauté grandissante. Transforme chaque utilisateur en ambassadeur passionné.",
    skills: ["Community", "Growth Hacking", "Social Media", "Engagement"],
    linkedin: "#",
    email: "jores@yunicity.com",
    color: "from-orange-600 to-red-600",
    initial: "J",
    photo: null
  }
]

const teamValues = [
  {
    title: "Ambition",
    description: "Nous visons à transformer la vie locale à grande échelle",
    icon: "🚀",
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "Local",
    description: "L'ancrage territorial est au cœur de notre ADN",
    icon: "🏘️",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Innovation",
    description: "Nous repoussons les limites technologiques pour reconnecter",
    icon: "💡",
    color: "from-orange-500 to-red-500"
  }
]

export default function EquipeHeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section 
      ref={ref} 
      data-section="equipe-hero"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Glow effects très subtils - Réduit sur mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[1000px] h-[600px] sm:h-[1000px] bg-gradient-to-br from-purple-200/10 sm:from-purple-200/20 to-blue-200/10 sm:to-blue-200/20 rounded-full blur-3xl" />

      {/* Grille ultra-subtile */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-8 max-w-7xl py-20 sm:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-12 sm:mb-16"
          >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight leading-[1.1]"
          >
            Rencontrez{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-normal">
              l'équipe
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed font-light max-w-3xl mx-auto px-4 mb-4"
          >
            4 passionnés complémentaires unis par une mission : reconnecter les habitants à leur territoire
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-sm sm:text-base text-gray-500 leading-relaxed font-light max-w-2xl mx-auto px-4"
          >
            Nous avons vécu la déconnexion urbaine. C'est pourquoi nous construisons Yunicity : pour redonner vie à nos quartiers et créer du lien authentique entre les habitants.
          </motion.p>
        </motion.div>

        {/* Team Cards Grid - Spotlight Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="group relative"
            >
              {/* Card */}
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                className="relative bg-white/80 backdrop-blur-2xl border border-gray-200/50 rounded-2xl p-5 sm:p-6 h-full overflow-hidden sm:hover:border-gray-300/50 shadow-lg sm:hover:shadow-xl transition-all duration-700 flex flex-col text-center sm:text-left"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-2xl pointer-events-none`} 
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                />

                {/* Avatar - Rond et stylé */}
                <div className="relative mb-4 sm:mb-5">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                    className="relative w-24 h-24 sm:w-28 sm:h-28 max-w-[120px] mx-auto"
                  >
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
                      />
                    ) : (
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-xl border-4 border-white`}>
                        {member.initial}
                      </div>
                    )}
                    
                    {/* Glow effect around avatar */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20 blur-xl rounded-full -z-10`} />
                  </motion.div>
                </div>

                {/* Name & Role */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                  className="text-lg sm:text-xl font-semibold text-gray-900 mb-1.5 sm:mb-2 text-center"
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                  className={`text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-center bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}
                >
                  {member.role}
                </motion.p>

                {/* Bio - Visible par défaut (2 lignes max) */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                  className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center font-light mb-3 sm:mb-4 line-clamp-2 min-h-[2.5rem]"
                >
                  {member.bio}
                </motion.p>

                {/* Description détaillée - Visible au hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-700 mb-0 group-hover:mb-3 sm:group-hover:mb-4"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <p className="text-gray-500 text-xs leading-relaxed text-center font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    {member.description}
                  </p>
                </div>

                {/* Skills - Show on hover */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 justify-center mb-0 group-hover:mb-3 sm:group-hover:mb-4 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700 opacity-0 group-hover:opacity-100 delay-150"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  {member.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05, ease: [0.16, 1, 0.3, 1] as const }}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-[10px] font-extralight border border-gray-200/50"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Social links - Show on hover */}
                <div className="relative z-10 flex items-center justify-center gap-2 pt-0 group-hover:pt-3 sm:group-hover:pt-4 border-t-0 group-hover:border-t border-gray-200/50 max-h-0 group-hover:max-h-16 overflow-hidden transition-all duration-700 opacity-0 group-hover:opacity-100 delay-200"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  {member.linkedin && member.linkedin !== '#' && (
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                      onClick={(e) => e.stopPropagation()}
                      className="relative z-20 w-8 h-8 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-500 border border-gray-200/50 hover:border-blue-300/50 cursor-pointer"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="w-4 h-4 text-gray-600 hover:text-blue-600 transition-colors duration-300 pointer-events-none" />
                    </motion.a>
                  )}
                  {member.email && (
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                      onClick={(e) => e.stopPropagation()}
                      className="relative z-20 w-8 h-8 bg-gray-100 hover:bg-purple-100 rounded-lg flex items-center justify-center transition-all duration-500 border border-gray-200/50 hover:border-purple-300/50 cursor-pointer"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                      aria-label={`Email de ${member.name}`}
                    >
                      <Mail className="w-4 h-4 text-gray-600 hover:text-purple-600 transition-colors duration-300 pointer-events-none" />
                    </motion.a>
                  )}
                </div>

                {/* Decorative element */}
                <div className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Section Valeurs de l'équipe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-10 sm:mt-12 md:mt-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-center mb-5 sm:mb-6"
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-light text-gray-900 mb-2 sm:mb-3 tracking-tight">
              Nos{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-normal">
                valeurs
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
              Les principes qui guident notre mission et notre vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-7xl mx-auto">
            {teamValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-lg sm:rounded-xl p-4 sm:p-5 hover:border-gray-300/50 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2.5 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-xl sm:text-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5 text-center">
                  {value.title}
                </h3>
                
                {/* Description */}
                <p className="text-[10px] sm:text-xs text-gray-600 text-center font-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
