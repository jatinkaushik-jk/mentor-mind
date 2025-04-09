import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { recommendSkillsPrompt } from "./systemInstructions";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey as string);

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: recommendSkillsPrompt,
  safetySettings: safetySettings,
});

// const generationConfig = {
//   temperature: 0.8,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8000,
//   responseMimeType: "application/json",
// };

export async function runGemini(userInput: string) {
  // const chatSession = model.startChat({
  //   generationConfig,
  //   history: [
  //     {
  //       role: "user",
  //       parts: [{ text: "" }],
  //     },
  //     {
  //       role: "model",
  //       parts: [{ text: "" }],
  //     },
  //   ],
  // });

  // const result = await chatSession.sendMessage(userInput);
  const result = await model.generateContent(userInput);
  const data = result.response
    .text()
    .replace(/^```json\s*/, "")
    .replace("```", "")
    .trim();
  return data;
}
