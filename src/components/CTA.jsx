import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-tr from-black via-zinc-900 to-zinc-700 text-white p-10 md:p-14 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-semibold"
          >
            Book a private fitting
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-2 text-zinc-300 max-w-xl"
          >
            Share your measurements and desired silhouette. We’ll prepare a curated selection and a bespoke consult.
          </motion.p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid md:grid-cols-3 gap-3">
            <input placeholder="Email" className="px-4 py-3 rounded-full text-black" />
            <input placeholder="Preferred date" className="px-4 py-3 rounded-full text-black" />
            <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:opacity-90 transition">Request invite</button>
          </form>
          <p className="mt-3 text-xs text-zinc-400">By requesting an invite you agree to our studio policy.</p>
        </div>
      </div>
    </section>
  )
}
