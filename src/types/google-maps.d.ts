declare namespace google {
  namespace maps {
    class Map {
      constructor(element: HTMLElement, options?: MapOptions)
      setCenter(latlng: LatLng | LatLngLiteral): void
      setZoom(zoom: number): void
    }

    class Marker {
      constructor(options?: MarkerOptions)
      addListener(eventName: string, handler: () => void): void
      setMap(map: Map | null): void
    }

    class InfoWindow {
      constructor(options?: InfoWindowOptions)
      open(map: Map, marker?: Marker): void
      setContent(content: string | HTMLElement): void
    }

    class Circle {
      constructor(options?: CircleOptions)
      setRadius(radius: number): void
      set(key: string, value: any): void
    }

    interface MapOptions {
      zoom?: number
      center?: LatLng | LatLngLiteral
      styles?: MapTypeStyle[]
      disableDefaultUI?: boolean
      zoomControl?: boolean
      mapTypeControl?: boolean
      streetViewControl?: boolean
      fullscreenControl?: boolean
    }

    interface MarkerOptions {
      position?: LatLng | LatLngLiteral
      map?: Map | null
      title?: string
      icon?: Icon | Symbol | string
      animation?: Animation
      optimized?: boolean
    }

    interface InfoWindowOptions {
      content?: string | HTMLElement
    }

    interface CircleOptions {
      strokeColor?: string
      strokeOpacity?: number
      strokeWeight?: number
      fillColor?: string
      fillOpacity?: number
      map?: Map | null
      center?: LatLng | LatLngLiteral
      radius?: number
      visible?: boolean
    }

    interface LatLng {
      lat(): number
      lng(): number
    }

    interface LatLngLiteral {
      lat: number
      lng: number
    }

    interface Icon {
      url?: string
      scaledSize?: Size
      anchor?: Point
    }

    interface Symbol {
      path?: SymbolPath | string
      scale?: number
      fillColor?: string
      fillOpacity?: number
      strokeColor?: string
      strokeWeight?: number
    }

    class Size {
      constructor(width: number, height: number)
    }

    class Point {
      constructor(x: number, y: number)
    }

    enum SymbolPath {
      CIRCLE = 0,
      BACKWARD_CLOSED_ARROW = 1,
      BACKWARD_OPEN_ARROW = 2,
      FORWARD_CLOSED_ARROW = 3,
      FORWARD_OPEN_ARROW = 4
    }

    enum Animation {
      DROP = 1,
      BOUNCE = 2
    }

    interface MapTypeStyle {
      featureType?: string
      elementType?: string
      stylers?: Array<{ [key: string]: any }>
    }
  }
}

declare global {
  interface Window {
    google: {
      maps: typeof google.maps
    }
  }
}

export {}
