"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ResumeGuide() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        The Ultimate Resume Guide for Developers
      </h1>

      <Card className="mb-6 bg-white">
        <CardHeader>
          <CardTitle>🚀 Why a Good Resume Matters?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Your resume is the first impression a recruiter gets about you.
            Whether you&apos;re applying for internships, jobs, or freelance
            gigs, an optimized and structured resume can significantly boost
            your chances.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6 bg-white">
        <CardHeader>
          <CardTitle>📌 Key Sections of a Resume</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong>Header & Contact Info:</strong> Name, Email, LinkedIn,
              GitHub
            </li>
            <li>
              <strong>Summary:</strong> 2-3 lines about you & your goals
            </li>
            <li>
              <strong>Skills:</strong> List of your technical & soft skills
            </li>
            <li>
              <strong>Experience/Projects:</strong> Use the STAR method for
              impact
            </li>
            <li>
              <strong>Education:</strong> Degree, University, Relevant Courses
            </li>
            <li>
              <strong>Achievements & Certifications:</strong> Hackathons,
              Certifications
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6 bg-white">
        <CardHeader>
          <CardTitle>✅ Pro Tips for a Perfect Resume</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">📄 Keep it One Page</Badge>
            <Badge variant="secondary">🎯 Use Action Verbs</Badge>
            <Badge variant="secondary">📂 PDF Format Only</Badge>
            <Badge variant="secondary">📝 Customize Per Job</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
