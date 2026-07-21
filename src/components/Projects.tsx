import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Lumio',
    problem: 'Content creators waste hours generating marketing copy manually.',
    solution: 'An AI dashboard that generates Instagram captions, emails, and blog posts using LLM APIs, with user authentication and history.',
    highlights: ['JWT auth & session management', 'PostgreSQL persistence', 'CI/CD pipeline with Railway'],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Groq API', 'React', 'TypeScript'],
    status: 'Production',
    link: 'https://lumio-six-topaz.vercel.app',
    image: '/images/project-lumio.jpg',
  },
  {
    title: 'Sera AI',
    problem: 'E-commerce businesses struggle to handle repetitive customer questions about products, shipping, and policies.',
    solution: 'A RAG chatbot that lets admins upload documents and answers customer queries automatically with semantic search.',
    highlights: ['Multi-tenant architecture', 'Embeddable widget', 'Semantic search with ChromaDB'],
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Groq API', 'React'],
    status: 'Production',
    link: 'https://sera-ai-two.vercel.app',
    image: '/images/project-sera.jpg',
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
            <motion.div
              key={project.title}
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
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold font-mono text-white">{project.title}</h3>
                  <span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/30">{project.status}</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/50 uppercase tracking-wide">Problem</div>
                  <p className="text-sm text-white/70">{project.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/50 uppercase tracking-wide">Solution</div>
                  <p className="text-sm text-white/70">{project.solution}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-1">Highlights</div>
                  <ul className="space-y-1">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-white/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/60" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded-full border border-white/10 text-white/50">{t}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-neon-cyan/40 text-neon-cyan font-mono text-sm rounded hover:bg-neon-cyan/10 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}