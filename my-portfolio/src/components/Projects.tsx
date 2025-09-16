import { useState, useEffect, useRef } from 'react'
import githubIcon from '../assets/github_icon.png'
import shareIcon from '../assets/share.png'
import cerberunImage from '../assets/project_photos/cerberun_image.png'
import cerberunVideo from '../assets/video/cerberun_video.mp4'
import echodotsImage from '../assets/project_photos/echodots.png'
import echodotsVideo from '../assets/video/echodots_vid.mp4'
import signpopImage from '../assets/project_photos/signpop.png'
import signpopVideo from '../assets/video/signpop_video.mp4'
import kuripothubImage from '../assets/project_photos/kuripot.png'
import kuripothubVideo from '../assets/video/kuripot_video.mp4'
import dlabImage from '../assets/project_photos/dlab.png'
import dlabVideo from '../assets/video/dlab_video.mp4'
import booksmithImage from '../assets/project_photos/booksmith_pic.png'
import booksmithVideo from '../assets/video/booksmith_video.mp4'

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start with Cerberun (index 1)
  const [animate, setAnimate] = useState(false);
  const [videoStates, setVideoStates] = useState<{[key: number]: boolean}>({});
  const projectsRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<{[key: number]: HTMLVideoElement | null}>({});

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

  const handlePlayVideo = (projectIndex: number) => {
    setVideoStates(prev => ({ ...prev, [projectIndex]: true }));
    if (videoRefs.current[projectIndex]) {
      videoRefs.current[projectIndex]?.play();
    }
  };

  const handleVideoEnd = (projectIndex: number) => {
    setVideoStates(prev => ({ ...prev, [projectIndex]: false }));
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % 6);
    // Reset all video states when changing slides
    setVideoStates({});
    Object.values(videoRefs.current).forEach(videoRef => {
      if (videoRef) {
        videoRef.pause();
        videoRef.currentTime = 0;
      }
    });
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + 6) % 6);
    // Reset all video states when changing slides
    setVideoStates({});
    Object.values(videoRefs.current).forEach(videoRef => {
      if (videoRef) {
        videoRef.pause();
        videoRef.currentTime = 0;
      }
    });
  };

  const getSlideClass = (index: number) => {
    const totalSlides = 6;
    
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
                {!videoStates[0] ? (
                  <div className="video-preview">
                    <img src={echodotsImage} alt="Ecodots" className="project-image-full" />
                    <div className="play-button-overlay" onClick={() => handlePlayVideo(0)}>
                      <div className="play-button">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <video 
                    ref={(el) => { videoRefs.current[0] = el; }}
                    src={echodotsVideo}
                    className="project-video-full"
                    controls
                    onEnded={() => handleVideoEnd(0)}
                    autoPlay
                  />
                )}
              </div>
              <div className="project-info">
                <h3 className="project-name">EchoDots</h3>
                <p className="project-description">
                  Echo Dots is a morse code game where players decode signals, race against time, and sharpen their skills. Featuring dynamic difficulty and multiple game modes, it’s built for both casual learners and competitive codebreakers.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Typescript</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">Tailwind</span>
                </div>
                <div className="project-buttons">
                   <div className="github-icon">
                    <a href="https://github.com/LanceAntor/EchoDots.git" target="_blank" rel="noopener noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>
                  
                  <button
                    className="btn-code"
                    onClick={() => window.open('https://echodots.vercel.app/', '_blank')}
                  >
                    Try It
                    <img src={shareIcon} alt="Share" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={`project-slide ${getSlideClass(1)}`}>
            <div className="project-content">
              <div className="project-image">
                {!videoStates[1] ? (
                  <div className="video-preview">
                    <img src={cerberunImage} alt="Cerberun Game" className="project-image-full" />
                    <div className="play-button-overlay" onClick={() => handlePlayVideo(1)}>
                      <div className="play-button">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <video 
                    ref={(el) => { videoRefs.current[1] = el; }}
                    src={cerberunVideo}
                    className="project-video-full"
                    controls
                    onEnded={() => handleVideoEnd(1)}
                    autoPlay
                  />
                )}
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
                    <a href="https://github.com/LanceAntor/Cerberun.git" target="_blank" rel="noopener noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>
                  <button
                    className="btn-code"
                    onClick={() => window.open('https://cerberun25.vercel.app/', '_blank')}
                  >
                    Try It
                    <img src={shareIcon} alt="Share" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={`project-slide ${getSlideClass(2)}`}>
            <div className="project-content">
              <div className="project-image">
                {!videoStates[2] ? (
                  <div className="video-preview">
                    <img src={signpopImage} alt="SignPop" className="project-image-full" />
                    <div className="play-button-overlay" onClick={() => handlePlayVideo(2)}>
                      <div className="play-button">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <video 
                    ref={(el) => { videoRefs.current[2] = el; }}
                    src={signpopVideo}
                    className="project-video-full"
                    controls
                    onEnded={() => handleVideoEnd(2)}
                    autoPlay
                  />
                )}
              </div>
              <div className="project-info">
                <h3 className="project-name">SignPop</h3>
                <p className="project-description">
                 SignPop is an engaging and interactive learning app designed to help users master the American Sign Language (ASL) alphabet. Whether you're a beginner or looking to reinforce your skills, this app offers a fun and educational experience through step-by-step tutorials, visual demonstrations, and an exciting game mode to test your knowledge.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Flask</span>
                  <span className="tech-tag">Artificial Intelligence</span>
                </div>
                <div className="project-buttons">
                   <div className="github-icon">
                    <a href="https://github.com/LanceAntor/SignPop.git" target="_blank" rel="noopener noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`project-slide ${getSlideClass(3)}`}>
            <div className="project-content">
              <div className="project-image mobile-app-video">
                {!videoStates[3] ? (
                  <div className="video-preview mobile-video-preview">
                    <img src={kuripothubImage} alt="Kuripot Hub" className="project-image-full" />
                    <div className="play-button-overlay" onClick={() => handlePlayVideo(3)}>
                      <div className="play-button">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mobile-video-container">
                    <video 
                      ref={(el) => { videoRefs.current[3] = el; }}
                      src={kuripothubVideo}
                      className="project-video-mobile"
                      controls
                      onEnded={() => handleVideoEnd(3)}
                      autoPlay
                    />
                  </div>
                )}
              </div>
              <div className="project-info">
                <h3 className="project-name">KuripotHub</h3>
                <p className="project-description">
                  KuripotHub is a comprehensive personal finance management app designed to help users track their weekly expenses, manage budgets, and develop healthy spending habits. Whether you're looking to control your daily spending or build long-term financial discipline, this app offers an intuitive and feature-rich experience with real-time budget tracking, customizable preferences, and detailed expense analytics.                </p>
                <div className="project-tech">
                  <span className="tech-tag">Android</span>
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">Firebase</span>
                  <span className="tech-tag">XML</span>
                </div>
                <div className="project-buttons">
                   <div className="github-icon">
                    <a href="https://github.com/LanceAntor/KuripotHub.git" target="_blank" rel="noopener noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>
                  
                <button
                    className="btn-code"
                    onClick={() => {
                      // Create a download link for the APK file
                      const link = document.createElement('a');
                      link.href = '/assets/KuripotHub.apk'; // Path to APK in public folder
                      link.download = 'KuripotHub.apk'; // Force download with filename
                      link.target = '_blank';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    Download APK
                    <img src={shareIcon} alt="Download" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 5 Template */}
          <div className={`project-slide ${getSlideClass(4)}`}>
            <div className="project-content">
              <div className="project-image">
                {!videoStates[4] ? (
                  <div className="video-preview">
                    <img src={dlabImage} alt="DLab" className="project-image-full" />
                    <div className="play-button-overlay" onClick={() => handlePlayVideo(4)}>
                      <div className="play-button">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <video 
                    ref={(el) => { videoRefs.current[4] = el; }}
                    src={dlabVideo}
                    className="project-video-full"
                    controls
                    onEnded={() => handleVideoEnd(4)}
                    autoPlay
                  />
                )}
              </div>
              <div className="project-info">
                <h3 className="project-name">Dlab</h3>
                <p className="project-description">
                  DLab is a comprehensive full-stack application demonstrating modern web development techniques with React frontend and Node.js backend. This project showcases advanced development patterns, API integration, and real-time data processing in a educational context.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Typescript</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express.js</span>
                  <span className="tech-tag">React</span>
                </div>
                <div className="project-buttons">
                   <div className="github-icon">
                    <a href="https://github.com/LanceAntor/DLab.git" target="_blank" rel="noopener noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 6 Template */}
          <div className={`project-slide ${getSlideClass(5)}`}>
            <div className="project-content">
              <div className="project-image">
                {!videoStates[5] ? (
                  <div className="video-preview">
                    <img src={booksmithImage} alt="BookSmith" className="project-image-full" />
                    <div className="play-button-overlay" onClick={() => handlePlayVideo(5)}>
                      <div className="play-button">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <video 
                    ref={(el) => { videoRefs.current[5] = el; }}
                    src={booksmithVideo}
                    className="project-video-full"
                    controls
                    onEnded={() => handleVideoEnd(5)}
                    autoPlay
                  />
                )}
              </div>
              <div className="project-info">
                <h3 className="project-name">BookSmith</h3>
                <p className="project-description">
                  BookSmith is a comprehensive platform that brings book enthusiasts together, offering an extensive library of books, review functionalities, and personalized recommendations. The platform is designed to cater to a wide audience with diverse reading preferences, ensuring an intuitive and seamless user experience.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Django</span>
                  <span className="tech-tag">SQL-lite</span>
                  <span className="tech-tag">Jquery</span>
                </div>
                <div className="project-buttons">
                   <div className="github-icon">
                    <a href="https://github.com/ParantarUrielAlexis/Booksmith.git" target="_blank" rel="noopener noreferrer">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>
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