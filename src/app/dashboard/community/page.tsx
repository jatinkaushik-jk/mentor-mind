// import { Heading } from "lucide-react";
// import React from "react";

// const mentors = [
//   {
//     name: "Sonu Kumar Rai",
//     specialization: "Frontend Development",
//     slots: 2,
//   },
//   {
//     name: "Jatin Kaushik",
//     specialization: "Backend Architecture",
//     slots: 1,
//   },
//   {
//     name: "Sumit Kumar",
//     specialization: "UI/UX Design",
//     slots: 3,
//   },
//   {
//     name: "Ayush Aryan",
//     specialization: "Technical",
//     slots: "Free Now",
//   },
// ];

// const MentorCard = ({ name, specialization, slots }) => {
//   return (
//     <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full">
//       <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 object-cover">
//         <img className="w-24 h-24 rounded-full object-cover border-4 border-gray-200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqb7c78mM7c4DxqkgODYmlIpCdtmQE7unikQ&s" alt="" />
//       </div>
//       <h3 className="text-lg font-semibold">{name}</h3>
//       <p className="text-gray-600 text-sm">{specialization}</p>
//       <span className="mt-2 px-3 py-1 text-xs font-semibold text-gray-900 bg-gray-200 rounded-full">
//         {slots} slot{slots > 1 ? "s" : ""} available
//       </span>
//       <button className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
//         Book a Session
//       </button>
//     </div>
//   );
// };

// const Community = () => {
//   return (
//     <div className="w-full max-w-7xl mx-auto p-6 bg-gray-100 rounded-lg shadow">
//       <h2 className="text-2xl font-bold mb-2">Find a Mentor</h2>
//       <p className="text-gray-600 mb-6">
//         Connect with industry experts for personalized guidance
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
//         {mentors.map((mentor, index) => (
//           <MentorCard key={index} {...mentor} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Community;

// "use client";
// import React, {useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Plus } from "lucide-react";
// import { Client } from "@clerk/nextjs/server";

// const workshops = [
//   { id: 1, date: "02 OCT", title: "ADGIPS College Day", attendees: 1267, university: "University of GGSIPU" },
//   { id: 2, date: "06 OCT", title: "Student Life", attendees: 1267, university: "BPIT" },
//   { id: 3, date: "12 OCT", title: "Gap Your Opinion", attendees: 1267, university: "MSIT" },
//   { id: 4, date: "31 OCT", title: "College Day", attendees: 1267, university: "IIT DELHI" },
//   { id: 5, date: "04 NOV", title: "Student Mass", attendees: 1267, university: "MAIT" },
// ];

// export default function WorkshopDashboard() {
//   const [upcoming, setUpcoming] = useState(workshops);
//   const [previous, setPrevious] = useState([]);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Your Workshops</h1>
//       <Tabs defaultValue="upcoming">
//         <TabsList className="flex justify-center mb-6">
//           <TabsTrigger value="upcoming">Upcoming Workshops</TabsTrigger>
//           <TabsTrigger value="previous">Previous Workshops</TabsTrigger>
//           <TabsTrigger value="qna">QnA</TabsTrigger>
//         </TabsList>

//         <TabsContent value="upcoming">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {upcoming.map((workshop) => (
//               <Card key={workshop.id} className="p-4">
//                 <CardContent>
//                   <div className="text-lg font-semibold">{workshop.title}</div>
//                   <p className="text-gray-600">{workshop.date}</p>
//                   <p className="text-gray-600">{workshop.attendees} attendees</p>
//                   <p className="text-gray-800 font-medium mt-2">{workshop.university}</p>
//                   <Button variant="destructive" className="mt-2">Delete Event</Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </TabsContent>

//         <TabsContent value="previous">
//           <p className="text-center text-gray-600">No previous workshops available.</p>
//         </TabsContent>

//         <TabsContent value="qna">
//           <p className="text-center text-gray-600">QnA section coming soon!</p>
//         </TabsContent>
//       </Tabs>

//       <Button className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg">
//         <Plus size={24} />
//       </Button>
//     </div>
//   );
// }





// "use client";
// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Plus, Trash2 } from "lucide-react";

// const workshops = [
//   { id: 1, date: "02 OCT", title: "ADGIPS College Day", attendees: 1267, university: "University of GGSIPU" },
//   { id: 2, date: "06 OCT", title: "Student Life", attendees: 1267, university: "BPIT" },
//   { id: 3, date: "12 OCT", title: "Gap Your Opinion", attendees: 1267, university: "MSIT" },
//   { id: 4, date: "31 OCT", title: "College Day", attendees: 1267, university: "IIT DELHI" },
//   { id: 5, date: "04 NOV", title: "Student Mass", attendees: 1267, university: "MAIT" },
// ];

// export default function WorkshopDashboard() {
//   const [upcoming, setUpcoming] = useState(workshops);
//   const [previous, setPrevious] = useState([]);

//   // const deleteWorkshop = (id) => {
//   //   setUpcoming(upcoming.filter((workshop) => workshop.id !== id));
//   // };

//   return (
//     <div className="container mx-auto p-6 max-w-6xl">
//       <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Your AI-Powered Workshops</h1>
//       <Tabs defaultValue="upcoming">
//         <TabsList className="flex justify-center space-x-4 bg-gradient-to-r  p-3 rounded-lg shadow-lg text-white">
//           <TabsTrigger value="upcoming" className="px-6 py-2 text-lg font-semibold">Upcoming</TabsTrigger>
//           <TabsTrigger value="previous" className="px-6 py-2 text-lg font-semibold">Previous</TabsTrigger>
//           <TabsTrigger value="qna" className="px-6 py-2 text-lg font-semibold">QnA</TabsTrigger>
//         </TabsList>

//         <TabsContent value="upcoming" className="mt-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {upcoming.map((workshop) => (
//               <Card key={workshop.id} className="p-5 shadow-lg hover:shadow-xl transition-all rounded-2xl border border-gray-300 bg-white hover:bg-gray-50">
//                 <CardContent>
//                   <div className="text-xl font-bold text-gray-800">{workshop.title}</div>
//                   <p className="text-gray-500 text-sm mt-1">📅 {workshop.date}</p>
//                   <p className="text-gray-600 mt-2 text-sm">👥 {workshop.attendees} attendees</p>
//                   <p className="text-gray-800 font-medium mt-2">🏛 {workshop.university}</p>
//                   <Button 
//                     variant="destructive" 
//                     className="mt-4 w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
//                     // onClick={() => deleteWorkshop(workshop.id)}
//                   >
//                     <Trash2 size={16} /> Delete Event
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </TabsContent>

//         <TabsContent value="previous" className="text-center text-gray-500 mt-6">
//           <p>No previous workshops available.</p>
//         </TabsContent>

//         <TabsContent value="qna" className="text-center text-gray-500 mt-6">
//           <p>QnA section coming soon!</p>
//         </TabsContent>
//       </Tabs>

//       <Button className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-5 rounded-full shadow-xl flex items-center justify-center">
//         <Plus size={28} />
//       </Button>
//     </div>
//   );
// }





"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Plus, Trash2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const workshops = [
  { id: 1, date: "02 OCT", title: "ADGIPS College Day", attendees: 1267, university: "University of GGSIPU" },
  { id: 2, date: "06 OCT", title: "Student Life", attendees: 1267, university: "BPIT" },
  { id: 3, date: "12 OCT", title: "Gap Your Opinion", attendees: 1267, university: "MSIT" },
  { id: 4, date: "31 OCT", title: "College Day", attendees: 1267, university: "IIT DELHI" },
  { id: 5, date: "04 NOV", title: "Student Mass", attendees: 1267, university: "MAIT" },
];

export default function WorkshopDashboard() {
  const [upcoming, setUpcoming] = useState(workshops);
  const [previous, setPrevious] = useState([]);

  const deleteWorkshop = (id: any) => {
    setUpcoming(upcoming.filter((workshop) => workshop.id !== id));
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-7xl">
      {/* <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-6 sm:mb-8">Your AI-Powered Workshops</h1> */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-6 sm:mb-8">AI-Driven Workshop Dashboard</h1>

      <Tabs defaultValue="upcoming">
        <TabsList className="flex flex-wrap flex-col justify-center gap-2 sm:gap-4 bg-gradient-to-r p-2 sm:p-3 rounded-lg shadow-lg text-white bg-gray-200">
          <TabsTrigger value="upcoming" className="px-4 sm:px-6 py-2 text-sm sm:text-lg font-semibold">Upcoming</TabsTrigger>
          <TabsTrigger value="previous" className="px-4 sm:px-6 py-2 text-sm sm:text-lg font-semibold">Previous</TabsTrigger>
          <TabsTrigger value="qna" className="px-1 sm:px-6 py-2 text-sm sm:text-lg font-semibold">QnA</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-4 sm:mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {upcoming.map((workshop) => (
              <Card key={workshop.id} className="p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all rounded-2xl border border-gray-300 bg-white hover:bg-gray-50">
                <CardContent>
                  <div className="text-lg sm:text-xl font-bold text-gray-800">{workshop.title}</div>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">📅 {workshop.date}</p>
                  <p className="text-gray-600 mt-2 text-xs sm:text-sm">👥 {workshop.attendees} attendees</p>
                  <p className="text-gray-800 font-medium mt-2">🏛 {workshop.university}</p>
                  <Button
                    variant="destructive"
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg"
                  onClick={() => deleteWorkshop(workshop.id)}
                  >
                    <Trash2 size={16} /> Delete Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="previous" className="text-center text-gray-500 mt-4 sm:mt-6">
          <p>No previous workshops available.</p>
        </TabsContent>

        <TabsContent value="qna" className="text-center text-black mt-4 sm:mt-6">
          {/* <p>QnA section coming soon!</p> */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </TabsContent>
      </Tabs>

      <Button className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-4 sm:p-5 rounded-full shadow-xl flex items-center justify-center">
        <Plus size={24}  />
      </Button>
    </div>
  );
}