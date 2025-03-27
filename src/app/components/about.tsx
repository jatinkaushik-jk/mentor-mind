import { Map, Presentation, Shapes, Sparkles } from "lucide-react";
import Image from "next/image";
import aboutImage from "@/../public/about-image.svg";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row justify-evenly items-center gap-4 gap-y-20 sm:gap-y-24 mt-12 my-36 md:my-52"
    >
      <div className="about-left">
        <Image src={aboutImage} alt="about-image" className="h-500px w-20px" />
      </div>
      <div className="about-right lg:w-[45%] w-5/6">
        <h3 className="text-4xl font-bold text-pretty my-4">
          Empowering Learners, Transforming Careers
        </h3>
        <p className="mb-12">
          At MentorMind, we simplify career growth by using AI to suggest
          trending skills, learning paths, and mentorship opportunities. Whether
          you’re a beginner or an expert, our platform ensures you stay ahead in
          your career journey.
        </p>
        <ul className="grid sm:grid-cols-2 gap-6 mt-4">
          <li>
            <div className="w-16 mb-4 aspect-square bg-secondary rounded-full shadow-lg flex justify-center items-center">
              <Sparkles />
            </div>
            <h4 className="font-bold">AI-Powered Skill Recommendations</h4>
            <p>
              Get the best skill suggestions based on your goals & market trends
            </p>
          </li>
          <li>
            <div className="w-16 mb-4 aspect-square bg-secondary rounded-full shadow-lg flex justify-center items-center">
              <Map />
            </div>
            <h4 className="font-bold">Personalized Learning Roadmaps</h4>
            <p>Structured learning plans tailored just for you</p>
          </li>
          <li>
            <div className="w-16 mb-4 aspect-square bg-secondary rounded-full shadow-lg flex justify-center items-center">
              <Presentation />
            </div>
            <h4 className="font-bold">Real-World Project Challenges</h4>
            <p>Hands-on projects to strengthen your expertise</p>
          </li>
          <li>
            <div className="w-16 mb-4 aspect-square bg-secondary rounded-full shadow-lg flex justify-center items-center">
              <Shapes />
            </div>
            <h4 className="font-bold">AI-Driven Mentorship</h4>
            <p>Instant AI guidance for career, interviews, and skill doubts</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
