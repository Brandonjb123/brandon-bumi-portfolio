import { motion } from 'framer-motion'

// SVG fallback icons (tanpa lucide-react)
const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const contacts = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/brandonjovan/',
    icon: <LinkedInIcon />,
    color: 'hover:text-neon-cyan hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]',
  },
  {
    label: 'Email',
    href: 'brandonbumi06@gmail.com',
    icon: <MailIcon />,
    color: 'hover:text-neon-purple hover:drop-shadow-[0_0_12px_rgba(180,0,255,0.6)]',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Brandonjb123',
    icon: <GithubIcon />,
    color: 'hover:text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-mono text-neon-cyan mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
          <span className="block w-16 h-0.5 bg-neon-cyan/40 mt-3 mx-auto" />
        </motion.h2>

        <motion.div
          className="flex justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {contacts.map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 border border-white/10 rounded-full text-white/70 transition-all duration-300 ${contact.color}`}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
              }}
              whileHover={{ scale: 1.15, borderColor: 'rgba(0, 240, 255, 0.4)' }}
              aria-label={contact.label}
            >
              {contact.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}