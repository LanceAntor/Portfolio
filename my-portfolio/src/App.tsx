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
  const [currentSlide, setCurrentSlide] = useState(1); // Start with Cerberun (index 1)

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

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + 4) % 4);
  };

  const getSlideClass = (index: number) => {
    const totalSlides = 4;
    
    if (index === currentSlide) return 'active';
    
    // Handle looping for prev/next
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentSlide + 1) % totalSlides;
    
    if (index === prevIndex) return 'prev';
    if (index === nextIndex) return 'next';
    
    return 'hidden';
  };

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

      {/* Projects Section */}
      <section className="projects-section">
        <div className="projects-container">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">
            Check out my code, play with the demos, and see what I've been working on!
          </p>
          
          <div className="projects-gallery">
            {/* Left Arrow Button */}
            <button className="nav-arrow nav-arrow-left" onClick={prevSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>

            {/* Right Arrow Button */}
            <button className="nav-arrow nav-arrow-right" onClick={nextSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>

            <div className={`project-slide ${getSlideClass(0)}`}>
              <div className="project-content">
                <div className="project-image">
                  <div className="project-placeholder">Project 1 Image</div>
                </div>
                <div className="project-info">
                  <h3 className="project-name">Project One</h3>
                  <p className="project-description">
                    Description for project one will go here. This is a sample project description.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">CSS</span>
                  </div>
                  <div className="project-buttons">
                    <button className="btn-demo">Demo 🔗</button>
                    <button className="btn-code">Try It</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`project-slide ${getSlideClass(1)}`}>
              <div className="project-content">
                <div className="project-image">
                  <div className="project-placeholder">Cerberun Game</div>
                </div>
                <div className="project-info">
                  <h3 className="project-name">Cerberun</h3>
                  <p className="project-description">
                    Cerberun is a fast-paced action platformer where players dodge enemies, collect power-ups, and climb the global leaderboard. Designed for both casual and competitive gamers, Cerberun features dynamic difficulty, unique stages, and real-time online scoring powered by Firebase.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">Vanilla Js</span>
                    <span className="tech-tag">Javascript</span>
                    <span className="tech-tag">CSS</span>
                    <span className="tech-tag">Firebase</span>
                  </div>
                  <div className="project-buttons">
                    <div className="github-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <button className="btn-demo">Demo 🔗</button>
                    <button className="btn-code">Try It</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`project-slide ${getSlideClass(2)}`}>
              <div className="project-content">
                <div className="project-image">
                  <div className="project-placeholder">Project 3 Image</div>
                </div>
                <div className="project-info">
                  <h3 className="project-name">Project Three</h3>
                  <p className="project-description">
                    Description for project three will go here. This is another sample project.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">Vue</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Node.js</span>
                  </div>
                  <div className="project-buttons">
                    <button className="btn-demo">Demo 🔗</button>
                    <button className="btn-code">Try It</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`project-slide ${getSlideClass(3)}`}>
              <div className="project-content">
                <div className="project-image">
                  <div className="project-placeholder">Project 4 Image</div>
                </div>
                <div className="project-info">
                  <h3 className="project-name">Project Four</h3>
                  <p className="project-description">
                    Description for project four will go here. This is yet another sample project.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Django</span>
                    <span className="tech-tag">PostgreSQL</span>
                  </div>
                  <div className="project-buttons">
                    <button className="btn-demo">Demo 🔗</button>
                    <button className="btn-code">Try It</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="tech-stack-container">
          <h2 className="tech-stack-title">Tech Stack</h2>
          <p className="tech-stack-subtitle">
            The tools and technologies I use most often.
          </p>
          
          <div className="tech-grid">
            <div className="tech-item">
              <div className="tech-icon html5">
                <span className="tech-name">HTML5</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon css3">
                <span className="tech-name">CSS3</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon javascript">
                <span className="tech-name">JavaScript</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon typescript">
                <span className="tech-name">TypeScript</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon react">
                <span className="tech-name">React.js</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon nextjs">
                <span className="tech-name">Next.js</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon tailwind">
                <span className="tech-name">TailwindCSS</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon nodejs">
                <span className="tech-name">Node.js</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon express">
                <span className="tech-name">Express.js</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon nestjs">
                <span className="tech-name">Nest.js</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon php">
                <span className="tech-name">PHP</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon java">
                <span className="tech-name">Java</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon python">
                <span className="tech-name">Python</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon cpp">
                <span className="tech-name">C++</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon c">
                <span className="tech-name">C</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon ruby">
                <span className="tech-name">Ruby</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon mongodb">
                <span className="tech-name">MongoDB</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon postgresql">
                <span className="tech-name">PostgreSQL</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon mysql">
                <span className="tech-name">MySQL</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon git">
                <span className="tech-name">Git</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon github">
                <span className="tech-name">GitHub</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon docker">
                <span className="tech-name">Docker</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon django">
                <span className="tech-name">Django</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon postman">
                <span className="tech-name">Postman</span>
              </div>
            </div>
            
            <div className="tech-item">
              <div className="tech-icon insomnia">
                <span className="tech-name">Insomnia</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
