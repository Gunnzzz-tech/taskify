import { ArrowLeft, Heart, MapPin, Calendar } from "lucide-react";
import astronautImage from "figma:asset/afeb6b015bbe95a10590d4c0184e12ad1c61e178.png";

interface JobDetailsProps {
  jobId: number;
  onBack: () => void;
}

// Job data with full descriptions
const jobsData: Record<number, any> = {
  1: {
    company: "Amazon",
    title: "Senior UI/UX Designer",
    logo: "a",
    tags: ["Expert", "Part time", "Remote"],
    rate: "$250/hr",
    location: "San Francisco, CA",
    founded: "July 5, 1994",
    about: "Amazon is one of the world's leading e-commerce and cloud computing companies with millions of customers worldwide. The company offers a vast selection of products and services across multiple categories. Amazon Web Services (AWS) provides cloud computing platforms and APIs to individuals, companies, and governments.",
    responsibilities: [
      "We want you to have a deep understanding of the tools and services that are offered through our platform. While we don't expect you to write code, we are looking for a level of curiosity from a technical standpoint. We want you to explore and ask plenty of questions.",
      "You will work directly with our engineers to design user interfaces and dashboards around the complex services they are delivering.",
      "We are expecting you to create wireframes, interactive prototypes, and documentation of the frontends that you will be designing."
    ],
    skills: ["Wireframing", "Figma", "Adobe XD", "UI/UX Designer", "Team work"],
    paymentVerified: true,
    budget: "$195k + Spend",
    services: ["Web & App Design", "Backend", "FedRAMP", "Compliance", "Frontend", "Offensive Security"]
  },
  2: {
    company: "Google",
    title: "Junior UI/UX Designer",
    logo: "G",
    tags: ["Intermediate", "Full time", "Remote"],
    rate: "$150/hr",
    location: "California, CA",
    founded: "September 4, 1998",
    about: "Google is one of the world's leading technology companies specializing in Internet-related services and products. These include online advertising technologies, search engine, cloud computing, software, and hardware. Google's mission is to organize the world's information and make it universally accessible and useful.",
    responsibilities: [
      "Design intuitive and engaging user interfaces for Google's suite of products and services.",
      "Collaborate with cross-functional teams including product managers, engineers, and researchers.",
      "Create wireframes, prototypes, and high-fidelity designs that bring ideas to life.",
      "Conduct user research and usability testing to inform design decisions."
    ],
    skills: ["Sketch", "Figma", "Prototyping", "User Research", "Collaboration"],
    paymentVerified: true,
    budget: "$120k + Spend",
    services: ["UI Design", "UX Research", "Prototyping", "User Testing", "Design Systems"]
  },
  9: {
    company: "Netflix",
    title: "Senior Product Designer",
    logo: "N",
    tags: ["Expert", "Full time", "Remote"],
    rate: "$320/hr",
    location: "Los Angeles, CA",
    founded: "August 29, 1997",
    about: "Netflix is one of the world's leading streaming entertainment service with over 238 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause, and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.",
    responsibilities: [
      "We want you to have a deep understanding of the tools and services that are offered through streaming platforms. While we don't expect you to write code, we are looking for a level of curiosity from a technical standpoint. We want you to explore and ask plenty of questions.",
      "You will work directly with our engineers to design user interfaces and dashboards around the complex services they are delivering.",
      "We are expecting you to create wireframes, interactive prototypes, and documentation of the frontends that you will be designing."
    ],
    skills: ["Wireframing", "Figma", "Adobe XD", "UI/UX Designer", "Team work"],
    paymentVerified: true,
    budget: "$195k + Spend",
    services: ["Web & App Design", "Backend", "FedRAMP", "Compliance", "Frontend", "Offensive Security"]
  }
};

// Default template for jobs without specific data
const getJobData = (jobId: number, jobs: any[]) => {
  const job = jobs.find(j => j.id === jobId);
  if (!job) return null;

  // If we have custom data, use it
  if (jobsData[jobId]) {
    return { ...job, ...jobsData[jobId] };
  }

  // Otherwise create generic data
  return {
    ...job,
    founded: "January 1, 1997",
    about: `${job.company} is one of the world's leading technology companies providing innovative solutions and services to millions of users worldwide. We are committed to excellence and creating products that make a difference in people's lives.`,
    responsibilities: [
      "We want you to have a deep understanding of the tools and services that are offered through our platform.",
      "You will work directly with our engineers to design user interfaces and dashboards around the complex services they are delivering.",
      "We are expecting you to create wireframes, interactive prototypes, and documentation of the frontends that you will be designing."
    ],
    skills: ["Wireframing", "Figma", "Adobe XD", "UI/UX Designer", "Team work"],
    paymentVerified: true,
    budget: "$150k + Spend",
    services: ["Web & App Design", "Backend", "Frontend", "Design Systems"]
  };
};

export function JobDetails({ jobId, onBack }: JobDetailsProps) {
  // Import jobs data from JobListing component
  const jobs = [
    { id: 1, company: "Amazon", title: "Senior UI/UX Designer", logo: "a", rate: "$250/hr", location: "San Francisco, CA", tags: ["Part time", "Senior level", "Distant", "Project work"] },
    { id: 2, company: "Google", title: "Junior UI/UX Designer", logo: "G", rate: "$150/hr", location: "California, CA", tags: ["Full time", "Junior level", "Distant", "Project work", "Flexible Schedule"] },
    { id: 3, company: "Dribbble", title: "Senior Motion Designer", logo: "●", rate: "$260/hr", location: "New York, NY", tags: ["Part time", "Senior level", "Full Day", "Shift work"] },
    { id: 4, company: "Twitter", title: "UX Designer", logo: "🐦", rate: "$120/hr", location: "California, CA", tags: ["Full time", "Middle level", "Distant", "Project work"] },
    { id: 5, company: "Airbnb", title: "Graphic Designer", logo: "🏠", rate: "$300/hr", location: "New York, NY", tags: ["Part time", "Senior level"] },
    { id: 6, company: "Apple", title: "Graphic Designer", logo: "", rate: "$140/hr", location: "San Francisco, CA", tags: ["Part time", "Distant"] },
    { id: 7, company: "Microsoft", title: "Product Designer", logo: "M", rate: "$280/hr", location: "Seattle, WA", tags: ["Full time", "Senior level", "Distant", "Project work"] },
    { id: 8, company: "Facebook", title: "UX Researcher", logo: "f", rate: "$200/hr", location: "Menlo Park, CA", tags: ["Full time", "Middle level", "Full Day"] },
    { id: 9, company: "Netflix", title: "Senior Product Designer", logo: "N", rate: "$320/hr", location: "Los Angeles, CA", tags: ["Full time", "Senior level", "Distant"] },
    { id: 10, company: "Spotify", title: "UI Designer", logo: "S", rate: "$130/hr", location: "New York, NY", tags: ["Part time", "Junior level", "Flexible Schedule"] }
  ];

  const jobData = getJobData(jobId, jobs);

  if (!jobData) {
    return <div>Job not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#1a1a2e] text-white">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to jobs
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex gap-4">
          {/* Sidebar - Job List */}
          <div className="w-72 space-y-3">
            {/* Selected Job Card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border-2 border-blue-500">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-red-600 text-white rounded flex items-center justify-center text-2xl">
                  {jobData.logo}
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-base mb-1">{jobData.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{jobData.company} • 34 Applicants</p>
              <div className="flex gap-2 mb-3">
                {jobData.tags.slice(0, 3).map((tag: string, idx: number) => (
                  <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm pt-3 border-t">
                <span className="text-lg">{jobData.rate}</span>
                <span className="text-gray-400 flex items-center gap-1 text-xs">
                  <Calendar className="w-3 h-3" />
                  Posted 5 days ago
                </span>
              </div>
            </div>

            {/* Other job suggestions */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 text-white rounded flex items-center justify-center">
                  <span className="text-xl">□</span>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-base mb-1">Product designer</h3>
              <p className="text-gray-500 text-sm mb-3">Microsoft • 45 Applicants</p>
              <div className="flex gap-2 mb-3">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Intermediate</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Full-Time</span>
              </div>
              <div className="flex items-center justify-between text-sm pt-3 border-t">
                <span className="text-lg">$210/hr</span>
                <span className="text-gray-400 flex items-center gap-1 text-xs">
                  <Calendar className="w-3 h-3" />
                  Posted 4 days ago
                </span>
              </div>
            </div>
          </div>

          {/* Main Content - Job Details */}
          <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl mb-3">{jobData.title}</h2>
                <div className="flex gap-2">
                  {jobData.tags.map((tag: string, idx: number) => (
                    <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center text-3xl mb-2">
                  {jobData.logo}
                </div>
                <p className="text-sm">{jobData.company}, Inc. ✓</p>
              </div>
            </div>

            {/* About the role */}
            <div className="mb-6">
              <h3 className="text-lg mb-3">About the role</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {jobData.about}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="mb-6">
              <h3 className="text-lg mb-3">Responsibilities</h3>
              <ul className="space-y-2">
                {jobData.responsibilities.map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-gray-600 text-sm">
                    <span className="text-black">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Skills */}
            <div>
              <h3 className="text-lg mb-3">Required skills:</h3>
              <div className="flex flex-wrap gap-2">
                {jobData.skills.map((skill: string, idx: number) => (
                  <span key={idx} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Company Info */}
          <div className="w-72">
            <div className="bg-white rounded-2xl p-5 shadow-sm space-y-5">
              <div>
                <h4 className="text-gray-500 text-sm mb-2">Founded</h4>
                <p className="text-gray-900 text-sm">{jobData.founded}</p>
              </div>
              <div>
                <h4 className="text-gray-500 text-sm mb-2">Location</h4>
                <p className="text-gray-900 text-sm">{jobData.location}</p>
              </div>
              <div>
                <h4 className="text-gray-900 text-sm mb-2">Other Information</h4>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-500 text-xs">Payment verified</p>
              </div>
              <div>
                <p className="text-gray-900 text-sm mb-1">{jobData.budget}</p>
                <p className="text-gray-500 text-xs">Payment verified</p>
              </div>
              <div>
                <h4 className="text-gray-900 text-sm mb-2">Services</h4>
                <div className="flex flex-wrap gap-2">
                  {jobData.services.map((service: string, idx: number) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl transition-colors text-sm">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}