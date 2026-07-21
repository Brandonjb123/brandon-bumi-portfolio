import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Badge from './Badge'
import TechnicalModal from './TechnicalModal'
import ArchitectureFlow from './ArchitectureFlow'

const projects = [
  {
    title: 'Lumio',
    problem: 'Content creators waste hours generating marketing copy manually.',
    solution:
      'An AI dashboard that generates Instagram captions, emails, and blog posts using LLM APIs, with user authentication and history.',
    highlights: [
      'JWT auth & session management',
      'PostgreSQL persistence',
      'CI/CD pipeline with Railway',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Groq API', 'React', 'TypeScript'],
    status: 'Production',
    link: 'https://lumio-six-topaz.vercel.app',
    image: '/images/project-lumio.jpg',
    metrics: [
      { value: 'JWT Auth', label: 'Security' },
      { value: 'PostgreSQL', label: 'Database' },
      { value: 'CI/CD', label: 'Pipeline' },
      { value: 'LLM APIs', label: 'AI' },
    ],
    architecture: ['User', 'React Frontend', 'FastAPI Backend', 'Groq API', 'PostgreSQL', 'Deployed on Railway'],
    technicalData: {
      title: 'Lumio',
      architecture: [
        'React frontend with Tailwind CSS',
        'FastAPI backend with JWT authentication',
        'PostgreSQL for content history and user data',
        'Groq API for content generation',
        'CI/CD via Railway',
      ],
      techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Groq API', 'React', 'TypeScript', 'Railway'],
      decisions: [
        'Used JWT for stateless authentication to simplify scaling',
        'Chose PostgreSQL for relational data like user content history',
        'Groq API selected for low-latency content generation',
      ],
      challenges: [
        'Managing authentication flow with token refresh',
        'Optimizing LLM prompts for different content types',
      ],
      deployment: 'Deployed on Railway with environment variables and automated CI/CD.',
      roadmap: ['Add more content templates', 'Implement team collaboration features'],
    },
  },
  {
    title: 'Sera AI',
    problem:
      'E-commerce businesses struggle to handle repetitive customer questions about products, shipping, and policies.',
    solution:
      'A RAG chatbot that lets admins upload documents and answers customer queries automatically with semantic search.',
    highlights: [
      'Multi-tenant architecture',
      'Embeddable widget',
      'Semantic search with ChromaDB',
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Groq API', 'React'],
    status: 'Production',
    link: 'https://sera-ai-two.vercel.app',
    image: '/images/project-sera.jpg',
    metrics: [
      { value: 'RAG', label: 'Pipeline' },
      { value: 'Multi-Tenant', label: 'Arch' },
      { value: 'Embeddable', label: 'Widget' },
      { value: 'Vector DB', label: 'Storage' },
    ],
    architecture: ['Admin', 'React Dashboard', 'FastAPI Backend', 'ChromaDB', 'LLM APIs', 'Customer Widget'],
    technicalData: {
      title: 'Sera AI',
      architecture: [
        'React admin dashboard for document upload',
        'FastAPI with multi-tenant routing',
        'ChromaDB for vector embeddings',
        'Groq API for answer generation',
        'Embeddable widget for customer-facing chat',
      ],
      techStack: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Groq API', 'React'],
      decisions: [
        'Multi-tenant design to allow multiple businesses to use the same instance securely',
        'ChromaDB chosen for lightweight vector search without external dependencies',
        'Embeddable widget enables seamless integration into existing e-commerce sites',
      ],
      challenges: [
        'Implementing tenant isolation at the database and API level',
        'Ensuring fast retrieval from vector store with growing document sets',
      ],
      deployment: 'Deployed on Railway with tenant-specific configurations.',
      roadmap: [
        'Add support for more document formats',
        'Implement analytics dashboard for admins',
      ],
    },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-mono text-neon-cyan mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Selected Engineering Projects
          <span className="block w-16 h-0.5 bg-neon-cyan/40 mt-3" />
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40, scale: 0.95 },
          visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
        }}
        whileHover={{ y: -6, boxShadow: '0 0 25px rgba(0,240,255,0.15)' }}
        className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02] hover:border-neon-cyan/30 transition-all duration-500"
      >
        <div className="relative h-40 bg-white/[0.02] flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <div className="absolute top-3 left-3">
            <Badge label={project.status} color="green" />
          </div>
        </div>

        <div className="p-5 space-y-3">
          <h3 className="text-lg font-bold font-mono text-white">{project.title}</h3>

          <div>
            <div className="text-xs font-semibold text-white/50 uppercase tracking-wide">Problem</div>
            <p className="text-sm text-white/70">{project.problem}</p>
          </div>
          <div>
            <div className="text-xs font-semibold text-white/50 uppercase tracking-wide">Solution</div>
            <p className="text-sm text-white/70">{project.solution}</p>
          </div>

          <div>
            <div className="text-xs font-semibold text-white/50 mb-1">Engineering Metrics</div>
            <div className="grid grid-cols-2 gap-2">
              {project.metrics.map((m: any) => (
                <div key={m.label} className="p-2 border border-white/10 rounded-lg bg-white/[0.02] text-center">
                  <div className="text-lg font-bold font-mono text-neon-cyan">{m.value}</div>
                  <div className="text-xs text-white/50">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-white/50 mb-2">Architecture</div>
            <ArchitectureFlow nodes={project.architecture} />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-1.5 border border-white/20 text-white/70 font-mono text-xs rounded hover:border-neon-cyan/40 hover:text-neon-cyan transition-all"
            >
              Technical Overview
            </button>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 border border-neon-cyan/40 text-neon-cyan font-mono text-xs rounded hover:bg-neon-cyan/10 transition-all"
            >
              <ExternalLink className="w-3 h-3" />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>

      <TechnicalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={project.technicalData} />
    </>
  )
}