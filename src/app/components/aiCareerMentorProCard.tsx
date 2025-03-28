import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function AICareerMentorCard() {
  return (
    <Card className="w-full bg-white text-white dark:bg-gray-900 p-4 bg-gradient-to-r from-[#aa55f5] to-[#e449a3] rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center gap-2 -mb-4">
          AI Career Mentor Pro
        </CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4 justify-between">
        <div>
          <p className="text-sm">
            Personalized AI-driven guidance to fast-track your career success!
          </p>
          <div className="mt-4 flex justify-between items-center">
            <Button variant="secondary">Get Started</Button>
            {/* <div className="flex items-center text-sm">
            <Star className="w-4 h-4 mr-1 text-yellow-500" />
            Rated 4.9/5
          </div> */}
          </div>
        </div>
        <div>
          <Rocket size={50} className="opacity-50 hidden sm:flex" />
        </div>
      </CardContent>
    </Card>
  );
}
