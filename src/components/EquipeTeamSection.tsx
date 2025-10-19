'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Mail } from 'lucide-react'

const teamMembers = [
  {
    name: "Rody",
    role: "CEO & Founder",
    description: "Dirige la vision stratégique et l'innovation produit. Transforme les idées en expériences utilisateur exceptionnelles qui redéfinissent le tourisme local.",
    skills: ["Vision Stratégique", "Leadership", "Product Design", "UX"],
    linkedin: "#",
    email: "rody@yunicity.com",
    color: "from-purple-600 to-blue-600"
  },
  {
    name: "Djiby",
    role: "Co-Founder & CFO",
    description: "Architecte la solidité financière et juridique de Yunicity. Garantit une croissance durable et maîtrisée avec une rigueur comptable exemplaire.",
    skills: ["Finance", "Comptabilité", "Stratégie", "Conformité"],
    linkedin: "#",
    email: "db@yunicity.com",
    color: "from-emerald-600 to-teal-600"
  },
  {
    name: "Freeway.jr",
    role: "CTO & Lead Developer",
    description: "Construit l'infrastructure technique de demain. Crée des solutions scalables et performantes qui propulsent Yunicity vers l'excellence.",
    skills: ["React/Next.js", "Node.js", "Architecture", "DevOps"],
    linkedin: "#",
    email: "free@yunicity.com",
    color: "from-blue-600 to-indigo-600"
  },
  {
    name: "Eloi",
    role: "Creative Director",
    description: "Capture l'âme des villes à travers l'objectif. Crée le storytelling visuel qui inspire et connecte les voyageurs à leur destination.",
    skills: ["Photographie", "Réalisation", "Storytelling", "Branding"],
    linkedin: "#",
    email: "eloi@yunicity.com",
    color: "from-pink-600 to-purple-600"
  },
  {
    name: "Jores",
    role: "Growth & Community Manager",
    description: "Cultive et engage notre communauté grandissante. Transforme chaque utilisateur en ambassadeur passionné de l'exploration locale.",
    skills: ["Community", "Growth Hacking", "Social Media", "Engagement"],
    linkedin: "#",
    email: "jores@yunicity.com",
    color: "from-orange-600 to-red-600"
  }
]

export default function EquipeTeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Grille subtile */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Rencontrez l'équipe
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
            Chaque membre apporte une expertise unique au service de notre mission
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {teamMembers.slice(0, 3).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-gray-900/10 backdrop-blur-md rounded-3xl p-10 border border-gray-300/40 hover:border-gray-400/60 transition-all duration-300 h-full shadow-sm">
                {/* Avatar */}
                <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-4xl font-bold shadow-xl`}>
                  {member.name.substring(0, 1)}
                </div>

                {/* Name & Role */}
                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                <p className={`text-sm font-semibold mb-6 text-center bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed text-center">{member.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-100/80 text-gray-700 rounded-full text-xs font-medium border border-gray-200/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex items-center justify-center gap-3 pt-6 border-t border-gray-200/50">
                  <a
                    href={member.linkedin}
                    className="w-12 h-12 bg-gray-100/50 hover:bg-blue-100/80 rounded-xl flex items-center justify-center transition-colors group/link border border-gray-200/30"
                  >
                    <Linkedin className="w-6 h-6 text-gray-600 group-hover/link:text-blue-600 transition-colors" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-12 h-12 bg-gray-100/50 hover:bg-purple-100/80 rounded-xl flex items-center justify-center transition-colors group/link border border-gray-200/30"
                  >
                    <Mail className="w-6 h-6 text-gray-600 group-hover/link:text-purple-600 transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.slice(3).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-gray-900/10 backdrop-blur-md rounded-3xl p-10 border border-gray-300/40 hover:border-gray-400/60 transition-all duration-300 h-full shadow-sm">
                {/* Avatar */}
                <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-4xl font-bold shadow-xl`}>
                  {member.name.substring(0, 1)}
                </div>

                {/* Name & Role */}
                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                <p className={`text-sm font-semibold mb-6 text-center bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed text-center">{member.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-100/80 text-gray-700 rounded-full text-xs font-medium border border-gray-200/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex items-center justify-center gap-3 pt-6 border-t border-gray-200/50">
                  <a
                    href={member.linkedin}
                    className="w-12 h-12 bg-gray-100/50 hover:bg-blue-100/80 rounded-xl flex items-center justify-center transition-colors group/link border border-gray-200/30"
                  >
                    <Linkedin className="w-6 h-6 text-gray-600 group-hover/link:text-blue-600 transition-colors" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-12 h-12 bg-gray-100/50 hover:bg-purple-100/80 rounded-xl flex items-center justify-center transition-colors group/link border border-gray-200/30"
                  >
                    <Mail className="w-6 h-6 text-gray-600 group-hover/link:text-purple-600 transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
