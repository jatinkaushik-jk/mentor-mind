import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Flame } from "lucide-react";

export default function StreakCard({ className }: { className?: string }) {
  return (
    <Card className={cn("w-full bg-white flex items-center", className)}>
      <CardContent className="flex flex-row items-center justify-center gap-4 w-full flex-nowrap">
        <Flame
          className="text-orange-500 rounded-full border-orange-500 bg-orange-100 p-4 aspect-square"
          size={60}
        />
        <div className="flex-col flex items-start justify-center gap-2">
          <h1 className="text-xl font-bold">7 Day Streak</h1>
          <p className="text-sm text-gray-600">Keep your momentum going!</p>
        </div>
      </CardContent>
    </Card>
  );
}
