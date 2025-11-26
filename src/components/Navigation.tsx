import { useState } from "react";
import { Search, MapPin, Briefcase, Calendar, ChevronDown, Settings, Bell} from "lucide-react";

export function Navigation() {
  const [workLocation, setWorkLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [date, setDate] = useState("");
  const [isJobsOpen, setIsJobsOpen] = useState(false);

  const handleFilter = () => {
    // Logic to filter based on workLocation, experience, and date
    console.log("Filtering with:", { workLocation, experience, date });
  };

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="w-full bg-black shadow-sm">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex items-center justify-between px-6 py-">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-black rounded transform rotate-45"></div>
                <span className="text-white text-lg font-medium">taskify®</span>
              </div>

              {/* Centered Navigation Links */}
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-6 text-white">
                  <a href="/" className="hover:text-white">About Us</a>
                  <div
                    className="relative flex items-center gap-1 text-white hover:text-white cursor-pointer"
                    onMouseEnter={() => setIsJobsOpen(true)}
                    onMouseLeave={() => setIsJobsOpen(false)}
                  >
                    <a href="/jobs" className="flex items-center gap-1">
                      <span>Jobs</span>
                      <svg width="14" height="14" className="opacity-70">
                        <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </a>
                    {isJobsOpen && (
                      <div className="absolute top-full left-0 pt-1 z-50">
                        <div className="w-48 bg-black rounded-lg shadow-lg border border-gray-800 py-2">
                          <a
                            href="/jobs"
                            className="block px-4 py-2 text-white  cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/jobs");
                              setIsJobsOpen(false);
                            }}
                          >
                            Find Job
                          </a>
                          <a
                            href="/contact"
                            className="block px-4 py-2 text-white cursor-pointer"
                            onClick={() => setIsJobsOpen(false)}
                          >
                            Post Job
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                  <a href="/features" className="hover:text-white">Features</a>
                  <a href="/pricing" className="hover:text-white">Pricing</a>
                  <a href="/contact" className="hover:text-white">Contact</a>
                </div>
              </div>

              {/* Sign In Button */}
              <button className="bg-white text-black px-4 py-1 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition">
                Sign In
                <svg width="16" height="16">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </nav>
  );
}