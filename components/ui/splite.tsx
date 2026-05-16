'use client'

import { useState, useEffect } from 'react'

// ✅ TU ESCENA DE SPLINE
const SPLINE_EMBED_URL = "https://my.spline.design/nexbotrobotcharacterconcept-vpDGeeHrll7A8gjDFeSDRA3n/"

export function SplineScene({ className = '' }: { className?: string }) {
  const [loaded, setLoaded] = useState(false)
  const [showFallback, setShowFallback] = useState(false)

  // Timeout: si tarda >4s, muestra fallback
  useEffect(() => {
    const timer = setTimeout(() => { if (!loaded) setShowFallback(true) }, 4000)
    return () => clearTimeout(timer)
  }, [loaded])

  if (showFallback) {
    return (
      <div className={`relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center ${className}`}>
        <div className="text-center relative