import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { target: 2, suffix: '+', label: 'Years of Engineering Experience' },
  { target: 5, suffix: '', label: 'Projects Live in Production' },
  { target: 3, suffix: '', label: 'AI Agents Deployed' },
  { target: 15, suffix: '+', label: 'Technologies Mastered' },
]

function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number
  suffix: string
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!isVisible) {
      setCount(0)
      return
    }

    const duration = 1500 // ms
    const stepTime = 30
    const steps = duration / stepTime
    const increment = target / steps
    let current = 0

    intervalRef.current = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        if (intervalRef.current) clearInterval(intervalRef.current)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isVisible, target])

  return (
    <span className="font-mono text-neon-cyan">
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" className="py-16 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="text-4xl md:text-5xl font-bold font-mono text-neon-cyan mb-2">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>
              <div className="text-sm md:text-base text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}