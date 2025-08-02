import './WorkProcess.css';

export default function WorkProcess() {
  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We start with a comprehensive consultation to understand your requirements, goals, and technical constraints.",
      icon: "🔍",
      color: "blue",
      tasks: ["Requirements analysis", "Technical feasibility study", "Project timeline", "Resource allocation"]
    },
    {
      step: 2,
      title: "Design & Architecture",
      description: "Our team creates detailed system architecture, UI/UX designs, and technical specifications for your project.",
      icon: "📐",
      color: "purple",
      tasks: ["System architecture", "UI/UX wireframes", "Database design", "API specifications"]
    },
    {
      step: 3,
      title: "Development Sprint",
      description: "Agile development with regular check-ins, code reviews, and iterative improvements based on your feedback.",
      icon: "💻",
      color: "green",
      tasks: ["Sprint planning", "Daily standups", "Code development", "Quality assurance"]
    },
    {
      step: 4,
      title: "Testing & Deployment",
      description: "Comprehensive testing, performance optimization, and smooth deployment to your preferred hosting environment.",
      icon: "🚀",
      color: "orange",
      tasks: ["Unit & integration testing", "Performance optimization", "Security audit", "Production deployment"]
    }
  ];

  return (
    <div id="process" className="work-process">
      <div className="container">
        <div className="section-header">
          <h2>Our Development Process</h2>
          <p>We follow a proven methodology that ensures quality delivery, transparent communication, and successful project outcomes.</p>
        </div>
        
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={step.step} className="process-step">
              <div className="step-content">
                <div className="step-icon">
                  {step.icon}
                </div>
                <div className="step-number">
                  {step.step}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                
                <div className="step-tasks">
                  {step.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="task-item">
                      <span className="task-check">✓</span>
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="core-values">
          <h3>Our Core Values</h3>
          <p>These principles guide every project we work on and ensure consistent quality across all deliverables.</p>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Collaboration</h4>
              <p>We work closely with clients throughout the entire development process.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h4>Efficiency</h4>
              <p>Optimized workflows and rapid development cycles for faster delivery.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h4>Quality</h4>
              <p>Rigorous testing and code reviews ensure robust, scalable solutions.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>Staying current with latest technologies and best practices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}