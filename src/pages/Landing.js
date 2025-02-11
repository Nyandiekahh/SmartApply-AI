// src/pages/Landing.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/landing.css';

const Landing = () => {
  useEffect(() => {
    // Animation observer for scroll animations
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate').forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-container">
      {/* Navigation Bar */}
      <nav className="landing-nav">
        <div className="logo">SmartApply</div>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content animate slide-in-left">
            <h1>
              Looking for your next 
              <div className="typewriter">
                <span className="typing-text">Job?</span>
                <span className="typing-text">Internship?</span>
                <span className="typing-text">Attachment?</span>
              </div>
            </h1>
            <p className="hero-subtitle">
              Tired of sending countless applications with no response? 
              Let AI power your job search journey with SmartApply.
            </p>
            <ul className="hero-features">
              <li>✨ Create tailored, ATS-optimized CVs in minutes</li>
              <li>📧 Send personalized bulk applications effortlessly</li>
              <li>📈 Track your applications and improve success rate</li>
              <li>🎯 Get AI-powered suggestions for each application</li>
            </ul>
            <div className="cta-buttons">
              <Link to="/signup" className="primary-button pulse">Start Free Trial</Link>
              <Link to="/demo" className="secondary-button">Watch Demo</Link>
            </div>
          </div>
          <div className="hero-visual animate slide-in-right">
            <div className="success-stats">
              <div className="stat-card">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Success Stories</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">98%</span>
                <span className="stat-label">ATS Pass Rate</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">24/7</span>
                <span className="stat-label">AI Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title animate fade-in">Transform Your Job Search Journey</h2>
          <div className="features-grid">
            <div className="feature-card animate slide-up">
              <div className="feature-icon">📝</div>
              <h3>Smart CV Builder</h3>
              <p>Create professional, ATS-friendly CVs tailored to each job application using AI technology</p>
            </div>
            <div className="feature-card animate slide-up" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon">✉️</div>
              <h3>Bulk Applications</h3>
              <p>Send personalized applications to multiple companies while maintaining quality and relevance</p>
            </div>
            <div className="feature-card animate slide-up" style={{animationDelay: '0.4s'}}>
              <div className="feature-icon">🎯</div>
              <h3>Application Tracking</h3>
              <p>Monitor your applications, get insights, and improve your success rate</p>
            </div>
            <div className="feature-card animate slide-up" style={{animationDelay: '0.6s'}}>
              <div className="feature-icon">🤖</div>
              <h3>AI Assistant</h3>
              <p>24/7 AI support to help you craft the perfect application for each opportunity</p>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="social-proof-section animate fade-in">
          <h2>Join Thousands of Successful Job Seekers</h2>
          <div className="testimonials">
            <div className="testimonial-card">
              <p>"SmartApply helped me land my dream internship at a top tech company. The AI suggestions were game-changing!"</p>
              <div className="testimonial-author">- Sarah K., Software Engineer Intern</div>
            </div>
            <div className="testimonial-card">
              <p>"I was struggling with my attachment applications until I found SmartApply. Now I have multiple offers to choose from!"</p>
              <div className="testimonial-author">- John M., Business Analyst</div>
            </div>
            <div className="testimonial-card">
              <p>"The bulk application feature saved me countless hours. Worth every shilling!"</p>
              <div className="testimonial-author">- Alice W., Marketing Graduate</div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing-section">
          <h2>Simple, Transparent Pricing</h2>
          <div className="pricing-cards">
            <div className="pricing-card trial">
              <div className="card-header">
                <h3>Trial</h3>
                <p className="price">Free</p>
                <p className="duration">24 Hours</p>
              </div>
              <ul>
                <li>✓ 2 AI-powered applications</li>
                <li>✓ Basic CV template</li>
                <li>✓ ATS optimization</li>
                <li>✓ Basic support</li>
              </ul>
              <button className="trial-button">Start Free Trial</button>
            </div>
            <div className="pricing-card premium">
              <div className="popular-tag">Most Popular</div>
              <div className="card-header">
                <h3>Premium</h3>
                <p className="price">KES 2,999</p>
                <p className="duration">per month</p>
              </div>
              <ul>
                <li>✓ Unlimited AI applications</li>
                <li>✓ All premium templates</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Priority 24/7 support</li>
                <li>✓ Bulk application features</li>
                <li>✓ Application tracking</li>
              </ul>
              <button className="premium-button">Get Premium Access</button>
            </div>
          </div>
          <p className="pricing-note">*Pay via M-PESA for instant activation • Contact support for custom plans</p>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2>Need Help Getting Started?</h2>
          <p>Our support team is available 24/7 to help you succeed in your job search</p>
          <div className="contact-methods">
            <a href="https://wa.me/+254XXXXXXXXX" className="whatsapp-button">
              <span className="icon">📱</span>
              WhatsApp Support
            </a>
            <a href="tel:+254XXXXXXXXX" className="phone-button">
              <span className="icon">📞</span>
              Call Support
            </a>
          </div>
          <p className="support-note">Get your account activated instantly during business hours</p>
        </section>

        {/* Footer */}
        <footer className="landing-footer">
          <div className="footer-content">
            <div className="footer-section brand">
              <h4>SmartApply</h4>
              <p>Empowering your career journey with AI</p>
              <div className="social-links">
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#">About Us</a>
              <a href="#">How It Works</a>
              <a href="#">Success Stories</a>
              <a href="#">Blog</a>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: support@smartapply.ai</p>
              <p>Phone: +254 XXX XXX XXX</p>
              <p>Location: Nairobi, Kenya</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 SmartApply. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Landing;