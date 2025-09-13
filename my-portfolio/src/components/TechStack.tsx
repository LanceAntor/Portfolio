// React Icons for Tech Stack
import { useState, useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaPython, FaJava, FaGithub, FaPhp, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiTailwindcss, SiCplusplus, SiC, SiTypescript, SiMysql, SiGit, SiPostman} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const techs = [
  { name: "HTML5", icon: <FaHtml5 style={{ color: '#E34F26' }} /> },
  { name: "CSS3", icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
  { name: "JavaScript", icon: <TbBrandJavascript style={{ color: '#F7DF1E' }} /> },
  { name: "TypeScript", icon: <SiTypescript style={{ color: '#3178C6' }} /> },
  { name: "React.js", icon: <FaReact style={{ color: '#61DAFB' }} /> },
  { name: "Next.js", icon: <SiNextdotjs style={{ color: '#FFFFFF' }} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss style={{ color: '#38BDF8' }} /> },
  { name: "Node.js", icon: <FaNodeJs style={{ color: '#339933' }} /> },
  { name: "PHP", icon: <FaPhp style={{ color: '#777BB4' }} /> },
  { name: "Java", icon: <FaJava style={{ color: '#007396' }} /> },
  { name: "Python", icon: <FaPython style={{ color: '#3776AB' }} /> },
  { name: "C++", icon: <SiCplusplus style={{ color: '#00599C' }} /> },
  { name: "C", icon: <SiC style={{ color: '#A8B9CC' }} /> },
  { name: "MySQL", icon: <SiMysql style={{ color: '#4479A1' }} /> },
  { name: "Git", icon: <SiGit style={{ color: '#F05032' }} /> },
  { name: "GitHub", icon: <FaGithub style={{ color: '#FFFFFF' }} /> },
  { name: "Django", icon: <SiDjango style={{ color: '#092E20' }} /> },
  { name: "Postman", icon: <SiPostman style={{ color: '#FF6C37' }} /> },
];

const TechStack = () => {
  const [animate, setAnimate] = useState(false);
  const techStackRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const currentTechStackRef = techStackRef.current;
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

    if (currentTechStackRef) {
      observer.observe(currentTechStackRef);
    }

    return () => {
      if (currentTechStackRef) {
        observer.unobserve(currentTechStackRef);
      }
    };
  }, []);

  const mainTechs = techs.slice(0, techs.length - 4);
  const bottomTechs = techs.slice(-4);

  return (
    <section className="tech-stack-section" ref={techStackRef}>
      <div className="tech-stack-container">
        <h2 className={`tech-stack-title ${animate ? 'animate-tech-title' : ''}`}>Tech Stack</h2>
        <p className={`tech-stack-subtitle ${animate ? 'animate-tech-subtitle' : ''}`}>
          The tools and technologies I use most often.
        </p>
        
        <div className={`tech-grid ${animate ? 'animate-tech-grid' : ''}`}>
          {mainTechs.map((tech, index) => (
            <div
              key={tech.name}
              className={`tech-item ${animate ? 'animate-tech-item' : ''}`}
              style={{ animationDelay: animate ? `${index * 0.1}s` : '0s' }}
            >
              <div className="tech-icon">
                <div className="tech-icon-content">
                  {tech.icon}
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`tech-grid-bottom ${animate ? 'animate-tech-grid-bottom' : ''}`}>
          {bottomTechs.map((tech, index) => (
            <div
              key={tech.name}
              className={`tech-item ${animate ? 'animate-tech-item' : ''}`}
              style={{ animationDelay: animate ? `${(mainTechs.length + index) * 0.1}s` : '0s' }}
            >
              <div className="tech-icon">
                <div className="tech-icon-content">
                  {tech.icon}
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack