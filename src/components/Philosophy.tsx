import { motion } from 'framer-motion'

const principles = [
  {
    title: 'Production First',
    icon: '🚀',
    description:
      'Code that never reaches production is just theory. I build systems that run 24/7 and serve real users — not just notebooks.',
  },
  {
    title: 'Systems Thinking',
    icon: '🧠',
    description:
      'AI doesn’t work in isolation. I design end-to-end architectures: model, APIs, data pipelines, monitoring, and user interface.',
  },
  {
    title: 'Automation Mindset',
    icon: '⚙️',
    description:
      'Repetitive work is a bug. I automate everything from deployment pipelines to business workflows so humans can focus on decisions.',
  },
  {
    title: 'Solve Real Problems',
    icon: '🎯',
    description:
      'Every AI agent I build starts with a concrete problem. If it doesn’t solve something measurable, it doesn’t get built.',
  },
  {
    title: 'Fullstack Advantage',
    icon: '🔗',
    description:
      'Understanding the full stack — from database schema to model inference — produces better architecture decisions and faster iteration.',
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-mono text-neon-cyan mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Engineering Philosophy
          <span className="block w-16 h-0.5 bg-neon-cyan/40 mt-3" />
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {principles.map((p) => (
            <motion.div
              key={p.title}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(0,240,255,0.2)' }}
              className="p-6 border border-white/10 rounded-xl bg-white/[0.02] hover:border-neon-cyan/30 transition-all duration-300"
            >
              <div className="text-2xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-semibold font-mono text-white mb-2">{p.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}