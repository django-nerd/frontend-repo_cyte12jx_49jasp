import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-black via-zinc-700 to-neutral-400 flex items-center justify-center text-white shadow-sm">
              <Sparkles size={16} />
            </div>
            <span className="font-semibold tracking-wide">atelier.muse</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-zinc-700 hover:text-black transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="text-sm px-4 py-2 rounded-full bg-black text-white hover:opacity-90 transition">
              Book a fitting
            </a>
          </nav>

          <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-zinc-800" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="text-sm px-4 py-2 rounded-full bg-black text-white w-max" onClick={() => setOpen(false)}>
              Book a fitting
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
