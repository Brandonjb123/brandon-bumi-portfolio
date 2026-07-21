import { motion } from 'framer-motion'
import { ExternalLink, Bot, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Bhumi AI Agent',
    description:
      'Multi-model autonomous AI assistant with RAG capabilities. Supports document Q&A, conversation memory, streaming responses, and intelligent tool usage.',
    highlights: [
      'Multi-LLM Support',
      'Retrieval-Augmented Generation',
      'Streaming Responses',
    ],
    tech: ['Python', 'LangChain', 'LLM APIs', 'Streamlit'],
    status: 'Production',
    statusColor: 'bg-green-400/10 text-green-400 border-green-400/30',
    link: 'https://bhumi-ai-agent-c3wmavfhyhnadhlkbbfneh.streamlit.app/',
    image: '/images/project-bhumi.jpg',
    fallbackIcon: <Bot className="w-8 h-8 text-neon-cyan" />,
    gradient: 'from-neon-cyan/20 to-transparent',
  },
  {
    title: 'Lumio',
    description:
      'AI-powered content generator dashboard for content creators and businesses. Features JWT auth, content history, and PostgreSQL storage.',
    highlights: [
      'JWT Authentication',
      'PostgreSQL Database',
      'CI/CD Pipeline',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Groq API', 'React', 'TypeScript', 'Railway'],
    status: 'Production',
    statusColor: 'bg-green-400/10 text-green-400 border-green-400/30',
    link: 'https://lumio-six-topaz.vercel.app',
    image: '/images/project-lumio.jpg',
    fallbackIcon: <Sparkles className="w-8 h-8 text-neon-purple" />,
    gradient: 'from-neon-purple/20 to-transparent',
  },
  {
    title: 'Sera AI',
    description:
      'RAG-based customer service chatbot for e-commerce businesses. Admin uploads documents and the chatbot answers customer queries.',
    highlights: [
      'Multi-Tenant Architecture',
      'Embeddable Widget',
      'Semantic Search',
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Groq API', 'React', 'Railway'],
    status: 'Production',
    statusColor: 'bg-green-400/10 text-green-400 border-green-400/30',
    link: 'https://sera-ai-two.vercel.app',
    image: '/images/project-sera.jpg',
    fallbackIcon: <Bot className="w-8 h-8 text-neon-cyan" />,
    gradient: 'from-neon-cyan/20 to-transparent',
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden
                         hover:border-neon-cyan/40 transition-all duration-500"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              whileHover={{
                y: -8,
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.2)',
                transition: { duration: 0.3 },
              }}
            >
              <div
                className={`relative h-40 bg-gradient-to-b ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement | null
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div className="absolute inset-0 items-center justify-center hidden">
                  {project.fallbackIcon}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-neon-cyan" />
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className={`text-xs font-mono rounded-full px-2 py-0.5 border ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Engineering Highlights */}
                <div className="mb-4 space-y-1">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-white/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/60" />
                      {h}
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
                    },
                  }}
                >
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-2 py-0.5 border border-white/10 rounded text-[10px] font-mono text-white/50"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}