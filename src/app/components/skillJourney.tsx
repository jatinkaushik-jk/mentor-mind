import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SkillJourneyCard({
  className,
}: {
  className?: string;
}) {
  const progress = 0; // Example progress percentage

  return (
    <Card
      className={cn("w-full bg-white dark:bg-gray-900 rounded-2xl", className)}
    >
      <CardHeader className="flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-indigo-500" />
        <CardTitle className="text-lg font-semibold">
          Current Skill Journey
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-full items-stretch justify-between ">
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            No Skills selected!
          </p>

          <div className="mt-4">
            <Progress
              value={progress}
              className="h-2 bg-gray-200 dark:bg-gray-800"
            />
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {progress}% Completed
            </p>
          </div>
        </div>

        <Button className="mt-4 w-full" variant="default">
          Continue Learning
        </Button>
      </CardContent>
    </Card>
  );
}
