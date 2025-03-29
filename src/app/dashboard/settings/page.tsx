"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "@/components/ui/guideInput";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

type SettingsFormData = {
  isDataExist: boolean;
  userProfile: {
    fullName: string;
    email: string;
    ageGroup: string;
    educationLevel: string;
  };
  backgroundExperience: {
    currentField: string;
    currentSkills: string;
    experience: string;
  };
  careerGoals: {
    preferredCareerPath: string;
    primaryLearningGoal: string;
    learningPreference: string;
  };
};

const Setting = () => {
  const [userData, setUserData] = useState<SettingsFormData>({
    isDataExist: false,
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
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);

  useEffect(() => {
    const storedGuideFormData = localStorage.getItem("guideFormData");
    if (storedGuideFormData) {
      setUserData({ ...JSON.parse(storedGuideFormData), isDataExist: true });
    }
  }, []);

  const handlePersonalInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      userProfile: {
        ...prevData.userProfile,
        [name]: value,
      },
    }));
  };
  const handleExperienceInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      backgroundExperience: {
        ...prevData.backgroundExperience,
        [name]: value,
      },
    }));
  };

  const handleExperienceOptionChange = (name: string, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      backgroundExperience: { ...prevData.backgroundExperience, [name]: value },
    }));
  };
  const handlePersonalOptionChange = (name: string, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      userProfile: { ...prevData.userProfile, [name]: value },
    }));
  };
  const handleCareersOptionChange = (name: string, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      careerGoals: { ...prevData.careerGoals, [name]: value },
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
  const CareersOptions = [
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

  useEffect(() => {
    const requiredFields: Record<number, string[]> = {
      0: Object.values(userData.userProfile),
      1: Object.values(userData.backgroundExperience),
      2: Object.values(userData.careerGoals),
    };

    const isFilled =
      requiredFields[0]?.every((value: string) => value.trim() !== "") &&
      requiredFields[1]?.every((value: string) => value.trim() !== "") &&
      requiredFields[2]?.every((value: string) => value.trim() !== "")
        ? true
        : false;

    setIsFormFilled(isFilled);
  }, [userData]);

  async function handleSaveData() {
    console.log(isFormFilled);
    if (!isFormFilled) {
      alert("Please fill all required fields");
    }

    // try {
    //   const response = await axios.post("/api/your-endpoint", { guideFormData: userData });
    //   if (response.data.success) {
    //     console.log("Data saved successfully:", response.data);
    //   } else {
    //     console.error("Failed to save data:", response.data.message);
    //   }
    // } catch (error:any) {
    //   console.error("Error saving data:", error.response?.data || error.message);
    // }
  }

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
        name={name}
        disabled={userData?.isDataExist ? true : false}
      >
        <SelectTrigger className="w-full">
          <SelectValue
            placeholder={
              userData?.isDataExist
                ? userData?.userProfile?.[name]
                : `Select ${label}`
            }
          />
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
    <div className="max-w-5xl mx-auto p-6 px-0 sm:px-6 space-y-8 w-full">
      {/* Personal Info Section */}
      <div className="bg-white shadow-xl rounded-lg p-6">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-2xl font-semibold text-primary">
            Profile Details
          </h2>
        </div>

        {
          <form
            className="flex flex-col gap-4 w-full pt-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Personal Info */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Personal Information
              </h3>
              <div className="py-4 space-y-2 flex flex-col justify-start items-start gap-y-4">
                <div className="w-full mb-2 flex-1">
                  <Label className="ml-1 mb-1.5" htmlFor="fullName">
                    Name
                  </Label>
                  <Input
                    onChange={handlePersonalInputChange}
                    autoComplete="off"
                    value={userData?.userProfile?.fullName || ""}
                    name="fullName"
                    type="text"
                    placeholder="your name"
                    required={true}
                    minLength={3}
                    disabled={userData?.isDataExist ? true : false}
                  />
                </div>
                <div className="w-full mb-2 flex-1">
                  <Label className="ml-1 mb-1.5" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    onChange={handlePersonalInputChange}
                    autoComplete="off"
                    value={userData?.userProfile?.email || ""}
                    name="email"
                    type="email"
                    required={true}
                    disabled={userData?.isDataExist ? true : false}
                    placeholder="example@email.in"
                  />
                </div>
                {showSelect(
                  "Age Group",
                  "ageGroup",
                  ["16-20", "21-25", "26+"],
                  userData?.userProfile?.ageGroup || "",
                  (value) => handlePersonalOptionChange("ageGroup", value)
                )}
                {showSelect(
                  "Current Education",
                  "educationLevel",
                  [
                    "School",
                    "Undergraduate",
                    "Post Graduate",
                    "Graduate",
                    "Self-Learner",
                  ],
                  userData?.userProfile?.educationLevel || "",
                  (value) => handlePersonalOptionChange("educationLevel", value)
                )}
              </div>
            </div>

            {/* Background Experience */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Background & Experience
              </h3>
              <div className="py-4 space-y-2 flex flex-col justify-start items-start gap-y-4">
                <div className="w-full mb-2">
                  <Label className="ml-1 mb-1.5" htmlFor="currentField">
                    Current Field
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleExperienceOptionChange("currentField", value)
                    }
                    defaultValue={
                      userData?.backgroundExperience?.currentField || ""
                    }
                    name="currentField"
                    required={true}
                    disabled={userData?.isDataExist ? true : false}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue
                        placeholder={
                          userData?.isDataExist
                            ? userData?.backgroundExperience.currentField
                            : "Select your field"
                        }
                      />
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
                    value={userData?.backgroundExperience?.currentSkills || ""}
                    onChange={handleExperienceInputChange}
                    maxLength={100}
                    required={true}
                    disabled={userData?.isDataExist ? true : false}
                    className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="w-full mb-2">
                  <Label className="ml-1 mb-1.5" htmlFor="experience">
                    Experience
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleExperienceOptionChange("experience", value)
                    }
                    defaultValue={
                      userData?.backgroundExperience?.experience || ""
                    }
                    required={true}
                    disabled={userData?.isDataExist ? true : false}
                    name="experience"
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue
                        placeholder={
                          userData?.isDataExist
                            ? userData?.backgroundExperience.experience
                            : "Select your experience level"
                        }
                      />
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
            </div>

            {/* Career Goals */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Career Goals
              </h3>
              <div className="py-4 space-y-2 flex flex-col justify-start items-start gap-y-4">
                {CareersOptions.map(({ id, label, options }, index) => (
                  <div key={id} className="w-full mb-2">
                    <Label className="ml-1 mb-1.5" htmlFor={id}>
                      {label}
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleCareersOptionChange(id, value)
                      }
                      defaultValue={
                        Object.values(userData?.careerGoals)[index] || ""
                      }
                      required={true}
                      disabled={userData?.isDataExist ? true : false}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder={
                            userData?.isDataExist
                              ? userData?.careerGoals?.[id]
                              : `Select ${label.toLowerCase()}`
                          }
                        />
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
            </div>
            <div className="flex justify-end w-full my-4 px-2">
              <Button
                disabled={userData?.isDataExist ? true : false}
                type="submit"
                onClick={handleSaveData}
              >
                Save
              </Button>
            </div>
          </form>
        }
      </div>
    </div>
  );
};

export default Setting;
