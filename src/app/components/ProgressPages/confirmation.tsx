import React, { useContext, useState } from "react";
import { ProgressContext } from "../../../../Context/ProgressContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function Confirmation() {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error(
      "Confirmation must be used within a ProgressContext.Provider"
    );
  }

  const { userData, setUserData } = context;
  const [otherCareerGoal, setOtherCareerGoal] = useState(
    userData.otherCareerGoal || ""
  );
  const [otherPrimaryLearningGoal, setOtherPrimaryLearningGoal] = useState(
    userData.otherPrimaryLearningGoal || ""
  );
  const [otherLearningPreference, setOtherLearningPreference] = useState(
    userData.otherLearningPreference || ""
  );

  const handleChange = (field: string, value: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  const handleOtherChange = (field: string, value: string) => {
    if (field === "careerGoal") {
      setOtherCareerGoal(value);
    } else if (field === "primaryLearningGoal") {
      setOtherPrimaryLearningGoal(value);
    } else if (field === "learningPreference") {
      setOtherLearningPreference(value);
    }
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  // Experience options
  const experienceOptions = [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advanced", label: "Advanced" },
  ];

  // Career Goals options
  const careerGoalsOptions = [
    { value: "Software Developer", label: "Software Developer" },
    { value: "Data Science", label: "Data Science" },
    { value: "UI/UX", label: "UI/UX" },
    { value: "AI/ML", label: "AI/ML" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Other", label: "Other" },
  ];

  const primaryLearningGoalOptions = [
    { value: "Job", label: "Job" },
    { value: "Internship", label: "Internship" },
    { value: "Freelancing", label: "Freelancing" },
    { value: "Business", label: "Business" },
    { value: "General Interest", label: "General Interest" },
    { value: "Other", label: "Other" },
  ];

  const learningPreferenceOptions = [
    { value: "Videos", label: "Videos" },
    { value: "Hands-on Projects", label: "Hands-on Projects" },
    { value: "Books/Articles", label: "Books/Articles" },
    { value: "Interactive Courses", label: "Interactive Courses" },
    { value: "Other", label: "Other" },
  ];

  const Options = [
    {
      id: "experience",
      label: "Years of Experience",
      options: experienceOptions,
    },
    {
      id: "careerGoal",
      label: "Career Goals",
      options: careerGoalsOptions,
    },
    {
      id: "primaryLearningGoal",
      label: "Primary Learning Goals",
      options: primaryLearningGoalOptions,
    },
    {
      id: "learningPreference",
      label: "Learning Preference",
      options: learningPreferenceOptions,
    },
  ];

  return (
    <form className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold text-primary mb-2">
        Professional Information
      </h1>

      {/* Reusable Select Component */}
      {Options.map(({ id, label, options }) => (
        <div key={id} className="w-full mb-2">
          <label className="text-gray-700 ml-1" htmlFor={id}>
            {label}
          </label>
          <Select
            onValueChange={(value) => handleChange(id, value)}
            defaultValue={userData[id] || ""}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {options.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {id === "careerGoal" && userData[id] === "Other" && (
            <div className="mt-4 ml-1px">
              <label className="ml-1" htmlFor="">Enter your Career Goals</label>
              <Input
                type="text"
                className="rounded-md"
                placeholder="Enter your goal"
                value={otherCareerGoal}
                onChange={(e) => handleOtherChange(id, e.target.value)}
              />
            </div>
          )}
          {id === "primaryLearningGoal" && userData[id] === "Other" && (
            <div className="mt-4 ml-1px">
              <label className="ml-1" htmlFor="">Enter your Primary Learning Goal</label>
              <Input
                type="text"
                className="rounded-md"
                placeholder="Enter your goal"
                value={otherPrimaryLearningGoal}
                onChange={(e) => handleOtherChange(id, e.target.value)}
              />
            </div>
          )}
          {id === "learningPreference" && userData[id] === "Other" && (
            <div className="mt-4 ml-1px">
              <label className="ml-1" htmlFor="">Enter your Learning Preference</label>
              <Input
                type="text"
                className="rounded-md"
                placeholder="Enter your preference"
                value={otherLearningPreference}
                onChange={(e) => handleOtherChange(id, e.target.value)}
              />
            </div>
          )}
        </div>
      ))}
    </form>
  );
}
