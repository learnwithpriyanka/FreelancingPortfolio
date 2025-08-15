import './TeamHero.css';
import { useEffect, useRef, useState } from 'react';

export default function TeamHero() {
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const [hoursCount, setHoursCount] = useState(0);
  const [expertsCount, setExpertsCount] = useState(0);

  useEffect(() => {
    if (!statsRef.current) return;
    let observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let projectTarget = 6;
    let hoursTarget = 30;
    let expertsTarget = 5;
    let projectInterval, hoursInterval, expertsInterval;

    projectInterval = setInterval(() => {
      setProjectCount(prev => {
        if (prev < projectTarget) return prev + 1;
        clearInterval(projectInterval);
        return projectTarget;
      });
    }, 120);

    hoursInterval = setInterval(() => {
      setHoursCount(prev => {
        if (prev < hoursTarget) return prev + 1;
        clearInterval(hoursInterval);
        return hoursTarget;
      });
    }, 30);

    expertsInterval = setInterval(() => {
      setExpertsCount(prev => {
        if (prev < expertsTarget) return prev + 1;
        clearInterval(expertsInterval);
        return expertsTarget;
      });
    }, 200);

    return () => {
      clearInterval(projectInterval);
      clearInterval(hoursInterval);
      clearInterval(expertsInterval);
    };
  }, [hasAnimated]);

  const StartYourProject = () => {
    // Scroll to contact form
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewProjects = () => {
    // Scroll to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <div className="hero-stats" ref={statsRef}>
            <div className="stat-item">
              <span className="stat-number">{projectCount}+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{hoursCount}+</span>
              <span className="stat-label">Hours/Week Available</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{expertsCount}</span>
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
          

          
              <button className="btn primary" onClick={StartYourProject}>
              Start Your Project
              </button>
              <button className="btn secondary" onClick={handleViewProjects}>
              View Our Work
              </button>
           
        </div>
      </div>
    </div>
  );
}