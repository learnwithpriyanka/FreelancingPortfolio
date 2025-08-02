'use client';

import { useState } from 'react';
import './Contact.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('Thank you! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '', 
        email: '', 
        company: '', 
        projectType: '', 
        budget: '', 
        timeline: '', 
        description: ''
      });
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const handleScheduleCall = () => {
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
    <div id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss your project requirements and see how our team can help you achieve your goals.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Why Work With Us?</h3>
            
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">🚀</div>
                <div className="benefit-content">
                  <h4>Full-Stack Expertise</h4>
                  <p>Complete solution from frontend to deployment with specialized team members for each area.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <div className="benefit-content">
                  <h4>Quick Turnaround</h4>
                  <p>30+ hours per week collective availability ensures fast project completion.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">💬</div>
                <div className="benefit-content">
                  <h4>Clear Communication</h4>
                  <p>Regular updates, transparent process, and responsive team collaboration.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">🎯</div>
                <div className="benefit-content">
                  <h4>Proven Results</h4>
                  <p>Successfully delivered 6+ projects with measurable outcomes and client satisfaction.</p>
                </div>
              </div>
            </div>
            
            <div className="contact-details">
              <h4>Get in Touch</h4>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-value">hello@groupfreelancing.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Response Time:</span>
                <span className="contact-value">Within 24 hours</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ecommerce">E-commerce Platform</option>
                    <option value="dashboard">Dashboard/Analytics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="timeline">Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select timeline</option>
                  <option value="1-2-months">1-2 months</option>
                  <option value="2-4-months">2-4 months</option>
                  <option value="4-6-months">4-6 months</option>
                  <option value="6+months">6+ months</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Project Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes('Thank you') ? 'success' : 'error'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
        
        <div className="cta-banner">
          <div className="cta-content">
            <h3>Ready to Build Something Amazing?</h3>
            <p>Join our satisfied clients who've transformed their ideas into successful digital products.</p>
            <div className="cta-buttons">
              <button className="cta-btn primary" onClick={handleScheduleCall}>
                Schedule a Call
              </button>
              <button className="cta-btn secondary" onClick={handleViewProjects}>
                View More Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}