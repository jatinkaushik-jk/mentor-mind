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
import { Input } from "@/components/ui/guideInput";
import { Label } from "@/components/ui/label";

export default function Confirmation() {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error(
      "Confirmation must be used within a ProgressContext.Provider"
    );
  }

  const { userData, setUserData } = context;

  const [customInputs, setCustomInputs] = useState({
    careerGoal: userData.otherCareerGoal || "",
    primaryLearningGoal: userData.otherPrimaryLearningGoal || "",
    learningPreference: userData.otherLearningPreference || "",
  });

  const handleChange = (field: string, value: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
      [`other${field.charAt(0).toUpperCase() + field.slice(1)}`]: value === "Other" ? customInputs[field] : "",
    }));

    if (value !== "Other") {
      setCustomInputs((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleOtherChange = (field: string, value: string) => {
    setCustomInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleOtherBlur = (field: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [`other${field.charAt(0).toUpperCase() + field.slice(1)}`]: customInputs[field],
    }));
  };

  const Options = [
    {
      id: "careerGoal",
      label: "Prefer Career Goals",
      options: ["Software Developer", "Data Science", "UI/UX", "AI/ML", "Cybersecurity", "Other"],
    },
    {
      id: "primaryLearningGoal", 
      label: "Primary Learning Goals",
      options: ["Job", "Internship", "Freelancing", "Business", "General Interest", "Other"],
    },
    {
      id: "learningPreference",
      label: "Learning Preference", 
      options: ["Videos", "Hands-on Projects", "Books/Articles", "Interactive Courses"],
    },
  ];

  return (
    <form className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold text-primary mb-2">
        Career Goals
      </h1>

      {Options.map(({ id, label, options }) => (
        <div key={id} className="w-full mb-2">
          <Label className="ml-1 mb-1.5" htmlFor={id}>
            {label}
          </Label>
          <Select
            onValueChange={(value) => handleChange(id, value)}
            defaultValue={userData[id] || ""}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {userData[id] === "Other" && id !== "experience" && (
            <div className="w-full mt-2">
              <Label className="ml-1 mb-1.5" htmlFor={id}>Enter your {label}</Label>
              <Input
                type="text"
                placeholder={`Enter your ${label.toLowerCase()}`}
                value={customInputs[id]}
                onChange={(e) => handleOtherChange(id, e.target.value)}
                onBlur={() => handleOtherBlur(id)}
                className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
          )}
        </div>
      ))}
    </form>
  );
}
