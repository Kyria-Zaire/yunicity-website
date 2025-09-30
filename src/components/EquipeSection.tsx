'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  Download,
  Calendar,
  Rocket,
  Star,
  Users,
  TrendingUp,
  Award,
  Code,
  Palette,
  Target,
  Zap,
  Heart
} from 'lucide-react'

// Données de l'équipe - ÉQUIPE COMPLÈTE
const teamMembers = [
  {
    name: "Rody",
    role: "CEO & Founder",
    description: "Visionnaire produit et leader de l'équipe. Expert en stratégie digitale, UX/UI et développement communautaire avec une vision claire du marché local.",
    avatar: "🚀",
    skills: ["Stratégie", "Leadership", "UX/UI", "Product Management"],
    achievements: ["Vision produit claire", "Équipe constituée", "Partenariats locaux", "Roadmap définie"],
    social: {
      linkedin: "#",
      github: "#",
      email: "rody@yunicity.com"
    },
    gradient: "from-purple-500 to-blue-500"
  },
  {
    name: "Djiby",
    role: "Co-Founder & CFO", 
    description: "Comptable et co-fondateur. Gestion financière, stratégie d'investissement et structuration juridique pour une croissance maîtrisée.",
    avatar: "💼",
    skills: ["Finance", "Comptabilité", "Stratégie", "Juridique"],
    achievements: ["Expert-comptable certifié", "Structuration financière", "Modèle économique", "Conformité réglementaire"],
    social: {
      linkedin: "#",
      github: "#", 
      email: "db@yunicity.com"
    },
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    name: "Freeway.jr",
    role: "CTO & Lead Developer", 
    description: "Développeur full-stack passionné. Architecture technique scalable et innovation pour créer des expériences utilisateur exceptionnelles.",
    avatar: "💻",
    skills: ["React/Next.js", "Node.js", "Architecture", "DevOps"],
    achievements: ["10+ apps développées", "Code open-source", "Mentor développeurs", "Tech lead expérimenté"],
    social: {
      linkedin: "#",
      github: "#", 
      email: "free@yunicity.com"
    },
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    name: "Eloi",
    role: "Creative Director", 
    description: "Photographe et réalisateur professionnel. Création de contenu visuel premium et storytelling pour construire l'identité de marque Yunicity.",
    avatar: "📸",
    skills: ["Photographie", "Réalisation", "Storytelling", "Branding"],
    achievements: ["Portfolio professionnel", "Projets clients reconnus", "Expertise visuelle", "Direction artistique"],
    social: {
      linkedin: "#",
      github: "#", 
      email: "eloi@yunicity.com"
    },
    gradient: "from-pink-500 to-purple-500"
  },
  {
    name: "Jores",
    role: "Growth & Community Manager", 
    description: "Polyvalent et passionné, il gère la croissance et la communauté. Collaboration étroite avec Eloi pour les réseaux sociaux et l'engagement utilisateur.",
    avatar: "🎯",
    skills: ["Community Management", "Growth Hacking", "Social Media", "Polyvalence"],
    achievements: ["Stratégie réseaux sociaux", "Engagement communauté", "Growth tactics", "Collaboration créative"],
    social: {
      linkedin: "#",
      github: "#", 
      email: "jores@yunicity.com"
    },
    gradient: "from-orange-500 to-red-500"
  }
]

const roadmapSteps = [
  {
    phase: "Phase 1",
    title: "Pré-lancement", 
    period: "Q4 2025",
    description: "Finalisation MVP, tests utilisateurs, partenariats locaux Reims",
    icon: Rocket,
    color: "from-red-500 to-orange-500",
    tasks: ["MVP finalisé", "Tests alpha/beta", "15 partenaires signés", "Équipe de 5 opérationnelle"]
  },
  {
    phase: "Phase 2", 
    title: "Lancement Reims",
    period: "Q1 2026",
    description: "Lancement officiel MVP Reims, acquisition premiers utilisateurs",
    icon: Star,
    color: "from-purple-500 to-pink-500", 
    tasks: ["Lancement public", "1K utilisateurs", "Feedback intégré", "Metrics établies"]
  },
  {
    phase: "Phase 3",
    title: "Expansion Régionale", 
    period: "Q2-Q4 2026",
    description: "Déploiement Grand Est, optimisation produit, croissance utilisateurs",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    tasks: ["5 nouvelles villes", "10K utilisateurs", "Monétisation activée", "Série A"]
  },
  {
    phase: "Phase 4",
    title: "Scale National",
    period: "2027-2030", 
    description: "Expansion nationale, features avancées, leadership marché",
    icon: Award,
    color: "from-green-500 to-emerald-500",
    tasks: ["50+ villes", "400K utilisateurs", "5M€ ARR", "Leader marché"]
  }
]

// Composant carte membre équipe
function TeamMemberCard({ member, delay = 0 }: { member: typeof teamMembers[0], delay?: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-3xl opacity-10 group-hover:opacity-20 transition-all duration-500`} />
      
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 group-hover:border-white/30 transition-all duration-300 h-full">
        
        {/* Avatar & Role */}
        <div className="text-center mb-8">
          <motion.div
            className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-4xl mb-6 shadow-2xl`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {member.avatar}
          </motion.div>
          
          <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
          <p className={`text-lg font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
            {member.role}
          </p>
        </div>

        {/* Description */}
        <p className="text-white/80 text-center leading-relaxed mb-8">
          {member.description}
        </p>

        {/* Skills */}
        <div className="mb-8">
          <h4 className="text-white font-semibold mb-4 flex items-center">
            <Code className="w-4 h-4 mr-2" />
            Expertises
          </h4>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: delay + 0.5 + index * 0.1 }}
                className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm border border-white/20"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h4 className="text-white font-semibold mb-4 flex items-center">
            <Award className="w-4 h-4 mr-2" />
            Réalisations
          </h4>
          <div className="space-y-2">
            {member.achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: delay + 0.8 + index * 0.1 }}
                className="flex items-center text-white/70 text-sm"
              >
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3" />
                {achievement}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          {Object.entries(member.social).map(([platform, url]) => {
            const Icon = platform === 'linkedin' ? Linkedin : platform === 'github' ? Github : Mail
            return (
              <motion.a
                key={platform}
                href={url}
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            )
          })}
        </div>

        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
    </motion.div>
  )
}

// Composant roadmap
function RoadmapStep({ step, index }: { step: typeof roadmapSteps[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Content */}
      <div className="flex-1">
        <div className={`bg-gradient-to-br ${step.color} bg-opacity-10 backdrop-blur-xl rounded-2xl border border-white/20 p-6`}>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
              <step.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">{step.title}</h4>
              <p className="text-white/60 text-sm">{step.period}</p>
            </div>
          </div>
          
          <p className="text-white/80 mb-4 leading-relaxed">{step.description}</p>
          
          <div className="grid grid-cols-2 gap-2">
            {step.tasks.map((task, taskIndex) => (
              <motion.div
                key={task}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.2 + taskIndex * 0.1 }}
                className="flex items-center text-white/70 text-sm"
              >
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                {task}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="relative">
        <motion.div
          className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} shadow-lg border-4 border-white/20`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        />
        {index < roadmapSteps.length - 1 && (
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-white/30 to-transparent" />
        )}
      </div>

      {/* Phase indicator */}
      <div className="flex-1 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${step.color} text-white font-semibold text-sm shadow-lg`}
        >
          {step.phase}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function EquipeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section 
      ref={ref}
      className="relative min-h-screen py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        
        {/* Header Équipe */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-6 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 font-semibold text-sm tracking-wider uppercase mb-6"
          >
            ÉQUIPE FONDATRICE
          </motion.span>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8">
            L'Équipe de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              5 EXPERTS
            </span>
            Complémentaires
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
            Une équipe complète et expérimentée qui couvre tous les aspects : 
            <br className="hidden lg:block" />
            <span className="text-purple-300 font-semibold">tech, finance, créatif, growth et leadership</span>.
          </p>
        </motion.div>

        {/* Cartes équipe */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={member.name} 
              member={member} 
              delay={index * 0.2} 
            />
          ))}
        </div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Roadmap 2025-2030
            </h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              De l'idée au leadership européen : notre plan détaillé pour conquérir le marché local avec une équipe de 5 experts
            </p>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {roadmapSteps.map((step, index) => (
              <RoadmapStep key={step.phase} step={step} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Call to Action Final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 max-w-5xl mx-auto">
            
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Prêt à Révolutionner le Local ?
              </h3>
              <p className="text-xl text-white/80 leading-relaxed">
                Rejoignez-nous dans cette aventure exceptionnelle. 
                <br className="hidden lg:block" />
                Ensemble, créons l'avenir des communautés urbaines.
              </p>
            </motion.div>

            {/* Stats finales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-4xl font-black text-purple-400 mb-2">🚀</div>
                <div className="text-2xl font-bold text-white">Lancement</div>
                <div className="text-white/70">Mars 2026</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-4xl font-black text-pink-400 mb-2">💰</div>
                <div className="text-2xl font-bold text-white">Objectif</div>
                <div className="text-white/70">5M€ ARR 2030</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-4xl font-black text-indigo-400 mb-2">🌍</div>
                <div className="text-2xl font-bold text-white">Vision</div>
                <div className="text-white/70">Leader Européen</div>
              </div>
            </motion.div>

            {/* Boutons d'action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full text-white font-bold text-lg overflow-hidden shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-3" />
                  Demander un Rendez-vous
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-white/30 rounded-full text-white font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-3" />
                Executive Summary
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-3" />
                Nous Contacter
              </motion.button>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <div className="flex flex-wrap justify-center gap-8 text-white/70">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  contact@yunicity.com
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +33 (0)1 23 45 67 89
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-red-400" />
                  Made with ❤️ in Reims
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}