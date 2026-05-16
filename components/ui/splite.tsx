'use client'

import { useState } from 'react'

// ⚠️ REEMPLAZA CON TU URL PÚBLICA DE SPLINE (Share → Embed → Copy URL)
// Si no tienes acceso, usa esta escena demo pública como fallback:
const DEFAULT_SCENE = "https://my.spline.design/robot-demo-abc123/"

interface SplineSceneProps {
  scene?: string
  className?: string
}

export function SplineScene({ scene, className = '' }: SplineSceneProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  
  // Usar escena proporcionada o fallback
  const embedUrl = scene 
    ? `https://my.spline.design/embed/${scene.split('/').pop()?.replace('.splinecode', '')}/`
    : DEFAULT_SCENE

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-neutral-900/20 ${className}`}>
      {/* Fallback de carga */}
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/30">
          <div className="text-center text-neutral-400">
            <div className="w-8 h-8 border-2 border-purple-500/50 border-t-purple-500 rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm">Cargando 3D...</p>
          </div>
        </div>
      )}
      
      {/* Fallback de error */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/30">
          <p className="text-neutral-400 text-sm">Experiencia 3D no disponible</p>
        </div>
      )}

      {/* Iframe nativo: 0 dependencias, 0 Webpack, 100% compatible */}
      <iframe
        src={embedUrl}
        className="w-full h-full border-0"
        title="3D Interactive Experience"
        loading="lazy"
        allow="autoplay; fullscreen; pointer-lock; xr-spatial-tracking"
        sandbox="allow-scripts allow-same-origin allow-pointer-lock"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease-in' }}
      />
    </div>
  )
}

export default SplineScene