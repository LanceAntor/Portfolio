import { useState, useEffect, useRef } from 'react'

const Footer = () => {
  const [animate, setAnimate] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const currentFooterRef = footerRef.current;
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
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (currentFooterRef) {
      observer.observe(currentFooterRef);
    }

    return () => {
      if (currentFooterRef) {
        observer.unobserve(currentFooterRef);
      }
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" ref={footerRef}>
      <div className="footer-container">
        <div className={`footer-content ${animate ? 'animate-footer-content' : ''}`}>
          
          {/* Main footer content */}
          <div className={`footer-main ${animate ? 'animate-footer-main' : ''}`}>
            {/* Copyright */}
            <div className={`footer-copyright ${animate ? 'animate-footer-copyright' : ''}`}>
              <div className="copyright-line">
                © {currentYear} Lance Antor. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer