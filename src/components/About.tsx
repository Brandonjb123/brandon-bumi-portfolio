import { motion } from 'framer-motion'

const paragraphs = [
  `2 years into freelance frontend development — React, Vue, Node.js, the MERN stack — before I made the call to go all-in on AI Engineering.`,
  `Built a handful of production sites along the way, including Golden Wisata (tourism) and Rich Farm (investment platform), through Upwork and Rubyxoft.`,
  `These days I'm deep in Python, LangChain, and LLM APIs, building autonomous AI agents. Bhumi AI Agent is the project I'm most proud of so far — a multi-model AI assistant, live and actually working, not just a notebook demo.`,
  `Still early in this AI chapter, but the fullstack background turned out to be a real advantage — most of what makes an agent useful isn't the model, it's everything you build around it.`,
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Judul Section */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-mono text-neon-cyan mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Journey
          <span className="block w-16 h-0.5 bg-neon-cyan/40 mt-3" />
        </motion.h2>

        {/* Paragraf narasi dengan animasi stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              className="text-white/80 text-base md:text-lg leading-relaxed mb-6"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: 'easeOut' },
                },
              }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}