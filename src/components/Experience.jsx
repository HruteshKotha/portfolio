import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="exp-interests section-hidden">
      <div className="container">
        <div className="grid-2">
          {/* Experience */}
          <div>
            <div className="section-header">
              <h2 className="section-title">Experience</h2>
              <div className="section-line"></div>
            </div>
            
            <div className="timeline glass-card">
              <div className="timeline-item">
                <div className="timeline-dot glow"></div>
                <div className="timeline-content">
                  <h3>Technical Team Member</h3>
                  <h4>Radio Club</h4>
                  <ul className="timeline-desc">
                    <li>Managed live broadcasts and podcasts.</li>
                    <li>Organized club activities and tech events.</li>
                    <li>Edited and refined audio recordings using Audacity.</li>
                    <li>Promoted from Technical Intern due to excellent performance.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <div className="section-header">
              <h2 className="section-title">Interests</h2>
              <div className="section-line"></div>
            </div>

            <div className="interests-grid">
              <div className="interest-card glass-card">
                <i className="ph ph-robot"></i>
                <span>Artificial Intelligence</span>
              </div>
              <div className="interest-card glass-card">
                <i className="ph ph-brain"></i>
                <span>Machine Learning</span>
              </div>
              <div className="interest-card glass-card">
                <i className="ph ph-code"></i>
                <span>Programming</span>
              </div>
              <div className="interest-card glass-card">
                <i className="ph ph-trend-up"></i>
                <span>Tech Trends</span>
              </div>
              <div className="interest-card glass-card">
                <i className="ph ph-book-open"></i>
                <span>Learning Tech</span>
              </div>
              <div className="interest-card glass-card">
                <i className="ph ph-headphones"></i>
                <span>Audio Editing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
