'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Users, Smartphone, MapPin, Calendar, MessageSquare, ArrowRight, Building2, Target, Heart, TrendingUp, Search, X, Music, CheckCircle2, RefreshCw, Sun, Clock, Moon, Home, Sparkles, Zap, Mail, Rocket, Star } from 'lucide-react'

const problemes = [
  {
    id: 1,
    title: 'L\'information locale est éparpillée',
    shortPhrase: '85% des Français cherchent des infos locales sur leur téléphone. On change ça.',
    description: 'Les actualités, événements ou initiatives de quartier sont disséminés sur des dizaines de sites et pages. Les habitants ne savent pas toujours où trouver les bons plans, événements ou actualités de leur quartier.',
    solution: 'Yunicity centralise toute l\'information locale sur une seule plateforme, pour que chaque habitant reste connecté à ce qui compte vraiment autour de lui.',
    stat: '85%',
    statLabel: 'des Français cherchent des infos locales sur leur téléphone',
    icon: Smartphone,
    color: 'from-blue-700 to-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    id: 2,
    title: 'Les habitants sont déconnectés de leur territoire',
    shortPhrase: '50% des habitants se sentent déconnectés de leur ville. On change ça.',
    description: 'Beaucoup ignorent ce qui se passe autour d\'eux et manquent d\'occasions de participer à la vie locale. 50% des Français se disent non engagés localement.',
    solution: 'Yunicity reconnecte les citoyens à leur ville, leurs voisins et leurs acteurs locaux, en valorisant les initiatives de chaque quartier.',
    stat: '50%',
    statLabel: 'des Français se sentent déconnectés de leur ville',
    icon: Users,
    color: 'from-blue-600 to-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/20'
  },
  {
    id: 3,
    title: 'Manque de visibilité pour les acteurs locaux',
    shortPhrase: '70% des acteurs locaux manquent de visibilité numérique. On change ça.',
    description: 'Commerçants, associations, jeunes créateurs ou structures locales ont du mal à se faire connaître. Les commerces, associations et porteurs de projets peinent à toucher les habitants de leur propre ville.',
    solution: 'Yunicity leur offre une vitrine digitale pour valoriser leurs initiatives, adaptée à leurs besoins et à leurs valeurs.',
    stat: '70%',
    statLabel: 'des acteurs locaux manquent de visibilité numérique',
    icon: MessageSquare,
    color: 'from-blue-500 to-blue-300',
    bgColor: 'bg-blue-300/10',
    borderColor: 'border-blue-300/20'
  },
  {
    id: 4,
    title: 'Faible engagement et sentiment d\'isolement urbain',
    shortPhrase: '68% veulent participer davantage mais ne savent pas comment. On change ça.',
    description: '50% des Français se disent "non engagés localement". 68% disent vouloir participer davantage à la vie de leur quartier mais ne savent pas comment. Les réseaux classiques divisent ou éloignent.',
    solution: 'Yunicity crée du lien social à travers l\'information, les rencontres et les événements physiques, en mélangeant digital et réel : interviews, cartes interactives, événements et challenges locaux.',
    stat: '68%',
    statLabel: 'veulent participer davantage mais ne savent pas comment',
    icon: Calendar,
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/20'
  }
]

// Scénarios selon le problème
const scenarios = [
  {
    // Problème 1 : Information éparpillée
    title: "Vous cherchez un événement ce week-end",
    description: "Essayez de trouver un événement local...",
    steps: [
      { action: "Ouvrir Google", result: "Trop de résultats génériques" },
      { action: "Chercher sur Facebook", result: "Événements non localisés" },
      { action: "Vérifier le site de la mairie", result: "Site non mis à jour" },
      { action: "Chercher sur Instagram", result: "Hashtags dispersés" }
    ],
    mockup: "browser",
    keyword: "événement",
    yunicityUrl: "yunicity.com/événement"
  },
  {
    // Problème 2 : Déconnexion territoriale
    title: "Vous voulez vous connecter à votre quartier",
    description: "Essayez de découvrir ce qui se passe près de chez vous...",
    steps: [
      { action: "Chercher des groupes locaux", result: "Groupes inactifs ou privés" },
      { action: "Vérifier les réseaux sociaux", result: "Contenu non localisé" },
      { action: "Chercher des associations", result: "Informations obsolètes" },
      { action: "Demander à vos voisins", result: "Personne ne sait vraiment" }
    ],
    mockup: "social",
    keyword: "quartier",
    yunicityUrl: "yunicity.com/quartier"
  },
  {
    // Problème 3 : Manque de visibilité
    title: "Vous êtes un commerçant local",
    description: "Essayez de vous faire connaître dans votre ville...",
    steps: [
      { action: "Créer une page Facebook", result: "Peu d'engagement local" },
      { action: "Publier sur Instagram", result: "Algorithme défavorable" },
      { action: "Mettre à jour Google Maps", result: "Visibilité limitée" },
      { action: "Créer un site web", result: "Coût élevé, peu de trafic" }
    ],
    mockup: "business",
    keyword: "visibilité",
    yunicityUrl: "yunicity.com/visibilité"
  },
  {
    // Problème 4 : Isolement urbain
    title: "Vous voulez participer à la vie locale",
    description: "Essayez de trouver comment vous engager...",
    steps: [
      { action: "Chercher des événements", result: "Pas d'information centralisée" },
      { action: "Rejoindre des groupes", result: "Groupes fermés ou inactifs" },
      { action: "Contacter la mairie", result: "Réponse lente ou absente" },
      { action: "Chercher des initiatives", result: "Difficile de trouver" }
    ],
    mockup: "engagement",
    keyword: "participation",
    yunicityUrl: "yunicity.com/participation"
  }
]

// Solutions Yunicity pour chaque problème
const yunicitySolutions = [
  {
    // Problème 1
    results: [
      {
        title: "Événements locaux ce week-end",
        description: "15 événements trouvés dans votre ville",
        icon: Calendar,
        color: "text-blue-700",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      },
      {
        title: "Marché de Noël - Centre-ville",
        description: "Samedi 14h-20h • Place d'Erlon",
        icon: MapPin,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      },
      {
        title: "Concert de jazz - Médiathèque",
        description: "Dimanche 16h • Entrée gratuite",
        icon: Music,
        color: "text-blue-800",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      }
    ],
    suggestions: [
      "Découvrir tous les événements du mois",
      "S'abonner aux notifications d'événements",
      "Partager avec vos amis locaux"
    ]
  },
  {
    // Problème 2
    results: [
      {
        title: "Groupes de quartier actifs",
        description: "12 groupes dans votre secteur",
        icon: Users,
        color: "text-blue-700",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      },
      {
        title: "Associations locales",
        description: "8 associations près de chez vous",
        icon: Heart,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      },
      {
        title: "Initiatives citoyennes",
        description: "5 projets en cours dans votre quartier",
        icon: Target,
        color: "text-blue-800",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      }
    ],
    suggestions: [
      "Rejoindre un groupe de quartier",
      "Découvrir les associations locales",
      "Participer aux initiatives citoyennes"
    ]
  },
  {
    // Problème 3
    results: [
      {
        title: "Vitrine digitale pour commerçants",
        description: "Augmentez votre visibilité locale",
        icon: Building2,
        color: "text-blue-700",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      },
      {
        title: "Dashboard analytics local",
        description: "Suivez votre engagement en temps réel",
        icon: TrendingUp,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      },
      {
        title: "Réservations et paiements intégrés",
        description: "Gérez vos clients facilement",
        icon: Smartphone,
        color: "text-blue-800",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      }
    ],
    suggestions: [
      "Créer votre profil commerçant",
      "Découvrir les fonctionnalités business",
      "Rejoindre les 500+ acteurs locaux"
    ]
  },
  {
    // Problème 4
    results: [
      {
        title: "Événements participatifs",
        description: "25 événements où vous pouvez participer",
        icon: Calendar,
        color: "text-blue-700",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      },
      {
        title: "Consultations citoyennes",
        description: "3 consultations en cours dans votre ville",
        icon: MessageSquare,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      },
      {
        title: "Challenges locaux",
        description: "Relevez des défis avec vos voisins",
        icon: Target,
        color: "text-blue-800",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      }
    ],
    suggestions: [
      "Voir tous les événements participatifs",
      "Participer aux consultations",
      "Rejoindre un challenge local"
    ]
  }
]

// Scénario interactif immersif
function InteractiveScenario({ index, isInView }: { index: number, isInView: boolean }) {
  const [step, setStep] = useState(0)
  const [isSearching, setIsSearching] = useState(false)
  const [tabs, setTabs] = useState<string[]>([])
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null)
  const [frustrationLevel, setFrustrationLevel] = useState(0)
  const [showYunicityTab, setShowYunicityTab] = useState(false)
  const [yunicitySearching, setYunicitySearching] = useState(false)

  const scenario = scenarios[index]
  const yunicitySolution = yunicitySolutions[index]
  
  // Déterminer l'onglet actif par défaut (dernier onglet)
  useEffect(() => {
    if (tabs.length > 0 && activeTabIndex === null) {
      setActiveTabIndex(tabs.length - 1)
    }
  }, [tabs.length, activeTabIndex])
  
  // Synchroniser showYunicityTab avec l'onglet actif
  useEffect(() => {
    if (activeTabIndex !== null && tabs[activeTabIndex] === "Solution Yunicity") {
      setShowYunicityTab(true)
    }
  }, [activeTabIndex, tabs])

  // Réinitialiser quand on change de section
  useEffect(() => {
    setStep(0)
    setTabs([])
    setActiveTabIndex(null)
    setFrustrationLevel(0)
    setIsSearching(false)
    setShowYunicityTab(false)
    setYunicitySearching(false)
  }, [index])

  // Fonction de rechargement de l'onglet actif
  const reloadActiveTab = useCallback(() => {
    if (activeTabIndex === null && tabs.length === 0) return
    
    // Si aucun onglet actif mais on a des onglets, utiliser le dernier
    const currentActiveIndex = activeTabIndex !== null ? activeTabIndex : tabs.length - 1
    const activeTab = tabs[currentActiveIndex]
    if (!activeTab) return
    
    // Si c'est l'onglet Yunicity
    if (activeTab === "Solution Yunicity") {
      setYunicitySearching(true)
      setTimeout(() => {
        setYunicitySearching(false)
      }, 1500)
      return
    }
    
    // Pour les autres onglets, simuler une recherche
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
    }, 1500)
  }, [activeTabIndex, tabs])

  // Gestion du raccourci Ctrl+R
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault()
        reloadActiveTab()
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [reloadActiveTab])

  // Auto-play du scénario
  useEffect(() => {
    if (!isInView) return
    
    const currentScenario = scenarios[index]
    if (!currentScenario) return
    
    const stepsLength = currentScenario.steps.length
    
    // Si on a fini les 4 étapes frustrantes, on passe à Yunicity
    if (step >= stepsLength && !showYunicityTab) {
      const timer = setTimeout(() => {
        // Atteindre le niveau de frustration maximum (5/5)
        setFrustrationLevel(5)
        setShowYunicityTab(true)
        setTabs(prev => [...prev, `Solution Yunicity`])
        setYunicitySearching(true)
        
        setTimeout(() => {
          setYunicitySearching(false)
        }, 2000)
      }, 2000)
      
      return () => clearTimeout(timer)
    }
    
    // Sinon, on continue avec les étapes frustrantes
    if (step < stepsLength) {
      const timer = setTimeout(() => {
        setIsSearching(true)
        setTabs(prev => [...prev, currentScenario.steps[step].action])
        setFrustrationLevel(prev => prev + 1)
        
        setTimeout(() => {
          setIsSearching(false)
          setStep(prev => prev + 1)
        }, 2000)
      }, step === 0 ? 1000 : 3000)

      return () => clearTimeout(timer)
    }
  }, [isInView, step, index, showYunicityTab])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="max-w-5xl mx-auto mb-6 sm:mb-8"
    >
      {/* Header du scénario */}
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-light text-gray-900 mb-2">
          {scenario.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 font-light">
          {scenario.description}
        </p>
      </div>

      {/* Interface mockup interactive */}
      <div className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-gray-200/50 shadow-lg overflow-hidden">
        {/* Barre de navigation du navigateur */}
        <div className="bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-blue-400" />
            <div className="w-3 h-3 rounded-full bg-blue-300" />
            <div className="w-3 h-3 rounded-full bg-blue-500" />
          </div>
          <div className="flex-1 mx-3">
            <div className={`rounded-md px-3 py-1.5 flex items-center gap-2 ${
              (activeTabIndex !== null && tabs[activeTabIndex] === "Solution Yunicity") || (showYunicityTab && activeTabIndex === null)
                ? 'bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200' 
                : 'bg-white'
            }`}>
              {(activeTabIndex !== null && tabs[activeTabIndex] === "Solution Yunicity") || (showYunicityTab && activeTabIndex === null) ? (
                <>
                  <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                    <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-xs font-medium text-blue-800">
                    {scenario.yunicityUrl}
                  </span>
                </>
              ) : (
                <>
                  <Search className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-xs text-gray-500 font-light">
                    {isSearching ? "Recherche en cours..." : (activeTabIndex !== null && tabs[activeTabIndex]) ? tabs[activeTabIndex] : scenario.steps[step]?.action || "Rechercher..."}
                  </span>
                </>
              )}
            </div>
          </div>
          {/* Bouton de rechargement */}
          {tabs.length > 0 && (
            <button
              onClick={reloadActiveTab}
              className="p-1.5 hover:bg-gray-200 rounded transition-colors"
              title="Recharger (Ctrl+R)"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-gray-600 ${(isSearching || yunicitySearching) ? 'animate-spin' : ''}`} />
            </button>
          )}
        </div>

        {/* Onglets multiples (frustration) */}
        <div className="bg-gray-50 border-b border-gray-200 px-3 py-1.5 flex items-center gap-1 overflow-x-auto">
          {tabs.map((tab, idx) => {
            const isYunicityTab = tab === "Solution Yunicity"
            const isActive = activeTabIndex === idx
            return (
      <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => setActiveTabIndex(idx)}
                className={`flex items-center gap-1.5 rounded-t-md px-2.5 py-1 border border-b-0 text-xs whitespace-nowrap cursor-pointer transition-colors ${
                  isYunicityTab
                    ? isActive
                      ? "bg-gradient-to-r from-blue-100 to-blue-200 border-blue-800 text-blue-900 font-medium shadow-sm"
                      : "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-600 text-blue-800 font-medium hover:from-blue-100 hover:to-blue-200"
                    : isActive
                    ? "bg-gray-100 border-gray-300 text-gray-900 font-medium shadow-sm"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {isYunicityTab && (
                  <div className="w-3 h-3 rounded bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                    <CheckCircle2 className="w-2 h-2 text-white" />
                  </div>
                )}
                <span className={isYunicityTab || isActive ? "font-medium" : "font-light"}>{tab}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    const newTabs = tabs.filter((_, i) => i !== idx)
                    setTabs(newTabs)
                    // Ajuster l'onglet actif après suppression
                    if (activeTabIndex === idx) {
                      // Si on supprime l'onglet actif, sélectionner le précédent ou le suivant
                      if (newTabs.length > 0) {
                        setActiveTabIndex(Math.min(idx, newTabs.length - 1))
                      } else {
                        setActiveTabIndex(null)
                      }
                    } else if (activeTabIndex !== null && activeTabIndex > idx) {
                      // Si on supprime un onglet avant l'actif, décrémenter l'index
                      setActiveTabIndex(activeTabIndex - 1)
                    }
                  }}
                  className="hover:bg-gray-200 rounded p-0.5 transition-colors ml-1"
                >
                  <X className="w-3 h-3 text-gray-400" />
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* Contenu de la page (résultats de recherche) */}
        <div className="p-4 sm:p-6 min-h-[300px] sm:min-h-[400px] bg-white">
          {(() => {
            // Déterminer quel contenu afficher selon l'onglet actif
            const activeTab = activeTabIndex !== null ? tabs[activeTabIndex] : null
            const isActiveYunicity = activeTab === "Solution Yunicity"
            
            // Si l'onglet actif est Yunicity ou si showYunicityTab est vrai et qu'on n'a pas d'onglet actif spécifique
            if (isActiveYunicity || (showYunicityTab && activeTabIndex === null)) {
              return (
            yunicitySearching ? (
              <div className="flex flex-col items-center justify-center h-full">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-2 border-blue-600 border-t-blue-800 rounded-full mb-4"
                />
                <p className="text-xs sm:text-sm text-blue-800 font-light">Recherche sur Yunicity...</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Résultats Yunicity (positifs) */}
                {yunicitySolution?.results.map((result, idx) => {
                  const Icon = result.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
      transition={{
                        delay: idx * 0.1,
                        duration: 0.3,
                        ease: "easeOut"
        }}
                      className={`p-4 ${result.bgColor} border ${result.borderColor} rounded-lg`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 ${result.bgColor} border ${result.borderColor} rounded-lg`}>
                          <Icon className={`w-4 h-4 ${result.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className={`text-sm sm:text-base font-medium ${result.color} mb-1`}>
                            {result.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-700 font-light">
                            {result.description}
                          </p>
                        </div>
                        <CheckCircle2 className={`w-5 h-5 ${result.color} flex-shrink-0 mt-0.5`} />
                      </div>
                    </motion.div>
                  )
                })}

                {/* Suggestions Yunicity */}
            <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  className="mt-6 pt-4 border-t border-gray-200"
                >
                  <p className="text-xs sm:text-sm font-medium text-gray-700 mb-3">
                    Suggestions pour vous :
                  </p>
                  <div className="space-y-2">
                    {yunicitySolution?.suggestions.map((suggestion, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.5 + idx * 0.1,
                          duration: 0.25,
                          ease: "easeOut"
                        }}
                        className="flex items-center gap-2 p-2 bg-white rounded border border-gray-200 hover:border-blue-600 hover:bg-blue-50/50 transition-colors cursor-pointer"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-blue-800" />
                        <p className="text-xs sm:text-sm text-gray-700 font-light">
                          {suggestion}
                        </p>
                      </motion.div>
                    ))}
              </div>
            </motion.div>
              </div>
            )
            )
            }
            
            // Si on a un onglet actif qui n'est pas Yunicity
            if (activeTabIndex !== null && activeTab !== "Solution Yunicity") {
              const tabStepIndex = scenario.steps.findIndex(s => s.action === activeTab)
              if (tabStepIndex !== -1) {
                const tabStep = scenario.steps[tabStepIndex]
                return (
                  <div className="space-y-3">
                    {/* Résultat de recherche (frustrant) */}
            <motion.div
                      key={tabStepIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                      className="p-3 bg-blue-50 border border-blue-200 rounded-lg"
                    >
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-blue-800 mb-1">
                            {tabStep.result}
                          </p>
                          <p className="text-[10px] sm:text-xs text-blue-700 font-light">
                            Aucun résultat pertinent trouvé. Essayez une autre recherche.
                          </p>
                        </div>
              </div>
            </motion.div>

                    {/* Suggestions (peu utiles) */}
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
            <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.1 + i * 0.05,
                            duration: 0.25,
                            ease: "easeOut"
                          }}
                          className="p-2 bg-gray-50 rounded border border-gray-200"
                        >
                          <p className="text-[10px] sm:text-xs text-gray-400 font-light">
                            Résultat générique #{i} - Pas d'information locale
                          </p>
            </motion.div>
                      ))}
                    </div>
                  </div>
                )
              }
            }
            
            // Par défaut, afficher selon le step actuel (pour l'auto-play)
            if (isSearching) {
              return (
                <div className="flex flex-col items-center justify-center h-full">
        <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full mb-4"
                  />
                  <p className="text-xs sm:text-sm text-gray-500 font-light">Recherche en cours...</p>
                </div>
              )
            }
            
            if (step < scenario.steps.length) {
              return (
                <div className="space-y-3">
                  {/* Résultat de recherche (frustrant) */}
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    className="p-3 bg-blue-50 border border-blue-200 rounded-lg"
                  >
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs sm:text-sm font-medium text-blue-800 mb-1">
                          {scenario.steps[step]?.result}
                        </p>
                        <p className="text-[10px] sm:text-xs text-blue-700 font-light">
                          Aucun résultat pertinent trouvé. Essayez une autre recherche.
                        </p>
                      </div>
              </div>
        </motion.div>

                  {/* Suggestions (peu utiles) */}
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
        <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.1 + i * 0.05,
                          duration: 0.25,
                          ease: "easeOut"
                        }}
                        className="p-2 bg-gray-50 rounded border border-gray-200"
        >
                        <p className="text-[10px] sm:text-xs text-gray-400 font-light">
                          Résultat générique #{i} - Pas d'information locale
                        </p>
        </motion.div>
                    ))}
      </div>
                </div>
              )
            }
            
            // Message de frustration maximale
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <X className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-base sm:text-lg font-light text-gray-900 mb-2">
                  Frustration maximale atteinte
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-light mb-4 max-w-md">
                  {tabs.length} onglets ouverts, aucune information pertinente trouvée.
                  C'est exactement le problème que Yunicity résout.
                </p>
                <button
                  onClick={() => {
                    setStep(0)
                    setTabs([])
                    setActiveTabIndex(null)
                    setFrustrationLevel(0)
                    setIsSearching(false)
                    setShowYunicityTab(false)
                    setYunicitySearching(false)
                  }}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs sm:text-sm font-light text-gray-700 transition-colors"
                >
                  Réessayer
                </button>
              </motion.div>
            )
          })()}
        </div>
      </div>

      {/* Indicateur de frustration */}
      {frustrationLevel > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-center justify-center gap-2"
        >
          <div className="flex gap-1">
            {[...Array(Math.min(frustrationLevel, 5))].map((_, i) => {
              // Le 5ème point (index 4) est vert, les autres sont rouges
              const isLastPoint = i === 4 && frustrationLevel === 5
              return (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`w-2 h-2 rounded-full ${isLastPoint ? 'bg-blue-500' : 'bg-blue-500'}`}
                />
              )
            })}
          </div>
          <span className="text-[10px] sm:text-xs text-gray-500 font-light">
            Niveau de frustration : {frustrationLevel}/5
          </span>
        </motion.div>
      )}

    </motion.div>
  )
}

// Section structurée pour chaque problème
function ProblemSection({ problem, index }: { problem: typeof problemes[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  // Titres des sections
  const sectionTitles = [
    "L'information éparpillée",
    "La déconnexion territoriale",
    "Le manque de visibilité",
    "L'isolement urbain"
  ]

  return (
    <motion.section
      ref={ref}
      data-section={`probleme-${index + 1}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-20 sm:py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Glow effects très subtils */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br ${problem.color} opacity-5 rounded-full blur-3xl`} />

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

      <div className="relative container mx-auto px-4 sm:px-8 max-w-7xl">
        {/* Header - Style startup punchy */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8 sm:mb-12"
        >
              {/* Icône + Numéro */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
                className="flex items-center justify-center gap-3 mb-4"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${problem.color} text-white shadow-lg`}>
                  <problem.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${problem.color} text-white text-xs sm:text-sm font-medium shadow-lg`}>
                {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>

              {/* Titre */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 tracking-tight leading-tight mb-3"
              >
            {sectionTitles[index]}
              </motion.h2>

              {/* Phrase punchy style startup */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`text-base sm:text-lg font-medium bg-gradient-to-r ${problem.color} bg-clip-text text-transparent mb-4 max-w-3xl mx-auto`}
              >
                {problem.shortPhrase}
              </motion.p>
              </motion.div>

        {/* KPI Card */}
              <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-6 sm:mb-8"
        >
          <div className={`bg-white/80 backdrop-blur-xl rounded-lg sm:rounded-xl border border-gray-200/50 p-3 sm:p-4 shadow-sm hover:shadow-lg transition-all duration-300`}>
            <div className="flex items-center gap-2 sm:gap-2.5 mb-3">
              <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${problem.color} text-white shadow-md`}>
                <problem.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-light text-gray-900">Impact mesurable</h3>
                <p className="text-[9px] sm:text-[10px] text-gray-500 font-extralight">Statistique clé</p>
              </div>
            </div>
            
            <div className={`text-2xl sm:text-3xl font-light bg-gradient-to-r ${problem.color} bg-clip-text text-transparent mb-1.5`}>
                    {problem.stat}
                </div>
            <p className="text-[10px] sm:text-xs text-gray-600 font-light leading-relaxed">
              {problem.statLabel}
                </p>
            </div>
              </motion.div>

        {/* Scénario interactif immersif */}
        <InteractiveScenario index={index} isInView={isInView} />
      </div>
    </motion.section>
  )
}

// Section introductive - Style startup punchy
function ProblemeIntroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden"
    >
      <div className="relative container mx-auto px-4 sm:px-8 max-w-7xl">
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight leading-[1.1]"
          >
            Les défis{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent font-normal">
              urbains
            </span>
            {' '}d'aujourd'hui
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
          >
            Découvrez les enjeux auxquels font face les villes et leurs habitants
          </motion.p>
                  </motion.div>

        {/* 4 Problématiques - Style startup punchy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {problemes.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`group relative bg-white rounded-xl sm:rounded-2xl border-2 ${problem.borderColor} p-5 sm:p-6 sm:hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                {/* Icône avec gradient */}
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${problem.color} text-white shadow-lg mb-4 sm:group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Titre court */}
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 tracking-tight">
                  {problem.title}
                </h3>

                {/* Phrase punchy style startup */}
                <p className={`text-sm sm:text-base font-medium bg-gradient-to-r ${problem.color} bg-clip-text text-transparent leading-relaxed`}>
                  {problem.shortPhrase}
                </p>

                {/* Effet hover */}
                <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

// Hero section
function ProblemeHeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  // Statistiques clés des problèmes majeurs
  const problemStats = [
    {
      id: 1,
      stat: '85%',
      label: 'cherchent des infos locales sur leur téléphone',
      icon: Smartphone,
      color: 'from-blue-700 to-blue-500',
      problemId: 1
    },
    {
      id: 2,
      stat: '50%',
      label: 'se sentent déconnectés de leur ville',
      icon: Users,
      color: 'from-blue-600 to-blue-400',
      problemId: 2
    },
    {
      id: 3,
      stat: '70%',
      label: 'des acteurs locaux manquent de visibilité',
      icon: MessageSquare,
      color: 'from-blue-500 to-blue-300',
      problemId: 3
    },
    {
      id: 4,
      stat: '68%',
      label: 'veulent participer mais ne savent pas comment',
      icon: Calendar,
      color: 'from-blue-400 to-blue-600',
      problemId: 4
    }
  ]

  return (
    <section
      ref={ref}
      data-section="probleme-hero"
      className="relative py-20 sm:py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Glow effects très subtils */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-200/20 to-blue-100/20 rounded-full blur-3xl" />

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

      <div className="relative container mx-auto px-4 sm:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
          >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-[1.1]"
          >
            Les défis{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent font-normal">
              urbains
            </span>
            {' '}d'aujourd'hui
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed font-light mb-4 sm:mb-6"
            >
            Découvrez les enjeux auxquels font face les villes et leurs habitants
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base text-gray-600 leading-relaxed font-light mb-8 sm:mb-12"
          >
            Comprendre les problèmes pour mieux appréhender les solutions
          </motion.p>
        </motion.div>

        {/* Statistiques clés en avant-première */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8 sm:mb-12"
        >
          {problemStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-xl rounded-lg sm:rounded-xl border border-gray-200/50 p-3 sm:p-4 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 sm:gap-2.5 mb-3">
                <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${stat.color} text-white shadow-md`}>
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-light text-gray-900">Problème</h3>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 font-extralight">Impact</p>
                </div>
              </div>
              
              {/* Statistique */}
              <div className="mb-2.5">
                <div className={`text-xl sm:text-2xl font-light bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1.5`}>
                  {stat.stat}
                </div>
                <p className="text-[9px] sm:text-[10px] text-gray-600 font-light leading-relaxed">
                  {stat.label}
                </p>
              </div>
              
              {/* Indicateur */}
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600" />
                  <span className="text-[10px] sm:text-xs font-medium text-blue-700">Problème majeur</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA de navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {/* Bouton Explorer les problèmes */}
          <motion.button
            onClick={() => {
              const element = document.querySelector('[data-section="probleme-1"]')
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-lg sm:rounded-xl font-light text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Effet de brillance au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <div className="relative flex items-center gap-1.5 sm:gap-2">
              <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Explorer les problèmes</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.button>

          {/* Bouton Voir la solution */}
          <motion.button
            onClick={() => {
              window.location.href = '/solution'
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-lg sm:rounded-xl font-light text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Effet de brillance au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <div className="relative flex items-center gap-1.5 sm:gap-2">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Voir la solution</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

// Section comparaison avant/après avec slider immersif
function ChiffresClesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [sliderPosition, setSliderPosition] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  // Données pour la comparaison
  const avant = {
    title: "Avant Yunicity",
    problems: [
      { icon: Search, text: "Recherche dispersée sur 10+ sites", color: "text-blue-600" },
      { icon: X, text: "Informations obsolètes ou manquantes", color: "text-blue-600" },
      { icon: MessageSquare, text: "Pas de communication locale centralisée", color: "text-blue-600" },
      { icon: Users, text: "Communauté fragmentée", color: "text-blue-600" },
      { icon: MapPin, text: "Points d'intérêt difficiles à trouver", color: "text-blue-600" },
      { icon: Building2, text: "Acteurs locaux invisibles", color: "text-blue-600" }
    ],
    stats: [
      { label: "Sites à consulter", value: "10+" },
      { label: "Temps de recherche", value: "30min" },
      { label: "Taux de frustration", value: "85%" }
    ]
  }

  const apres = {
    title: "Avec Yunicity",
    solutions: [
      { icon: CheckCircle2, text: "Toute l'info locale en un seul endroit", color: "text-green-500" },
      { icon: CheckCircle2, text: "Contenu mis à jour en temps réel", color: "text-green-500" },
      { icon: CheckCircle2, text: "Communication directe avec la ville", color: "text-green-500" },
      { icon: CheckCircle2, text: "Communauté locale active et connectée", color: "text-green-500" },
      { icon: CheckCircle2, text: "Carte interactive 3D intuitive", color: "text-green-500" },
      { icon: CheckCircle2, text: "Visibilité pour tous les acteurs locaux", color: "text-green-500" }
    ],
    stats: [
      { label: "Plateforme unique", value: "1" },
      { label: "Temps de recherche", value: "2min" },
      { label: "Satisfaction utilisateur", value: "92%" }
    ]
  }

  // Gestion du slider
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateSliderPosition(e.clientX)
  }

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e.clientX)
    }
  }, [isDragging])

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove])

  // Gestion tactile
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches[0]) {
      updateSliderPosition(e.touches[0].clientX)
    }
  }

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-200/20 to-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/20 to-blue-100/20 rounded-full blur-3xl" />

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

      <div className="relative container mx-auto px-4 sm:px-8 max-w-7xl">
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
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight"
          >
            Avant{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent font-normal">
              vs
            </span>
            {' '}Après
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
          >
            Découvrez la transformation apportée par Yunicity
          </motion.p>
        </motion.div>

        {/* Comparaison Split-Screen avec Slider */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-6xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/50 shadow-2xl"
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {/* Côté Avant (Gauche) */}
          <div className="relative h-[500px] sm:h-[600px] md:h-[700px] bg-gradient-to-br from-red-50 to-orange-50">
            <div className="absolute inset-0 p-6 sm:p-8 md:p-10">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-light text-blue-800 mb-2">Avant Yunicity</h3>
                <p className="text-xs sm:text-sm text-blue-700/70 font-light">Chaos et désorganisation</p>
              </div>

              {/* Liste des problèmes */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {avant.problems.map((problem, idx) => {
                  const Icon = problem.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-200/50"
                    >
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${problem.color} flex-shrink-0`} />
                      <p className="text-xs sm:text-sm text-gray-700 font-light">{problem.text}</p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {avant.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 1.4 + idx * 0.1 }}
                    className="p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-200/50 text-center"
                  >
                    <p className="text-lg sm:text-xl font-medium text-blue-700 mb-1">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-gray-600 font-light">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Côté Après (Droite) */}
          <div 
            className="absolute inset-0 h-full bg-gradient-to-br from-blue-50 to-blue-100"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <div className="absolute inset-0 p-6 sm:p-8 md:p-10">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-light text-blue-800 mb-2">Avec Yunicity</h3>
                <p className="text-xs sm:text-sm text-blue-800/70 font-light">Ordre et clarté</p>
              </div>

              {/* Liste des solutions */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {apres.solutions.map((solution, idx) => {
                  const Icon = solution.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-200/50"
                    >
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${solution.color} flex-shrink-0`} />
                      <p className="text-xs sm:text-sm text-gray-700 font-light">{solution.text}</p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {apres.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 1.4 + idx * 0.1 }}
                    className="p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-200/50 text-center"
                  >
                    <p className="text-lg sm:text-xl font-medium text-blue-700 mb-1">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-gray-600 font-light">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-800 to-blue-600 cursor-ew-resize z-10"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border-2 border-blue-800 flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-blue-800 rounded-full" />
                <div className="w-1 h-4 bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>

        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 text-center"
        >
          <p className="text-xs sm:text-sm text-gray-500 font-light">
            Glissez le curseur pour comparer
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Section Storytelling visuel avec timeline narrative
function StorytellingTimelineSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const timelineSteps = [
    {
      time: "07h00",
      period: "Le matin",
      icon: Sun,
      color: "from-orange-400 to-yellow-400",
      bgColor: "from-orange-50 to-yellow-50",
      borderColor: "border-orange-200/50",
      problems: [
        {
          icon: Search,
          text: "Vous cherchez un événement ce week-end",
          frustration: "10+ sites à consulter",
          color: "text-blue-600"
        },
        {
          icon: Calendar,
          text: "Vérifier les horaires du marché local",
          frustration: "Site de la mairie non mis à jour",
          color: "text-blue-600"
        },
        {
      icon: MapPin,
          text: "Trouver un café près de chez vous",
          frustration: "Google Maps peu fiable localement",
          color: "text-blue-600"
        }
      ],
      impact: "30 minutes perdues, frustration croissante"
    },
    {
      time: "12h00",
      period: "À midi",
      icon: Clock,
      color: "from-red-400 to-orange-400",
      bgColor: "from-red-50 to-orange-50",
      borderColor: "border-blue-200/50",
      problems: [
        {
          icon: Building2,
          text: "Commerçant : publier une promotion",
          frustration: "Facebook, Instagram, Google... où poster ?",
          color: "text-blue-600"
        },
        {
      icon: Users,
          text: "Rejoindre une association locale",
          frustration: "Pas d'information centralisée",
          color: "text-blue-600"
    },
    {
      icon: MessageSquare,
          text: "Participer à une consultation citoyenne",
          frustration: "Comment être informé ?",
          color: "text-blue-600"
        }
      ],
      impact: "Opportunités manquées, visibilité limitée"
    },
    {
      time: "20h00",
      period: "Le soir",
      icon: Moon,
      color: "from-blue-800 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200/50",
      problems: [
        {
      icon: Heart,
          text: "Se connecter à son quartier",
          frustration: "Pas de communauté locale active",
          color: "text-blue-600"
        },
        {
          icon: Music,
          text: "Découvrir un concert ce soir",
          frustration: "Trop tard, l'événement est passé",
          color: "text-blue-600"
        },
        {
          icon: Home,
          text: "Trouver des voisins avec les mêmes centres d'intérêt",
          frustration: "Réseaux sociaux trop génériques",
          color: "text-blue-600"
        }
      ],
      impact: "Isolement urbain, sentiment de déconnexion"
    }
  ]

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/20 to-blue-100/20 rounded-full blur-3xl" />

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

      <div className="relative container mx-auto px-4 sm:px-8 max-w-7xl">
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
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight"
          >
            Une journée{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent font-normal">
              typique
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
          >
            Découvrez comment les problèmes urbains impactent votre quotidien, de l'aube au crépuscule
          </motion.p>
        </motion.div>

        {/* Timeline verticale */}
        <div className="relative max-w-4xl mx-auto">
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-8 sm:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-red-200 to-blue-200" />

          {/* Étapes de la timeline */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon
            return (
                <div
                  key={index}
                  className="relative flex flex-col sm:flex-row gap-6 sm:gap-8"
                >
                  {/* Point de la timeline - centré sur la ligne verticale */}
                  <div className="absolute left-8 sm:left-12 -translate-x-1/2 flex-shrink-0 z-10">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                </div>

                  {/* Contenu de l'étape */}
                  <div className={`flex-1 bg-gradient-to-br ${step.bgColor} backdrop-blur-sm rounded-xl sm:rounded-2xl border ${step.borderColor} p-5 sm:p-6 md:p-8 shadow-lg ml-12 sm:ml-16`}>
                    {/* Header de l'étape */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className={`px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 rounded-lg border ${step.borderColor}`}>
                        <p className="text-xs sm:text-sm font-medium text-gray-700">{step.time}</p>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-900">
                        {step.period}
                      </h3>
                    </div>

                    {/* Liste des problèmes */}
                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                      {step.problems.map((problem, pIdx) => {
                        const ProblemIcon = problem.icon
                        return (
                          <div
                            key={pIdx}
                            className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50"
                          >
                            <div className={`p-2 rounded-lg bg-white/80 border ${step.borderColor} flex-shrink-0`}>
                              <ProblemIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${problem.color}`} />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs sm:text-sm font-medium text-gray-800 mb-1">
                                {problem.text}
                              </p>
                              <p className="text-[10px] sm:text-xs text-blue-700 font-light">
                                {problem.frustration}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Impact */}
                    <div className="p-3 sm:p-4 bg-blue-50/50 border border-blue-200/50 rounded-lg">
                      <p className="text-xs sm:text-sm text-blue-800 font-light">
                        <span className="font-medium">Impact :</span> {step.impact}
                </p>
                    </div>
                  </div>
                </div>
            )
          })}
          </div>
        </div>

        {/* Message de conclusion */}
          <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 sm:mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl border border-gray-200/50">
            <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
              <span className="font-medium text-gray-900">C'est exactement le problème que Yunicity résout.</span>
              {' '}Une plateforme unique qui reconnecte les habitants à leur ville, simplifie l'accès à l'information locale et valorise ceux qui font vivre la ville.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Section Appel à l'action premium
function CTASolutionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Statistiques de succès
  const stats = [
    { value: "100K+", label: "Habitants connectés", icon: Users, color: "from-blue-800 to-blue-600" },
    { value: "50+", label: "Villes partenaires", icon: MapPin, color: "from-blue-500 to-cyan-500" },
    { value: "92%", label: "Satisfaction", icon: Star, color: "from-orange-500 to-pink-500" },
    { value: "2min", label: "Temps moyen de recherche", icon: Zap, color: "from-green-500 to-emerald-500" }
  ]

  // Fonctionnalités clés en preview
  const features = [
    { icon: Search, title: "Recherche unifiée", description: "Toute l'info locale en un clic" },
    { icon: Calendar, title: "Événements en temps réel", description: "Ne manquez plus rien" },
    { icon: Users, title: "Communauté active", description: "Connectez-vous à votre quartier" },
    { icon: Building2, title: "Acteurs locaux visibles", description: "Découvrez ceux qui font vivre la ville" }
  ]

  // Options CTA
  const ctaOptions = [
    {
      title: "Découvrir la solution",
      description: "Explorez toutes les fonctionnalités de Yunicity",
      icon: Sparkles,
      href: "/solution",
      gradient: "from-blue-800 to-blue-600",
      hoverGradient: "from-blue-800 to-blue-600"
    },
    {
      title: "Rejoindre la bêta",
      description: "Soyez parmi les premiers à tester Yunicity",
      icon: Rocket,
      href: "/newsletter",
      gradient: "from-orange-500 to-pink-500",
      hoverGradient: "from-orange-600 to-pink-600"
    },
    {
      title: "Contacter l'équipe",
      description: "Discutons de votre projet local",
      icon: Mail,
      href: "/investir",
      gradient: "from-green-500 to-emerald-500",
      hoverGradient: "from-green-600 to-emerald-600"
    }
  ]

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/20 to-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-3xl" />

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

      <div className="relative container mx-auto px-4 sm:px-8 max-w-7xl">
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
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight"
          >
            Prêt à{' '}
            <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent font-normal">
              transformer
            </span>
            {' '}votre ville ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
          >
            Rejoignez la révolution des Smart Cities locales avec Yunicity
          </motion.p>
        </motion.div>

        {/* Statistiques de succès */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl border border-gray-200/50 p-3 sm:p-4 hover:border-blue-200/50 hover:shadow-md transition-all duration-300"
              >
                <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <p className="text-base sm:text-lg font-light text-gray-900 mb-0.5">{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-gray-600 font-light">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mini-preview des fonctionnalités */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-10 sm:mb-12"
        >
          <h3 className="text-base sm:text-lg font-light text-gray-900 mb-4 sm:mb-5 text-center">
            Fonctionnalités clés
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="group p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/50 hover:border-blue-200/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-800" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-0.5">{feature.title}</h4>
                  <p className="text-[10px] sm:text-xs text-gray-600 font-light">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Options CTA Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {ctaOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
          >
            <Link
                  href={option.href}
                  className={`group relative block p-3 sm:p-4 bg-gradient-to-br ${option.gradient} hover:${option.hoverGradient} rounded-lg sm:rounded-xl text-white overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]`}
                >
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base font-medium mb-1">{option.title}</h3>
                    <p className="text-[10px] sm:text-xs text-white/90 font-light mb-2">{option.description}</p>
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-medium">
                      <span>En savoir plus</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
            </Link>
          </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function ProblemeSection() {
  return (
    <>
      <ProblemeHeroSection />
      {problemes.map((problem, index) => (
        <ProblemSection key={problem.id} problem={problem} index={index} />
      ))}
      <ChiffresClesSection />
      <StorytellingTimelineSection />
      <CTASolutionSection />
    </>
  )
}
