'use client'

import { useEffect, useState } from 'react'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className = '' }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  
  // Extraer el ID de la escena de la URL de Spline
  const getSceneId = (url: string) => {
    const match = url.match(/\/scene\.splinecode\?scene=([^&]+)/)
    return match ? match[1] : url.split('/').pop()?.replace('.splinecode', '')
  }

  useEffect(() => {
    // Pequeño delay para asegurar hidratación completa
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoaded || hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-neutral-900/30 rounded-2xl ${className}`}>
        <div className="text-center text-neutral-400">
          {!hasError ? (
            <>
              <div className="w-8 h-8 border-2 border-purple-500/50 border-t-purple-500 rounded-full animate-spin mx-auto mb-3" />
              <p className="text-sm">Cargando 3D...</p>
            </>
          ) : (
            <p className="text-sm">Experiencia 3D no disponible</p>
          )}
        </div>
      </div>
    )
  }

  // Usar iframe embed de Spline (100% compatible con producción)
  const sceneId = getSceneId(scene)
  const embedUrl = `https://my.spline.design/embed/${sceneId}?embed=true&background=transparent`

  return (
    <iframe
      src={embedUrl}
      className={`w-full h-full border-0 rounded-2xl ${className}`}
      title="3D Experience"
      loading="lazy"
      onError={() => setHasError(true)}
      sandbox="allow-scripts allow-same-origin allow-pointer-lock"
    />
  )
}

export default SplineScene