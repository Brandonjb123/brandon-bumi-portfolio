import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Badge from './Badge'
import TechnicalModal from './TechnicalModal'
import ArchitectureFlow from './ArchitectureFlow'

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
  metrics: [
    { value: 'Multi-LLM', label: 'AI Models' },
    { value: 'RAG', label: 'Pipeline' },
    { value: 'Streaming', label: 'Responses' },
    { value: 'Vector DB', label: 'Storage' },
  ],
  architecture: [
    'User Query',
    'Streamlit Frontend',
    'LangChain Orchestrator',
    'LLM APIs (Claude/GPT/Groq)',
    'ChromaDB Vector Store',
    'Deployed on Streamlit Cloud',
  ],
  technicalData: {
    title: 'Bhumi AI Agent',
    architecture: [
      'Streamlit as user interface',
      'LangChain for agent orchestration and tool calling',
      'ChromaDB for vector storage and retrieval',
      'Multiple LLM backends (Claude, GPT, Groq) via API',
    ],
    techStack: ['Python', 'LangChain', 'LLM APIs', 'ChromaDB', 'Streamlit'],
    decisions: [
      'Used LangChain for modular agent architecture, allowing easy swapping of LLM providers',
      'Chosen ChromaDB for lightweight, embedded vector storage without external service dependencies',
      'Implemented streaming responses to improve user experience for long generations',
    ],
    challenges: [
      'Ensuring low latency while using multiple LLM providers',
      'Managing conversation context efficiently to avoid token overflow',
      'Balancing accuracy of retrieval with response generation quality',
    ],
    deployment: 'Deployed on Streamlit Cloud with environment variables for API keys and configuration.',
    roadmap: [
      'Add authentication for personalized experiences',
      'Support additional document formats (PDF, DOCX)',
      'Implement user feedback loop for continuous improvement',
    ],
  },
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
  metrics: [
    { value: '250+', label: 'Coins Supported' },
    { value: '24/7', label: 'Runtime' },
    { value: '3', label: 'Analysis Layers' },
    { value: 'Real-time', label: 'Signals' },
  ],
  architecture: [
    'Telegram User',
    'Bot API Webhook',
    'Python FastAPI Backend',
    'AI Analysis Engine',
    'Market Data (CoinGecko)',
    'Turso Database',
    'Deployed on Railway',
  ],
  technicalData: {
    title: 'Crypto Prime Bot',
    architecture: [
      'Telegram Bot API for user interaction',
      'FastAPI as async backend',
      'Modular analysis engine: technical, sentiment, liquidity',
      'Background scheduler for periodic market analysis',
      'Turso (SQLite-based) for subscription and user data',
      'Deployed on Railway with health checks and logging',
    ],
    techStack: ['Python', 'FastAPI', 'Telegram Bot API', 'Claude', 'CoinGecko', 'Turso', 'Railway'],
    decisions: [
      'Chose FastAPI for high concurrency and easy async support',
      'Used Claude via OpenRouter for cost-effective and high-quality market analysis',
      'Implemented paper trading engine to let users test strategies without risk',
      'Modular architecture allows adding new analysis layers without affecting existing ones',
    ],
    challenges: [
      'Handling Telegram API rate limits while maintaining responsiveness',
      'Designing a subscription system that scales with users',
      'Ensuring real-time signal accuracy with minimal false positives',
    ],
    deployment: 'Deployed on Railway with automated CI/CD from GitHub, monitored via health endpoints.',
    roadmap: [
      'Add more exchanges for broader market coverage',
      'Implement backtesting for historical performance',
      'Add user dashboards and performance analytics',
    ],
  },
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
          <ProjectCard {...technicalFlagship} borderColor="border-neon-cyan/40" glowColor="rgba(0,240,255,0.2)" />
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
  status,
  link,
  image,
  metrics,
  architecture,
  technicalData,
  borderColor,
  glowColor,
}: any) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`border ${borderColor} rounded-xl overflow-hidden bg-white/[0.02] hover:shadow-[0_0_30px_${glowColor}] transition-all duration-500`}
        whileHover={{ y: -4 }}
      >
        <div className="relative h-48 bg-white/[0.02] flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <div className="absolute top-3 left-3">
            <Badge label={role} color="purple" />
          </div>
          {status === 'Production' && (
            <div className="absolute top-3 right-3">
              <Badge label="Live" color="green" icon="⚡" />
            </div>
          )}
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold font-mono text-white">{title}</h3>

          <div>
            <div className="text-sm font-semibold text-white/50 mb-1">Problem</div>
            <p className="text-sm text-white/70">{problem}</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white/50 mb-1">Solution</div>
            <p className="text-sm text-white/70">{solution}</p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/50 mb-2">Engineering Metrics</div>
            <div className="grid grid-cols-2 gap-2">
              {metrics.map((m: any) => (
                <div key={m.label} className="p-2 border border-white/10 rounded-lg bg-white/[0.02] text-center">
                  <div className="text-lg font-bold font-mono text-neon-cyan">{m.value}</div>
                  <div className="text-xs text-white/50">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/50 mb-2">Architecture Flow</div>
            <ArchitectureFlow nodes={architecture} />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 border border-white/20 text-white/70 font-mono text-sm rounded hover:border-neon-cyan/40 hover:text-neon-cyan transition-all duration-300"
            >
              Technical Overview
            </button>
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
        </div>
      </motion.div>

      <TechnicalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={technicalData} />
    </>
  )
}