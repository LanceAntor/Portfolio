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
      <HomePage />
      <AboutMe />
      <Projects />
      <TechStack />
    </div>
  )
}

export default App
