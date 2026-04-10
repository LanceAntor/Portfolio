import { useCallback, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import particlesConfig from '../particles.json'

type LoadingScreenProps = {
  isDiving: boolean
}

const LoadingScreen = ({ isDiving }: LoadingScreenProps) => {
  const [isParticlesReady, setIsParticlesReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    })
      .then(() => setIsParticlesReady(true))
      .catch(console.error)
  }, [])

  const particlesLoaded = useCallback(async () => {
    // Loader particles initialized.
  }, [])

  return (
    <motion.div
      className="loading-screen"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      initial={{ opacity: 1, scale: 1 }}
      animate={
        isDiving
          ? { opacity: 0, scale: 3.4, filter: 'blur(6px)' }
          : { opacity: 1, scale: 1, filter: 'blur(0px)' }
      }
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {isParticlesReady && (
        <Particles
          id="loading-particles"
          className="loading-particles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: false
            },
            fpsLimit: 120,
            background: {
              color: {
                value: '#0D0D0D'
              }
            },
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
                  enable: particlesConfig.interactivity.events.resize
                }
              }
            },
            particles: {
              number: {
                value: particlesConfig.particles.number.value,
                density: {
                  enable: particlesConfig.particles.number.density.enable,
                  width: 1000
                }
              },
              color: {
                value: particlesConfig.particles.color.value
              },
              links: {
                color: particlesConfig.particles.line_linked.color,
                distance: particlesConfig.particles.line_linked.distance,
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
      )}

      <motion.h1
        className="loading-brand"
        animate={
          isDiving
            ? { scale: 0.92, y: 30, opacity: 0.2 }
            : { scale: 1, y: 0, opacity: 1 }
        }
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="loading-brand-outline">LanXe</span>
        <span className="loading-brand-fill">LanXe</span>
      </motion.h1>
    </motion.div>
  )
}

export default LoadingScreen