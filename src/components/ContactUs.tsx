import { Button } from "./ui/button";
import { ArrowRight, ChevronDown, Linkedin, Twitter, Facebook, Instagram, User, Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/rocken.css";
import contactImage from "../assets/contact-us.png";

export default function Contact() {
  const navigate = useNavigate();
  const [isJobsOpen, setIsJobsOpen] = useState(false);
  
  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", contactForm);
    setContactForm({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    alert("Message sent successfully!");
  };

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
            <Link to="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</Link>
            <Link to="/contact" className="text-gray-900 font-medium transition-colors">Contact</Link>
          </nav>

          {/* CTA Button */}
          <Button className="bg-black hover:bg-gray-800 text-white">
            Sign In
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <section className="contact-section-dark">
  <div className="contact-split">

    {/* LEFT SIDE */}
    <div className="contact-left">
      <div className="contact-left-inner">
        <h1 className="left-title">Contact us</h1>

        <p className="left-sub">OUR ADDRESS</p>
        <p className="left-text">
          123456 Moscow<br />
          Lane Dyuzheva<br />
          building 47 office 202
        </p>

        <p className="left-sub" style={{ marginTop: 28 }}>OUR CONTACTS</p>
        <p className="left-text">
          hello@name.com<br />
          +7 900 800 70 60
        </p>

        <div className="left-socials">
          <a href="#" className="social-icon"><Facebook size={18} /></a>
          <a href="#" className="social-icon"><Twitter size={18} /></a>
          <a href="#" className="social-icon"><Instagram size={18} /></a>
        </div>
      </div>
    </div>

    {/* RIGHT FORM CARD */}
    <div className="contact-right">
      <div className="form-floating-card">

        <p className="form-heading">FEEDBACK FORM</p>

        <form onSubmit={handleContactSubmit}>
          <input name="name" className="form-input" placeholder="Name" required />
          <input name="email" className="form-input" placeholder="E-mail" required />
          <input name="phone" className="form-input" placeholder="Phone" />
          <textarea name="message" className="form-textarea" placeholder="Message"></textarea>

          <div className="form-row">
            <label className="upload-link">
              <Send size={14} />
              Upload file
              <input type="file" />
            </label>

            <button type="submit"
              className="send-cta"
              disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "SEND MESSAGE →"}
            </button>
          </div>

        </form>
      </div>
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
