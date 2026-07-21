import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import ParticlesBackground from './ParticlesBackground'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticlesBackground />

      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-10"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 240, 255, 0.15) 2px, rgba(0, 240, 255, 0.15) 4px)',
          animation: 'scanlines 8s linear infinite',
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 px-4 max-w-5xl mx-auto">
        <motion.div
          className="relative w-48 h-48 md:w-56 md:h-56 shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-neon-cyan animate-pulse shadow-[0_0_25px_rgba(0,240,255,0.4)]" />
          <img
            src="/images/foto-brandon.jpg"
            alt="Brandon Jovan Bumi"
            className="w-full h-full object-cover rounded-full border-2 border-neon-cyan/60"
            style={{ boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)' }}
          />
        </motion.div>

        <div className="text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono text-neon-cyan mb-2"
            initial={{ opacity: 0, y: 50, textShadow: '0 0 10px rgba(0,240,255,0.3)' }}
            animate={{
              opacity: 1,
              y: 0,
              textShadow: [
                '0 0 10px rgba(0,240,255,0.4)',
                '0 0 30px rgba(0,240,255,0.8)',
                '0 0 10px rgba(0,240,255,0.4)',
              ],
              transition: {
                duration: 0.8,
                ease: 'easeOut',
                textShadow: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' },
              },
            }}
          >
            Brandon Jovan Bumi
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-white/60 font-mono mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Production AI Systems Engineer
          </motion.p>
          <motion.p
            className="text-sm md:text-base text-white/50 mb-6 max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            I build AI systems that serve real users — not just demos.
          </motion.p>

          <motion.div
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-mono mb-10 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <TypeAnimation
              sequence={[
                'Production AI Systems',
                2000,
                'Autonomous AI Agents',
                2000,
                'LLM Applications',
                2000,
                'Fullstack Engineering',
                2000,
                'AI Automation',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              style={{ color: '#e0e0e0' }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 border border-neon-cyan text-neon-cyan font-mono rounded hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-neon-purple text-neon-purple font-mono rounded hover:bg-neon-purple/10 hover:shadow-[0_0_20px_rgba(180,0,255,0.4)] transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
      `}</style>
    </section>
  )
}