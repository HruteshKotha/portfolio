import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section-hidden">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="about-grid">
          <div className="about-info glass-card">
            <div className="education-timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>B.Tech Computer Science Engineering</h3>
                  <h4>KL Deemed to be University</h4>
                  <span className="timeline-date">2024 &ndash; 2028</span>
                </div>
              </div>
            </div>
            <div className="traits">
              <span className="trait-tag"><i className="ph ph-lightning"></i> Quick Learner</span>
              <span className="trait-tag"><i className="ph ph-rocket"></i> Technology Enthusiast</span>
              <span className="trait-tag"><i className="ph ph-puzzle-piece"></i> Problem Solver</span>
              <span className="trait-tag"><i className="ph ph-users"></i> Team Player</span>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card glass-card">
              <div className="stat-icon"><i className="ph ph-terminal-window"></i></div>
              <div className="stat-number" data-target="4">0</div>
              <div className="stat-label">Programming Languages</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-icon"><i className="ph ph-files"></i></div>
              <div className="stat-number" data-target="15">0</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-icon"><i className="ph ph-stack"></i></div>
              <div className="stat-number" data-target="12">0</div>
              <div className="stat-label">Technologies Learned</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-icon"><i className="ph ph-users-three"></i></div>
              <div className="stat-number" data-target="2">0</div>
              <div className="stat-label">Leadership Roles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
