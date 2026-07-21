import { motion } from 'framer-motion'

const paragraphs = [
  `Currently building production AI systems that actually work — autonomous agents, LLM applications, and automation workflows.`,
  `Started in web engineering with React, Vue, Node.js, and the MERN stack, delivering client production platforms. That fullstack foundation now gives me a deep understanding of the entire system — from database to model inference.`,
  `The transition into AI Engineering was deliberate. I architect agents, integrate LLM APIs, and build systems that reason and act. Bhumi AI Agent is the clearest proof: multi-model, production-deployed, actually useful.`,
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-mono text-neon-cyan mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Engineering Journey
          <span className="block w-16 h-0.5 bg-neon-cyan/40 mt-3" />
        </motion.h2>

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
              className={`leading-relaxed mb-6 ${
                i === 0
                  ? 'text-lg md:text-xl text-neon-cyan font-medium'
                  : 'text-white/80 text-base md:text-lg'
              }`}
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