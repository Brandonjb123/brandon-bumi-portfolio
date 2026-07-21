import { motion } from 'framer-motion'

interface ArchitectureFlowProps {
  nodes: string[]
}

export default function ArchitectureFlow({ nodes }: ArchitectureFlowProps) {
  return (
    <div className="w-full overflow-x-auto pb-4 -mx-2 px-2">
      <div className="flex flex-row items-center justify-start md:justify-center gap-4 md:gap-5 min-w-max md:min-w-0">
        {nodes.map((node, i) => (
          <div key={`${node}-${i}`} className="flex items-center gap-4 md:gap-5 last:pr-4 first:pl-4 md:px-0">
            <motion.div
              className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-center font-mono text-white/80 min-w-[90px] shrink-0"
              whileHover={{ scale: 1.05, borderColor: 'rgba(0,240,255,0.5)', boxShadow: '0 0 15px rgba(0,240,255,0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xs md:text-sm font-semibold">{node}</span>
            </motion.div>
            {i < nodes.length - 1 && (
              <div className="flex items-center justify-center shrink-0 text-neon-cyan/60">
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </motion.svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}