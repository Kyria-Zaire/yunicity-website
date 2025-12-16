'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import 'leaflet/dist/leaflet.css'

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

export default function FranceMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !mapRef.current || mapInstanceRef.current) return

    // Charger Leaflet uniquement côté client
    import('leaflet').then((L) => {

      // Fonction pour créer une épingle SVG personnalisée
      const createPinIcon = (color: string) => {
        const svg = `<svg width="32" height="40" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 2 C11 2 6 7 6 13 C6 20 17 34 17 34 C17 34 28 20 28 13 C28 7 23 2 17 2 Z" 
        fill="rgba(0,0,0,0.2)" 
        transform="translate(1, 1)"/>
  <path d="M16 0 C10 0 5 5 5 11 C5 18 16 32 16 32 C16 32 27 18 27 11 C27 5 22 0 16 0 Z" 
        fill="${color}" 
        stroke="#ffffff" 
        stroke-width="2.5"/>
  <circle cx="16" cy="12" r="5" fill="#ffffff" opacity="0.95"/>
</svg>`
        
        return L.default.divIcon({
          html: svg,
          className: 'custom-pin-icon',
          iconSize: [32, 40],
          iconAnchor: [16, 40],
          popupAnchor: [0, -40]
        })
      }

      // Initialiser la carte Leaflet
      const map = L.default.map(mapRef.current!, {
        center: [48.8, 4.2], // Centre sur les 3 villes actives
        zoom: 7,
        zoomControl: true,
        attributionControl: true
      })

      // Ajouter la couche de tuiles OpenStreetMap
      L.default.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(map)

      mapInstanceRef.current = map

      // Créer les marqueurs pour chaque ville
      cities.forEach((city) => {
        let icon: any

        if (city.status === 'active' && city.color) {
          // Épingles personnalisées pour les villes actives
          icon = createPinIcon(city.color)
          console.log(`✅ Épingle créée pour ${city.name} (${city.color}) à (${city.lat}, ${city.lng})`)
        } else {
          // Cercles simples pour les villes à venir
          icon = L.default.divIcon({
            html: `<div style="width: 12px; height: 12px; background-color: #9ca3af; border: 2px solid #ffffff; border-radius: 50%;"></div>`,
            className: 'custom-circle-icon',
            iconSize: [12, 12],
            iconAnchor: [6, 6]
          })
        }

        const marker = L.default.marker([city.lat, city.lng], { icon })
          .addTo(map)
          .bindPopup(`
            <div style="padding: 8px; font-family: system-ui, -apple-system, sans-serif;">
              <h3 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 500; color: #1f2937;">${city.name}</h3>
              <p style="margin: 0; font-size: 12px; color: #6b7280;">${city.status === 'active' ? 'Actif' : 'Bientôt disponible'}</p>
            </div>
          `)

        // Cercle statique pour les villes actives (sans animation)
        if (city.status === 'active') {
          L.default.circle([city.lat, city.lng], {
            color: city.color || '#3b82f6',
            fillColor: city.color || '#3b82f6',
            fillOpacity: 0.15,
            radius: 20000, // 20 km
            weight: 2,
            opacity: 0.5
          }).addTo(map)
        }

        markersRef.current.push(marker)
        console.log(`📍 Marqueur créé pour ${city.name} à (${city.lat}, ${city.lng})`)
      })

      setIsLoaded(true)
    }).catch((error) => {
      console.error('Erreur lors du chargement de Leaflet:', error)
    })

    // Nettoyage au démontage
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
      markersRef.current = []
    }
  }, [isClient])

  return (
    <div className="relative w-full h-full">
      <div
        ref={mapRef}
        className="w-full h-full rounded-lg overflow-hidden"
        style={{ minHeight: '300px', zIndex: 0 }}
      />
      {!isLoaded && (
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
      <style jsx global>{`
        .custom-pin-icon {
          background: transparent !important;
          border: none !important;
        }
        .custom-circle-icon {
          background: transparent !important;
          border: none !important;
        }
        .leaflet-container {
          background: #f5f5f5;
        }
      `}</style>
    </div>
  )
}
