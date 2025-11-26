import { Button } from "./ui/button";
import { ArrowRight, ChevronDown, Briefcase, Users, Building2, Shield, Zap, Clock, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/rocken.css";
import SlidingBrands from "./SlidingBrands";

export default function RockenLanding() {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isJobsOpen, setIsJobsOpen] = useState(false);
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const roles = [
    "Software Engineer", "Data Scientist", "Product Manager", "UI/UX Designer", 
    "DevOps Engineer", "QA Engineer", "Frontend Developer", "Backend Developer", 
    "Full Stack Developer", "Cloud Architect", "Cybersecurity Analyst", "AI/ML Engineer"
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (leftSectionRef.current) {
      const rect = leftSectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSuggestions(
      roles.filter((role) => role.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const handleSearchFocus = () => {
    setSuggestions(roles); // Show all roles when the input is focused
  };

  const handleRoleSelect = (role: string) => {
    setSearchTerm(role);
    setSuggestions([]);
    navigate(`/jobs?role=${encodeURIComponent(role)}`);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
      setSuggestions([]); // Hide suggestions when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Generate grid points
  const gridSize = 64;
  const cols = Math.ceil(1000 / gridSize);
  const rows = Math.ceil(1000 / gridSize);

  const gridPoints = [];
  for (let i = 0; i <= cols; i++) {
    for (let j = 0; j <= rows; j++) {
      const x = i * gridSize;
      const y = j * gridSize;
      const distance = Math.sqrt(Math.pow(x - mousePos.x, 2) + Math.pow(y - mousePos.y, 2));
      const maxDistance = 150;
      const intensity = Math.max(0, 1 - distance / maxDistance);

      gridPoints.push({ x, y, intensity });
    }
  }

  const handleFindJob = () => {
    navigate("/jobs");
  };

  const imagePositions = [
    { x: 2, y: 2, src: "/src/assets/construction.png" },
    { x: 4, y: 4, src: "/src/assets/deiver.png" },
    { x: 2, y: 6, src: "/src/assets/tech.png" },
    { x: 4, y: 8, src: "/src/assets/service.png" },
  ];

  return (
    <div className="isolate">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 flex-shrink-0 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 3L3 14L13 14L11 21L21 10L11 10L13 3Z" fill="#000" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xl font-semibold">taskify®</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About Us</a>

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

              <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">Features</a>
              <Link to="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</Link>
            </nav>

            {/* CTA Button */}
            <Button className="bg-black hover:bg-gray-800 text-white">
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </header>
        


        {/* Hero Section */}
        <div className="hero-section">
          {/* LEFT SIDE - Text Content */}
          <div className="hero-left">
            <div className="hero-content">
              <h1 className="hero-title">The Leading Platform</h1>
              <h2 className="hero-subtitle">for Blue-Collar Talent</h2>

              <p className="hero-description">
                Connecting <span className="highlight">skilled professionals</span> with career opportunities across industries.
              </p>

              {/* Search Bar */}
              <div className="relative" ref={searchBarRef}>
                <input
                  type="text"
                  className="bg-white border border-gray-300 rounded-lg px-4 py-2 max-w-[65%]"
                  placeholder="Search roles..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={handleSearchFocus}
                />
                {suggestions.length > 0 && (
                  <ul className="absolute bg-white border border-gray-300 rounded-lg mt-1 w-full z-10">
                    {suggestions.map((role, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleRoleSelect(role)}
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Stats */}
              <div className="stats-section">
                <div className="stat-item">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Active Jobs</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10K+</div>
                  <div className="stat-label">Companies</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2M+</div>
                  <div className="stat-label">Workers Placed</div>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
          <div 
            ref={leftSectionRef}
            className="hero-right"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            
          {/* Base Grid Pattern */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="baseGrid" width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
      <path 
        d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`} 
        fill="none" 
        stroke="rgba(100,100,100,0.15)" 
        strokeWidth="1"
      />
      <circle cx="0" cy="0" r="1" fill="rgba(255, 255, 255,0.2)"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#baseGrid)" />
</svg>

{/* Interactive Glowing Grid Lines */}
<svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
  {/* Vertical lines with glow */}
  {Array.from({ length: cols + 1 }).map((_, i) => {
    const x = i * gridSize;
    const distance = Math.abs(x - mousePos.x);
    const maxDistance = 150;
    const intensity = Math.max(0, 1 - distance / maxDistance);
    
    return (
      <line
        key={`v-${i}`}
        x1={x}
        y1={0}
        x2={x}
        y2="100%"
        stroke={`rgba(255, 255, 255, ${0.15 + intensity * 0.6})`}
        strokeWidth={1 + intensity * 2}
        style={{ transition: 'stroke 0.1s ease-out, stroke-width 0.1s ease-out' }}
      />
    );
  })}
  
  {/* Horizontal lines with glow */}
  {Array.from({ length: rows + 1 }).map((_, j) => {
    const y = j * gridSize;
    const distance = Math.abs(y - mousePos.y);
    const maxDistance = 150;
    const intensity = Math.max(0, 1 - distance / maxDistance);
    
    return (
      <line
        key={`h-${j}`}
        x1={0}
        y1={y}
        x2="100%"
        y2={y}
        stroke={`rgba(255, 255, 255, ${0.15 + intensity * 0.6})`}
        strokeWidth={1 + intensity * 2}
        style={{ transition: 'stroke 0.1s ease-out, stroke-width 0.1s ease-out' }}
      />
    );
  })}
  
  {/* Grid intersection points (dots) with glow */}
  {gridPoints.map((point, idx) => (
    <circle
      key={`dot-${idx}`}
      cx={point.x}
      cy={point.y}
      r={2 + point.intensity * 4}
      fill={`rgba(255, 255, 255, ${0.2 + point.intensity * 0.8})`}
      style={{ transition: 'r 0.1s ease-out, fill 0.1s ease-out' }}
    />
  ))}
</svg>
          {/* Images placed on the grid */}
          
          </div>
        </div>

    {/* Brands Slider Section */}
    <SlidingBrands small="Trusted by" title="Industry Leaders" />

    {/* Features Section */}
    <section id="features" className="features-section">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Taskify?</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">We provide comprehensive solutions for both job seekers and employers in the blue-collar industry.</p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <Briefcase className="text-white" />
          </div>
          <h3 className="feature-title">Verified Job Listings</h3>
          <p className="feature-description">All jobs are verified and vetted to ensure genuine opportunities for workers.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <Users className="text-white" />
          </div>
          <h3 className="feature-title">Skilled Workforce</h3>
          <p className="feature-description">Access to millions of pre-verified skilled workers across various trades.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <Building2 className="text-white" />
          </div>
          <h3 className="feature-title">Top Companies</h3>
          <p className="feature-description">Partner with leading companies looking for reliable blue-collar talent.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <Shield className="text-white" />
          </div>
          <h3 className="feature-title">Safe & Secure</h3>
          <p className="feature-description">Your data is protected with enterprise-grade security measures.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <Zap className="text-white" />
          </div>
          <h3 className="feature-title">AI-Powered Matching</h3>
          <p className="feature-description">Smart algorithms match candidates with the most suitable job opportunities.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <Clock className="text-white" />
          </div>
          <h3 className="feature-title">Quick Hiring</h3>
          <p className="feature-description">Streamlined process enables faster hiring and onboarding of workers.</p>
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
</div>
  );
}
