import { useCallback } from 'react'
import ParticlesComponent from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'

const Particles = ParticlesComponent as any

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: false,
        background: { color: 'transparent' },
        fpsLimit: 60,
        particles: {
          number: { value: 120, density: { enable: true } },
          color: { value: ['#00f0ff', '#b400ff'] },
          shape: { type: 'circle' },
          opacity: { value: 0.4, random: true },
          size: { value: 2.5, random: true },
          links: {
            enable: true,
            distance: 130,
            color: '#00f0ff',
            opacity: 0.25,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.9,
            direction: 'none',
            random: true,
            straight: false,
            outModes: 'bounce',
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}