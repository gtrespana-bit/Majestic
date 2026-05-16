'use client'

import { Suspense, lazy, useState, useEffect } from 'react'

// Cargar Spline dinámicamente con manejo de errores
const Spline = lazy(() => 
  import('@splinetool/react-spline').catch((error) => {
    console.error('❌ Error cargando Spline:', error)
    // Retornar un componente fallback si falla la carga
    return { default: () => <div className="text-neutral-400">3D no disponible</div> }
  })
)

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [error, setError] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Timeout para detectar si Spline tarda demasiado
    const timer = setTimeout(() => {
      if (!loaded) {
        console.warn('⚠️ Spline tardó más de 10s en cargar')
      }
    }, 10000)
    return () => clearTimeout(timer)
  }, [loaded])

  if (error) {
    return (
      <div className={`w-full h-full flex items-center justify-center ${className}`}>
        <div className="text-center text-neutral-400">
          <p className="mb-2">⚠️ Escena 3D no disponible</p>
          <p className="text-xs">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <Suspense 
      fallback={
        <div className={`w-full h-full flex items-center justify-center ${className}`}>
          <div className="text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-500 mx-auto mb-3"></div>
            <p className="text-neutral-400 text-sm">Cargando experiencia 3D...</p>
          </div>
        </div>
      }
    >
      <Spline 
        scene={scene} 
        className={className}
        onLoad={() => setLoaded(true)}
        onError={(e: Error) => {
          console.error('❌ Error en Spline:', e)
          setError(e.message)
        }}
      />
    </Suspense>
  )
}