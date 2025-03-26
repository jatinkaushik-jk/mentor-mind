import React, { useContext } from "react";
import { ProgressContext } from "../../Context/ProgressContext";
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

const Experience: React.FC = () => {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error(
      "Description must be used within a ProgressContext.Provider"
    );
  }

  const { guideFormData, setGuideFormData } = context;

  const handleChange = (name: string, value: string) => {
    setGuideFormData((prevData) => ({
      ...prevData,
      backgroundExperience: { ...prevData.backgroundExperience, [name]: value },
    }));
  };

  const currentFieldOptions = [
    "Tech",
    "Marketing",
    "Finance",
    "Healthcare",
    "Design",
    "Business",
    "Education",
  ];
  const experienceOptions = ["Beginner", "Intermediate", "Advanced"];

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold text-primary mb-2">
        Background & Experience
      </h1>

      <div className="w-full mb-2">
        <Label className="ml-1 mb-1.5" htmlFor="currentField">
          Current Field
        </Label>
        <Select
          onValueChange={(value) => handleChange("currentField", value)}
          defaultValue={guideFormData.backgroundExperience.currentField || ""}
          name="currentField"
          required={true}
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

      <div className="w-full mb-2">
        <Label className="ml-1 mb-1.5" htmlFor="currentSkills">
          Current Skills
        </Label>
        <Input
          type="text"
          name="currentSkills"
          placeholder="Javascript, Python, Figma, etc."
          value={guideFormData.backgroundExperience.currentSkills || ""}
          onChange={(e) => handleChange("currentSkills", e.target.value)}
          maxLength={100}
          required={true}
          className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-primary"
        />
      </div>
      <div className="w-full mb-2">
        <Label className="ml-1 mb-1.5" htmlFor="experience">
          Experience
        </Label>
        <Select
          onValueChange={(value) => handleChange("experience", value)}
          defaultValue={guideFormData.backgroundExperience.experience || ""}
          required={true}
          name="experience"
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
    </div>
  );
};

export default Experience;
