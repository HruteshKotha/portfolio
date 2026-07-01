import React from 'react';

const Hero = ({ handleSmoothScroll }) => {
  return (
    <section id="hero" className="hero section-hidden">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="badge">Available for Work</div>
          <h1 className="glitch" data-text="Hi, I'm Hrutesh">Hi, I'm Hrutesh</h1>
          <h2 className="subtitle">Computer Science Engineering Student <span className="divider">|</span> AI Enthusiast <span className="divider">|</span> Full Stack Developer</h2>
          <p className="description">
            Passionate about building innovative software solutions, exploring Artificial Intelligence, and creating impactful web applications.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary" onClick={(e) => handleSmoothScroll(e, '#projects')}>
              <span>View Projects</span>
              <i className="ph ph-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper glass-panel">
            <div className="placeholder-avatar">
              <i className="ph ph-user"></i>
            </div>
            <div className="floating-badge badge-1">
              <i className="ph ph-code"></i>
            </div>
            <div className="floating-badge badge-2">
              <i className="ph ph-cpu"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
