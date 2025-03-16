'use client';

import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { ProgressContext } from '../../../../Context/ProgressContext';

const Success: React.FC = () => {
  const context = useContext(ProgressContext);
  const router = useRouter();

  useEffect(() => {
    if (context) {
      const { userData, finalData } = context;
      if (typeof window !== 'undefined') {
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('finalData', JSON.stringify(finalData));

        // Log finalData to console
        console.log("Final Data:", finalData);
      }
    }
  }, [context, router]);

  if (!context) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  const { userData } = context;

  const formFields = [
    { key: 'userName', label: 'User Name' },
    { key: 'email', label: 'Email' },
    { key: 'ageGroup', label: 'Age Group' }, // Age group added here
    { key: 'educationLevel', label: 'Highest Education Level' },
    { key: 'university', label: 'University/College Name' },
    { key: 'graduationYear', label: 'Graduation Year' },
    { key: 'certifications', label: 'Certificates' },
    { key: 'experience', label: 'Years of Experience' },
    { key: 'careerGoal', label: 'Career Goals' },
    { key: 'primaryLearningGoal', label: 'Primary Learning Goals' },
    { key: 'learningPreference', label: 'Learning Preference' },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-h-screen bg-blue-50 p-6">
      <h1 className="text-4xl font-bold text-primary mb-4">Congratulations!</h1>
      <p className="text-lg text-primary mb-6">Your operation was successful.</p>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
          Your Submitted Information:
        </h2>
        <ul className="space-y-2">
          {formFields.map(({ key, label }) => (
            <li key={key} className="text-gray-700">
              <strong className="text-gray-900">{label}:</strong> {userData[key] || 'N/A'}
              {key === 'careerGoal' && userData[key] === 'Other' && `, ${userData.otherCareerGoal || 'N/A'}`}
              {key === 'primaryLearningGoal' && userData[key] === 'Other' && `, ${userData.otherPrimaryLearningGoal || 'N/A'}`}
              {key === 'learningPreference' && userData[key] === 'Other' && `, ${userData.otherLearningPreference || 'N/A'}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Success;
