import profilePhoto from '../assets/me.png'
import linkedinIcon from '../assets/linkedin_icon.png'
import githubIcon from '../assets/github_icon.png'
import facebookIcon from '../assets/facebook_icon.png'
import EmojiIcon from '../assets/emoji_icon.png'

const AboutMe = () => {
  return (
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
  )
}

export default AboutMe