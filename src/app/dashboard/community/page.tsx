import { Heading } from "lucide-react";
import React from "react";

const mentors = [
  {
    name: "Sonu Kumar Rai",
    specialization: "Frontend Development",
    slots: 2,
  },
  {
    name: "Jatin Kaushik",
    specialization: "Backend Architecture",
    slots: 1,
  },
  {
    name: "Sumit Kumar",
    specialization: "UI/UX Design",
    slots: 3,
  },
  {
    name: "Ayush Aryan",
    specialization: "Technical",
    slots: "Free Now",
  },
];

const MentorCard = ({ name, specialization, slots }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full">
      <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 object-cover">
        <img className="w-24 h-24 rounded-full object-cover border-4 border-gray-200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqb7c78mM7c4DxqkgODYmlIpCdtmQE7unikQ&s" alt="" />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 text-sm">{specialization}</p>
      <span className="mt-2 px-3 py-1 text-xs font-semibold text-gray-900 bg-gray-200 rounded-full">
        {slots} slot{slots > 1 ? "s" : ""} available
      </span>
      <button className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
        Book a Session
      </button>
    </div>
  );
};

const Community = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-2">Find a Mentor</h2>
      <p className="text-gray-600 mb-6">
        Connect with industry experts for personalized guidance
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} {...mentor} />
        ))}
      </div>
    </div>
  );
};

export default Community;