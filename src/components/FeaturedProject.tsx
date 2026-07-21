import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

// Ikon GitHub fallback (karena lucide-react versi ini tidak export 'Github')
const GithubIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const metrics = [
  { value: '250+', label: 'Coins Supported' },
  { value: '3', label: 'Analysis Layers' },
  { value: '24/7', label: 'Production Runtime' },
  { value: 'Real-time', label: 'Market Analysis' },
]

const highlights = [
  'Multi-factor AI Analysis',
  'Technical + Sentiment + Liquidity Engine',
  'Background Scheduler',
  'Paper Trading Engine',
  'Subscription Management',
  'Risk Management Logic',
  'Modular Service Architecture',
  'Railway Production Deployment',
]

const techStack = [
  'Python',
  'FastAPI',
  'Telegram Bot API',
  'Claude',
  'OpenRouter',
  'CoinGecko',
  'Turso',
  'Railway',
]

export default function FeaturedProject() {
  return (
    <section id="featured" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-mono text-neon-cyan mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Featured Engineering Project
          <span className="block w-16 h-0.5 bg-neon-cyan/40 mt-3" />
        </motion.h2>

        {/* Layout: Kiri & Kanan */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Kiri: Informasi */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
          >
            {/* Title + Status */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mb-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold font-mono text-white mb-3">
                Crypto Prime Bot
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-mono rounded-full bg-green-400/10 text-green-400 border border-green-400/30">
                  Production
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/30">
                  Ongoing
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded-full bg-purple-400/10 text-purple-400 border border-purple-400/30">
                  AI Trading Assistant
                </span>
              </div>
            </motion.div>

            {/* Overview */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mb-8 space-y-4 text-white/70 text-sm md:text-base leading-relaxed"
            >
              <p>
                <span className="text-white font-semibold">Problem:</span> Crypto traders struggle to process vast amounts of market data in real-time, leading to delayed decisions and missed opportunities.
              </p>
              <p>
                <span className="text-white font-semibold">Target Users:</span> Active crypto traders and investors who need real-time, AI-driven market analysis and signals.
              </p>
              <p>
                <span className="text-white font-semibold">Value:</span> An autonomous Telegram bot that continuously analyzes market data across multiple layers — technical, sentiment, and liquidity — delivering actionable trading signals 24/7.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="https://t.me/crypto_prime_assistant_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-neon-cyan text-neon-cyan font-mono text-sm rounded hover:bg-neon-cyan/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo (Telegram)
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/70 font-mono text-sm rounded hover:border-white/50 hover:text-white transition-all duration-300"
              >
            <GithubIcon />
                GitHub Repository
              </a>
            </motion.div>

            {/* Metrics Cards */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="grid grid-cols-2 gap-3"
            >
              {metrics.map((m) => (
                <motion.div
                  key={m.label}
                  variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                  className="p-3 border border-white/10 rounded-lg bg-white/[0.02] text-center"
                >
                  <div className="text-lg md:text-xl font-bold font-mono text-neon-cyan">{m.value}</div>
                  <div className="text-xs text-white/50 mt-1">{m.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Kanan: Screenshot + Architecture Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Screenshot (placeholder jika belum ada) */}
            <div className="relative border border-white/10 rounded-xl overflow-hidden bg-white/[0.02] aspect-video">
              <img
                src="/images/project-trading.jpg"
                alt="Crypto Prime Bot Screenshot"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement | null
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              <div className="absolute inset-0 items-center justify-center hidden text-white/50 font-mono text-sm">
                Screenshot Placeholder
              </div>
            </div>

            {/* Architecture Preview */}
            <div className="border border-white/10 rounded-xl p-5 bg-white/[0.02]">
              <h4 className="text-sm font-semibold font-mono text-white/60 mb-4 uppercase tracking-wide">
                Architecture Preview
              </h4>
              <div className="flex flex-col items-center gap-2 text-xs font-mono">
                {[
                  'User',
                  'Telegram Bot',
                  'Python Backend',
                  'AI Decision Engine',
                  'Market APIs',
                  'Database',
                  'Trading Signal',
                ].map((item, i) => (
                  <div key={item} className="flex items-center gap-2 w-full">
                    <div className="w-full px-3 py-1.5 rounded bg-white/5 border border-white/10 text-center text-white/70">
                      {item}
                    </div>
                    {i < 6 && (
                      <div className="text-neon-cyan/50 text-lg">↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Engineering Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <h4 className="text-sm font-semibold font-mono text-white/60 mb-4 uppercase tracking-wide">
            Engineering Highlights
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {highlights.map((h) => (
              <div
                key={h}
                className="p-3 border border-white/10 rounded-lg bg-white/[0.02] text-xs md:text-sm font-mono text-white/70 hover:border-neon-cyan/30 transition-colors"
              >
                {h}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <h4 className="text-sm font-semibold font-mono text-white/60 mb-4 uppercase tracking-wide">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 text-white/60 bg-white/[0.02]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}