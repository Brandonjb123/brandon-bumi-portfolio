import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed right-0 top-0 bottom-0 w-[2px] z-50 origin-top pointer-events-none"
      style={{
        scaleY: scrollYProgress,
        background: 'linear-gradient(to bottom, #00f0ff, #b400ff)',
        opacity: scrollYProgress.get() > 0.01 ? 1 : 0,
      }}
    />
  )
}