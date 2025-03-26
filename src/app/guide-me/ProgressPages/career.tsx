import React, { useContext } from "react";
import { ProgressContext } from "../../Context/ProgressContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function Career() {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error(
      "Confirmation must be used within a ProgressContext.Provider"
    );
  }

  const { guideFormData, setGuideFormData } = context;

  const handleChange = (field: string, value: string) => {
    setGuideFormData((prevData) => ({
      ...prevData,
      careerGoals: { ...prevData.careerGoals, [field]: value },
    }));
  };

  const Options = [
    {
      id: "preferredCareerPath",
      label: "Prefer Career Path",
      options: [
        "Software Developer",
        "Data Science",
        "UI/UX",
        "AI/ML",
        "Cybersecurity",
      ],
    },
    {
      id: "primaryLearningGoal",
      label: "Primary Learning Goals",
      options: [
        "Job",
        "Internship",
        "Freelancing",
        "Business",
        "General Interest",
      ],
    },
    {
      id: "learningPreference",
      label: "Learning Preference",
      options: [
        "Videos",
        "Hands-on Projects",
        "Books/Articles",
        "Interactive Courses",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold text-primary mb-2">Career Goals</h1>

      {Options.map(({ id, label, options }) => (
        <div key={id} className="w-full mb-2">
          <Label className="ml-1 mb-1.5" htmlFor={id}>
            {label}
          </Label>
          <Select
            onValueChange={(value) => handleChange(id, value)}
            defaultValue={guideFormData.careerGoals[id] || ""}
            required={true}
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
        </div>
      ))}
    </div>
  );
}
