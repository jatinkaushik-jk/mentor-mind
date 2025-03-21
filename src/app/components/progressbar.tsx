"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface ProgressItem {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
}

interface ProgressbarProps {
  progress: string[];
  currentProgress: number;
}

const Progressbar: React.FC<ProgressbarProps> = ({
  progress,
  currentProgress,
}) => {
  const [newProgress, setNewProgress] = useState<ProgressItem[]>([]);
  const progressRef = useRef<ProgressItem[] | null>(null); // ✅ Fix: Explicit type with null default

  const updateProgress = (progressNumber: number, progress: ProgressItem[]) => {
    return progress.map((item, index) => ({
      ...item,
      highlighted: index === progressNumber,
      selected: index <= progressNumber,
      completed: index < progressNumber,
    }));
  };

  useEffect(() => {
    const progressState: ProgressItem[] = progress.map((desc, index) => ({
      description: desc,
      completed: false,
      highlighted: index === 0,
      selected: index === 0,
    }));

    progressRef.current = progressState; // ✅ Assign to ref
    setNewProgress(updateProgress(currentProgress - 1, progressState));
  }, [progress, currentProgress]);

  return (
    <div className="px-4 flex flex-col lg:flex-row justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        <Image
          src="/logo-ltr-dark.png"
          alt="logo"
          width={200}
          height={50}
          className="aspect-auto "
        />
      </Link>
      <div className="p-4 flex flex-wrap gap-y-2 gap-x-0 items-center">
        {newProgress.map((progress, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-y-3 items-center text-primary"
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 md:h-9 md:w-9 h-7 w-7 flex items-center justify-center py-3 ${
                progress.selected
                  ? "text-primary font-bold border border-primary"
                  : "bg-white"
              }`}
            >
              {progress.completed && index < currentProgress - 1 ? (
                <span className="text-primary font-bold text-base md:text-xl">
                  &#10003;
                </span>
              ) : (
                index + 1
              )}
            </div>
            <div
              className={`text-sm text-center w-20 sm:w-24 md:w-32 text-[0.5rem] md:text-xs font-medium uppercase ${
                progress.highlighted ? "text-primary" : "text-gray-400"
              }`}
            >
              {progress.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progressbar;
