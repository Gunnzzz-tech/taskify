import { Search, MapPin, Briefcase, Calendar, ChevronDown } from "lucide-react";

interface SearchFiltersProps {
  searchKeyword: string;
  setSearchKeyword: (keyword: string) => void;
  salaryRange: [number, number];
  setSalaryRange: (range: [number, number]) => void;
}

export function SearchFilters({ searchKeyword, setSearchKeyword, salaryRange, setSalaryRange }: SearchFiltersProps) {
  return (
    <div className="bg-black border-b border-gray-600">
      
      <div className="max-w-[1400px] mx-auto px-6 py-2">
        <div className="flex items-center gap-3">
          {/* Search Input */}
          <div className="flex items-center gap-2 bg-black rounded-lg px-3 py-2 flex-1 max-w-[350px] border border-gray-500">
            <Search className="w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search jobs..." 
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="bg-transparent text-white outline-none w-full text-sm placeholder-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}