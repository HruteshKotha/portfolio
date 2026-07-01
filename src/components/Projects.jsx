import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects section-hidden">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Project</h2>
          <div className="section-line"></div>
        </div>

        <div className="project-showcase glass-card">
          <div className="project-image-container">
            <div className="project-mockup">
              <i className="ph ph-desktop"></i>
            </div>
            <div className="project-overlay">
              <a href="#" className="btn btn-primary" onClick={(e) => e.preventDefault()}><i className="ph ph-link"></i> View Live</a>
              <a href="#" className="btn btn-secondary" onClick={(e) => e.preventDefault()}><i className="ph ph-github-logo"></i> Source</a>
            </div>
          </div>
          <div className="project-details">
            <h3 className="project-title">Web-Based Platform for Managing Student Extracurricular Achievements</h3>
            <p className="project-desc">A comprehensive system designed to track, manage, and showcase student achievements beyond academics. It provides an intuitive dashboard for both students and administrators.</p>
            
            <h4 className="features-title">Key Features</h4>
            <ul className="features-list">
              <li><i className="ph ph-check-circle"></i> Achievement Tracking</li>
              <li><i className="ph ph-check-circle"></i> Participation Records</li>
              <li><i className="ph ph-check-circle"></i> Awards Management</li>
              <li><i className="ph ph-check-circle"></i> Reporting Dashboard</li>
              <li><i className="ph ph-check-circle"></i> Student Achievement Showcase</li>
            </ul>

            <div className="tech-stack">
              <span className="tech-tag">HTML/CSS</span>
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Database</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
