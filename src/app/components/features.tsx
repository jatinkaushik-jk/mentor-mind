import {
  Waypoints,
  BrainCircuit,
  BotMessageSquare,
  TrendingUpDown,
  ChartArea,
  ClipboardCheck,
} from "lucide-react";

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
        <div className="feature-card p-4 aspect-square w-full bg-accent shadow-md rounded-lg flex flex-col justify-evenly items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="p-4 rounded-full border-2 border-accent-foreground">
            <BrainCircuit />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">Smart Skill Finder </p>
            <p>
              AI suggests high-demand skills based on your interests & market
              trends.
            </p>
          </div>
        </div>
        <div className="feature-card p-4 aspect-square w-full bg-accent shadow-md rounded-lg flex flex-col justify-evenly items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="p-4 rounded-full border-2 border-accent-foreground">
            <Waypoints />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">Interactive Learning Roadmaps </p>
            <p>
              A structured step-by-step plan with courses, tutorials, and
              projects.
            </p>
          </div>
        </div>
        <div className="feature-card p-4 aspect-square w-full bg-accent shadow-md rounded-lg flex flex-col justify-evenly items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="p-4 rounded-full border-2 border-accent-foreground">
            <BotMessageSquare />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">AI-Powered Mentor </p>
            <p>
              Get instant answers to career, skill, and interview-related
              queries.
            </p>
          </div>
        </div>
        <div className="feature-card p-4 aspect-square w-full bg-accent shadow-md rounded-lg flex flex-col justify-evenly items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="p-4 rounded-full border-2 border-accent-foreground">
            <ClipboardCheck />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">Hands-On Projects </p>
            <p>
              Work on industry-relevant challenges to build real-world
              experience.
            </p>
          </div>
        </div>
        <div className="feature-card p-4 aspect-square w-full bg-accent shadow-md rounded-lg flex flex-col justify-evenly items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="p-4 rounded-full border-2 border-accent-foreground">
            <ChartArea />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">Live Progress Tracking </p>
            <p>
              Monitor your learning journey, achievements, and certifications.
            </p>
          </div>
        </div>
        <div className="feature-card p-4 aspect-square w-full bg-accent shadow-md rounded-lg flex flex-col justify-evenly items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="p-4 rounded-full border-2 border-accent-foreground">
            <TrendingUpDown />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">Career Growth Insights </p>
            <p>Get job trends, salary insights, and expert guidance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
