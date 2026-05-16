'use client'

import { useState } from 'react'

// ⚠️ REEMPLAZA ESTA URL con la URL PÚBLICA de tu escena en Spline
// La obtienes en: Spline Dashboard → Tu Escena → Share → Embed → Copy URL
const SPLINE_EMBED_URL = "https://my.spline.design/tu-escena-publica-aqui/"

interface SplineSceneProps {
  className?: string
}

export function SplineScene({ className = '' }: SplineSceneProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-neutral-900/20 ${className}`}>
      {/* Fallback de carga */}
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/30">
          <div className="text-center text-neutral-400">
            <div className="w-8 h-8 border-2 border-purple-500/50 border-t-purple-500 rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm">Cargando experiencia 3D...</p>
          </div>
        </div>
      )}
      
      {/* Fallback de error */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/30">
          <p className="text-neutral-400 text-sm">3D no disponible</p>
        </div>
      )}

      {/* Iframe oficial de Spline */}
      <iframe
        src={SPLINE_EMBED_URL}
        className="w-full h-full border-0"
        title="3D Interactive Scene"
        loading="lazy"
        allow="autoplay; fullscreen; pointer-lock; xr-spatial-tracking"
        sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease-in' }}
      />
    </div>
  )
}

export default SplineScene