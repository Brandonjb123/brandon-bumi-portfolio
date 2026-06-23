import { motion } from 'framer-motion'

const certifications = [
  { title: 'Python 3 Course', org: 'Codecademy', year: '2026' },
  { title: 'Front-End Engineer Career Path', org: 'Codecademy', year: '2022' },
  { title: 'Learn React Course', org: 'Codecademy', year: '2022' },
  { title: 'Fullstack JavaScript Developer', org: 'Mediocademy', year: '2020' },
]

export default function Certifications() {
  return (
    <section id="certs" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-mono text-neon-cyan mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Certifications
          <span className="block w-16 h-0.5 bg-neon-cyan/40 mt-3" />
        </motion.h2>

        <motion.div
          className="grid gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              className="p-4 border border-white/10 rounded-lg flex justify-between items-center bg-white/[0.01]
                         hover:border-neon-cyan/40 hover:bg-neon-cyan/[0.03] hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
            >
              <div>
                <h3 className="text-white font-medium">{cert.title}</h3>
                <p className="text-white/50 text-sm font-mono">{cert.org}</p>
              </div>
              <span className="text-neon-purple font-mono text-sm">{cert.year}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}