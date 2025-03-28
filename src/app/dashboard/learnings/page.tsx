"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import SkillCard from "@/app/components/skillCard";
import StreakCard from "@/app/components/streakCard";
import SkillJourneyCard from "@/app/components/skillJourney";

// Type Definitions
type SkillData = {
  skillName: string;
  trendScore: number;
  avgLearningTime: string;
  jobDemand: string;
  futureScope: string;
};

// Trending Skills Data
const trendingSkills: SkillData[] = [
  {
    skillName: "UI/UX",
    trendScore: 5,
    avgLearningTime: "~4-6 months",
    jobDemand: "Very High",
    futureScope:
      "Crucial for user-friendly digital experiences, in demand for web & mobile apps.",
  },
  {
    skillName: "DevOps",
    trendScore: 4.5,
    avgLearningTime: "~6-9 months",
    jobDemand: "High",
    futureScope:
      "Essential for automation, CI/CD, and cloud infrastructure management.",
  },
  {
    skillName: "AI ML",
    trendScore: 5,
    avgLearningTime: "~8-12 months",
    jobDemand: "Very High",
    futureScope:
      "Integral to advancements in automation, AI-driven analytics, and autonomous systems.",
  },
];

// Roadmap Data for Skills
const roadmapData: Record<string, string[]> = {
  "UI/UX": [
    "Understand design principles",
    "Learn Figma, Adobe XD",
    "Work on wireframing & prototyping",
    "Build UI/UX projects",
  ],
  DevOps: [
    "Learn Linux & Shell Scripting",
    "Understand CI/CD Pipelines",
    "Work with Docker & Kubernetes",
    "Learn Infrastructure as Code (Terraform)",
  ],
  "AI ML": [
    "Master Python & Statistics",
    "Learn Data Preprocessing",
    "Work on Neural Networks & Deep Learning",
    "Develop AI-powered applications",
  ],
};

// Skill Roadmap Component
function SkillRoadmap({ skill }: { skill: string }) {
  const steps = roadmapData[skill] || [];

  return (
    <Card className="mt-4 p-4 bg-white">
      <CardHeader>
        <CardTitle>{skill} Roadmap</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5">
          {steps.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ul>
        <Progress value={5} className="mt-4" />
      </CardContent>
    </Card>
  );
}

// Learnings Page Component
export default function Learnings() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-primary mb-4">Learnings</h1>

      {/* Skill Progress Tracker */}
      <div className="grid grid-cols-4 gap-4">
        <SkillJourneyCard className="col-span-3" />
        <StreakCard className="col-span-1" />
      </div>

      {/* Trending Skills Section */}
      <h3 className="text-lg font-bold text-gray-800 mt-6">Suggested Skills</h3>
      <div className="grid lg:grid-cols-3 gap-4 mt-4">
        {trendingSkills.map((cardData, index) => (
          <div
            key={index}
            onClick={() => setSelectedSkill(cardData.skillName)}
            className="hover:shadow-xl rounded-xl shadow-teal-100"
          >
            <SkillCard cardData={cardData} className="bg-white" />
          </div>
        ))}
      </div>

      {/* Show Roadmap if a skill is selected */}
      <h3 className="text-lg font-bold text-gray-800 mt-6">Roadmap</h3>
      {selectedSkill ? (
        <div>
          <SkillRoadmap skill={selectedSkill} />
        </div>
      ) : (
        <div className="text-gray-500 text-sm text-center min-h-24 grid place-content-center">
          No skills selected
        </div>
      )}
    </div>
  );
}
