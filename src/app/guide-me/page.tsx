"use client";
import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Info from "./ProgressPages/info";
import Description from "./ProgressPages/experience";
import Confirmation from "./ProgressPages/career";
import Success from "./ProgressPages/recommendation";
import Progressbar from "../components/progressbar";
import { ProgressContext } from "../../../Context/ProgressContext";
import ProgressbarControl from "../components/progressbarControl";

interface UserData {
  [key: string]: any;
}

interface FinalData {
  userData: UserData;
}

export default function Guide() {
  const [currentProgress, setCurrentProgress] = useState<number>(1);
  const [userData, setUserData] = useState<UserData>({});
  const [finalData, setFinalData] = useState<FinalData | null>(null);
  const [direction, setDirection] = useState<"next" | "back">("next"); // Track transition direction

  useEffect(() => {
    const storedFinalData = localStorage.getItem("finalData");
    if (storedFinalData) {
      console.log("Final Data:", JSON.parse(storedFinalData));
    }
  }, []);

  const progress = [
    "Personal Info",
    "Experience",
    "Career Goals",
    "Recommendation",
  ];

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
      2: <Description />,
      3: <Confirmation />,
      4: <Success />,
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
        >
          {pages[progress] || <Info />}{" "}
          {/* Fallback to Info if progress is out of bounds */}
        </motion.div>
      </AnimatePresence>
    );
  };

  const handleClick = (action: "next" | "back") => {
    let newProgress = currentProgress;
    setDirection(action); // Set transition direction

    if (action === "next") {
      newProgress++;
    } else {
      newProgress--;
    }

    if (newProgress > 0 && newProgress <= progress.length) {
      setCurrentProgress(newProgress);
      if (newProgress === progress.length) {
        const allData = { userData };
        setFinalData(allData);
        localStorage.setItem("finalData", JSON.stringify(allData));
        console.log("Final Data:", allData);
      }
    }
  };

  return (
    <div className="lg:w-[1024px] w-full mx-auto shadow-xl min-h-screen pb-2 bg-white">
      <div className="container">
        <Progressbar progress={progress} currentProgress={currentProgress} />

        <div className="p-4">
          <ProgressContext.Provider
            value={{
              currentProgress,
              setCurrentProgress,
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displayProgress(currentProgress)}
          </ProgressContext.Provider>

          <div>
            {currentProgress < progress.length && (
              <ProgressbarControl
                handleClick={handleClick}
                currentProgress={currentProgress}
                progress={progress}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
