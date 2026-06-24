import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'AI Engineering',
    hoverColor: 'hover:border-neon-cyan/60 hover:bg-neon-cyan/[0.05] hover:text-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]',
    skills: [
      'Python', 'LangChain', 'LLM APIs', 'FastAPI', 'RAG',
      'Prompt Engineering', 'Agentic AI', 'n8n', 'Vector Database',
    ],
  },
  {
    title: 'Fullstack Foundation',
    hoverColor: 'hover:border-neon-purple/60 hover:bg-neon-purple/[0.05] hover:text-neon-purple hover:shadow-[0_0_20px_rgba(180,0,255,0.3)]',
    skills: [
      'React.js', 'Vue.js', 'Node.js', 'Express.js',
      'JavaScript', 'TypeScript', 'Tailwind CSS', 'Git',
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-mono text-neon-cyan mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
          <span className="block w-16 h-0.5 bg-neon-cyan/40 mt-3" />
        </motion.h2>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: catIndex * 0.2 },
                },
              }}
            >
              <h3 className="text-lg font-semibold font-mono text-white/60 mb-4 uppercase tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className={`px-4 py-2 border border-white/10 rounded-full text-sm font-mono text-white/80 bg-white/[0.02] cursor-default
                               ${category.hoverColor} hover:scale-110 transition-all duration-300`}
                    variants={{
                      hidden: { opacity: 0, scale: 0.85 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}