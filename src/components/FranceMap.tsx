'use client'
import { useRef, useState, useEffect } from 'react'
import Script from 'next/script'
import { motion } from 'framer-motion'

interface City {
  name: string
  lat: number
  lng: number
  status: 'active' | 'coming'
  color?: string
}

const cities: City[] = [
  { name: 'Reims', lat: 49.2583, lng: 4.0317, status: 'active', color: '#3b82f6' },
  { name: 'Troyes', lat: 48.2975, lng: 4.0781, status: 'active', color: '#8b5cf6' },
  { name: 'Châlons-en-Champagne', lat: 48.9562, lng: 4.3644, status: 'active', color: '#10b981' },
  { name: 'Paris', lat: 48.8566, lng: 2.3522, status: 'coming' },
  { name: 'Lyon', lat: 45.7640, lng: 4.8357, status: 'coming' },
  { name: 'Bordeaux', lat: 44.8378, lng: -0.5792, status: 'coming' }
]

// Fonction pour créer une épingle SVG personnalisée
const createPinIcon = (color: string, name: string, googleMaps: typeof window.google.maps) => {
  const svg = `
    <svg width="32" height="40" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow-${name.replace(/\s+/g, '-')}" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
        </filter>
      </defs>
      <path d="M16 0 C10 0 5 5 5 11 C5 18 16 32 16 32 C16 32 27 18 27 11 C27 5 22 0 16 0 Z" 
            fill="${color}" 
            stroke="#ffffff" 
            stroke-width="2"
            filter="url(#shadow-${name.replace(/\s+/g, '-')})"/>
      <circle cx="16" cy="12" r="5" fill="#ffffff" opacity="0.9"/>
    </svg>
  `
  return {
    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg),
    scaledSize: new googleMaps.Size(32, 40),
    anchor: new googleMaps.Point(16, 40)
  }
}

export default function FranceMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])

  const initMap = () => {
    try {
      if (!mapRef.current || !window.google || !window.google.maps) {
        setHasError(true)
        return
      }

      // Centre de la France
      const center = { lat: 46.6034, lng: 1.8883 }

      // Créer la carte
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 6,
        center,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e0e0e0' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
          },
          {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
          }
        ],
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      })

      mapInstanceRef.current = map

      // Créer les marqueurs
      cities.forEach((city) => {
        let icon: any

        if (city.status === 'active' && city.color) {
          // Épingles personnalisées pour les villes actives
          icon = createPinIcon(city.color, city.name, window.google.maps)
        } else {
          // Cercles simples pour les villes à venir
          icon = {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 6,
            fillColor: '#9ca3af',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2
          }
        }

        const marker = new window.google.maps.Marker({
          position: { lat: city.lat, lng: city.lng },
          map,
          title: city.name,
          icon,
          animation: city.status === 'active' ? window.google.maps.Animation.DROP : undefined,
          optimized: false
        })

        // Info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; font-family: system-ui, -apple-system, sans-serif;">
              <h3 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 500; color: #1f2937;">${city.name}</h3>
              <p style="margin: 0; font-size: 12px; color: #6b7280;">${city.status === 'active' ? 'Actif' : 'Bientôt disponible'}</p>
            </div>
          `
        })

        marker.addListener('click', () => {
          infoWindow.open(map, marker)
        })

        // Animation de pulsation pour les villes actives
        if (city.status === 'active') {
          // Créer un cercle de pulsation autour de l'épingle
          const pulseCircle = new window.google.maps.Circle({
            strokeColor: city.color || '#3b82f6',
            strokeOpacity: 0.4,
            strokeWeight: 2,
            fillColor: city.color || '#3b82f6',
            fillOpacity: 0.1,
            map,
            center: { lat: city.lat, lng: city.lng },
            radius: 15000, // 15 km
            visible: true
          })

          // Animation de pulsation
          let radius = 15000
          setInterval(() => {
            radius += 2000
            if (radius > 30000) radius = 15000
            pulseCircle.setRadius(radius)
            pulseCircle.set('fillOpacity', Math.max(0.05, 0.2 - (radius - 15000) / 150000))
          }, 100)
        }

        markersRef.current.push(marker)
      })

      setIsLoaded(true)
      setHasError(false)
    } catch (error) {
      console.error('Erreur lors de l\'initialisation de la carte:', error)
      setHasError(true)
    }
  }

  useEffect(() => {
    if (scriptLoaded && window.google && window.google.maps) {
      initMap()
    }
  }, [scriptLoaded])

  const handleScriptLoad = () => {
    setScriptLoaded(true)
  }

  const handleScriptError = () => {
    setHasError(true)
    setIsLoaded(false)
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  // Fallback : carte statique avec iframe Google Maps si pas de clé API ou erreur
  if (hasError || !apiKey) {
    return (
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2800000!2d2.3522!3d46.6034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '300px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        />
      </div>
    )
  }

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}
        onLoad={handleScriptLoad}
        onError={handleScriptError}
        strategy="lazyOnload"
      />
      <div className="relative w-full h-full">
        <div
          ref={mapRef}
          className="w-full h-full rounded-lg overflow-hidden"
          style={{ minHeight: '300px' }}
        />
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-lg z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-gray-500 font-light"
            >
              Chargement de la carte...
            </motion.div>
          </div>
        )}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-lg z-10">
            <div className="text-center p-4">
              <p className="text-sm text-gray-500 font-light mb-2">
                Impossible de charger la carte
              </p>
              <p className="text-xs text-gray-400 font-light">
                Vérifiez votre clé API Google Maps
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

