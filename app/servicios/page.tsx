'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PageHeader, GradientBorder } from '@/components/ui-premium'
import { CheckCircle2, ArrowRight, Globe, Zap, Rocket, Code2 } from 'lucide-react'

const services = [
  { icon: <Globe className="w-6 h-6" />, title: "Diseño Web Corporativo", desc: "Sitios institucionales que reflejan la identidad de tu marca con navegación intuitiva.", features: ["UX/UI personalizado", "SEO técnico on-page", "Integración CMS", "Responsive total"] },
  { icon: <Zap className="w-6 h-6" />, title: "Experiencias 3D e Interactivas", desc: "Implementamos Spline, Three.js y WebGL para crear inmersión real.", features: ["Modelado 3D optimizado", "Animaciones interactivas", "Rendimiento 60fps", "Cross-browser"] },
  { icon: <Rocket className="w-6 h-6" />, title: "E-Commerce & Tiendas Online", desc: "Plataformas de venta escalables con checkout optimizado y pasarelas seguras.", features: ["Shopify / WooCommerce", "Checkout de alta conversión", "Gestión de inventario", "Automatización emails"] },
  { icon: <Code2 className="w-6 h-6" />, title: "Desarrollo Web Apps & SaaS", desc: "Aplicaciones web complejas, dashboards y herramientas internas modernas.", features: ["Next.js / React", "APIs REST & GraphQL", "Auth & Roles", "Despliegue cloud"] }
]

const plans = [
  { name: "Esencial", price: "Desde 950€", desc: "Ideal para startups", features: ["Diseño UI/UX a medida", "Hasta 5 páginas", "SEO básico", "Formulario de contacto", "Entrega en 7-10 días"], popular: false },
  { name: "Profesional", price: "Desde 1.950€", desc: "Para empresas en crecimiento", features: ["Todo lo del plan Esencial", "Hasta 10 páginas + Blog", "Animaciones avanzadas", "Integración CRM/Analytics", "Core Web Vitals", "Soporte 30 días"], popular: true },
  { name: "Enterprise", price: "A medida", desc: "Proyectos complejos", features: ["Arquitectura personalizada", "Desarrollo 3D/Spline", "E-commerce completo", "APIs & Integraciones", "Mantenimiento premium", "SLA garantizado"], popular: false }
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-24">
      <PageHeader title="Nuestros Servicios" subtitle="Soluciones digitales de alto impacto diseñadas para escalar tu negocio." />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[hsl(var(--fg))]">Qué hacemos mejor</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <GradientBorder className="h-full">
                <div className="bg-[hsl(var(--card))] rounded-xl p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--primary))/0.15] flex items-center justify-center text-[hsl(var(--primary))] mb-3">{s.icon}</div>
                  <h3 className="text-xl font-bold text-[hsl(var(--fg))] mb-2">{s.title}</h3>
                  <p className="text-[hsl(var(--muted-fg))] mb-4 text-sm">{s.desc}</p>
                  <ul className="space-y-2 mt-auto">{s.features.map((f, j) => (<li key={j} className="flex items-center gap-2 text-sm text-[hsl(var(--fg))]"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> {f}</li>))}</ul>
                </div>
              </GradientBorder>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[hsl(var(--card))/0.2] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--fg))]">Inversión adaptada a tus objetivos</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className={p.popular ? "relative" : ""}>
              {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-fg))] text-xs font-bold px-3 py-1 rounded-full shadow-lg">Más elegido</div>}
              <GradientBorder className="h-full">
                <div className={`bg-[hsl(var(--card))] rounded-xl p-6 h-full flex flex-col ${p.popular ? 'ring-2 ring-[hsl(var(--primary))]' : ''}`}>
                  <div className="text-center pb-4"><h3 className="text-lg font-bold text-[hsl(var(--fg))]">{p.name}</h3><div className="text-3xl font-bold text-[hsl(var(--fg))] mt-2">{p.price}</div><p className="text-sm text-[hsl(var(--muted-fg))] mt-1">{p.desc}</p></div>
                  <ul className="space-y-3 mb-6 flex-1">{p.features.map((f, j) => (<li key={j} className="flex items-start gap-2 text-sm text-[hsl(var(--fg))]"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" /> {f}</li>))}</ul>
                  <Link href="/contacto" className="block"><button className={`w-full px-4 py-3 rounded-lg text-sm font-semibold transition-all ${p.popular ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-fg))] hover:bg-[hsl(var(--primary))/0.9]' : 'bg-[hsl(var(--bg))] border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] text-[hsl(var(--fg))]'}`}>Solicitar presupuesto</button></Link>
                </div>
              </GradientBorder>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[hsl(var(--fg))]">¿No sabes qué servicio necesitas?</h2>
        <p className="text-[hsl(var(--muted-fg))] max-w-xl mx-auto mb-6">Agenda una llamada estratégica gratuita.</p>
        <Link href="/contacto"><button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-xl shadow-purple-500/20 group">Agendar consulta gratuita <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></button></Link>
      </motion.div>
    </div>
  )
}