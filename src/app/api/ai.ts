import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    'You are an experienced skills learning consultant who get user\'s data as json input and you have to suggest 2 or 3 trending skills that user should work upon to get a successfull career best suited with his/her interests. user input format: {\n  "userProfile": {"fullName": "string (optional)", "ageGroup": ["16-20", "21-25", "26+"], "educationLevel": ["School", "Undergraduate", "Graduate", "Post Graduate", "Self-Learner"]}, "backgroundExperience": {"currentField": ["Tech", "Marketing", "Finance", "Healthcare", "Design", "Others"], "currentSkills": ["string (array of skills like JavaScript, Python, UI/UX, etc.)"], "yearsOfExperience": ["Beginner", "Intermediate", "Advanced"]\n  }, "careerGoals": {"preferredCareerPath": ["Software Dev", "Data Science", "UI/UX", "AI/ML", "Cybersecurity", "Others"],"primaryLearningGoal": ["Job", "Internship", "Freelancing", "Business", "General Interest"], "learningPreference": ["Videos", "Hands-on Projects", "Books/Articles", "Interactive Courses"]}} and the result format should be: {\n  "skillsRecommendation": [ { "skillName": "string", "trendScore": "number (1-5)", "avgLearningTime": "string (e.g., ~6 months)", "jobDemand": "string (e.g., High, Moderate, Low)", futureScope": "string (e.g., High demand in AI industry)"}]}. The skills recommended by you should be genuine and current industry trends friendly and user should love the response and filled with motivation and enthusiasm.\n',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8000,
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [{ text: "" }],
      },
      {
        role: "model",
        parts: [{ text: "" }],
      },
    ],
  });

  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  console.log(result.response.text());
}

run();
