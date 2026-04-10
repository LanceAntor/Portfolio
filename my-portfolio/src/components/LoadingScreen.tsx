import { motion } from 'motion/react'

type LoadingScreenProps = {
  isDiving: boolean
}

const LoadingScreen = ({ isDiving }: LoadingScreenProps) => {
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