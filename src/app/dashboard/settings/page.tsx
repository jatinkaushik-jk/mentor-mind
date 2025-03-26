"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/guideInput";
// import { CLerkProfilePage } from "./[[...rest]]/page";

const Setting = () => {
  const [guideFormData, setGuideFormData] = useState<any>(null);

  useEffect(() => {
    const storedGuideFormData = localStorage.getItem("GuideFormData");
    if (storedGuideFormData) {
      setGuideFormData(JSON.parse(storedGuideFormData));
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8 w-full">
      {/* Profile Header */}
      {/* <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Profile Settings</h1>
        <p className="text-gray-500">Manage your personal and career details</p>
      </div> */}

      {/* Personal Info Section */}
      <div className="bg-white shadow-xl rounded-lg p-6">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-2xl font-semibold text-primary">Profile Details</h2>
          {/* <Link href="/guide-me" className="text-blue-600 hover:underline">
            Want to edit?
          </Link> */}
        </div>

        {guideFormData ? (
          <div className="flex flex-col gap-4 w-full pt-4">
            {/* Personal Info */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-primary">Personal Information</h3>
              <div className="py-4 space-y-2">
                <label className="block text-gray-600"><strong>Name</strong></label>
                <Input
                  type="text"
                  value={guideFormData.userProfile.fullName}
                  disabled
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <label className="block text-gray-600"><strong>Email</strong></label>
                <Input
                  type="email"
                  value={guideFormData.userProfile.email}
                  disabled
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <label className="block text-gray-600"><strong>Age Group</strong></label>
                <Input
                  type="text"
                  value={guideFormData.userProfile.ageGroup}
                  disabled
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <label className="block text-gray-600"><strong>Education Level</strong></label>
                <Input
                  type="text"
                  value={guideFormData.userProfile.educationLevel}
                  disabled
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            {/* Background Experience */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-primary">Background & Experience</h3>
              <div className="py-4 space-y-2">
                <label className="block text-gray-600"><strong>Current Field</strong></label>
                <Input
                  type="text"
                  value={guideFormData.backgroundExperience.currentField}
                  disabled
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <label className="block text-gray-600"><strong>Current Skills</strong></label>
                <Input
                  type="text"
                  value={guideFormData.backgroundExperience.currentSkills}
                  disabled
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <label className="block text-gray-600"><strong>Experience</strong></label>
                <Input
                  type="text"
                  value={guideFormData.backgroundExperience.experience}
                  disabled
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            {/* Career Goals */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-primary">Career Goals</h3>
              <div className="py-4 space-y-2">
                <label className="block text-gray-600"><strong>Preferred Career Path</strong></label>
                <Input
                  type="text"
                  value={guideFormData.careerGoals.preferredCareerPath}
                  disabled
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <label className="block text-gray-600"><strong>Primary Learning Goal</strong></label>
                <Input
                  type="text"
                  value={guideFormData.careerGoals.primaryLearningGoal}
                  disabled
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <label className="block text-gray-600"><strong>Learning Preference</strong></label>
                <Input
                  type="text"
                  value={guideFormData.careerGoals.learningPreference}
                  disabled
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 py-4">
            No data found. Please fill out the form by clicking <b>want to edit?</b> 
          </p>
        )}
      </div>
    </div>
  );
};

export default Setting;