import { createContext, Dispatch, SetStateAction } from "react";

export interface GuideFormData {
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
}

/*
"userProfile": {
"fullName": "",
"ageGroup": "",
"educationLevel": "",
},
"backgroundExperience": {
"currentField": "",
"currentSkills": "",
"yearsOfExperience": ""
},
"careerGoals": {
"preferredCareerPath": "",
"primaryLearningGoal": "",
"learningPreference": ""
}
*/

// interface FinalData {
//   GuideFormData: GuideFormData;
// }

export interface ProgressContextType {
  currentProgress: number;
  setCurrentProgress: Dispatch<SetStateAction<number>>;
  guideFormData: GuideFormData;
  setGuideFormData: Dispatch<SetStateAction<GuideFormData>>;
  // finalData: FinalData | null;
  // setFinalData: Dispatch<SetStateAction<FinalData | null>>;
}

export const ProgressContext = createContext<ProgressContextType>({
  currentProgress: 0,
  setCurrentProgress: () => {},
  guideFormData: {
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
  },
  setGuideFormData: () => {},
});
