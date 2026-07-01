import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills section-hidden">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-container">
          {/* Programming */}
          <div className="skill-category glass-card">
            <h3 className="category-title"><i className="ph ph-code-block"></i> Programming</h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-info"><span>C</span> <span>90%</span></div>
                <div className="progress-bar"><div className="progress" data-width="90%"></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>Java</span> <span>85%</span></div>
                <div className="progress-bar"><div className="progress" data-width="85%"></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>Python</span> <span>80%</span></div>
                <div className="progress-bar"><div className="progress" data-width="80%"></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>DSA</span> <span>75%</span></div>
                <div className="progress-bar"><div className="progress" data-width="75%"></div></div>
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="skill-category glass-card">
            <h3 className="category-title"><i className="ph ph-browser"></i> Frontend</h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-info"><span>HTML</span> <span>95%</span></div>
                <div className="progress-bar"><div className="progress" data-width="95%"></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>CSS</span> <span>90%</span></div>
                <div className="progress-bar"><div className="progress" data-width="90%"></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>React.js</span> <span>70%</span></div>
                <div className="progress-bar"><div className="progress" data-width="70%"></div></div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-category glass-card">
            <h3 className="category-title"><i className="ph ph-wrench"></i> Tools</h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-info"><span>Git</span> <span>85%</span></div>
                <div className="progress-bar"><div className="progress" data-width="85%"></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>VS Code</span> <span>95%</span></div>
                <div className="progress-bar"><div className="progress" data-width="95%"></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>Eclipse</span> <span>80%</span></div>
                <div className="progress-bar"><div className="progress" data-width="80%"></div></div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skill-category glass-card">
            <h3 className="category-title"><i className="ph ph-users-three"></i> Soft Skills</h3>
            <div className="skill-tags">
              <span className="soft-skill-tag">Communication</span>
              <span className="soft-skill-tag">Teamwork</span>
              <span className="soft-skill-tag">Adaptability</span>
              <span className="soft-skill-tag">Quick Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
