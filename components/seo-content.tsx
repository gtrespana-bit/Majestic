'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PageHeader, GradientBorder } from '@/components/ui-premium'
import { Search, BarChart3, Code2, FileText, ArrowRight, CheckCircle2 } from 'lucide-react'

const steps = [
  { icon: <Search className="w-6 h-6" />, title: "Auditoría Técnica", desc: "Detectamos errores de rastreo, indexación, canibalización y estructura que frenan tu crecimiento." },
  { icon: <FileText className="w-6 h-6" />, title: "Estrategia de Keywords", desc: "Investigamos intención de búsqueda, volumen y competencia para atacar términos con ROI real." },
  { icon: <Code2 className="w-6 h-6" />, title: "SEO On-Page & Técnico", desc: "Optimizamos meta-tags, schema markup, velocidad, mobile-friendliness y arquitectura de enlaces." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Contenido y Autoridad", desc: "Creamos y estructuramos contenido que responde a consultas reales y atrae backlinks naturales." }
]
const faqs = [
  { q: "¿Cuánto tiempo tarda en verse resultados con SEO?", a: "El SEO es una estrategia a medio-largo plazo. Los primeros movimientos técnicos se reflejan en 2-4 semanas. El crecimiento orgánico sostenido suele consolidarse entre los 3 y 6 meses." },
  { q: "¿El SEO sigue funcionando en 2024/2025?", a: "Más que nunca. Google prioriza la experiencia del usuario, la autoridad temática y la calidad del contenido. Las webs optimizadas técnicamente y con contenido relevante dominan los resultados." },
  { q: "¿Trabajáis con WordPress, Shopify o desarrollos a medida?", a: "Sí. Adaptamos la estrategia a tu stack. En WordPress optimizamos plugins, estructura y rendimiento. En Shopify trabajamos con themes personalizados y apps de SEO. En desarrollos Next.js/React aplicamos SEO técnico avanzado (SSR, ISR, metadata API)." }
]

export default function SeoContent() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      <PageHeader title="SEO Técnico y Estratégico" subtitle="No basta con que tu web sea bonita. Necesita ser encontrada. Te posicionamos donde tus clientes buscan." />
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[hsl(var(--fg))]">Por qué el SEO es tu mayor activo digital</h2>
        <p className="text-[hsl(var(--muted-fg))] leading-relaxed">El <strong>SEO</strong> no es magia. Es ingeniería aplicada a la visibilidad. Mientras la publicidad de pago se apaga, el SEO construye <strong>tráfico orgánico recurrente</strong>. Optimizamos cada capa: infraestructura, semántica y contenido.</p>
      </section>
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[hsl(var(--fg))]">Nuestro Proceso</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <GradientBorder className="h-full"><div className="bg-[hsl(var(--card))] rounded-xl p-6 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--primary))/0.15] flex items-center justify-center text-[hsl(var(--primary))] mb-3">{s.icon}</div>
                <h3 className="text-lg font-bold text-[hsl(var(--fg))] mb-2">{s.title}</h3>
                <p className="text-sm text-[hsl(var(--muted-fg))] flex-1">{s.desc}</p>
              </div></GradientBorder>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-[hsl(var(--card))/0.2] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[hsl(var(--fg))]">Preguntas Frecuentes</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <GradientBorder key={i}><div className="bg-[hsl(var(--card))] rounded-xl p-5">
              <h3 className="text-lg font-semibold text-[hsl(var(--fg))] mb-2 flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" /> {faq.q}</h3>
              <p className="text-sm text-[hsl(var(--muted-fg))] leading-relaxed pl-7">{faq.a}</p>
            </div></GradientBorder>
          ))}
        </div>
      </section>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[hsl(var(--fg))]">¿Tu web no aparece en Google?</h2>
        <p className="text-[hsl(var(--muted-fg))] max-w-xl mx-auto mb-6">Auditoría gratuita de 15 puntos + plan de acción.</p>
        <Link href="/contacto"><button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-xl shadow-purple-500/20 group">Solicitar Auditoría SEO <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></button></Link>
      </motion.div>
         {/* 🔗 ENLAZADO INTERNO ESTRATÉGICO */}
      <section className="max-w-4xl mx-auto pt-10 border-t border-[hsl(var(--border))]">
        <h3 className="text-xl font-bold mb-4 text-[hsl(var(--fg))]">Recursos relacionados</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="/ux-ui" className="link-underline text-[hsl(var(--primary))] hover:text-[hsl(var(--accent))] transition-colors">🎨 Diseño UX/UI que retiene el tráfico que el SEO trae</a>
          <a href="/rendimiento-web" className="link-underline text-[hsl(var(--primary))] hover:text-[hsl(var(--accent))] transition-colors">⚡ Velocidad web: el factor técnico que Google premia</a>
        </div>
      </section>
    </div>
  )
}