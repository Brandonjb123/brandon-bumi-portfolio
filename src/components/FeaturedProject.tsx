import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const technicalFlagship = {
  title: 'Bhumi AI Agent',
  role: 'Technical Flagship',
  problem: 'Users need instant, accurate answers from company documents without reading through manuals.',
  solution: 'A multi-model AI assistant with RAG that retrieves relevant context and generates precise answers in real time.',
  highlights: [
    'RAG with ChromaDB & embeddings',
    'Multi-LLM support (Claude, GPT, Groq)',
    'Tool calling & streaming responses',
    'Conversation memory & persistence',
  ],
  tech: ['Python', 'LangChain', 'LLM APIs', 'Streamlit'],
  status: 'Production',
  link: 'https://bhumi-ai-agent-c3wmavfhyhnadhlkbbfneh.streamlit.app/',
  image: '/images/project-bhumi.jpg',
}

const productionSpotlight = {
  title: 'Crypto Prime Bot',
  role: 'Production Spotlight',
  problem: 'Crypto traders need real-time, actionable insights without watching charts 24/7.',
  solution: 'An autonomous Telegram bot that analyzes market data across multiple layers and delivers trading signals 24/7.',
  highlights: [
    'Multi-factor AI analysis engine',
    'Background scheduler with monitoring',
    'Paper trading & subscription system',
    'Modular service architecture',
  ],
  tech: ['Python', 'FastAPI', 'Telegram Bot API', 'Claude', 'CoinGecko', 'Railway'],
  status: 'Production',
  link: 'https://t.me/crypto_prime_assistant_bot',
  image: '/images/project-trading.jpg',
}

export default function FeaturedProject() {
  return (
    <section id="featured" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-mono text-neon-cyan mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          AI Showcase
          <span className="block w-16 h-0.5 bg-neon-cyan/40 mt-3" />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Flagship */}
          <ProjectCard {...technicalFlagship} borderColor="border-neon-cyan/40" glowColor="rgba(0,240,255,0.2)" />

          {/* Production Spotlight */}
          <ProjectCard {...productionSpotlight} borderColor="border-neon-purple/40" glowColor="rgba(180,0,255,0.2)" />
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  title,
  role,
  problem,
  solution,
  highlights,
  tech,
  status,
  link,
  image,
  borderColor,
  glowColor,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`border ${borderColor} rounded-xl overflow-hidden bg-white/[0.02] hover:shadow-[0_0_30px_${glowColor}] transition-all duration-500`}
      whileHover={{ y: -4 }}
    >
      {/* Screenshot */}
      <div className="relative h-48 bg-white/[0.02] flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="absolute top-3 left-3 px-3 py-1 text-xs font-mono rounded-full bg-black/60 text-white/80 border border-white/20">
          {role}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold font-mono text-white">{title}</h3>
          <span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/30">{status}</span>
        </div>

        <div>
          <div className="text-sm font-semibold text-white/50 mb-1">Problem</div>
          <p className="text-sm text-white/70">{problem}</p>
        </div>

        <div>
          <div className="text-sm font-semibold text-white/50 mb-1">Solution</div>
          <p className="text-sm text-white/70">{solution}</p>
        </div>

        <div>
          <div className="text-sm font-semibold text-white/50 mb-2">Engineering Highlights</div>
          <ul className="space-y-1">
            {highlights.map((h: string) => (
              <li key={h} className="flex items-center gap-2 text-xs text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/60" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((t: string) => (
            <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded-full border border-white/10 text-white/50">{t}</span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-neon-cyan/40 text-neon-cyan font-mono text-sm rounded hover:bg-neon-cyan/10 transition-all"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
      </div>
    </motion.div>
  )
}