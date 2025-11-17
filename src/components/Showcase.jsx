import { motion } from 'framer-motion'

const pieces = [
  { id: 1, title: 'Aero Trench', tag: 'Outerwear', img: 'https://images.unsplash.com/photo-1548883354-994b2ed52366?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, title: 'Signal Dress', tag: 'Runway', img: 'https://images.unsplash.com/photo-1520975730393-c1a6d1b1d8ee?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, title: 'Mica Suit', tag: 'Tailoring', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop' },
]

export default function Showcase() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Selected work</h2>
          <a href="#" className="text-sm text-zinc-600 hover:text-black">View all →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pieces.map((p, i) => (
            <motion.a
              key={p.id}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img src={p.img} alt={p.title} className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <p className="font-medium">{p.title}</p>
                  <p className="text-xs text-zinc-600">{p.tag}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-black text-white opacity-0 group-hover:opacity-100 transition">View</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
