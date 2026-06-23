import { motion } from 'framer-motion'
import { ExternalLink, Bot, BarChart3, Globe } from 'lucide-react'

const projects = [
  {
    title: 'Bhumi AI Agent',
    description: 'Multi-model autonomous AI assistant — live and working, not just a notebook demo. Built with orchestration logic and tool-calling.',
    tech: ['Python', 'LangChain', 'Groq', 'Streamlit'],
    status: '🟢 Live',
    link: 'https://bhumi-ai-agent-c3wmavfhyhnadhlkbbfneh.streamlit.app/',
    icon: <Bot className="w-8 h-8 text-neon-cyan" />,
    gradient: 'from-neon-cyan/20 to-transparent',
  },
  {
    title: 'AI Trading Assist',
    description: 'Autonomous Telegram bot delivering real-time trading signals and market analysis.',
    tech: ['Python', 'Telegram Bot API', 'LLM APIs'],
    status: '🟢 Live (Beta)',
    link: 'https://t.me/crypto_prime_assistant_bot',
    icon: <BarChart3 className="w-8 h-8 text-neon-purple" />,
    gradient: 'from-neon-purple/20 to-transparent',
  },
  {
    title: 'Golden Wisata',
    description: 'Production tourism platform — full frontend build deployed to production.',
    tech: ['React.js', 'Vue.js', 'Tailwind CSS'],
    status: '🟢 Live (Frontend)',
    link: 'https://golden-wisata.vercel.app',
    icon: <Globe className="w-8 h-8 text-white" />,
    gradient: 'from-white/5 to-transparent',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Judul Section */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-mono text-neon-cyan mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
          <span className="block w-16 h-0.5 bg-neon-cyan/40 mt-3" />
        </motion.h2>

        {/* Grid Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
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
              {/* Preview Area */}
              <div className={`relative h-40 bg-gradient-to-b ${project.gradient} flex items-center justify-center`}>
                {project.icon}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-neon-cyan" />
                </div>
              </div>

              {/* Konten Card */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                    {project.status}
                  </span>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Badges per project — stagger animation */}
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