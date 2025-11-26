import { Button } from "./ui/button";
import { ArrowRight, ChevronDown, Check, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/rocken.css";

export default function Pricing() {
  const navigate = useNavigate();
  const [isJobsOpen, setIsJobsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 flex-shrink-0 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 3L3 14L13 14L11 21L21 10L11 10L13 3Z" fill="#000" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xl font-semibold">taskify®</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/#about" className="text-gray-700 hover:text-gray-900 transition-colors">About Us</Link>

            <div
              className="relative"
              onMouseEnter={() => setIsJobsOpen(true)}
              onMouseLeave={() => setIsJobsOpen(false)}
            >
              <button className="text-gray-700 hover:text-gray-900 flex items-center gap-1 transition-colors py-2">
                Jobs
                <ChevronDown className={`h-4 w-4 transition-transform ${isJobsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isJobsOpen && (
                <div className="absolute top-full left-0 pt-1 z-50">
                  <div className="w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <a
                      href="#find-job"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/jobs");
                        setIsJobsOpen(false);
                      }}
                    >
                      Find Job
                    </a>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                      onClick={() => setIsJobsOpen(false)}
                    >
                      Post Job
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/#features" className="text-gray-700 hover:text-gray-900 transition-colors">Features</Link>
            <Link to="/pricing" className="text-gray-900 font-medium transition-colors">Pricing</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</Link>
          </nav>

          {/* CTA Button */}
          <Button className="bg-black hover:bg-gray-800 text-white">
            Sign In
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section" style={{ paddingTop: '80px' }}>
        <div className="text-center mb-16">
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Choose the plan that works best for you. No hidden fees.</p>
        </div>


        {/* For Employers */}
        <div className="pricing-category">
          <h3 className="pricing-category-title">For Employers</h3>
          <div className="pricing-grid pricing-grid-3">
            {/* Starter Plan */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h4 className="pricing-plan-name">Starter Plan</h4>
                <div className="pricing-amount">
                  <span className="pricing-currency">$</span>
                  <span className="pricing-value">99</span>
                  <span className="pricing-period">/month</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li><Check className="pricing-check" /> Post limited jobs</li>
                <li><Check className="pricing-check" /> Access candidate profiles</li>
                <li><Check className="pricing-check" /> Basic applicant tools</li>
              </ul>
              <Button className="pricing-button pricing-button-outline">Get Started</Button>
            </div>

            {/* Professional Plan */}
            <div className="pricing-card pricing-card-popular">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-header">
                <h4 className="pricing-plan-name">Professional Plan</h4>
                <div className="pricing-amount">
                  <span className="pricing-currency">$</span>
                  <span className="pricing-value">299</span>
                  <span className="pricing-period">/month</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li><Check className="pricing-check" /> Unlimited job posts</li>
                <li><Check className="pricing-check" /> Advanced hiring tools</li>
                <li><Check className="pricing-check" /> Team access</li>
                <li><Check className="pricing-check" /> Priority support</li>
              </ul>
              <Button className="pricing-button pricing-button-primary">Get Started</Button>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card pricing-card-enterprise">
              <div className="pricing-header">
                <h4 className="pricing-plan-name">Enterprise Plan</h4>
                <div className="pricing-amount">
                  <span className="pricing-value-custom">Custom pricing</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li><Check className="pricing-check" /> Everything in Professional</li>
                <li><Check className="pricing-check" /> Custom integrations & features</li>
              </ul>
              <Button className="pricing-button pricing-button-dark" onClick={() => navigate('/contact')}>Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Find Your Perfect Match?</h2>
          <p className="cta-subtitle">Join thousands of companies and workers who trust Taskify for their employment needs.</p>
          <div className="cta-buttons">
            <Button
              className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg"
              onClick={() => navigate('/jobs')}
            >
              Find Jobs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 3L3 14L13 14L11 21L21 10L11 10L13 3Z" fill="#fff" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              taskify®
            </div>
            <p className="footer-description">
              The leading platform for blue-collar talent. Connecting skilled workers with meaningful career opportunities.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          <div className="footer-column">
            <h4>For Job Seekers</h4>
            <ul>
              <li><a href="#">Browse Jobs</a></li>
              <li><a href="#">Career Resources</a></li>
              <li><a href="#">Skill Training</a></li>
              <li><a href="#">Resume Builder</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>For Employers</h4>
            <ul>
              <li><a href="#">Post a Job</a></li>
              <li><a href="#">Browse Candidates</a></li>
              <li><Link to="/pricing">Pricing Plans</Link></li>
              <li><a href="#">Enterprise Solutions</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Taskify. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
