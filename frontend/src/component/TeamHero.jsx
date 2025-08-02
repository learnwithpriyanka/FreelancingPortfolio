import './TeamHero.css';

export default function TeamHero() {
  return (
    <div id="hero" className="team-hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Elite Development Team
          </h1>
          <p className="hero-description">
            Full-stack excellence from frontend to deployment. We build scalable, beautiful applications that drive business growth.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Hours/Week Available</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Specialized Experts</span>
            </div>
          </div>
        </div>
        
        <div className="hero-skills">
          <div className="skill-card">
            <div className="skill-icon">🎨</div>
            <h3>Frontend</h3>
            <p>React, Next.js, Tailwind</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">⚙️</div>
            <h3>Backend</h3>
            <p>Node.js, Express, MongoDB</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">📱</div>
            <h3>Mobile</h3>
            <p>Flutter, Firebase</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🚀</div>
            <h3>DevOps</h3>
            <p>AWS, Docker, CI/CD</p>
          </div>
        </div>
        
        <div className="hero-actions">
          <button className="btn-primary">Start Your Project</button>
          <button className="btn-secondary">View Our Work</button>
        </div>
      </div>
    </div>
  );
}