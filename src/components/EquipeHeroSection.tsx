'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Mail, Award } from 'lucide-react'

const teamMembers = [
  {
    name: "Rody",
    role: "CEO & Founder",
    description: "Dirige la vision stratégique et l'innovation produit. Transforme les idées en expériences utilisateur exceptionnelles.",
    skills: ["Vision Stratégique", "Leadership", "Product Design", "UX"],
    linkedin: "https://www.linkedin.com/in/rody-kimuanga-2832191a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    email: "rodyyunicity@gmail.com",
    color: "from-purple-600 to-blue-600",
    initial: "R"
  },
  {
    name: "Djiby",
    role: "Co-Founder & CFO",
    description: "Architecte de la solidité financière et juridique de Yunicity. Garantit une croissance durable et maîtrisée.",
    skills: ["Finance", "Comptabilité", "Stratégie", "Conformité"],
    linkedin: "https://www.linkedin.com/in/djiby-ndione-103553196?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "djiby.yunicity@gmail.com",
    color: "from-emerald-600 to-teal-600",
    initial: "D"
  },
  {
    name: "Freeway.jr",
    role: "CTO & Lead Developer",
    description: "Construit l'infrastructure technique de demain. Crée des solutions scalables et performantes.",
    skills: ["React/Next.js", "Node.js", "Architecture", "DevOps"],
    linkedin: "#",
    email: "kyriamambu1@gmail.com",
    color: "from-blue-600 to-indigo-600",
    initial: "F"
  },
  {
    name: "Jores",
    role: "Growth & Community Manager",
    description: "Cultive et engage notre communauté grandissante. Transforme chaque utilisateur en ambassadeur passionné.",
    skills: ["Community", "Growth Hacking", "Social Media", "Engagement"],
    linkedin: "#",
    email: "jores@yunicity.com",
    color: "from-orange-600 to-red-600",
    initial: "J"
  }
]

export default function EquipeHeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Glow effects très subtils */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />

      {/* Grille ultra-subtile */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />

      <div className="relative container mx-auto px-6 py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-medium text-sm mb-10"
          >
            <Award className="w-4 h-4" />
            L'ÉQUIPE FONDATRICE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight leading-[1.1]"
          >
            Rencontrez{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
              l'équipe
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl text-gray-400 leading-relaxed font-light max-w-3xl mx-auto"
          >
            4 passionnés complémentaires unis par une mission : reconnecter les habitants à leur territoire
          </motion.p>
        </motion.div>

        {/* Team Cards Grid - Spotlight Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full overflow-hidden hover:border-white/20 transition-all duration-500"
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl pointer-events-none`} />

                {/* Avatar - Large and prominent */}
                <div className="relative mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-5xl font-bold shadow-2xl border-4 border-white/10`}
                  >
                    {member.initial}
                  </motion.div>
                  
                  {/* Glow effect around avatar on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 rounded-3xl -z-10 pointer-events-none`} />
                </div>

                {/* Name & Role */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.15 }}
                  className="text-3xl font-light text-white mb-2 text-center"
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                  className={`text-sm font-medium mb-6 text-center bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}
                >
                  {member.role}
                </motion.p>

                {/* Description - Hidden by default, shown on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-500 ease-in-out mb-0 group-hover:mb-6">
                  <p className="text-gray-400 text-sm leading-relaxed text-center font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                    {member.description}
                  </p>
                </div>

                {/* Skills - Show on hover */}
                <div className="flex flex-wrap gap-2 justify-center mb-0 group-hover:mb-6 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 delay-150">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-full text-xs font-light border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social links - Show on hover */}
                <div className="relative z-10 flex items-center justify-center gap-3 pt-0 group-hover:pt-6 border-t-0 group-hover:border-t border-white/10 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 delay-200">
                  {member.linkedin && member.linkedin !== '#' && (
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      className="relative z-20 w-10 h-10 bg-white/5 hover:bg-blue-500/20 rounded-xl flex items-center justify-center transition-colors border border-white/10 hover:border-blue-500/30 cursor-pointer"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors pointer-events-none" />
                    </motion.a>
                  )}
                  {member.email && (
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      className="relative z-20 w-10 h-10 bg-white/5 hover:bg-purple-500/20 rounded-xl flex items-center justify-center transition-colors border border-white/10 hover:border-purple-500/30 cursor-pointer"
                      aria-label={`Email de ${member.name}`}
                    >
                      <Mail className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors pointer-events-none" />
                    </motion.a>
                  )}
                </div>

                {/* Decorative element */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
