'use client'

import { useEffect, useState, type ComponentProps } from 'react'

// Componente wrapper que carga Spline solo después del mount
export function SplineScene({ scene, className, ...props }: { scene: string; className?: string } & Record<string, any>) {
  const [isMounted, setIsMounted] = useState(false)
  const [SplineComp, setSplineComp] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  // 1. Marcar como montado (solo en cliente)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // 2. Cargar Spline dinámicamente solo después del mount
  useEffect(() => {
    if (!isMounted) return
    
    let cancelled = false
    import('@splinetool/react-spline')
      .then(mod => {
        if (!cancelled) setSplineComp(() => mod.default)
      })
      .catch(err => {
        console.error('❌ Error cargando Spline:', err)
        if (!cancelled) setError('3D no disponible')
      })
    
    return () => { cancelled = true }
  }, [isMounted])

  // Fallback mientras carga o si hay error
  if (!isMounted || !SplineComp) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-neutral-900/30 rounded-2xl ${className || ''}`}>
        <div className="text-center text-neutral-400">
          <div className="w-8 h-8 border-2 border-purple-500/50 border-t-purple-500 rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm">Cargando 3D...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-neutral-900/30 rounded-2xl ${className || ''}`}>
        <p className="text-neutral-400 text-sm">{error}</p>
      </div>
    )
  }

  // Renderizar Spline con los props originales
  return <SplineComp scene={scene} className={className} {...props} />
}

export default SplineScene