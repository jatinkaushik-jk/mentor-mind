import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, FileText } from "lucide-react";
import Link from "next/link";

// Sample Job Listings
const jobs = [
  { title: "Frontend Developer", company: "Google", location: "Remote" },
  { title: "AI Research Intern", company: "OpenAI", location: "San Francisco" },
];

// Sample Event Listings
const events = [
  { name: "Google I/O 2025", date: "May 14, 2025" },
  { name: "React Summit", date: "July 10, 2025" },
];

// Job Listings Component
function JobListings() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {jobs.map((job, index) => (
        <Card key={index} className="hover:shadow-md bg-white">
          <CardHeader>
            <Briefcase className="w-6 h-6 text-green-500" />
            <CardTitle>{job.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              {job.company} - {job.location}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Events & Hackathons Component
function EventsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {events.map((event, index) => (
        <Card key={index} className="hover:shadow-md bg-white">
          <CardHeader>
            <Calendar className="w-6 h-6 text-purple-500" />
            <CardTitle>{event.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">📅 {event.date}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Resume Builder Guide Component
function ResumeGuide() {
  return (
    <Card className="hover:shadow-md bg-white">
      <CardHeader>
        <FileText className="w-6 h-6 text-orange-500" />
        <CardTitle>Resume Builder Guide</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">
          Craft a professional resume that stands out.
        </p>
        <Link
          href="/dashboard/careers/resume-guide"
          className="text-blue-500 underline"
        >
          Read Guide
        </Link>
      </CardContent>
    </Card>
  );
}

// Career Insights Page Component
export default function Careers() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-primary mb-4">Career Insights</h1>
      <h2 className="text-xl font-semibold mb-3">Job & Internship Listings</h2>
      <JobListings />
      <h2 className="text-xl font-semibold mb-3 mt-6">
        Upcoming Events & Hackathons
      </h2>
      <EventsList />
      <h2 className="text-xl font-semibold mb-3 mt-6">Resume Guide</h2>
      <ResumeGuide />
    </div>
  );
}
