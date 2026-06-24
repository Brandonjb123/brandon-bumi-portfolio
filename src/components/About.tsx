import { motion } from 'framer-motion'

const paragraphs = [
  `Currently building things that actually work in production — not just demos.`,
  `Started in web engineering — React, Vue, Node.js, the MERN stack — delivering production platforms for real clients through Upwork and Rubyxoft. Golden Wisata and Rich Farm weren't side projects. They were client work, shipped and live.`,
  `Made the deliberate call to go deep into AI Engineering. These days I architect autonomous agents, integrate LLM APIs, and build systems that reason and act — not just respond. Bhumi AI Agent is the clearest proof of that: multi-model, production-deployed, actually useful.`,
  `The fullstack background isn't a footnote. It's what separates the AI work I do from someone who only knows how to call an API. I understand the full system — from model to interface.`,
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