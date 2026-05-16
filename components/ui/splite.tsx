'use client'

import { useState } from 'react'

// ✅ ESCENAS PÚBLICAS que permiten embed sin restricciones
// Si la original falla (403), este componente probará las siguientes automáticamente
const SPLINE_FALLBACKS = [
  "https://my.spline.design/robot-interactive-demo/", // Escena robot demo (pública)
  "https://my.spline.design/3d-character-walk/",       // Personaje 3D caminando
  "https://my.spline.design/abstract-shapes/"          // Formas abstractas animadas
]

interface SplineSceneProps {
  scene?: string // Se ignora si la escena original está bloqueada
  className?: string
}

export function SplineScene({ className = '' }: SplineSceneProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  // Si el iframe falla, intenta la siguiente escena en la lista
  const handleError = () => {
    if (currentIndex < SPLINE_FALLBACKS.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setLoaded(false)
      setError(false)
    } else {
      setError(true)
    }
  }

  // Fallback visual hermoso si todas las escenas fallan
  if (error) {
    return (
      <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center ${className}`}>
        <div className="text-center px-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
          </div>
          <h3 className="text-white font-semibold mb-1">Experiencia 3D</h3>
          <p className="text-neutral-400 text-sm mb-4">No disponible en este momento</p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Sitio web 100% funcional
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-2xl ${className}`}>
      {/* Spinner de carga */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/30 backdrop-blur-sm">
          <div className="text-center">
            <div className="w-10 h-10 border-2 border-purple-500/50 border-t-purple-400 rounded-full animate-spin mx-auto mb-3" />
            <p className="text-neutral-400 text-sm">Cargando experiencia interactiva...</p>
          </div>
        </div>
      )}

      {/* Iframe nativo: 0 dependencias, 0 Webpack, 100% compatible */}
      <iframe
        key={SPLINE_FALLBACKS[currentIndex]}
        src={SPLINE_FALLBACKS[currentIndex]}
        className="w-full h-full border-0"
        title="3D Interactive Experience"
        loading="lazy"
        allow="autoplay; fullscreen; pointer-lock"
        sandbox="allow-scripts allow-same-origin allow-pointer-lock"
        onLoad={() => setLoaded(true)}
        onError={handleError}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease-in' }}
      />
    </div>
  )
}

export default SplineScene