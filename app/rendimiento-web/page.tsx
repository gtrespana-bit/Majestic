import { Metadata } from 'next'
import PerformanceContent from '@/components/performance-content'

export const metadata: Metadata = {
  title: "Velocidad y Core Web Vitals | MajesticWeb",
  description: "Optimizamos la velocidad de carga, LCP, INP y CLS. Webs rápidas que retienen usuarios, mejoran el SEO y multiplican conversiones.",
}

export default function PerformancePage() {
  return <PerformanceContent />
}