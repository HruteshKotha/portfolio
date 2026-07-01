import React from 'react';

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<span>Sent Successfully!</span> <i class="ph ph-check-circle"></i>';
    btn.style.background = 'var(--accent-purple)';
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  };

  return (
    <section id="contact" className="contact section-hidden">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a question or want to work together?</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info glass-card">
            <h3>Contact Information</h3>
            <div className="info-items">
              <a href="mailto:hruteshkotha@gmail.com" className="info-item">
                <div className="info-icon"><i className="ph ph-envelope-simple"></i></div>
                <span>hruteshkotha@gmail.com</span>
              </a>
              <a href="#" className="info-item" onClick={(e) => e.preventDefault()}>
                <div className="info-icon"><i className="ph ph-linkedin-logo"></i></div>
                <span>linkedin.com/in/hruteshkotha</span>
              </a>
              <a href="#" className="info-item" onClick={(e) => e.preventDefault()}>
                <div className="info-icon"><i className="ph ph-github-logo"></i></div>
                <span>github.com/hruteshkotha</span>
              </a>
            </div>

            <div className="social-links">
              <a href="#" className="social-icon" onClick={(e) => e.preventDefault()}><i className="ph ph-twitter-logo"></i></a>
              <a href="#" className="social-icon" onClick={(e) => e.preventDefault()}><i className="ph ph-instagram-logo"></i></a>
              <a href="#" className="social-icon" onClick={(e) => e.preventDefault()}><i className="ph ph-discord-logo"></i></a>
            </div>
          </div>

          <form className="contact-form glass-card" id="contactForm" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required placeholder="Your Message..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              <span>Send Message</span>
              <i className="ph ph-paper-plane-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
