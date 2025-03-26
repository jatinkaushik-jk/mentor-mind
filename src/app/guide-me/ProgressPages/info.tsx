import React, { useContext, ChangeEvent } from "react";
import { ProgressContext } from "../../Context/ProgressContext";
import { Input } from "@/components/ui/guideInput";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const Info: React.FC = () => {
  const { guideFormData, setGuideFormData } = useContext(ProgressContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGuideFormData((prevData) => ({
      ...prevData,
      userProfile: {
        ...prevData.userProfile,
        [name]: value,
      },
    }));
  };

  const handleAgeChange = (value: string) => {
    setGuideFormData((prevData) => ({
      ...prevData,
      userProfile: {
        ...prevData.userProfile,
        ageGroup: value,
      },
    }));
  };

  const handleEducationChange = (value: string) => {
    setGuideFormData((prevData) => ({
      ...prevData,
      userProfile: {
        ...prevData.userProfile,
        educationLevel: value,
      },
    }));
  };

  const educationOptions = [
    "School",
    "Undergraduate",
    "Post Graduate",
    "Graduate",
    "Self-Learner",
  ];

  const showSelect = (
    label: string,
    name: string,
    options: string[],
    value: string,
    onChange: (value: string) => void
  ) => (
    <div className="w-full mb-2">
      <Label className="ml-1 mb-1.5" htmlFor={name}>
        {label}
      </Label>
      <Select
        onValueChange={onChange}
        defaultValue={value || ""}
        required={true}
        value={undefined}
        name={name}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={`Select ${label}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <div className="flex flex-col gap-3">
      <div>
        <h1 className="text-2xl font-semibold text-primary mb-2">
          Personal Information
        </h1>
      </div>

      <div className="w-full mb-2 flex-1">
        <Label className="ml-1 mb-1.5" htmlFor="fullName">
          Name
        </Label>
        <Input
          onChange={handleChange}
          autoComplete="off"
          value={guideFormData.userProfile.fullName}
          name="fullName"
          type="text"
          placeholder="your name"
          required={true}
          minLength={3}
        />
      </div>
      <div className="w-full mb-2 flex-1">
        <Label className="ml-1 mb-1.5" htmlFor="email">
          Email
        </Label>
        <Input
          onChange={handleChange}
          autoComplete="off"
          value={guideFormData.userProfile.email}
          name="email"
          type="email"
          required={true}
          placeholder="example@email.in"
        />
      </div>
      {showSelect(
        "Age Group",
        "ageGroup",
        ["16-20", "21-25", "26+"],
        guideFormData.userProfile.ageGroup,
        handleAgeChange
      )}
      {showSelect(
        "Current Education",
        "educationLevel",
        educationOptions,
        guideFormData.userProfile.educationLevel,
        handleEducationChange
      )}
    </div>
  );
};

export default Info;
