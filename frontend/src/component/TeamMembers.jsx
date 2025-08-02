import './TeamMember.css';

export default function TeamMembers() {
  const teamMembers = [
    {
      id: 1,
      name: "Rohit kumar",
      role: "Frontend Developer",
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "UI/UX"],
      experience: "5+ years",
      image: "https://readdy.ai/api/search-image?query=Professional%20frontend%20developer%20portrait%2C%20young%20Asian%20male%20software%20engineer%2C%20clean%20studio%20lighting%2C%20modern%20business%20casual%20attire%2C%20confident%20expression%2C%20tech%20professional%20headshot&width=400&height=400&seq=alex1&orientation=squarish",
      description: "Crafting beautiful, responsive interfaces that users love. Specialized in modern React ecosystems and pixel-perfect implementations."
    },
    {
      id: 2,
      name: "Navnit kumar",
      role: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"],
      experience: "6+ years",
      image: "images/navnit.jpg",
      description: "Building robust, scalable server architectures. Expert in API design, database optimization, and system performance."
    },
    {
      id: 3,
      name: "Sayani Datta",
      role: "Mobile App Developer", 
      skills: ["Flutter", "Firebase", "Dart", "iOS", "Android"],
      experience: "4+ years",
      image: "images/sayani.jpg",
      description: "Creating seamless cross-platform mobile experiences. Focused on performance optimization and native-feel applications."
    },
    {
      id: 4,
      name: "Priyanka kumari",
      role: "DevOps Engineer",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      experience: "7+ years",
      image: "images/priyanka.jpg",
      description: "Ensuring smooth deployments and reliable infrastructure. Specializes in cloud architecture and automated deployment pipelines."
    }
  ];

  return (
    <div id="team" className="team-members">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Expert Team</h2>
          <p>Each team member brings specialized expertise and years of experience to deliver exceptional results for your project.</p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="member-info">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="member-image"
                />
                <div className="member-details">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  {/* <p>{member.description}</p> */}
                  
                  <div className="member-stats">
                    <span className="experience">{member.experience}</span>
                    
                    <div className="skills">
                      {member.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="team-features">
          <h3>Why Choose Our Team?</h3>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h4>Highly Communicative</h4>
              <p>Regular updates and transparent communication throughout the project lifecycle.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h4>30+ Hours/Week</h4>
              <p>Collectively available for dedicated project work and quick turnarounds.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h4>Results-Driven</h4>
              <p>Focus on delivering measurable outcomes and exceeding client expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}