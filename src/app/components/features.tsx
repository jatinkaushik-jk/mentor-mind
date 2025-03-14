import { Presentation } from "lucide-react";

const FeatureSection = () => {
  return (
    <div
      id="features"
      className="max-w-[1024px] mx-auto px-4 md:px-16 lg:px-2 my-36 md:my-52"
    >
      <h3 className="text-4xl font-bold text-pretty my-4">
        Your AI-Powered Career Accelerator
      </h3>
      <p>
        MentorMind is built to guide, mentor, and empower you with the best
        career resources.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 text-center sm:w-5/6 mx-auto">
        <div className="feature-card p-4 aspect-square w-full bg-cyan-200 rounded-lg flex flex-col justify-evenly items-center ">
          <div className="p-4 rounded-full border-2 border-accent-foreground">
            <Presentation />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">Smart Skill Finder </p>
            <p>
              AI suggests high-demand skills based on your interests & market
              trends.
            </p>
          </div>
        </div>
        <div className="feature-card p-4 aspect-square w-full bg-cyan-200 rounded-lg flex flex-col justify-evenly items-center ">
          <div className="p-4 rounded-full border-2 border-accent-foreground">
            <Presentation />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">Smart Skill Finder </p>
            <p>
              AI suggests high-demand skills based on your interests & market
              trends.
            </p>
          </div>
        </div>
        <div className="feature-card p-4 aspect-square w-full bg-cyan-200 rounded-lg flex flex-col justify-evenly items-center ">
          <div className="p-4 rounded-full border-2 border-accent-foreground">
            <Presentation />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">Smart Skill Finder </p>
            <p>
              AI suggests high-demand skills based on your interests & market
              trends.
            </p>
          </div>
        </div>
        <div className="feature-card p-4 aspect-square w-full bg-cyan-200 rounded-lg flex flex-col justify-evenly items-center ">
          <div className="p-4 rounded-full border-2 border-accent-foreground">
            <Presentation />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">Smart Skill Finder </p>
            <p>
              AI suggests high-demand skills based on your interests & market
              trends.
            </p>
          </div>
        </div>
        <div className="feature-card p-4 aspect-square w-full bg-cyan-200 rounded-lg flex flex-col justify-evenly items-center ">
          <div className="p-4 rounded-full border-2 border-accent-foreground">
            <Presentation />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">Smart Skill Finder </p>
            <p>
              AI suggests high-demand skills based on your interests & market
              trends.
            </p>
          </div>
        </div>
        <div className="feature-card p-4 aspect-square w-full bg-cyan-200 rounded-lg flex flex-col justify-evenly items-center ">
          <div className="p-4 rounded-full border-2 border-accent-foreground">
            <Presentation />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">Smart Skill Finder </p>
            <p>
              AI suggests high-demand skills based on your interests & market
              trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
