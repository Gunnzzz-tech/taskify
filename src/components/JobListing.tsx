import { useState, useMemo } from "react";
import { Sidebar } from "./Sidebar";
import { JobCard } from "./JobCard";
import { SlidersHorizontal } from "lucide-react";
import { Search, MapPin, Briefcase, Calendar, ChevronDown, Settings, Bell } from "lucide-react";

const jobs = [
  {
    id: 1,
    date: "20 May, 2023",
    company: "Amazon",
    title: "Senior UI/UX Designer",
    logo: "a",
    bgColor: "bg-[#f5e6d3]",
    tags: ["Part time", "Senior level", "Distant", "Project work"],
    rate: "$250/hr",
    hourlyRate: 250,
    location: "San Francisco, CA",
    workSchedule: ["Part time", "Project work"],
    employmentType: ["Distant work"],
    experienceLevel: "Senior level",
  },
  {
    id: 2,
    date: "4 Feb, 2023",
    company: "Google",
    title: "Junior UI/UX Designer",
    logo: "G",
    logoColor: "text-blue-500",
    bgColor: "bg-[#d4f4dd]",
    tags: ["Full time", "Junior level", "Distant", "Project work", "Flexible Schedule"],
    rate: "$150/hr",
    hourlyRate: 150,
    location: "California, CA",
    bookmarked: true,
    workSchedule: ["Full time", "Project work"],
    employmentType: ["Distant work", "Flexible schedule"],
    experienceLevel: "Junior level",
  },
  {
    id: 3,
    date: "29 Jan, 2023",
    company: "Dribbble",
    title: "Senior Motion Designer",
    logo: "●",
    logoColor: "text-pink-500",
    bgColor: "bg-[#e8e0f5]",
    tags: ["Part time", "Senior level", "Full Day", "Shift work"],
    rate: "$260/hr",
    hourlyRate: 260,
    location: "New York, NY",
    workSchedule: ["Part time"],
    employmentType: ["Full day", "Shift work"],
    experienceLevel: "Senior level",
  },
  {
    id: 4,
    date: "11 Apr, 2023",
    company: "Twitter",
    title: "UX Designer",
    logo: "🐦",
    bgColor: "bg-[#d9eeff]",
    tags: ["Full time", "Middle level", "Distant", "Project work"],
    rate: "$120/hr",
    hourlyRate: 120,
    location: "California, CA",
    workSchedule: ["Full time", "Project work"],
    employmentType: ["Distant work"],
    experienceLevel: "Middle level",
  },
  {
    id: 5,
    date: "2 Apr, 2023",
    company: "Airbnb",
    title: "Graphic Designer",
    logo: "🏠",
    logoColor: "text-pink-500",
    bgColor: "bg-[#e8f5e9]",
    tags: ["Part time", "Senior level"],
    rate: "$300/hr",
    hourlyRate: 300,
    location: "New York, NY",
    workSchedule: ["Part time"],
    employmentType: ["Distant work"],
    experienceLevel: "Senior level",
  },
  {
    id: 6,
    date: "18 Jan, 2023",
    company: "Apple",
    title: "Graphic Designer",
    logo: "",
    bgColor: "bg-[#e8e8ea]",
    tags: ["Part time", "Distant"],
    rate: "$140/hr",
    hourlyRate: 140,
    location: "San Francisco, CA",
    workSchedule: ["Part time"],
    employmentType: ["Distant work"],
    experienceLevel: "Senior level",
  },
  {
    id: 7,
    date: "15 May, 2023",
    company: "Microsoft",
    title: "Product Designer",
    logo: "M",
    logoColor: "text-blue-600",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Senior level", "Distant", "Project work"],
    rate: "$280/hr",
    hourlyRate: 280,
    location: "Seattle, WA",
    workSchedule: ["Full time", "Project work"],
    employmentType: ["Distant work", "Flexible schedule"],
    experienceLevel: "Senior level",
  },
  {
    id: 8,
    date: "10 Apr, 2023",
    company: "Facebook",
    title: "UX Researcher",
    logo: "f",
    logoColor: "text-blue-700",
    bgColor: "bg-[#e8f5e9]",
    tags: ["Full time", "Middle level", "Full Day"],
    rate: "$200/hr",
    hourlyRate: 200,
    location: "Menlo Park, CA",
    workSchedule: ["Full time"],
    employmentType: ["Full day"],
    experienceLevel: "Middle level",
  },
  {
    id: 9,
    date: "5 Mar, 2023",
    company: "Netflix",
    title: "Senior Product Designer",
    logo: "N",
    logoColor: "text-red-600",
    bgColor: "bg-[#e8f5e9]",
    tags: ["Full time", "Senior level", "Distant"],
    rate: "$320/hr",
    hourlyRate: 320,
    location: "Los Angeles, CA",
    workSchedule: ["Full time"],
    employmentType: ["Distant work"],
    experienceLevel: "Senior level",
  },
  {
    id: 10,
    date: "1 Mar, 2023",
    company: "Spotify",
    title: "UI Designer",
    logo: "S",
    logoColor: "text-green-600",
    bgColor: "bg-[#f1f8e9]",
    tags: ["Part time", "Junior level", "Flexible Schedule"],
    rate: "$130/hr",
    hourlyRate: 130,
    location: "New York, NY",
    workSchedule: ["Part time"],
    employmentType: ["Flexible schedule"],
    experienceLevel: "Junior level",
  },
  {
    id: 11,
    date: "28 Feb, 2023",
    company: "Adobe",
    title: "Motion Graphics Designer",
    logo: "A",
    logoColor: "text-red-700",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Senior level", "Shift work"],
    rate: "$270/hr",
    hourlyRate: 270,
    location: "San Jose, CA",
    workSchedule: ["Full time"],
    employmentType: ["Shift work"],
    experienceLevel: "Senior level",
  },
  {
    id: 12,
    date: "25 Feb, 2023",
    company: "Uber",
    title: "Product Designer",
    logo: "U",
    logoColor: "text-gray-900",
    bgColor: "bg-[#f5f5f5]",
    tags: ["Full time", "Middle level", "Full Day"],
    rate: "$190/hr",
    hourlyRate: 190,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Full day"],
    experienceLevel: "Middle level",
  },
  {
    id: 13,
    date: "20 Feb, 2023",
    company: "Tesla",
    title: "Visual Designer",
    logo: "T",
    logoColor: "text-red-500",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Part time", "Senior level", "Distant"],
    rate: "$240/hr",
    hourlyRate: 240,
    location: "Austin, TX",
    workSchedule: ["Part time"],
    employmentType: ["Distant work"],
    experienceLevel: "Senior level",
  },
  {
    id: 14,
    date: "15 Feb, 2023",
    company: "Slack",
    title: "Interaction Designer",
    logo: "#",
    logoColor: "text-purple-600",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Middle level", "Flexible Schedule"],
    rate: "$210/hr",
    hourlyRate: 210,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Flexible schedule", "Distant work"],
    experienceLevel: "Middle level",
  },
  {
    id: 15,
    date: "10 Feb, 2023",
    company: "LinkedIn",
    title: "Senior UX Designer",
    logo: "in",
    logoColor: "text-blue-700",
    bgColor: "bg-[#e8f5e9]",
    tags: ["Full time", "Senior level", "Full Day"],
    rate: "$290/hr",
    hourlyRate: 290,
    location: "Sunnyvale, CA",
    workSchedule: ["Full time"],
    employmentType: ["Full day"],
    experienceLevel: "Senior level",
  },
  {
    id: 16,
    date: "5 Feb, 2023",
    company: "Pinterest",
    title: "Brand Designer",
    logo: "P",
    logoColor: "text-red-600",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Part time", "Junior level", "Project work"],
    rate: "$160/hr",
    hourlyRate: 160,
    location: "San Francisco, CA",
    workSchedule: ["Part time", "Project work"],
    employmentType: ["Distant work"],
    experienceLevel: "Junior level",
  },
  {
    id: 17,
    date: "1 Feb, 2023",
    company: "Figma",
    title: "Product Designer",
    logo: "F",
    logoColor: "text-purple-500",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Senior level", "Distant"],
    rate: "$310/hr",
    hourlyRate: 310,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Distant work", "Flexible schedule"],
    experienceLevel: "Senior level",
  },
  {
    id: 18,
    date: "28 Jan, 2023",
    company: "Shopify",
    title: "UI/UX Designer",
    logo: "S",
    logoColor: "text-green-700",
    bgColor: "bg-[#e8f5e9]",
    tags: ["Full time", "Middle level", "Shift work"],
    rate: "$180/hr",
    hourlyRate: 180,
    location: "Ottawa, Canada",
    workSchedule: ["Full time"],
    employmentType: ["Shift work"],
    experienceLevel: "Middle level",
  },
  {
    id: 19,
    date: "25 Jan, 2023",
    company: "Stripe",
    title: "Design System Designer",
    logo: "$",
    logoColor: "text-indigo-600",
    bgColor: "bg-[#e8eaf6]",
    tags: ["Full time", "Senior level", "Full Day"],
    rate: "$300/hr",
    hourlyRate: 300,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Full day"],
    experienceLevel: "Senior level",
  },
  {
    id: 20,
    date: "20 Jan, 2023",
    company: "Notion",
    title: "Product Designer",
    logo: "N",
    logoColor: "text-gray-800",
    bgColor: "bg-[#fafafa]",
    tags: ["Full time", "Middle level", "Distant"],
    rate: "$220/hr",
    hourlyRate: 220,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Distant work"],
    experienceLevel: "Middle level",
  },
  {
    id: 21,
    date: "15 Jan, 2023",
    company: "Canva",
    title: "Graphic Designer",
    logo: "C",
    logoColor: "text-cyan-500",
    bgColor: "bg-[#e0f7fa]",
    tags: ["Part time", "Junior level", "Flexible Schedule"],
    rate: "$140/hr",
    hourlyRate: 140,
    location: "Sydney, Australia",
    workSchedule: ["Part time"],
    employmentType: ["Flexible schedule"],
    experienceLevel: "Junior level",
  },
  {
    id: 22,
    date: "10 Jan, 2023",
    company: "Dropbox",
    title: "Senior Visual Designer",
    logo: "D",
    logoColor: "text-blue-500",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Senior level", "Full Day"],
    rate: "$270/hr",
    hourlyRate: 270,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Full day", "Flexible schedule"],
    experienceLevel: "Senior level",
  },
  {
    id: 23,
    date: "5 Jan, 2023",
    company: "Zoom",
    title: "UX Designer",
    logo: "Z",
    logoColor: "text-blue-600",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Middle level", "Distant"],
    rate: "$195/hr",
    hourlyRate: 195,
    location: "San Jose, CA",
    workSchedule: ["Full time"],
    employmentType: ["Distant work"],
    experienceLevel: "Middle level",
  },
  {
    id: 24,
    date: "1 Jan, 2023",
    company: "Salesforce",
    title: "Product Designer",
    logo: "SF",
    logoColor: "text-blue-400",
    bgColor: "bg-[#e1f5fe]",
    tags: ["Full time", "Senior level", "Full Day"],
    rate: "$285/hr",
    hourlyRate: 285,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Full day"],
    experienceLevel: "Senior level",
  },
  {
    id: 25,
    date: "30 Dec, 2022",
    company: "Twitch",
    title: "Brand Designer",
    logo: "T",
    logoColor: "text-purple-600",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Part time", "Middle level", "Distant"],
    rate: "$175/hr",
    hourlyRate: 175,
    location: "San Francisco, CA",
    workSchedule: ["Part time"],
    employmentType: ["Distant work"],
    experienceLevel: "Middle level",
  },
  {
    id: 26,
    date: "28 Dec, 2022",
    company: "Discord",
    title: "UI Designer",
    logo: "D",
    logoColor: "text-indigo-500",
    bgColor: "bg-[#e8eaf6]",
    tags: ["Full time", "Junior level", "Flexible Schedule"],
    rate: "$155/hr",
    hourlyRate: 155,
    location: "Remote",
    workSchedule: ["Full time"],
    employmentType: ["Flexible schedule", "Distant work"],
    experienceLevel: "Junior level",
  },
  {
    id: 27,
    date: "25 Dec, 2022",
    company: "Reddit",
    title: "Product Designer",
    logo: "R",
    logoColor: "text-orange-600",
    bgColor: "bg-[#e8f5e9]",
    tags: ["Full time", "Senior level", "Full Day"],
    rate: "$295/hr",
    hourlyRate: 295,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Full day"],
    experienceLevel: "Senior level",
  },
  {
    id: 28,
    date: "20 Dec, 2022",
    company: "Snapchat",
    title: "AR Designer",
    logo: "S",
    logoColor: "text-yellow-400",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Senior level", "Distant"],
    rate: "$315/hr",
    hourlyRate: 315,
    location: "Los Angeles, CA",
    workSchedule: ["Full time"],
    employmentType: ["Distant work"],
    experienceLevel: "Senior level",
  },
  {
    id: 29,
    date: "18 Dec, 2022",
    company: "TikTok",
    title: "UX Designer",
    logo: "T",
    logoColor: "text-pink-600",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Middle level", "Shift work"],
    rate: "$205/hr",
    hourlyRate: 205,
    location: "Los Angeles, CA",
    workSchedule: ["Full time"],
    employmentType: ["Shift work"],
    experienceLevel: "Middle level",
  },
  {
    id: 30,
    date: "15 Dec, 2022",
    company: "Square",
    title: "Product Designer",
    logo: "□",
    logoColor: "text-blue-500",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Senior level", "Flexible Schedule"],
    rate: "$275/hr",
    hourlyRate: 275,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Flexible schedule"],
    experienceLevel: "Senior level",
  },
  {
    id: 31,
    date: "12 Dec, 2022",
    company: "Coinbase",
    title: "Senior UI Designer",
    logo: "C",
    logoColor: "text-blue-600",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Senior level", "Distant"],
    rate: "$305/hr",
    hourlyRate: 305,
    location: "Remote",
    workSchedule: ["Full time"],
    employmentType: ["Distant work"],
    experienceLevel: "Senior level",
  },
  {
    id: 32,
    date: "10 Dec, 2022",
    company: "Robinhood",
    title: "Visual Designer",
    logo: "R",
    logoColor: "text-green-500",
    bgColor: "bg-[#e8f5e9]",
    tags: ["Part time", "Middle level", "Project work"],
    rate: "$185/hr",
    hourlyRate: 185,
    location: "Menlo Park, CA",
    workSchedule: ["Part time", "Project work"],
    employmentType: ["Distant work"],
    experienceLevel: "Middle level",
  },
  {
    id: 33,
    date: "8 Dec, 2022",
    company: "Lyft",
    title: "Product Designer",
    logo: "L",
    logoColor: "text-pink-500",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Senior level", "Full Day"],
    rate: "$280/hr",
    hourlyRate: 280,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Full day"],
    experienceLevel: "Senior level",
  },
  {
    id: 34,
    date: "5 Dec, 2022",
    company: "DoorDash",
    title: "UX Designer",
    logo: "D",
    logoColor: "text-red-500",
    bgColor: "bg-[#e8e0f5]",
    tags: ["Full time", "Middle level", "Distant"],
    rate: "$195/hr",
    hourlyRate: 195,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Distant work"],
    experienceLevel: "Middle level",
  },
  {
    id: 35,
    date: "3 Dec, 2022",
    company: "Instacart",
    title: "UI Designer",
    logo: "I",
    logoColor: "text-green-600",
    bgColor: "bg-[#e8f5e9]",
    tags: ["Part time", "Junior level", "Flexible Schedule"],
    rate: "$145/hr",
    hourlyRate: 145,
    location: "San Francisco, CA",
    workSchedule: ["Part time"],
    employmentType: ["Flexible schedule"],
    experienceLevel: "Junior level",
  },
  {
    id: 36,
    date: "1 Dec, 2022",
    company: "Atlassian",
    title: "Product Designer",
    logo: "A",
    logoColor: "text-blue-700",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Senior level", "Distant"],
    rate: "$290/hr",
    hourlyRate: 290,
    location: "Sydney, Australia",
    workSchedule: ["Full time"],
    employmentType: ["Distant work", "Flexible schedule"],
    experienceLevel: "Senior level",
  },
  {
    id: 37,
    date: "28 Nov, 2022",
    company: "Asana",
    title: "UX Designer",
    logo: "A",
    logoColor: "text-pink-600",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Middle level", "Full Day"],
    rate: "$210/hr",
    hourlyRate: 210,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Full day"],
    experienceLevel: "Middle level",
  },
  {
    id: 38,
    date: "25 Nov, 2022",
    company: "Zendesk",
    title: "Senior Product Designer",
    logo: "Z",
    logoColor: "text-green-700",
    bgColor: "bg-[#e8f5e9]",
    tags: ["Full time", "Senior level", "Shift work"],
    rate: "$285/hr",
    hourlyRate: 285,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Shift work"],
    experienceLevel: "Senior level",
  },
  {
    id: 39,
    date: "22 Nov, 2022",
    company: "Mailchimp",
    title: "Brand Designer",
    logo: "M",
    logoColor: "text-yellow-600",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Part time", "Middle level", "Distant"],
    rate: "$170/hr",
    hourlyRate: 170,
    location: "Atlanta, GA",
    workSchedule: ["Part time"],
    employmentType: ["Distant work"],
    experienceLevel: "Middle level",
  },
  {
    id: 40,
    date: "20 Nov, 2022",
    company: "HubSpot",
    title: "UI/UX Designer",
    logo: "H",
    logoColor: "text-orange-500",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Senior level", "Flexible Schedule"],
    rate: "$275/hr",
    hourlyRate: 275,
    location: "Boston, MA",
    workSchedule: ["Full time"],
    employmentType: ["Flexible schedule", "Distant work"],
    experienceLevel: "Senior level",
  },
  {
    id: 41,
    date: "18 Nov, 2022",
    company: "MongoDB",
    title: "Product Designer",
    logo: "M",
    logoColor: "text-green-600",
    bgColor: "bg-[#e8f5e9]",
    tags: ["Full time", "Middle level", "Full Day"],
    rate: "$215/hr",
    hourlyRate: 215,
    location: "New York, NY",
    workSchedule: ["Full time"],
    employmentType: ["Full day"],
    experienceLevel: "Middle level",
  },
  {
    id: 42,
    date: "15 Nov, 2022",
    company: "Databricks",
    title: "Visual Designer",
    logo: "D",
    logoColor: "text-red-600",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Part time", "Senior level", "Project work"],
    rate: "$260/hr",
    hourlyRate: 260,
    location: "San Francisco, CA",
    workSchedule: ["Part time", "Project work"],
    employmentType: ["Distant work"],
    experienceLevel: "Senior level",
  },
  {
    id: 43,
    date: "12 Nov, 2022",
    company: "Snowflake",
    title: "UX Designer",
    logo: "S",
    logoColor: "text-blue-400",
    bgColor: "bg-[#e1f5fe]",
    tags: ["Full time", "Middle level", "Distant"],
    rate: "$200/hr",
    hourlyRate: 200,
    location: "San Mateo, CA",
    workSchedule: ["Full time"],
    employmentType: ["Distant work"],
    experienceLevel: "Middle level",
  },
  {
    id: 44,
    date: "10 Nov, 2022",
    company: "Workday",
    title: "Senior UX Designer",
    logo: "W",
    logoColor: "text-orange-600",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Senior level", "Full Day"],
    rate: "$295/hr",
    hourlyRate: 295,
    location: "Pleasanton, CA",
    workSchedule: ["Full time"],
    employmentType: ["Full day"],
    experienceLevel: "Senior level",
  },
  {
    id: 45,
    date: "8 Nov, 2022",
    company: "ServiceNow",
    title: "Product Designer",
    logo: "S",
    logoColor: "text-green-500",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Senior level", "Flexible Schedule"],
    rate: "$285/hr",
    hourlyRate: 285,
    location: "Santa Clara, CA",
    workSchedule: ["Full time"],
    employmentType: ["Flexible schedule"],
    experienceLevel: "Senior level",
  },
  {
    id: 46,
    date: "5 Nov, 2022",
    company: "Splunk",
    title: "UI Designer",
    logo: "S",
    logoColor: "text-green-700",
    bgColor: "bg-[#e8f5e9]",
    tags: ["Part time", "Junior level", "Distant"],
    rate: "$150/hr",
    hourlyRate: 150,
    location: "San Francisco, CA",
    workSchedule: ["Part time"],
    employmentType: ["Distant work"],
    experienceLevel: "Junior level",
  },
  {
    id: 47,
    date: "3 Nov, 2022",
    company: "Okta",
    title: "Brand Designer",
    logo: "O",
    logoColor: "text-blue-600",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Middle level", "Shift work"],
    rate: "$190/hr",
    hourlyRate: 190,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Shift work"],
    experienceLevel: "Middle level",
  },
  {
    id: 48,
    date: "1 Nov, 2022",
    company: "Cloudflare",
    title: "Product Designer",
    logo: "C",
    logoColor: "text-orange-500",
    bgColor: "bg-[#e8f5e9]",
    tags: ["Full time", "Senior level", "Distant"],
    rate: "$300/hr",
    hourlyRate: 300,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Distant work", "Flexible schedule"],
    experienceLevel: "Senior level",
  },
  {
    id: 49,
    date: "30 Oct, 2022",
    company: "Airtable",
    title: "UX Designer",
    logo: "A",
    logoColor: "text-yellow-500",
    bgColor: "bg-[#e3f2fd]",
    tags: ["Full time", "Middle level", "Full Day"],
    rate: "$205/hr",
    hourlyRate: 205,
    location: "San Francisco, CA",
    workSchedule: ["Full time"],
    employmentType: ["Full day"],
    experienceLevel: "Middle level",
  },
  {
    id: 50,
    date: "28 Oct, 2022",
    company: "GitLab",
    title: "Senior Product Designer",
    logo: "G",
    logoColor: "text-orange-600",
    bgColor: "bg-[#e8e0f5]",
    tags: ["Full time", "Senior level", "Distant"],
    rate: "$310/hr",
    hourlyRate: 310,
    location: "Remote",
    workSchedule: ["Full time"],
    employmentType: ["Distant work"],
    experienceLevel: "Senior level",
  },
];

export function JobSearchPage() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [salaryRange, setSalaryRange] = useState<[number, number]>([0, 100]);

  const handleJobSelect = (jobId: number) => {
    // Handle job selection logic
    console.log("Selected job:", jobId);
  };

  return (
    <div className="min-h-screen bg-white">
      <SearchFilters
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        salaryRange={salaryRange}
        setSalaryRange={setSalaryRange}
      />
      <JobListing
        searchKeyword={searchKeyword}
        salaryRange={salaryRange}
        onJobSelect={handleJobSelect}
      />
    </div>
  );
}

export function JobListing({ searchKeyword, salaryRange, onJobSelect }: JobListingProps) {
  const [workSchedule, setWorkSchedule] = useState<string[]>(["Full time", "Part time", "Project work"]);
  const [employmentType, setEmploymentType] = useState<string[]>(["Full day", "Flexible schedule", "Shift work", "Distant work"]);
  const [experience, setExperience] = useState("");
  const [date, setDate] = useState("");

  // Filter jobs based on all criteria
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Search keyword filter - check if title contains keyword
      const matchesSearch = searchKeyword === "" || job.title.toLowerCase().includes(searchKeyword.toLowerCase());

      // Salary range filter
      const matchesSalary = job.hourlyRate >= salaryRange[0] && job.hourlyRate <= salaryRange[1];

      // Work schedule filter - at least one match
      const matchesWorkSchedule = workSchedule.length === 0 || job.workSchedule.some((schedule) => workSchedule.includes(schedule));

      // Employment type filter - at least one match
      const matchesEmploymentType = employmentType.length === 0 || job.employmentType.some((type) => employmentType.includes(type));

      // Experience filter
      const matchesExperience = experience === "" || job.experienceLevel.toLowerCase().includes(experience.toLowerCase());

      // Date filter
      const matchesDate = date === "" || job.date === date;

      return matchesSearch && matchesSalary && matchesWorkSchedule && matchesEmploymentType && matchesExperience && matchesDate;
    });
  }, [searchKeyword, salaryRange, workSchedule, employmentType, experience, date]);

  const toggleWorkSchedule = (schedule: string) => {
    setWorkSchedule((prev) => (prev.includes(schedule) ? prev.filter((s) => s !== schedule) : [...prev, schedule]));
  };

  const toggleEmploymentType = (type: string) => {
    setEmploymentType((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]));
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-4">
      <div className="flex gap-6">
        <Sidebar
          workSchedule={workSchedule}
          employmentType={employmentType}
          onToggleWorkSchedule={toggleWorkSchedule}
          onToggleEmploymentType={toggleEmploymentType}
        />

        <div className="flex-1">
          {/* Horizontal Filters Row */}
          <div className="flex items-center gap-4 mb-6">
            {/* Work Location */}
            <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 flex-1 max-w-[180px] border border-gray-500">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">Work location</span>
              <ChevronDown className="w-3 h-3 text-gray-400 ml-auto" />
            </div>

            {/* Experience */}
            <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 flex-1 max-w-[180px] border border-gray-500">
              <Briefcase className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="text-gray-400 text-sm bg-transparent outline-none"
              />
              <ChevronDown className="w-3 h-3 text-gray-400 ml-auto" />
            </div>

            {/* Per Month */}
            <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 flex-1 max-w-[180px] border border-gray-500">
              <Calendar className="w-4 h-4 text-gray-400" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="text-gray-400 text-sm bg-transparent outline-none"
              />
              <ChevronDown className="w-3 h-3 text-gray-400 ml-auto" />
            </div>

            {/* Salary Range */}
            <div className="flex-1 min-w-[200px]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-black text-xs">Salary range</span>
                <span className="text-black text-xs">
                  ${salaryRange[0]}/hr - ${salaryRange[1]}/hr
                </span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={salaryRange[1]}
                  onChange={(e) => setSalaryRange([salaryRange[0], parseInt(e.target.value)])}
                  className="w-full h-1 bg-gray-500 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </div>

          {/* Jobs Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-gray-900 text-2xl">Recommended jobs</h2>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{filteredJobs.length}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">Sort by:</span>
              <span className="text-gray-900 text-sm">Last updated</span>
              <button className="text-gray-500 hover:text-gray-900">
                <SlidersHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Jobs Grid */}
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No jobs found matching your filters. Try adjusting your search criteria.
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} onDetailsClick={() => onJobSelect(job.id)} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}