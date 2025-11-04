import { useCallback, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import particlesConfig from '../particles.json'

const ParticleBackground = () => {
  const [init, setInit] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if user is on mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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

  // Dynamic particle configuration based on device type
  const getParticleCount = () => {
    return isMobile ? 15 : particlesConfig.particles.number.value // 15 for mobile, 40 for desktop
  }

  const getInteractionDistance = () => {
    return isMobile ? 100 : 150 // Shorter interaction distance on mobile
  }

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
            value: '#0D0D0D'
          }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: particlesConfig.interactivity.events.onclick.enable,
              mode: particlesConfig.interactivity.events.onclick.mode
            },
            onHover: {
              enable: particlesConfig.interactivity.events.onhover.enable,
              mode: particlesConfig.interactivity.events.onhover.mode
            },
            resize: {
              enable: particlesConfig.interactivity.events.resize,
            }
          },
          modes: {
            push: {
              quantity: particlesConfig.interactivity.modes.push.particles_nb
            },
            repulse: {
              distance: isMobile ? 100 : particlesConfig.interactivity.modes.repulse.distance
            }
          }
        },
        particles: {
          color: {
            value: particlesConfig.particles.color.value
          },
          links: {
            color: particlesConfig.particles.line_linked.color,
            distance: getInteractionDistance(),
            enable: particlesConfig.particles.line_linked.enable,
            opacity: particlesConfig.particles.line_linked.opacity,
            width: particlesConfig.particles.line_linked.width
          },
          move: {
            direction: particlesConfig.particles.move.direction as 'none',
            enable: particlesConfig.particles.move.enable,
            outModes: {
              default: particlesConfig.particles.move.out_mode as 'bounce'
            },
            random: particlesConfig.particles.move.random,
            speed: particlesConfig.particles.move.speed,
            straight: particlesConfig.particles.move.straight
          },
          number: {
            density: {
              enable: particlesConfig.particles.number.density.enable,
              width: 1000
            },
            value: getParticleCount()
          },
          opacity: {
            value: particlesConfig.particles.opacity.value,
            animation: {
              enable: particlesConfig.particles.opacity.anim.enable,
              speed: particlesConfig.particles.opacity.anim.speed,
              sync: particlesConfig.particles.opacity.anim.sync
            }
          },
          shape: {
            type: particlesConfig.particles.shape.type as 'circle'
          },
          size: {
            value: particlesConfig.particles.size.value,
            animation: {
              enable: particlesConfig.particles.size.anim.enable,
              speed: particlesConfig.particles.size.anim.speed,
              sync: particlesConfig.particles.size.anim.sync
            }
          }
        },
        detectRetina: particlesConfig.retina_detect
      }}
    />
  )
}

export default ParticleBackground