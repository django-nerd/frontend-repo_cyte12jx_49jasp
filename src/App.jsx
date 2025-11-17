import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <CTA />
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} atelier.muse — All rights reserved</p>
          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <a href="#" className="hover:text-black">Instagram</a>
            <a href="#" className="hover:text-black">Lookbook</a>
            <a href="#" className="hover:text-black">Press</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
