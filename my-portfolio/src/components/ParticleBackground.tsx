import { useCallback, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const ParticleBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    }).catch(console.error)
  }, [])

  const particlesLoaded = useCallback(async () => {
    // Particles loaded successfully
  }, [])

  if (!init) {
    return null
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        pointerEvents: 'none'
      }}
      options={{
        background: {
          color: {
            value: '#0D0D0D)'
          }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: {
              enable: true,
            }
          },
          modes: {
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: ['#a5a5a5ff']
          },
          links: {
            color: '#c9c9c9ff',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              width: 1000
            },
            value: 80
          },
          opacity: {
            value: 0.9,
            animation: {
              enable: true,
              speed: 1,
              sync: false
            }
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false
            }
          }
        },
        detectRetina: true
      }}
    />
  )
}

export default ParticleBackground