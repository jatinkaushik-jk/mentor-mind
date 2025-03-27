"use client";
import { useState, useEffect, ReactNode, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Info from "./ProgressPages/info";
import Experience from "./ProgressPages/experience";
import Career from "./ProgressPages/career";
import Recommendation from "./ProgressPages/recommendation";
import Progressbar from "../components/progressbar";
import { GuideFormData, ProgressContext } from "../Context/ProgressContext";
import ProgressbarControl from "../components/progressbarControl";

export default function Guide() {
  const [currentProgress, setCurrentProgress] = useState<number>(1);
  const formElement = useRef<HTMLFormElement>(null);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(true);
  const [direction, setDirection] = useState<string>("next"); // Track transition direction
  const [guideFormData, setGuideFormData] = useState<GuideFormData>({
    userProfile: {
      fullName: "",
      email: "",
      ageGroup: "",
      educationLevel: "",
    },
    backgroundExperience: {
      currentField: "",
      currentSkills: "",
      experience: "",
    },
    careerGoals: {
      preferredCareerPath: "",
      primaryLearningGoal: "",
      learningPreference: "",
    },
  });

  useEffect(() => {
    const storedGuideFormData = localStorage.getItem("guideFormData");
    if (storedGuideFormData) {
      setGuideFormData(JSON.parse(storedGuideFormData));
    }
  }, []);

  const progress = [
    "Personal Info",
    "Experience",
    "Career Goals",
    "Recommendation",
  ];

  useEffect(() => {
    const requiredFields: Record<number, string[]> = {
      1: Object.values(guideFormData.userProfile),
      2: Object.values(guideFormData.backgroundExperience),
      3: Object.values(guideFormData.careerGoals),
    };

    const isFilled =
      requiredFields[currentProgress]?.every(
        (value: string) => value.trim() !== ""
      ) ?? true;

    setIsNextDisabled(!isFilled);
  }, [guideFormData, currentProgress]);

  const displayProgress = (progress: number): ReactNode => {
    const variants = {
      initial: (direction: "next" | "back") => ({
        opacity: 0,
        x: direction === "next" ? 50 : -50, // Next moves from right, back moves from left
      }),
      animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeInOut" },
      },
      exit: (direction: "next" | "back") => ({
        opacity: 0,
        x: direction === "next" ? -50 : 50, // Next exits to left, back exits to right
        transition: { duration: 0.3, ease: "easeInOut" },
      }),
    };

    const pages: { [key: number]: ReactNode } = {
      1: <Info />,
      2: <Experience />,
      3: <Career />,
      4: <Recommendation />,
    };

    return (
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={progress}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
          className="w-full px-4"
        >
          {pages[progress] || <Info />}{" "}
          {/* Fallback to Info if progress is out of bounds */}
        </motion.div>
      </AnimatePresence>
    );
  };

  const handleClick = (action: string) => {
    let newProgress = currentProgress;
    setDirection(action); // Set transition direction

    if (action === "next") {
      if (formElement.current?.checkValidity()) newProgress++;
    } else {
      newProgress--;
    }

    if (newProgress > 0 && newProgress <= progress.length) {
      setCurrentProgress(newProgress);
      if (newProgress === progress.length) {
        const formData = { ...guideFormData };
        setGuideFormData(formData);
        localStorage.setItem("guideFormData", JSON.stringify(formData));
      }
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="lg:w-[1024px] w-full mx-auto shadow-xl min-h-screen pb-2 bg-white">
      <div>
        <Progressbar progress={progress} currentProgress={currentProgress} />
        <form ref={formElement} onSubmit={handleSubmit}>
          <div
            className={`p-4 md:flex flex-row w-full items-center justify-center gap-x-10 ${
              currentProgress < progress.length && "max-w-lg mx-auto"
            }`}
          >
            <ProgressContext.Provider
              value={{
                currentProgress,
                setCurrentProgress,
                guideFormData,
                setGuideFormData,
              }}
            >
              {displayProgress(currentProgress)}
            </ProgressContext.Provider>
          </div>
          <div>
            {currentProgress < progress.length && (
              <ProgressbarControl
                isNextDisabled={isNextDisabled}
                handleClick={handleClick}
                currentProgress={currentProgress}
                progress={progress}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
