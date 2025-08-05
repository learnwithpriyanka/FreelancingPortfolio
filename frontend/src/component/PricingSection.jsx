import React from 'react';
import './PricingSection.css';

const pricingPlans = [
  {
    title: 'Basic',
    price: '₹4,999+',
    features: [
      'Static Website (3 Pages)',
      'Responsive Design',
      'Delivery: 10 Days',
    ],
    icon: '💼',
  },
  {
    title: 'Standard',
    price: '₹9,999+',
    features: [
      'Dynamic Website',
      'Basic Backend Integration',
      'Delivery: 14 Days',
    ],
    icon: '🚀',
    highlighted: true,
  },
  {
    title: 'Premium',
    price: '₹14,999+',
    features: [
      'Full-stack Web App',
      'Authentication & Payment',
      'Delivery: 20+ Days',
    ],
    icon: '🌟',
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="pricing-heading">💰 Pricing Plans</h2>
        <p className="pricing-subheading">
          Transparent pricing tailored for different project needs.
        </p>
        <div className="pricing-grid">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
            >
              <div className="pricing-icon">{plan.icon}</div>
              <h3 className="pricing-title">{plan.title}</h3>
              <p className="pricing-price">{plan.price}</p>
              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="pricing-btn">Start Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
