import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Rubyxoft',
    period: 'Jan 2024 – Sep 2024',
    location: 'Hybrid, Jakarta',
    description:
      'Developed production web platforms including Golden Wisata (tourism) and Rich Farm (investment platform) using React & Vue.',
  },
  {
    title: 'Freelance AI Engineer & Frontend Developer',
    company: 'Upwork',
    period: 'Oct 2024 – Present',
    location: 'Remote',
    description:
      'Building AI agents, chatbots, and fullstack web applications for international clients using Python, LangChain, and React.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Judul Section */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-mono text-neon-cyan mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
          <span className="block w-16 h-0.5 bg-neon-cyan/40 mt-3" />
        </motion.h2>

        {/* Timeline */}
        <motion.div
          className="relative pl-8 border-l-2 border-neon-cyan/30 space-y-10"
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
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative"
              variants={{
                hidden: { opacity: 0, x: -30, scale: 0.97 },
                visible: {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: 'easeOut' },
                },
              }}
            >
              {/* Bulatan neon di garis */}
              <div className="absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.6)]" />

              {/* Tahun (mono, purple) */}
              <span className="text-xs font-mono text-neon-purple tracking-wide">
                {exp.period}
              </span>

              {/* Judul + perusahaan */}
              <h3 className="text-lg font-semibold text-white mt-1">
                {exp.title} —{' '}
                <span className="text-neon-cyan">{exp.company}</span>
              </h3>

              {/* Lokasi */}
              <p className="text-sm text-white/50 mb-2">{exp.location}</p>

              {/* Deskripsi */}
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}