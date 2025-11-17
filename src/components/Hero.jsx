import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center pt-28 md:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              New Capsule • AW25
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
              Tailored silhouettes for the curious and bold
            </h1>
            <p className="text-zinc-600 text-base sm:text-lg max-w-xl">
              A modern fashion studio blending couture craftsmanship with playful tech. Bespoke pieces, limited runs, and made-to-measure experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#work" className="px-6 py-3 rounded-full bg-black text-white text-sm hover:opacity-90 transition">Explore collection</a>
              <a href="#contact" className="px-6 py-3 rounded-full bg-white text-black border border-black/10 text-sm hover:bg-black/5 transition">Book a studio visit</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="lg:justify-self-end"
          >
            <div className="backdrop-blur-md bg-white/40 border border-white/60 rounded-2xl shadow-xl p-4 w-full max-w-sm">
              <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-zinc-100 to-white overflow-hidden">
                <div className="w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.06),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.04),transparent_35%)]" />
              </div>
              <div className="flex items-center justify-between pt-3">
                <p className="text-sm text-zinc-700">Studio mood board</p>
                <span className="text-[10px] px-2 py-1 rounded-full bg-black text-white">LIVE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
