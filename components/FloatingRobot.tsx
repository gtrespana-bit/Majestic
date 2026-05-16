'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'

export default function FloatingRobot() {
  const [isFloating, setIsFloating] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsFloating(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check inicial
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Placeholder para evitar salto de layout cuando el robot se vuelve fixed */}
      <div className={`${isFloating ? 'h-[400px] lg:h-[600px]' : 'h-0'} transition-all duration-500`} />

      <motion.div
        className={`overflow-hidden rounded-2xl border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isFloating
            ? 'fixed bottom-6 right-6 z-40 w-[160px] h-[160px] shadow-2xl shadow-purple-500/30 border-[hsl(var(--primary))/0.4] backdrop-blur-sm'
            : 'relative w-full h-[400px] lg:h-[600px] border-white/10 shadow-2xl shadow-purple-500/20'
        }`}
        initial={false}
        animate={{ 
          scale: 1, 
          opacity: 1,
          y: isFloating ? 0 : 0
        }}
      >
        <SplineScene className="w-full h-full" />
        
        {/* Sutil overlay para que no interfiera con el scroll/taps en móvil */}
        {isFloating && (
          <div className="absolute inset-0 bg-black/10 pointer-events-none rounded-2xl" />
        )}
      </motion.div>
    </>
  )
}