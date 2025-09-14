import { useState, useEffect, useRef } from 'react'
import linkedinIcon from '../assets/linkedin_icon.png'
import githubIcon from '../assets/github_icon.png'
import facebookIcon from '../assets/facebook_icon.png'
import EmojiIcon from '../assets/emoji_icon.png'
import profileImage from '../assets/me.png'
import slide1 from '../assets/slides/slide1.jpg'
import slide4 from '../assets/slides/slide4.jpg'

const AboutMe = () => {
  const [animate, setAnimate] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const aboutRef = useRef<HTMLElement>(null);

  const slides = [profileImage,slide1, slide4];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const currentAboutRef = aboutRef.current;
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

    if (currentAboutRef) {
      observer.observe(currentAboutRef);
    }

    return () => {
      if (currentAboutRef) {
        observer.unobserve(currentAboutRef);
      }
    };
  }, []);

  // Slideshow timer
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(slideTimer);
  }, [slides.length]);

  return (
    <section className="about-section" ref={aboutRef}>
      <div className="about-container">
        {/* Left Side - Profile Photo */}
        <div className={`about-photo-section ${animate ? 'animate-about-photo' : ''}`}>
          <div className="about-profile-photo">
            <div className="slideshow-container">
              {slides.map((slide, index) => (
                <img 
                  key={index}
                  src={slide} 
                  alt={`Slide ${index + 1}`}
                  className={`slideshow-image ${index === currentSlide ? 'active' : ''}`}
                />
              ))}
              <div className="slideshow-indicators">
                {slides.map((_, index) => (
                  <span 
                    key={index}
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - About Content */}
        <div className={`about-content ${animate ? 'animate-about-content' : ''}`}>
          <h2 className={`about-title ${animate ? 'animate-about-title' : ''}`}>
            About Me <span className={`about-emoji ${animate ? 'animate-about-emoji' : ''}`}><img src={EmojiIcon} alt="Emoji" /></span>
          </h2>
          <p className={`about-description ${animate ? 'animate-about-description' : ''}`}>
            I'm a passionate developer with a strong foundation in software 
            development and web development. Experienced in implementing and 
            managing application development strategies and optimizing user 
            experiences. Continuously driven to learn and grow, I actively 
            embrace emerging technologies, modern development methodologies, 
            and best practices to refine my technical expertise.
          </p>
          
          <div className={`about-buttons ${animate ? 'animate-about-buttons' : ''}`}>
            <button className="btn-primary">View CV</button>
            <button className="btn-secondary">Contact Me</button>
          </div>

          <div className={`about-social-links ${animate ? 'animate-about-social' : ''}`}>
            <a href="https://www.linkedin.com/in/lynnon-lance-antor-045649359/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/LanceAntor" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe