import { motion } from 'framer-motion'

interface ArchitectureFlowProps {
  nodes: string[]
}

export default function ArchitectureFlow({ nodes }: ArchitectureFlowProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 py-4">
      {nodes.map((node, i) => (
        <div key={node} className="flex items-center w-full md:w-auto">
          <motion.div
            className="px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-center text-sm font-mono text-white/80 min-w-[120px]"
            whileHover={{ scale: 1.05, borderColor: 'rgba(0,240,255,0.5)', boxShadow: '0 0 15px rgba(0,240,255,0.2)' }}
            transition={{ duration: 0.3 }}
          >
            {node}
          </motion.div>
          {i < nodes.length - 1 && (
            <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-auto text-neon-cyan/60">
              <motion.span
                className="text-lg md:text-2xl"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}