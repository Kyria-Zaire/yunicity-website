'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  BarChart3, 
  Users, 
  Zap,
  Shield,
  Layers,
  Rocket
} from 'lucide-react'

const techStack = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', level: 'Expert', color: 'from-blue-500 to-cyan-500' },
      { name: 'Next.js', level: 'Expert', color: 'from-gray-700 to-black' },
      { name: 'TypeScript', level: 'Avancé', color: 'from-blue-600 to-indigo-600' },
      { name: 'Tailwind CSS', level: 'Expert', color: 'from-cyan-500 to-blue-500' },
      { name: 'Framer Motion', level: 'Avancé', color: 'from-purple-500 to-pink-500' }
    ],
    icon: Smartphone,
    description: 'Interfaces utilisateur modernes et performantes'
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', level: 'Expert', color: 'from-green-500 to-emerald-500' },
      { name: 'PostgreSQL', level: 'Avancé', color: 'from-blue-600 to-indigo-600' },
      { name: 'REST API', level: 'Expert', color: 'from-orange-500 to-red-500' },
      { name: 'GraphQL', level: 'Intermédiaire', color: 'from-pink-500 to-purple-500' },
      { name: 'WebSocket', level: 'Avancé', color: 'from-cyan-500 to-blue-500' }
    ],
    icon: Database,
    description: 'Infrastructure robuste et scalable'
  },
  {
    category: 'Cloud & DevOps',
    technologies: [
      { name: 'AWS', level: 'Avancé', color: 'from-orange-500 to-yellow-500' },
      { name: 'Docker', level: 'Avancé', color: 'from-blue-500 to-cyan-500' },
      { name: 'CI/CD', level: 'Expert', color: 'from-green-500 to-emerald-500' },
      { name: 'Kubernetes', level: 'Intermédiaire', color: 'from-blue-600 to-indigo-600' }
    ],
    icon: Cloud,
    description: 'Déploiement et scalabilité optimisés'
  },
  {
    category: 'Design & UX',
    technologies: [
      { name: 'Figma', level: 'Expert', color: 'from-purple-500 to-pink-500' },
      { name: 'Design System', level: 'Expert', color: 'from-blue-500 to-cyan-500' },
      { name: 'Prototypage', level: 'Avancé', color: 'from-orange-500 to-red-500' },
      { name: 'User Research', level: 'Avancé', color: 'from-green-500 to-emerald-500' }
    ],
    icon: Palette,
    description: 'Expériences utilisateur exceptionnelles'
  }
]

const expertiseAreas = [
  {
    title: 'Product Design & UX',
    description: 'Création d\'expériences utilisateur intuitives et engageantes',
    skills: ['Design Thinking', 'User Research', 'Prototypage', 'Design System'],
    icon: Palette,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Development Full-Stack',
    description: 'Développement d\'applications web performantes et scalables',
    skills: ['React/Next.js', 'Node.js', 'Architecture', 'Performance'],
    icon: Code,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Finance & Stratégie',
    description: 'Gestion financière rigoureuse et stratégie de croissance',
    skills: ['Comptabilité', 'Finance', 'Stratégie', 'Conformité'],
    icon: BarChart3,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Growth & Community',
    description: 'Développement de communauté et stratégies de croissance',
    skills: ['Growth Hacking', 'Community Management', 'Social Media', 'Engagement'],
    icon: Users,
    color: 'from-orange-500 to-red-500'
  }
]

const coreCompetencies = [
  {
    title: 'Scalabilité',
    description: 'Architecture conçue pour croître avec votre communauté',
    icon: Rocket,
    color: 'from-purple-500 to-blue-500'
  },
  {
    title: 'Performance',
    description: 'Applications rapides et optimisées pour une expérience fluide',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Sécurité',
    description: 'Protection des données et respect de la vie privée',
    icon: Shield,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Innovation',
    description: 'Adoption des dernières technologies et meilleures pratiques',
    icon: Layers,
    color: 'from-blue-500 to-cyan-500'
  }
]

export default function EquipeTeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'Avancé':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'Intermédiaire':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <section ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />

      {/* Grille subtile */}
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

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight"
          >
            Expertise &{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-normal">
              Compétences
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-400 leading-relaxed font-light max-w-3xl mx-auto"
          >
            Notre stack technique et nos domaines d'expertise
          </motion.p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
          {techStack.map((stack, index) => {
            const Icon = stack.icon
            return (
            <motion.div
                key={stack.category}
              initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stack.technologies[0].color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-white mb-1">{stack.category}</h3>
                    <p className="text-sm text-gray-400 font-light">{stack.description}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  {stack.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.15 + techIndex * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group/item"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color}`} />
                        <span className="text-white font-medium">{tech.name}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(tech.level)}`}>
                        {tech.level}
                      </span>
            </motion.div>
          ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-24"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-3xl sm:text-4xl font-light text-white mb-12 text-center"
          >
            Domaines d'expertise
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.15 }}
                  className="group relative bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-light text-white mb-2">{area.title}</h4>
                  <p className="text-sm text-gray-400 mb-4 font-light leading-relaxed">{area.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-full text-xs font-light border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-3xl sm:text-4xl font-light text-white mb-12 text-center"
          >
            Compétences clés
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCompetencies.map((competency, index) => {
              const Icon = competency.icon
              return (
                <motion.div
                  key={competency.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
                  className="group text-center"
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${competency.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-light text-white mb-2">{competency.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">{competency.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
