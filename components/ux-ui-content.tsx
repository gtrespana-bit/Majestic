'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PageHeader, GradientBorder } from '@/components/ui-premium'
import { Layout, MousePointer2, Eye, Users, ArrowRight } from 'lucide-react'

const pillars = [
  { icon: <Users className="w-6 h-6" />, title: "Investigación de Usuario", desc: "Entendemos tu audiencia: comportamientos, dolores, motivaciones y flujos de decisión reales." },
  { icon: <Layout className="w-6 h-6" />, title: "Arquitectura de Información", desc: "Estructuramos contenido y navegación para que encontrar lo necesario sea instintivo, no un puzzle." },
  { icon: <Eye className="w-6 h-6" />, title: "Diseño Visual & Branding", desc: "Tipografía, color, espaciado y jerarquía visual alineados con tu identidad y optimizados para legibilidad." },
  { icon: <MousePointer2 className="w-6 h-6" />, title: "Prototipado & Testing", desc: "Iteramos en Figma antes de escribir una línea de código. Validamos con usuarios reales para reducir riesgos." }
]

export default function UxUiContent() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      <PageHeader title="Diseño UX/UI Centrado en Conversión" subtitle="Una web bonita que no vende es decoración. Diseñamos experiencias que guían, convencen y convierten." />
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[hsl(var(--fg))]">UX vs UI: ¿Por qué importan ambas?</h2>
        <p className="text-[hsl(var(--muted-fg))] leading-relaxed mb-6">El <strong>UX</strong> se preocupa por cómo se siente y navega el usuario. El <strong>UI</strong> se encarga de cómo se ve y comunica visualmente. Juntos, reducen la tasa de rebote y disparan las conversiones.</p>
      </section>
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[hsl(var(--fg))]">Los 4 Pilares de Nuestro Diseño</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <GradientBorder className="h-full"><div className="bg-[hsl(var(--card))] rounded-xl p-6 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--primary))/0.15] flex items-center justify-center text-[hsl(var(--primary))] mb-3">{p.icon}</div>
                <h3 className="text-lg font-bold text-[hsl(var(--fg))] mb-2">{p.title}</h3>
                <p className="text-sm text-[hsl(var(--muted-fg))] flex-1">{p.desc}</p>
              </div></GradientBorder>
            </motion.div>
          ))}
        </div>
      </section>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[hsl(var(--fg))]">¿Tu web pierde visitantes por mala usabilidad?</h2>
        <p className="text-[hsl(var(--muted-fg))] max-w-xl mx-auto mb-6">Auditoría UX gratuita + propuesta de rediseño centrada en objetivos.</p>
        <Link href="/contacto"><button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-xl shadow-purple-500/20 group">Solicitar Auditoría UX <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></button></Link>
      </motion.div>
    </div>
  )
}