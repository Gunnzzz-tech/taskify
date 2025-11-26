import { Bookmark } from "lucide-react";

interface JobCardProps {
  job: {
    date: string;
    company: string;
    title: string;
    logo: string;
    logoColor?: string;
    bgColor: string;
    tags: string[];
    rate: string;
    location: string;
    bookmarked?: boolean;
  };
  onDetailsClick: () => void;
}

export function JobCard({ job, onDetailsClick }: JobCardProps) {
  return (
    <div className={`${job.bgColor} rounded-3xl p-4 relative border border-gray-300`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="bg-white px-2 py-1 rounded-lg text-xs text-gray-700">
          {job.date}
        </div>
        <button className="text-gray-700 hover:text-gray-900">
          <Bookmark 
            className="w-4 h-4" 
            fill={job.bookmarked ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Company and Title */}
      <div className="mb-3">
        <div className="text-xs text-gray-700 mb-1">{job.company}</div>
        <h3 className="text-base text-gray-900 mb-3">{job.title}</h3>
        
        {/* Company Logo */}
        <div className="absolute right-4 top-16">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <span className={`text-xl ${job.logoColor || 'text-white'}`}>
              {job.logo}
            </span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4 min-h-[20px]">
        {job.tags.map((tag, index) => (
          <span 
            key={index}
            className="bg-white bg-opacity-60 px-2 py-0.5 rounded-full text-xs text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-300 border-opacity-30">
        <div>
          <div className="text-gray-900 text-base mb-0.5">{job.rate}</div>
          <div className="text-gray-600 text-xs">{job.location}</div>
        </div>
        <button 
          onClick={onDetailsClick}
          className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors text-sm"
        >
          Details
        </button>
      </div>
    </div>
  );
}