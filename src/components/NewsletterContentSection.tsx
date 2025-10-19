'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const stories = [
  {
    id: 1,
    titre: 'Cathédrale Notre-Dame',
    lieu: 'Reims, France',
    image: '/yunicity-logo.png',
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 2,
    titre: 'Caves de Champagne',
    lieu: 'Reims, France',
    image: '/yunicity-logo.png',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 3,
    titre: 'Place Drouet d\'Erlon',
    lieu: 'Reims, France',
    image: '/yunicity-logo.png',
    gradient: 'from-emerald-600 to-teal-600'
  },
  {
    id: 4,
    titre: 'Basilique Saint-Remi',
    lieu: 'Reims, France',
    image: '/yunicity-logo.png',
    gradient: 'from-orange-600 to-red-600'
  },
  {
    id: 5,
    titre: 'Palais du Tau',
    lieu: 'Reims, France',
    image: '/yunicity-logo.png',
    gradient: 'from-pink-600 to-purple-600'
  },
  {
    id: 6,
    titre: 'Porte de Mars',
    lieu: 'Reims, France',
    image: '/yunicity-logo.png',
    gradient: 'from-indigo-600 to-blue-600'
  }
]

export default function NewsletterContentSection() {
  const [currentStory, setCurrentStory] = useState(0)

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)
  }

  return (
    <section className="relative py-32 bg-white overflow-hidden">
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
        <div className="text-center mb-20">
          <div className="inline-flex px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-semibold mb-8">
            Stories Yunicity
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Nos dernières découvertes
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
            Explorez les lieux emblématiques de Reims à travers nos stories
          </p>
        </div>

        {/* Instagram Stories Carousel */}
        <div className="max-w-6xl mx-auto">
          {/* Stories grid - affichage horizontal type Instagram */}
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide mb-12">
            {stories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => setCurrentStory(index)}
                className={`flex-shrink-0 w-24 sm:w-32 transition-all duration-300 ${
                  currentStory === index ? 'scale-110' : 'scale-100 opacity-60'
                }`}
              >
                <div className={`relative aspect-[9/16] rounded-2xl overflow-hidden border-4 ${
                  currentStory === index
                    ? `border-gradient-to-br ${story.gradient}`
                    : 'border-gray-200'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-20`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={story.image}
                        alt={story.titre}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center truncate">{story.titre}</p>
              </button>
            ))}
          </div>

          {/* Story principale - format Instagram */}
          <div className="relative max-w-md mx-auto">
            <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
              {/* Progress bars */}
              <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-4">
                {stories.map((_, index) => (
                  <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-white transition-all duration-300 ${
                        index === currentStory ? 'w-full' : index < currentStory ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stories[currentStory].gradient} opacity-90`}></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 text-white z-10">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/yunicity-logo.png"
                      alt="Yunicity"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Yunicity</p>
                    <p className="text-xs opacity-80">Il y a 2h</p>
                  </div>
                </div>

                {/* Center image placeholder */}
                <div className="flex items-center justify-center flex-1">
                  <div className="w-32 h-32 relative opacity-50">
                    <Image
                      src={stories[currentStory].image}
                      alt={stories[currentStory].titre}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{stories[currentStory].titre}</h3>
                  <p className="text-sm opacity-90">{stories[currentStory].lieu}</p>
                  <div className="flex gap-2 mt-4">
                    <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                      Voir plus
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prevStory}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all z-20"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextStory}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all z-20"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
