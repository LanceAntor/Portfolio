import './App.css'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="portfolio-container">
      <ParticleBackground />
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <TechStack />
      </section>
    </div>
  )
}

export default App
