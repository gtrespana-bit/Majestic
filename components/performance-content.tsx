'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PageHeader, GradientBorder } from '@/components/ui-premium'
import { Zap, Clock, Monitor, ArrowRight, CheckCircle2 } from 'lucide-react'

const metrics = [
  { icon: <Zap className="w-6 h-6" />, title: "LCP (Largest Contentful Paint)", desc: "Tiempo en cargar el elemento principal. <2.5s es bueno. >4s pierde al 53% de usuarios." },
  { icon: <Clock className="w-6 h-6" />, title: "INP (Interaction to Next Paint)", desc: "Tiempo de respuesta a clics/scroll. <200ms se percibe como instantáneo." },
  { icon: <Monitor className="w-6 h-6" />, title: "CLS (Cumulative Layout Shift)", desc: "Estabilidad visual. <0.1 evita saltos molestos que generan clics erróneos y abandono." }
]

export default function PerformanceContent() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      <PageHeader title="Velocidad y Core Web Vitals" subtitle="La velocidad no es un lujo. Es tu primer filtro de conversión. Optimizamos cada milisegundo." />
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[hsl(var(--fg))]">Por qué la velocidad define tu negocio online</h2>
        <p className="text-[hsl(var(--muted-fg))] leading-relaxed mb-6">Google mide la experiencia del usuario a través de <strong>Core Web Vitals</strong>. 100ms de retraso = -1% en ventas. Aplicamos compresión moderna, lazy loading, critical CSS, code splitting y edge caching.</p>
      </section>
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[hsl(var(--fg))]">Métricas que Optimizamos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <GradientBorder className="h-full"><div className="bg-[hsl(var(--card))] rounded-xl p-6 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--primary))/0.15] flex items-center justify-center text-[hsl(var(--primary))] mb-3">{m.icon}</div>
                <h3 className="text-lg font-bold text-[hsl(var(--fg))] mb-2">{m.title}</h3>
                <p className="text-sm text-[hsl(var(--muted-fg))] flex-1">{m.desc}</p>
              </div></GradientBorder>
            </motion.div>
          ))}
        </div>
      </section>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[hsl(var(--fg))]">¿Tu web tarda más de 3s en cargar?</h2>
        <p className="text-[hsl(var(--muted-fg))] max-w-xl mx-auto mb-6">Auditamos tu rendimiento y te entregamos un plan de acción priorizado.</p>
        <Link href="/contacto"><button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-xl shadow-purple-500/20 group">Solicitar Test de Velocidad <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></button></Link>
      </motion.div>
    </div>
  )
}