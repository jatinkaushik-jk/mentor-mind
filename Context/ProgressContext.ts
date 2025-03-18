import { createContext, Dispatch, SetStateAction } from "react";

interface UserData {
  [key: string]: any;
}

interface FinalData {
  userData: UserData;
}

interface ProgressContextType {
  currentProgress: number;
  setCurrentProgress: Dispatch<SetStateAction<number>>;
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
  finalData: FinalData | null;
  setFinalData: Dispatch<SetStateAction<FinalData | null>>;
}

export const ProgressContext = createContext<ProgressContextType | null>(null);
