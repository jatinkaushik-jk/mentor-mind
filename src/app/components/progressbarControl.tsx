import React from "react";
import { Button } from "@/components/ui/button";

interface ProgressbarControlProps {
  handleClick: (action: string) => void;
  currentProgress: number;
  progress: string[];
  isNextDisabled: boolean;
}

const ProgressbarControl: React.FC<ProgressbarControlProps> = ({
  handleClick,
  currentProgress,
  isNextDisabled,
}) => {
  return (
    <div className="container flex justify-between fixed left-1/2 -translate-x-1/2 bottom-0 p-4 bg-white w-full lg:w-[1024px]">
      <Button
        variant="outline"
        className="bg-white"
        onClick={() => handleClick("back")}
        disabled={currentProgress === 1}
      >
        BACK
      </Button>
      <Button
        type="submit"
        onClick={() => handleClick("next")}
        disabled={isNextDisabled}
      >
        NEXT
      </Button>
    </div>
  );
};

export default ProgressbarControl;
