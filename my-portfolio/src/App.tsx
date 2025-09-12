import { useState, useEffect } from 'react'
import './App.css'
import homeIcon from './assets/home_icon.png'
import aboutIcon from './assets/aboutme_icon.png'
import skillIcon from './assets/skill_icon.png'
import projectIcon from './assets/project_icon.png'
import contactIcon from './assets/contact_icon.png'
import linkedinIcon from './assets/linkedin_icon.png'
import githubIcon from './assets/github_icon.png'
import facebookIcon from './assets/facebook_icon.png'
import profilePhoto from './assets/me.png'
import gameboyIcon from './assets/gameboy_icon.png'
import EmojiIcon from './assets/emoji_icon.png'

function App() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const roles = ['Developer', 'AI Enthusiast', 'Coder', 'Problem Solver'];
    
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        setTypingSpeed(75);
      } else {
        setCurrentText(prev => currentRole.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex(prev => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <div className="portfolio-container">
      {/* Navigation Header */}
      <nav className="navigation">
        <div className="nav-icon">
          <img src={homeIcon} alt="Home" />
        </div>
        <div className="nav-icon">
          <img src={aboutIcon} alt="About" />
        </div>
        <div className="nav-icon">
          <img src={skillIcon} alt="Skills" />
        </div>
        <div className="nav-icon">
          <img src={projectIcon} alt="Projects" />
        </div>
        <div className="nav-icon">
          <img src={contactIcon} alt="Contact" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Left Section - Text Content */}
        <div className="text-section">
          <div className="gameboy-icon">
            <img src={gameboyIcon} alt="Gameboy" />
          </div>
          <h1 className="name-title">Lynnon Lance Antor</h1>
          <h2 className="role-title">
            I'm <span className="typing-text">{currentText}</span>
            <span className="cursor">|</span>
          </h2>
          
          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>

        {/* Right Section - Profile Photo */}
        <div className="photo-section">
          <div className="profile-photo">
            <img src={profilePhoto} alt="Lynnon Lance Antor" />
          </div>
        </div>
      </main>

      {/* About Me Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Left Side - Profile Photo */}
          <div className="about-photo-section">
            <div className="about-profile-photo">
              <img src={profilePhoto} alt="Lynnon Lance Antor" />
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className="about-content">
            <h2 className="about-title">
              About Me <span className="about-emoji"><img src={EmojiIcon} alt="Emoji" /></span>
            </h2>
            <p className="about-description">
              I'm a passionate developer with a strong foundation in software 
              development and web development. Experienced in implementing and 
              managing application development strategies and optimizing user 
              experiences. Continuously driven to learn and grow, I actively 
              embrace emerging technologies, modern development methodologies, 
              and best practices to refine my technical expertise.
            </p>
            
            <div className="about-buttons">
              <button className="btn-primary">View CV</button>
              <button className="btn-secondary">Contact Me</button>
            </div>

            <div className="about-social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
