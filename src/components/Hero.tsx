import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import ParticlesBackground from './ParticlesBackground'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background partikel */}
      <ParticlesBackground />

      {/* Konten utama */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Nama dengan glow effect */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono text-neon-cyan mb-6"
          style={{
            textShadow: '0 0 20px rgba(0, 240, 255, 0.6), 0 0 40px rgba(0, 240, 255, 0.3)',
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Brandon Jovan Bumi
        </motion.h1>

        {/* Tagline dengan typing animation */}
        <motion.div
          className="text-lg sm:text-xl md:text-2xl text-white/80 font-mono mb-12 h-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <TypeAnimation
            sequence={[
              'AI Engineer | Building Autonomous AI Agents | Fullstack Engineer',
              3000, // jeda setelah selesai
              '',
              500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
            style={{ color: '#e0e0e0' }}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 border border-neon-cyan text-neon-cyan font-mono rounded hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-neon-purple text-neon-purple font-mono rounded hover:bg-neon-purple/10 hover:shadow-[0_0_20px_rgba(180,0,255,0.4)] transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}