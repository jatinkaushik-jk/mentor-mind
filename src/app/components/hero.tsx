import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem] text-center md:mt-20 lg:mt-40">
      <h1 className="mx-auto max-w-4xl text-balance text-3xl/9 font-bold tracking-tight text-gray-950 dark:text-gray-50 sm:text-5.5xl md:text-6xl">
        Unlock Your Potential with AI-Powered Mentorship
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-base/6 text-gray-600 dark:text-gray-300 sm:text-lg">
        Need the right skills for your career? MentorMind provides AI-driven
        skill suggestions, personalized roadmaps, and hands-on projects to
        fast-track your growth. Start your journey today!
      </p>
      <div className="mt-8 flex items-center justify-center gap-x-6 gap-y-3 max-sm:flex-col">
        <Button>
          <Link href="/">Get Started</Link>
        </Button>
        <Button variant="ghost">
          <Link href="/">Explore</Link>
        </Button>
      </div>
    </div>
  );
};
