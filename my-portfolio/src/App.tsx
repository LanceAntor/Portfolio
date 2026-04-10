import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import './App.css'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import Credential from './components/Credential'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import LoadingScreen from './components/LoadingScreen'

const LOADING_DURATION_MS = 5000
const ZOOM_TRANSITION_MS = 900

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDiving, setIsDiving] = useState(false)

  useEffect(() => {
    const startDiveTimer = window.setTimeout(() => {
      setIsDiving(true)
    }, LOADING_DURATION_MS)

    const endLoaderTimer = window.setTimeout(() => {
      setIsLoading(false)
    }, LOADING_DURATION_MS + ZOOM_TRANSITION_MS)

    return () => {
      window.clearTimeout(startDiveTimer)
      window.clearTimeout(endLoaderTimer)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen isDiving={isDiving} />
  }

  return (
    <motion.div
      className="portfolio-container"
      initial={{ opacity: 0, scale: 1.06 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <ParticleBackground />
      <section id="home">
        <HomePage />
      </section>
      <section id="credentials">
        <Credential />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <TechStack />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </motion.div>
  )
}

export default App
