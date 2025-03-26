"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowUpRightFromSquare } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

// Define types
type Workshop = {
  id: number;
  date: string;
  title: string;
  attendees: number;
  university: string;
};

type QnA = {
  question: string;
  answer: string;
};

// Upcoming Workshops Data
const workshops: Workshop[] = [
  {
    id: 1,
    date: "15 OCT",
    title: "Mastering AI in Web Development",
    attendees: 800,
    university: "IIT Bombay",
  },
  {
    id: 2,
    date: "22 OCT",
    title: "Career Growth in Data Science",
    attendees: 1000,
    university: "NSUT",
  },
  {
    id: 3,
    date: "5 NOV",
    title: "Hackathon Prep Bootcamp",
    attendees: 1200,
    university: "DTU",
  },
  {
    id: 4,
    date: "12 NOV",
    title: "Networking & Soft Skills for Tech Careers",
    attendees: 900,
    university: "IIIT Hyderabad",
  },
];

// Q&A Data
const qnaData: QnA[] = [
  {
    question: "What are the top AI skills to learn in 2025?",
    answer:
      "AI Ethics, Prompt Engineering, MLOps, and Multi-modal AI are in high demand.",
  },
  {
    question: "How do I transition from a developer to an AI researcher?",
    answer:
      "Focus on mathematical foundations, deep learning, and contribute to AI research papers.",
  },
  {
    question: "Are online AI certifications worth it?",
    answer:
      "Yes, but real-world projects and open-source contributions carry more weight in the industry.",
  },
  {
    question: "What’s the best way to prepare for AI/ML interviews?",
    answer:
      "Strong DSA, model-building experience, and knowledge of AI system design.",
  },
];

export default function CommunitySection() {
  const [upcomingWorkshops] = useState(workshops);
  const [previousWorkshops] = useState<Workshop[]>([]);

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
        Community Hub
      </h1>

      <Tabs defaultValue="upcoming">
        <TabsList className="flex flex-wrap flex-col justify-center sm:gap-2 px-1 rounded-lg border border-teal-700 text-white bg-white">
          <TabsTrigger
            value="upcoming"
            className="px-2 sm:px-4 py-2 text-xs sm:text-base font-semibold"
          >
            Upcoming Workshops
          </TabsTrigger>
          <TabsTrigger
            value="previous"
            className="px-2 sm:px-4 py-2 text-xs sm:text-base font-semibold"
          >
            Past Events
          </TabsTrigger>
          <TabsTrigger
            value="qna"
            className="px-2 sm:px-4 py-2 text-xs sm:text-base font-semibold"
          >
            Q&A
          </TabsTrigger>
        </TabsList>

        {/* Upcoming Workshops */}
        <TabsContent value="upcoming" className="mt-4 sm:mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {upcomingWorkshops.map((workshop) => (
              <Card
                key={workshop.id}
                className="p-4 sm:p-5 rounded-2xl border bg-white"
              >
                <CardContent className="flex flex-col items-start">
                  <div className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                    {workshop.title}
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    📅 {workshop.date}
                  </p>
                  <p className="text-gray-600 mt-2 text-xs sm:text-sm">
                    👥 {workshop.attendees} attendees
                  </p>
                  <p className="text-gray-800 font-medium mt-2 mb-2">
                    🏛 {workshop.university}
                  </p>
                  <Button variant={"link"} asChild>
                    <Link href="/">
                      Register Now{" "}
                      <ArrowUpRightFromSquare
                        className="inline-block ml-1"
                        size={16}
                      />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Past Events */}
        <TabsContent
          value="previous"
          className="text-center text-gray-500 mt-4 sm:mt-6"
        >
          {previousWorkshops.length === 0 ? (
            <p>No past events available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {previousWorkshops.map((workshop) => (
                <Card
                  key={workshop.id}
                  className="p-4 sm:p-5 rounded-2xl border bg-white"
                >
                  <CardContent>
                    <div className="text-lg sm:text-xl font-bold text-gray-800">
                      {workshop.title}
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                      📅 {workshop.date}
                    </p>
                    <p className="text-gray-600 mt-2 text-xs sm:text-sm">
                      👥 {workshop.attendees} attendees
                    </p>
                    <p className="text-gray-800 font-medium mt-2">
                      🏛 {workshop.university}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Q&A Section */}
        <TabsContent
          value="qna"
          className="text-center text-black mt-4 sm:mt-6"
        >
          <Accordion type="single" collapsible className="w-full text-start">
            {qnaData.map((qna, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{qna.question}</AccordionTrigger>
                <AccordionContent>{qna.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
}
