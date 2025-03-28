# Mentor Mind

## Introduction

**Mentor Mind** is an AI-powered skill development and career guidance platform designed to help users navigate their learning journey and professional growth effectively. By leveraging AI-driven recommendations, personalized roadmaps, and interactive mentorship, Mentor Mind provides users with structured guidance to acquire new skills and explore career opportunities.

## Features

### **1. AI-Powered Learning & Skill Guidance**

- Personalized AI-recommended skills based on user inputs
- Stepwise roadmap generation for selected skills
- Progress tracking and goal setting

### **2. Career Insights**

- Real-time job and internship listings
- Upcoming events, meetups, and hackathons
- Resume-building guide for career advancement

### **3. AI Mentor Chat**

- Interactive AI-based chat for skill and career advice
- Intelligent responses tailored to user goals

### **4. Community & Networking**

- Upcoming & past workshop listings
- Q&A section for peer learning
- Future enhancements for mentorship programs

### **5. User Profile & Customization**

- Authentication powered by Clerk
- Personalized dashboard with learning insights
- Settings for user preferences

---

## **User Flow**

1. **Landing Page**

   - Introduction to the platform
   - "Get Started" button leading to the Guide-Me page

2. **Guide-Me Page (AI Skill Recommendation)**

   - Stepwise form to gather user interests & experience
   - AI suggests trending and personalized skills

3. **Login/Signup (via Clerk Authentication)**

   - Required for personalized recommendations & roadmap access

4. **Dashboard (Central Hub for Users)**

   - Quick insights on progress, workshops, and analytics
   - Access to all key sections:
     - **Learnings** (Skill tracking & roadmap)
     - **Career Insights** (Jobs, events, resume guide)
     - **AI Mentor Chat** (Skill & career guidance)
     - **Community** (Workshops & QnA section)
     - **Settings** (Profile & preferences)

5. **Explore Individual Sections**

   - Engage with AI mentor for skill & career advice
   - Browse career insights and job opportunities
   - Participate in community discussions & workshops

6. **Continuous Learning & Career Growth**

   - Track progress, gain insights, and refine skill goals

---

## **Tech Stack**

- **Frontend:** Next.js (React.js), Tailwind CSS, Shadcn UI
- **Backend:** Node.js, Express.js, API Routes
- **Database:** MongoDB
- **Authentication:** Clerk
- **AI Services:** Gemini for AI Mentor Chat and Skills Recommendations
- **Hosting & Deployment:** Vercel, MongoDB Atlas

---

## **Future Enhancements**

- Advanced AI-driven mentorship with personalized coaching
- Gamification elements for skill tracking
- Resume builder with AI-based optimization
- AI-powered interview preparation & career assessments

---

## **Getting Started**

### **Installation & Setup**

1. Clone the repository:
   ```sh
   git clone https://github.com/jatinkaushik-jk/mentor-mind.git
   cd mentor-mind
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables (`.env`):
   ```sh
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   MONGODB_URI=your_mongodb_url
   GEMINI_API_KEY=your_gemini_api_key
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser.

---

## **Contributing**

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit changes and push to your branch
4. Submit a pull request

---

## **License**

This project is licensed under the MIT License - see the LICENSE file for details.

---

## **Contact & Support**

For questions, feature requests, or support, open an issue on GitHub.
