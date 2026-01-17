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
      { name: 'React', level: 'Confirmé', color: 'from-blue-500 to-cyan-500' },
      { name: 'Next.js', level: 'Confirmé', color: 'from-gray-700 to-black' },
      { name: 'TypeScript', level: 'Avancé', color: 'from-blue-600 to-indigo-600' },
      { name: 'Tailwind CSS', level: 'Confirmé', color: 'from-cyan-500 to-blue-500' },
      { name: 'Framer Motion', level: 'Avancé', color: 'from-blue-800 to-blue-600' }
    ],
    icon: Smartphone,
    description: 'Interfaces utilisateur modernes et performantes'
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', level: 'Confirmé', color: 'from-blue-700 to-blue-500' },
      { name: 'PostgreSQL', level: 'Avancé', color: 'from-blue-600 to-indigo-600' },
      { name: 'REST API', level: 'Confirmé', color: 'from-blue-600 to-blue-400' },
      { name: 'GraphQL', level: 'Intermédiaire', color: 'from-blue-800 to-blue-600' },
      { name: 'WebSocket', level: 'Avancé', color: 'from-cyan-500 to-blue-500' }
    ],
    icon: Database,
    description: 'Infrastructure robuste et scalable'
  },
  {
    category: 'Cloud & DevOps',
    technologies: [
      { name: 'AWS', level: 'Avancé', color: 'from-blue-600 to-blue-400' },
      { name: 'Docker', level: 'Avancé', color: 'from-blue-500 to-cyan-500' },
      { name: 'CI/CD', level: 'Confirmé', color: 'from-blue-700 to-blue-500' },
      { name: 'Kubernetes', level: 'Intermédiaire', color: 'from-blue-600 to-indigo-600' }
    ],
    icon: Cloud,
    description: 'Déploiement et scalabilité optimisés'
  },
  {
    category: 'Design & UX',
    technologies: [
      { name: 'Figma', level: 'Confirmé', color: 'from-blue-800 to-blue-600' },
      { name: 'Design System', level: 'Confirmé', color: 'from-blue-500 to-cyan-500' },
      { name: 'Prototypage', level: 'Avancé', color: 'from-blue-600 to-blue-400' },
      { name: 'User Research', level: 'Avancé', color: 'from-blue-700 to-blue-500' }
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
    color: 'from-blue-800 to-blue-600'
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
    color: 'from-blue-700 to-blue-500'
  },
  {
    title: 'Growth & Community',
    description: 'Développement de communauté et stratégies de croissance',
    skills: ['Growth Hacking', 'Community Management', 'Social Media', 'Engagement'],
    icon: Users,
    color: 'from-blue-600 to-blue-400'
  }
]

const coreCompetencies = [
  {
    title: 'Scalabilité',
    description: 'Architecture conçue pour croître avec votre communauté',
    icon: Rocket,
    color: 'from-blue-800 to-blue-600'
  },
  {
    title: 'Performance',
    description: 'Applications rapides et optimisées pour une expérience fluide',
    icon: Zap,
    color: 'from-blue-500 to-blue-300'
  },
  {
    title: 'Sécurité',
    description: 'Protection des données et respect de la vie privée',
    icon: Shield,
    color: 'from-blue-700 to-blue-500'
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
      case 'Confirmé':
        return 'bg-blue-100 text-blue-700 border-blue-300/50'
      case 'Avancé':
        return 'bg-blue-100 text-blue-700 border-blue-300/50'
      case 'Intermédiaire':
        return 'bg-blue-100 text-blue-700 border-blue-300/50'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300/50'
    }
  }

  return (
    <section ref={ref} data-section="equipe-team" className="relative py-20 sm:py-24 md:py-32 bg-white overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-200/20 to-blue-100/20 rounded-full blur-3xl" />

      {/* Grille subtile */}
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

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight"
          >
            Expertise &{' '}
            <span className="text-blue-800 font-normal">
              Compétences
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
          >
            Notre stack technique et nos domaines d'expertise
          </motion.p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20 px-2 sm:px-0">
          {techStack.map((stack, index) => {
            const Icon = stack.icon
            return (
            <motion.div
                key={stack.category}
              initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-gray-300/50 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-5">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br ${stack.technologies[0].color} flex items-center justify-center shadow-md sm:shadow-lg flex-shrink-0 border-2 border-white/50`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-light text-gray-900 mb-0.5 sm:mb-1 truncate">{stack.category}</h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-light line-clamp-2">{stack.description}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
                  {stack.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.15 + techIndex * 0.1 }}
                      className="flex items-center justify-between p-2.5 sm:p-3 md:p-3.5 bg-gray-100/50 rounded-md sm:rounded-lg md:rounded-xl border border-gray-200/50 hover:bg-gray-100 hover:border-gray-300/50 transition-all duration-300 group/item"
                    >
                      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 min-w-0 flex-1">
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${tech.color} flex-shrink-0`} />
                        <span className="text-gray-900 font-medium text-xs sm:text-sm md:text-base truncate">{tech.name}</span>
                      </div>
                      <span className={`px-1.5 sm:px-2 md:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] md:text-xs font-medium border ${getLevelColor(tech.level)} flex-shrink-0 ml-2`}>
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
          className="mb-16 sm:mb-20"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-2xl sm:text-3xl font-light text-gray-900 mb-8 sm:mb-10 text-center"
          >
            Domaines d'expertise
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 max-w-5xl mx-auto px-2 sm:px-0">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.15 }}
                  className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg sm:rounded-xl md:rounded-2xl p-3.5 sm:p-4 md:p-5 hover:border-gray-300/50 shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  {/* Icon */}
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-2.5 sm:mb-3 md:mb-4 shadow-md sm:shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white/50`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h4 className="text-sm sm:text-base md:text-lg font-light text-gray-900 mb-1 sm:mb-1.5 md:mb-2 line-clamp-2">{area.title}</h4>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mb-2.5 sm:mb-3 md:mb-4 font-light leading-relaxed line-clamp-3">{area.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-1.5 sm:px-2 md:px-2.5 py-0.5 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-[9px] sm:text-[10px] md:text-xs font-light border border-gray-200/50"
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
            className="text-2xl sm:text-3xl font-light text-gray-900 mb-8 sm:mb-10 text-center"
          >
            Compétences clés
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 px-2 sm:px-0">
            {coreCompetencies.map((competency, index) => {
              const Icon = competency.icon
              return (
                <motion.div
                  key={competency.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
                  className="group text-center px-1 sm:px-0"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br ${competency.color} flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white/50`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-base font-light text-gray-900 mb-1 sm:mb-1.5 md:mb-2 line-clamp-2">{competency.title}</h4>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 font-light leading-relaxed line-clamp-3">{competency.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
