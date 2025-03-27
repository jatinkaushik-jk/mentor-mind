import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import img from "@/../public/hero-bg.svg";
import { Stars } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div id="home" className="w-full h-full mt-2 relative">
      {" "}
      <Image
        src={img}
        alt=""
        className="hidden sm:flex absolute aspect-auto w-[95%] left-1/2 -translate-x-1/2 bottom-1/3 translate-y-1/2 -z-1 opacity-70"
      />
      <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem] text-center pt-10 md:pt-20 lg:pt-40 pb-20">
        <h1 className="mx-auto max-w-4xl text-balance text-3xl/9 font-bold tracking-tight text-gray-950 dark:text-gray-50 sm:text-5.5xl md:text-6xl">
          Unlock Your Potential with{" "}
          <div className="inline-block relative ">
            <Stars className="absolute top-0 -left-1.5 md:-left-4 w-3 md:w-auto" />{" "}
            AI-Powered
          </div>{" "}
          Mentorship
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base/6 text-gray-600 dark:text-gray-300 sm:text-lg">
          Need the right skills for your career? MentorMind provides AI-driven
          skill suggestions, personalized roadmaps, and hands-on projects to
          fast-track your growth. Start your journey today!
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6 gap-y-3 max-sm:flex-col">
          <Button>
            <Link href="/guide-me">Get Started</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/">Explore</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
