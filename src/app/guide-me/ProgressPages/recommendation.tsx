"use client";

import React, { useEffect, useContext, useState } from "react";
// import { useRouter } from "next/navigation";
import { ProgressContext } from "../../Context/ProgressContext";
import SkillCard from "@/app/components/skillCard";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";

interface SkillsRecommendations {
  skillName: string;
  trendScore: number;
  avgLearningTime: string;
  jobDemand: string;
  futureScope: string;
}

const Recommendation: React.FC = () => {
  const context = useContext(ProgressContext);
  const [isloading, setIsLoading] = useState<boolean>(false);
  // const router = useRouter();
  const [skillCards, setSkillCards] = React.useState<SkillsRecommendations[]>(
    []
  );

  async function getRecommendations(userData: object) {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/generate-skills", { userData });
      const data =
        (await JSON.parse(response.data.recommendations)
          ?.skillsRecommendation) || [];
      return data;
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  const { guideFormData } = context;

  useEffect(() => {
    getRecommendations(guideFormData).then((data) => setSkillCards(data));
  }, [guideFormData]);

  const formFields = [
    { key: "fullName", label: "User Name" },
    { key: "email", label: "Email" },
    { key: "ageGroup", label: "Age Group" },
    { key: "educationLevel", label: "Education" },
    { key: "currentField", label: "Current Field" },
    { key: "currentSkill", label: "Current Skills" },
    { key: "experience", label: "Experience" },
    { key: "careerGoal", label: "Career Path" },
    { key: "primaryLearningGoal", label: "Primary Learning Goals" },
    { key: "learningPreference", label: "Learning Preference" },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen py-6 md:p-6">
      <div className="mt-4">
        <h1 className="text-3xl font-bold text-primary mb-2 text-center">
          Your Best-Matched Trending Skills
        </h1>
        <p className="text-primary mb-6 text-center">
          Based on your interests, experience, and industry trends, here are the
          top skills you should master
        </p>
      </div>
      <div className="skillCards grid lg:grid-cols-3 gap-4 mt-8">
        {isloading ? (
          <p>Loading...</p>
        ) : (
          skillCards &&
          skillCards.map((cardData, index) => (
            <SkillCard key={index} cardData={cardData} />
          ))
        )}
      </div>
      <div className="badges flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
        <Badge variant="secondary" className="text-sm">
          <BadgeCheck />
          Data-Driven Suggestion
        </Badge>
        <Badge variant="secondary" className="text-sm">
          <BadgeCheck />
          High-Demand Skill
        </Badge>
      </div>
      <div className="mt-8 self-start px-4">
        <details>
          <summary className="text-primary cursor-pointer">
            Show summary
          </summary>
          <div className="mt-4 px-4 grid grid-cols-2 gap-x-8 sm:gap-x-12">
            <div>
              {formFields.map((data, index) => (
                <div key={index}>
                  <ul>
                    <li className="font-bold capitalize">{data.label}</li>
                  </ul>
                </div>
              ))}
            </div>
            <div>
              {Object.values(guideFormData).map((data, index) => {
                return (
                  <div key={index}>
                    <ul>
                      {Object.values(data).map((item, index) => (
                        <li key={index}>{(item as string) || "N/A"}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </details>
      </div>
      <hr />
      <div className="mt-12">
        <Card>
          <CardContent>
            <h2 className="text-2xl font-bold mb-2 text-center">
              What&apos;s Next?
            </h2>
            <p className="mb-6 text-center">
              Start learning these skills with our personalized learning path
              and achieve your career goals
            </p>
            <div className="flex justify-center">
              <Button asChild>
                <Link href={"/dashboard/learnings"}>Start Learning Path</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Recommendation;
