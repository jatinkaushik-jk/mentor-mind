import { Schema, model, models } from "mongoose";
import { Document } from "mongoose";

export interface UserBackgroundData {
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

export interface Skill {
  skillName: string;
  trendScore: number;
  avgLearningTime: string;
  jobDemand: string;
  futureScope: string;
  isSelected: boolean;
  skillProgress: number;
}

export interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  profileImage: string;
  userBackgroundData?: UserBackgroundData;
  selectedSkill: Skill;
  completedSkillsCount: number;
  attendedWorkshopsCount: number;
  lastLogin: Date;
  loginStreak: number;
}

const UserBackgroundDataSchema = new Schema({
  userProfile: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    ageGroup: { type: String, required: true },
    educationLevel: { type: String, required: true },
  },
  backgroundExperience: {
    currentField: { type: String, required: true },
    currentSkills: { type: String, required: true },
    experience: { type: String, required: true },
  },
  careerGoals: {
    preferredCareerPath: { type: String, required: true },
    primaryLearningGoal: { type: String, required: true },
    learningPreference: { type: String, required: true },
  },
});

const SkillSchema = new Schema({
  skillName: String,
  trendScore: Number,
  avgLearningTime: String,
  jobDemand: String,
  futureScope: String,
  isSelected: {
    type: Boolean,
    default: true,
  },
  skillProgress: Number,
});

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
  userBackgroundData: UserBackgroundDataSchema,
  selectedSkill: SkillSchema,
  selectedSkillProgress: {
    type: Number,
    default: 0,
  },
  completedSkillsCount: Number,
  attendedWorkshopsCount: Number,
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  loginStreak: {
    type: Number,
    default: 1,
  },
});

const User = models?.User || model("User", UserSchema);

export default User;
