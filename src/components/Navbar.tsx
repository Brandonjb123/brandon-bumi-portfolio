import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#stats', label: 'Metrics' },
  { href: '#projects', label: 'Projects' },
  { href: '#tech', label: 'Stack' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'Journey' },
  { href: '#certs', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <span className="font-mono text-neon-cyan text-lg font-bold">BJB</span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm font-mono text-white/70">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-neon-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-mono text-white/70 hover:text-neon-cyan transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}