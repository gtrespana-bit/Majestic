import { Metadata } from 'next'
import SeoContent from '@/components/seo-content'

export const metadata: Metadata = {
  title: "SEO Técnico y Estratégico | MajesticWeb",
  description: "Posiciona tu web en Google con auditorías técnicas, optimización de contenido y estrategia de keywords. Resultados medibles y tráfico cualificado.",
}

export default function SEOPage() {
  return <SeoContent />
}