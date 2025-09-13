import { useState, useEffect, useRef } from 'react'
import githubIcon from '../assets/github_icon.png'
import shareIcon from '../assets/share.png'

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start with Cerberun (index 1)
  const [animate, setAnimate] = useState(false);
  const projectsRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const currentProjectsRef = projectsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (currentProjectsRef) {
      observer.observe(currentProjectsRef);
    }

    return () => {
      if (currentProjectsRef) {
        observer.unobserve(currentProjectsRef);
      }
    };
  }, []);

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
    <section className="projects-section" ref={projectsRef}>
      <div className="projects-container">
        <h2 className={`projects-title ${animate ? 'animate-projects-title' : ''}`}>Projects</h2>
        <p className={`projects-subtitle ${animate ? 'animate-projects-subtitle' : ''}`}>
          Check out my code, play with the demos, and see what I've been working on!
        </p>
        
        <div className={`projects-gallery ${animate ? 'animate-projects-gallery' : ''}`}>
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
                   <div className="github-icon">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>
                   <button className="btn-demo">Demo
                    <img src={shareIcon} alt="Share" />
                  </button>
                  <button className="btn-code">Try It
                    <img src={shareIcon} alt="Share" />
                  </button>
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
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>
                   <button className="btn-demo">Demo
                    <img src={shareIcon} alt="Share" />
                  </button>
                  <button className="btn-code">Try It
                    <img src={shareIcon} alt="Share" />
                  </button>
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
                   <div className="github-icon">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>
                   <button className="btn-demo">Demo
                    <img src={shareIcon} alt="Share" />
                  </button>
                  <button className="btn-code">Try It
                     <img src={shareIcon} alt="Share" />
                  </button>
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
                   <div className="github-icon">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>
                  <button className="btn-demo">Demo
                    <img src={shareIcon} alt="Share" />
                  </button>
                  <button className="btn-code">Try It
                     <img src={shareIcon} alt="Share" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects