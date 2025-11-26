import { BrowserRouter, Routes, Route } from "react-router-dom";
import RockenLanding from "./components/RockenLanding";
import JobPortal from "./JobPortal";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="isolate">
              <RockenLanding />
            </div>
          }
        />
        
        <Route path="/jobs" element={<JobPortal />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}



// import { useState } from "react";
// import { Navigation } from "./components/Navigation";
// import { SearchFilters } from "./components/SearchFilters";
// import { JobListing } from "./components/JobListing";
// import { JobDetails } from "./components/JobDetails";

// export default function App() {
//   const [searchKeyword, setSearchKeyword] = useState("");
//   const [salaryRange, setSalaryRange] = useState<[number, number]>([0, 500]);
//   const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen bg-[#f5f5f5]">
//       {selectedJobId ? (
//         <JobDetails jobId={selectedJobId} onBack={() => setSelectedJobId(null)} />
//       ) : (
//         <>
//           <Navigation />
//           <SearchFilters 
//             searchKeyword={searchKeyword}
//             setSearchKeyword={setSearchKeyword}
//             salaryRange={salaryRange}
//             setSalaryRange={setSalaryRange}
//           />
//           <JobListing 
//             searchKeyword={searchKeyword}
//             salaryRange={salaryRange}
//             onJobSelect={setSelectedJobId}
//           />
//         </>
//       )}
//     </div>
//   );
// }
