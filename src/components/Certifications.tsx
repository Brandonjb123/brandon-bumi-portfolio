import { motion } from 'framer-motion'
import Badge from './Badge'

const certifications = [
  {
    title: 'The AI Engineer Course 2026: Complete AI Engineer Bootcamp',
    org: '365 Careers (Udemy)',
    year: '2026',
    skills: 'Python • NLP • LLMs • Transformers • LangChain • Hugging Face • Vector Databases',
    featured: true,
    credentialUrl: 'https://www.udemy.com/certificate/placeholder', // Ganti dengan URL asli nanti
  },
  {
    title: 'Python 3 Course',
    org: 'Codecademy',
    year: '2026',
  },
  {
    title: 'Front-End Engineer Career Path',
    org: 'Codecademy',
    year: '2022',
  },
  {
    title: 'Learn React Course',
    org: 'Codecademy',
    year: '2022',
  },
  {
    title: 'Fullstack JavaScript Developer',
    org: 'Mediocademy',
    year: '2020',
  },
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
              className={`p-4 border rounded-lg flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-white/[0.01] transition-all duration-300
                ${cert.featured
                  ? 'border-neon-cyan/30 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                  : 'border-white/10 hover:border-neon-cyan/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]'
                }`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-white font-medium text-sm md:text-base">
                    {cert.title}
                  </h3>
                  {cert.featured && (
                    <Badge label="Featured" color="green" />
                  )}
                </div>
                <p className="text-white/50 text-xs font-mono">{cert.org}</p>
                {cert.skills && (
                  <p className="text-white/40 text-xs mt-1 leading-relaxed">{cert.skills}</p>
                )}
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-neon-purple font-mono text-xs sm:text-sm whitespace-nowrap">{cert.year}</span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs font-mono rounded border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all duration-300 whitespace-nowrap"
                  >
                    View Credential
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}