import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'spam'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Spam prevention states
  const [honeypot, setHoneypot] = useState(''); // Hidden field to catch bots
  const [formStartTime, setFormStartTime] = useState<number>(0);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
  
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

  // Initialize form start time for spam detection
  useEffect(() => {
    setFormStartTime(Date.now());
  }, []);

  // Spam detection functions
  const detectSpam = (text: string): boolean => {
    const spamPatterns = [
      /(.)\1{4,}/i, // Repeated characters (5 or more)
      /\b(buy now|click here|make money|free money|earn \$|get rich|miracle|guarantee|risk free)\b/i,
      /\b(viagra|cialis|pharmacy|casino|poker|lottery|winner)\b/i,
      /(http|https|www\.)/i, // URLs
      /[A-Z]{10,}/, // Excessive caps
      /(.)\1{2,}/g // Repeated patterns
    ];
    
    return spamPatterns.some(pattern => pattern.test(text));
  };

  const validateSubmission = (): { isValid: boolean; reason?: string } => {
    const now = Date.now();
    
    // Check honeypot (bots fill hidden fields)
    if (honeypot.trim() !== '') {
      return { isValid: false, reason: 'Bot detected' };
    }
    
    // Check if form was filled too quickly (less than 3 seconds)
    if (formStartTime && (now - formStartTime) < 3000) {
      return { isValid: false, reason: 'Form submitted too quickly' };
    }
    
    // Check rate limiting (max 1 submission per 30 seconds)
    if (lastSubmissionTime && (now - lastSubmissionTime) < 30000) {
      return { isValid: false, reason: 'Please wait before submitting again' };
    }
    
    // Check for spam content
    const fullText = `${formData.name} ${formData.email} ${formData.message}`;
    if (detectSpam(fullText)) {
      return { isValid: false, reason: 'Spam content detected' };
    }
    
    // Check minimum message length
    if (formData.message.trim().length < 10) {
      return { isValid: false, reason: 'Message too short' };
    }
    
    // Check maximum message length
    if (formData.message.length > 2000) {
      return { isValid: false, reason: 'Message too long' };
    }
    
    return { isValid: true };
  };

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
      // Spam validation
      const validation = validateSubmission();
      if (!validation.isValid) {
        console.log('Spam detected:', validation.reason);
        setSubmitStatus('spam');
        setIsSubmitting(false);
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
        return;
      }

      // Update last submission time for rate limiting
      setLastSubmissionTime(Date.now());
      
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

            {/* Honeypot field - hidden from users, catches bots */}
            <div className="honeypot-field" style={{ display: 'none' }}>
              <label htmlFor="website">Website (leave blank)</label>
              <input
                type="text"
                id="website"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
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
                Error sending message. Please try again or contact me directly at lanceantorpro@gmail.com
              </div>
            )}
            
            {submitStatus === 'spam' && (
              <div className="status-message spam-message">
                Message blocked. Please do not include spammy content.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact