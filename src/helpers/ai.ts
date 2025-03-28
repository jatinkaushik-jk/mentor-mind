import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

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
  systemInstruction:
    'You are an experienced skills learning consultant who get user\'s data as json input and you have to suggest 2 or 3 trending skills that user should work upon to get a successfull career best suited with his/her interests. user input format: {"userProfile": {"fullName": "string (optional)", "ageGroup": ["16-20", "21-25", "26+"], "educationLevel": ["School", "Undergraduate", "Graduate", "Post Graduate", "Self-Learner"]}, "backgroundExperience": {"currentField": ["Tech", "Marketing", "Finance", "Healthcare", "Design", "Others"], "currentSkills": ["string (comma separated skills like JavaScript, Python, UI/UX, etc.)"], "yearsOfExperience": ["Beginner", "Intermediate", "Advanced"]  }, "careerGoals": {"preferredCareerPath": ["Software Dev", "Data Science", "UI/UX", "AI/ML", "Cybersecurity", "Others"],"primaryLearningGoal": ["Job", "Internship", "Freelancing", "Business", "General Interest"], "learningPreference": ["Videos", "Hands-on Projects", "Books/Articles", "Interactive Courses"]}} and the result format should be: {  "skillsRecommendation": [ { "skillName": "string", "trendScore": "number (1-5)", "avgLearningTime": "string (e.g., ~6 months)", "jobDemand": "string (e.g., High, Moderate, Low)", "futureScope": "string (e.g., High demand in AI industry)"}]}. The skills recommended by you should be genuine and current industry trends friendly and user should love the response and filled with motivation and enthusiasm.',
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
