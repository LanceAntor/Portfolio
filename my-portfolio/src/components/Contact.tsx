import { useState, useEffect, useRef } from 'react'
const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const contactRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const currentContactRef = contactRef.current;
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

    if (currentContactRef) {
      observer.observe(currentContactRef);
    }

    return () => {
      if (currentContactRef) {
        observer.unobserve(currentContactRef);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email service integration here
  };

  return (
    <section className="contact-section" id="contact" ref={contactRef}>
      <div className="contact-container">
        <div className={`contact-form-container ${animate ? 'animate-contact-form' : ''}`}>
          <h2 className={`contact-title ${animate ? 'animate-contact-title' : ''}`}>
            Let's Talk
          </h2>
          
          <p className={`contact-subtitle ${animate ? 'animate-contact-subtitle' : ''}`}>
            What sparked your visit? I'd be happy to hear what you're looking for—
            let's chat about it over coffee, virtually of course!
          </p>

          <form className={`contact-form ${animate ? 'animate-contact-inputs' : ''}`} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="What is your name?"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="What is your email?"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="What do you want to say?"
                className="form-textarea"
                rows={5}
                required
              />
            </div>

            <button 
              type="submit" 
              className={`submit-button ${animate ? 'animate-submit-button' : ''}`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact