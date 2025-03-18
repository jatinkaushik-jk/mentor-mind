import React, { useContext, useState } from "react";
import { ProgressContext } from "../../../../Context/ProgressContext";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/guideInput";
import { Label } from "@/components/ui/label";

const Description: React.FC = () => {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error(
      "Description must be used within a ProgressContext.Provider"
    );
  }

  const { userData, setUserData } = context;
  const [customcurrentField, setCustomcurrentField] = useState(
    userData.customcurrentField || ""
  );
  const [customcurrentSkill, setCustomcurrentSkill] = useState(
    userData.customcurrentSkill || ""
  );

  const handleChange = (name: string, value: string) => {
    setUserData((prevUserData) => {
      const updatedData = {
        ...prevUserData,
        [name]: value,
      };
  
      if (value === "Other") {
        if (name === "currentField") {
          updatedData.customcurrentField = customcurrentField;
        } else if (name === "currentSkill") {
          updatedData.customcurrentSkill = customcurrentSkill;
        }
      } else {
        delete updatedData[`custom${name.charAt(0).toUpperCase() + name.slice(1)}`];
      }
  
      return updatedData;
    });
  
    if (value !== "Other") {
      if (name === "currentField") {
        setCustomcurrentField("");
      } else if (name === "currentSkill") {
        setCustomcurrentSkill("");
      }
    }
  };
  

  const handleCustomcurrentFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomcurrentField(event.target.value);
  };

  const handleCustomcurrentFieldBlur = () => {
    if (customcurrentField.trim()) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        customcurrentField,
      }));
    }
  };

  const handleCustomcurrentSkillChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomcurrentSkill(event.target.value);
  };

  const handleCustomcurrentSkillBlur = () => {
    if (customcurrentSkill.trim()) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        customcurrentSkill,
      }));
    }
  };

  const currentFieldOptions = [
    "Tech",
    "Marketing",
    "Finance",
    "Healthcare",
    "Design",
    "Business",
    "Education",
    "Other",
  ];
  const currentSkillsOptions = [
    "JavaScript",
    "React.js",
    "Next.js",
    "tailwind",
    "nodejs",
    "expressjs",
    "figma",
    "photoshop",
    "illustrator",
    "java",
    "C/C++",
    "Other",
  ];
  const experienceOptions = ["Beginner", "Intermediate", "Advanced"];

  return (
    <form className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold text-primary mb-2">
        Background & Experience
      </h1>

      <div className="w-full mb-2">
        <Label className="ml-1 mb-1.5" htmlFor="currentField">
          Current Field
        </Label>
        <Select
          onValueChange={(value) => handleChange("currentField", value)}
          defaultValue={userData.currentField || ""}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your field" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {currentFieldOptions.map((field) => (
                <SelectItem key={field} value={field}>
                  {field}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {userData.currentField === "Other" && (
        <div className="w-full mb-2">
          <Label className="ml-1 mb-1.5" htmlFor="customcurrentField">
            Current field
          </Label>
          <Input
            type="text"
            placeholder="Enter your current field"
            value={customcurrentField}
            onChange={handleCustomcurrentFieldChange}
            onBlur={handleCustomcurrentFieldBlur}
            className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
      )}

      <div className="w-full mb-2">
        <Label className="ml-1 mb-1.5" htmlFor="currentSkill">
          Current Skills
        </Label>
        <Select
          onValueChange={(value) => handleChange("currentSkill", value)}
          defaultValue={userData.currentSkill || ""}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your skills" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {currentSkillsOptions.map((skill) => (
                <SelectItem key={skill} value={skill}>
                  {skill}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {userData.currentSkill === "Other" && (
        <div className="w-full mb-2">
          <Label className="ml-1 mb-1.5" htmlFor="customcurrentSkill">
            Current skill
          </Label>
          <Input
            type="text"
            placeholder="Enter your current skill"
            value={customcurrentSkill}
            onChange={handleCustomcurrentSkillChange}
            onBlur={handleCustomcurrentSkillBlur}
            className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
      )}

      <div className="w-full mb-2">
        <Label className="ml-1 mb-1.5" htmlFor="experience">
          Experience
        </Label>
        <Select
          onValueChange={(value) => handleChange("experience", value)}
          defaultValue={userData.experience || ""}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your experience level" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {experienceOptions.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </form>
  );
};

export default Description;
