import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, PlayCircle } from "lucide-react";

export default function LiveWorkshopCard() {
  return (
    <Card className="w-full text-white bg-white dark:bg-gray-900 p-4 bg-gradient-to-r from-[#0d23e8] to-[#18a2f2] rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center gap-2 -mb-4">
          <PlayCircle className="w-6 h-6" />
          Join Live Workshop
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Gain real-world insights from industry experts. Hands-on, interactive,
          and engaging!
        </p>
        <div className="mt-4 flex justify-between items-start md:items-center md:flex-row flex-col gap-4">
          <Button variant="secondary">Register Now</Button>
          <div className="flex items-center text-sm ">
            <Calendar className="w-4 h-4 mr-1" />
            Next Session: March 20
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
