import { useEffect, useState } from 'react'
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

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDiving, setIsDiving] = useState(false)

  useEffect(() => {
    const startDiveTimer = window.setTimeout(() => {
      setIsDiving(true)
    }, 2200)

    const endLoaderTimer = window.setTimeout(() => {
      setIsLoading(false)
    }, 3050)

    return () => {
      window.clearTimeout(startDiveTimer)
      window.clearTimeout(endLoaderTimer)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen isDiving={isDiving} />
  }

  return (
    <div className="portfolio-container">
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
    </div>
  )
}

export default App
