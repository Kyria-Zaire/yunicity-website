'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const conversation = [
  {
    sender: 'user',
    message: "Quel est le problème ?"
  },
  {
    sender: 'yunicity',
    message: "L'éparpillement de l'information, un sentiment de non appartenance, des acteurs avec beaucoup de points communs mais qui ne communiquent pas, un sentiment d'exclusion, des étudiants qui ne restent pas après leurs études et des talents qui échappent au territoire"
  },
  {
    sender: 'user',
    message: "Comment Yunicity résout ça ?"
  },
  {
    sender: 'yunicity',
    message: "On centralise l'information locale, on crée du lien social et on facilite l'engagement citoyen grâce à notre plateforme"
  },
  {
    sender: 'user',
    message: "C'est quoi le concept ?"
  },
  {
    sender: 'yunicity',
    message: "3 piliers : Carte 3D interactive (30%), Hub d'informations local (30%), Mur communautaire (40%)"
  },
  {
    sender: 'user',
    message: "Ça marche comment ?"
  },
  {
    sender: 'yunicity',
    message: "Tu explores ta ville en 3D, tu découvres les actus locales filtrées pour toi, et tu connectes avec ta communauté"
  },
  {
    sender: 'user',
    message: "C'est pour qui ?"
  },
  {
    sender: 'yunicity',
    message: "Pour tous ceux qui veulent se reconnecter à leur territoire, découvrir leur ville autrement et rencontrer leur communauté locale"
  },
  {
    sender: 'user',
    message: "Quand ça sort ?"
  },
  {
    sender: 'yunicity',
    message: "Beta à Reims - Été 2026, puis expansion dans toute la France"
  },
  {
    sender: 'user',
    message: "Pourquoi Reims d'abord ?"
  },
  {
    sender: 'yunicity',
    message: "Ville test parfaite : riche en patrimoine, jeune population étudiante, et fort potentiel touristique local"
  },
  {
    sender: 'user',
    message: "Et après ?"
  },
  {
    sender: 'yunicity',
    message: "La suite... patience 😉"
  }
]

export default function NewsletterHeroSection() {
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev < conversation.length) {
          // Montrer "typing..." avant chaque message Yunicity
          if (prev > 0 && conversation[prev]?.sender === 'yunicity') {
            setIsTyping(true)
            setTimeout(() => {
              setIsTyping(false)
            }, 1000)
          }
          return prev + 1
        }
        clearInterval(timer)
        return prev
      })
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

      {/* Grille pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative container mx-auto px-6 flex items-center justify-center min-h-[calc(100vh-16rem)]">
        {/* iPhone 15 Mockup - Plus grand */}
        <div className="flex justify-center w-full">
          <div className="relative w-full max-w-lg">
            {/* iPhone Frame */}
            <div className="relative bg-black rounded-[70px] p-5 shadow-2xl border-[12px] border-gray-900">
              {/* Dynamic Island */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-40 h-9 bg-black rounded-full z-20"></div>

              {/* iPhone Screen */}
              <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-[56px] overflow-hidden" style={{ height: '850px' }}>
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent z-10 flex items-center justify-between px-8 pt-2">
                  <span className="text-white text-xs font-semibold">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-3 border border-white rounded-sm"></div>
                    <div className="text-white text-xs">100%</div>
                  </div>
                </div>

                {/* Chat Header */}
                <div className="absolute top-12 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-white/10 z-10 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/yunicity-logo.png"
                        alt="Yunicity"
                        width={40}
                        height={40}
                        className="object-contain scale-75"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Yunicity</p>
                      <p className="text-gray-400 text-xs">En ligne</p>
                    </div>
                  </div>
                </div>

                {/* Messages Container with scroll */}
                <div className="absolute top-28 bottom-20 left-0 right-0 overflow-y-auto px-4 py-4 scrollbar-hide">
                  <div className="space-y-3">
                    {conversation.map((msg, index) => (
                      <div
                        key={index}
                        className={`transition-all duration-700 ${
                          index < visibleMessages
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                        }`}
                      >
                        {msg.sender === 'user' ? (
                          // Message utilisateur (droite)
                          <div className="flex justify-end">
                            <div className="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[75%]">
                              <p className="text-white text-sm">{msg.message}</p>
                            </div>
                          </div>
                        ) : (
                          // Message Yunicity (gauche)
                          <div className="flex justify-start">
                            <div className="bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[75%]">
                              <p className="text-white text-sm leading-relaxed">{msg.message}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Yunicity est en train d'écrire */}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* L'utilisateur est en train d'écrire (à la fin) */}
                    {visibleMessages === conversation.length && (
                      <div className="flex justify-end mt-4">
                        <div className="bg-blue-600/50 rounded-2xl rounded-tr-sm px-4 py-3">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Input Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-800 rounded-full px-4 py-2">
                      <p className="text-gray-500 text-sm">Message...</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white rotate-90" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
