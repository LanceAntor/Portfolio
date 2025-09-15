import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      
      const USE_EMAILJS = true; 
      
      if (USE_EMAILJS) {
        const result = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,    
          EMAILJS_CONFIG.TEMPLATE_ID,   
          {
            name: formData.name,              
            email: formData.email,
            message: formData.message,
            time: new Date().toLocaleString(),
          },
          EMAILJS_CONFIG.PUBLIC_KEY     
        );
        
        if (result.text === 'OK') {
          setFormData({ name: '', email: '', message: '' });
          setSubmitStatus('success');
        } else {
          throw new Error('Failed to send email');
        }
      } else {
        const subject = `Portfolio Contact Form - Message from ${formData.name}`;
        const body = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.`;
        
        const mailtoLink = `mailto:lance.antor@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open the email client
        window.open(mailtoLink, '_blank');

        // Reset form and show success message
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setSubmitStatus('success');
      }
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
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
              className={`submit-button ${animate ? 'animate-submit-button' : ''} ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="status-message success-message">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="status-message error-message">
                Error sending message. Please try again or contact me directly at lance.antor@gmail.com
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact