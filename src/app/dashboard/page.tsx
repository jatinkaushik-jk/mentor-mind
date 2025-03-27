"use client";
import DashboardStats from "../components/statCard";
import UserCard from "../components/userCard";
import StreakCard from "../components/streakCard";
import LearningActivityChart from "../components/learningActivityChart";
import AICareerMentorCard from "../components/aiCareerMentorProCard";
import LiveWorkshopCard from "../components/liveWorkshopCard";
import SkillJourneyCard from "../components/skillJourney";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRightCircle, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import roadmap from "@/../public/roadmap-illustration.svg";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const footerData = [
  { title: "Community Members", stats: "36K" },
  { title: "Learning Hours", stats: "2.5M" },
  { title: "Courses Available", stats: "120+" },
  { title: "Success Rate", stats: "92%" },
];

const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 lg:flex-nowrap flex-wrap">
        <UserCard
          role={"Student"}
          skills={["skill01", "skill02"]}
          className="lg:col-span-3"
        ></UserCard>
        <DashboardStats className="lg:col-span-6 lg:min-w-lg" />
        <StreakCard className="lg:col-span-3" />
      </div>
      <div>
        <h3 className="font-bold text-2xl pl-2">
          Welcome back, {user?.firstName || "user"}!
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full flex flex-col gap-4">
          <SkillJourneyCard />
          <Card className="lg:flex hidden bg-white h-full">
            <CardContent className="-mt-2 flex flex-row items-center">
              <div>
                <CardTitle className="text-nowrap mb-4 flex items-center">
                  <Plane className="text-teal-500 mr-2 w-5" />
                  Take me to the Roadmap
                </CardTitle>
                <Button variant={"ghost"} asChild>
                  <Link href="/dashboard/learnings">
                    View Roadmap <ArrowRightCircle />
                  </Link>
                </Button>
              </div>
              <Image src={roadmap} className="h-12" alt="roadmap-image"></Image>
            </CardContent>
          </Card>
        </div>
        <LearningActivityChart />
      </div>
      <div className="flex gap-4 lg:flex-row flex-col">
        <AICareerMentorCard />
        <LiveWorkshopCard />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {footerData.map((data, index) => (
          <div
            key={index}
            className="text-center border rounded-lg p-2 py-4 bg-white"
          >
            <h4 className="text-xl font-bold mb-1.5">{data.stats}</h4>
            <p className="text-xs text-gray-700">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
