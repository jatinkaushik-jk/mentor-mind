"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/guideInput";
import { Button } from "@/components/ui/button";
import { GuideFormData } from "@/app/Context/ProgressContext";

const Setting = () => {
  const [userData, setUserData] = useState<GuideFormData | null>(null);

  useEffect(() => {
    const storedGuideFormData = localStorage.getItem("guideFormData");
    if (storedGuideFormData) {
      setUserData(JSON.parse(storedGuideFormData));
    }
  }, []);

  async function handleSaveData() {
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

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8 w-full">
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
              <h3 className="text-lg font-semibold text-primary">
                Personal Information
              </h3>
              <div className="py-4 space-y-2">
                <label className="block text-gray-600">
                  <strong>Name</strong>
                </label>
                <Input
                  type="text"
                  value={userData?.userProfile.fullName}
                  required
                  disabled={userData ? true : false}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <label className="block text-gray-600">
                  <strong>Email</strong>
                </label>
                <Input
                  type="email"
                  value={userData?.userProfile.email}
                  required
                  disabled={userData ? true : false}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <label className="block text-gray-600">
                  <strong>Age Group</strong>
                </label>
                <Input
                  type="text"
                  value={userData?.userProfile.ageGroup}
                  required
                  disabled={userData ? true : false}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <label className="block text-gray-600">
                  <strong>Education Level</strong>
                </label>
                <Input
                  type="text"
                  value={userData?.userProfile.educationLevel}
                  required
                  disabled={userData ? true : false}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            {/* Background Experience */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-primary">
                Background & Experience
              </h3>
              <div className="py-4 space-y-2">
                <label className="block text-gray-600">
                  <strong>Current Field</strong>
                </label>
                <Input
                  type="text"
                  value={userData?.backgroundExperience.currentField}
                  required
                  disabled={userData ? true : false}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <label className="block text-gray-600">
                  <strong>Current Skills</strong>
                </label>
                <Input
                  type="text"
                  value={userData?.backgroundExperience.currentSkills}
                  required
                  disabled={userData ? true : false}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <label className="block text-gray-600">
                  <strong>Experience</strong>
                </label>
                <Input
                  type="text"
                  value={userData?.backgroundExperience.experience}
                  required
                  disabled={userData ? true : false}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            {/* Career Goals */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-primary">
                Career Goals
              </h3>
              <div className="py-4 space-y-2">
                <label className="block text-gray-600">
                  <strong>Preferred Career Path</strong>
                </label>
                <Input
                  type="text"
                  value={userData?.careerGoals.preferredCareerPath}
                  required
                  disabled={userData ? true : false}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <label className="block text-gray-600">
                  <strong>Primary Learning Goal</strong>
                </label>
                <Input
                  type="text"
                  value={userData?.careerGoals.primaryLearningGoal}
                  required
                  disabled={userData ? true : false}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <label className="block text-gray-600">
                  <strong>Learning Preference</strong>
                </label>
                <Input
                  type="text"
                  value={userData?.careerGoals.learningPreference}
                  required
                  disabled={userData ? true : false}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="flex justify-end w-full my-4 px-2">
              <Button
                disabled={userData ? true : false}
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
