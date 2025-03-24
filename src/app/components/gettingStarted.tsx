import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GettingStartedSection = () => {
  return (
    <div id="getting-started" className="my-26 md:my-30 sm:p-4 p-1">
      <div className="bg-accent-foreground dark:bg-accent max-w-[1024px] mx-auto flex flex-col lg:flex-row justify-evenly items-center gap-4 px-2 sm:px-8 pt-12 rounded-lg">
        <div className="pb-12">
          <h3 className="text-5xl font-bold text-pretty my-4 text-slate-50 dark:text-slate-900">
            Your Future Starts Today!
          </h3>
          <p className="text-slate-300 dark:text-slate-600 mb-12 text-pretty">
            Let MentorMind analyze your skills and craft a roadmap to career
            success. Join now and stay ahead!
          </p>
          <Button variant="secondary" asChild className="group">
            <Link href="/guide-me">
              Start Now{" "}
              <ArrowRightCircle className="group-hover:translate-x-0.5 transition" />
            </Link>
          </Button>
        </div>
        <div className="for-illustration lg:w-1/2 w-full px-3 sm:px-0 sm:w-2/3 aspect-square">
          <Image
            src="/success1.png"
            alt="Getting Started Image"
            height="100"
            width={"100"}
            className="object-contain object-center w-full aspect-square invert-100 p-2 sm:p-12"
          />
        </div>
      </div>
    </div>
  );
};

export default GettingStartedSection;
