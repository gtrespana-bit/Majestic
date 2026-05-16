// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Soluciona el error "Super constructor null" de Spline en Webpack/Vercel
  transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime'],
  // ✅ Permite cargar imágenes externas con next/image
  images: {
    domains: ['images.unsplash.com'],
  },
}

export default nextConfig