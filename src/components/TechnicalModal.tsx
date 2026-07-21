import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface TechnicalModalProps {
  isOpen: boolean
  onClose: () => void
  data: {
    title: string
    architecture: string[]
    techStack: string[]
    decisions: string[]
    challenges: string[]
    deployment: string
    roadmap: string[]
  }
}

export default function TechnicalModal({ isOpen, onClose, data }: TechnicalModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-black border border-white/20 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6 md:p-8"
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold font-mono text-neon-cyan">{data.title} — Technical Overview</h2>
              <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6 text-sm">
              <Section title="Architecture">
                <ul className="space-y-1">
                  {data.architecture.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Tech Stack">
                <div className="flex flex-wrap gap-2">
                  {data.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-mono rounded-full border border-white/10 text-white/60">{tech}</span>
                  ))}
                </div>
              </Section>

              <Section title="Engineering Decisions">
                <ul className="space-y-1">
                  {data.decisions.map((d) => (
                    <li key={d} className="text-white/70">• {d}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Challenges">
                <ul className="space-y-1">
                  {data.challenges.map((c) => (
                    <li key={c} className="text-white/70">• {c}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Deployment">
                <p className="text-white/70">{data.deployment}</p>
              </Section>

              <Section title="Roadmap">
                <ul className="space-y-1">
                  {data.roadmap.map((r) => (
                    <li key={r} className="text-white/70">• {r}</li>
                  ))}
                </ul>
              </Section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      {children}
    </div>
  )
}