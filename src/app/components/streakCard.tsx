"use client";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Flame } from "lucide-react";
import { useEffect, useState } from "react";

export default function StreakCard({ className }: { className?: string }) {
  const [streak, setStreak] = useState<{
    currentStreak: number;
    highestStreak: number;
  }>({
    currentStreak: 0,
    highestStreak: 0,
  });

  useEffect(()=>{
    const fetchStreak = async () => {
      try{
        const response = await fetch("/api/user-streak");
        const data = await response.json();
        if(response.ok){
          setStreak(data.streak);
        }
      } catch (error) {
        console.error("Error fetching streak:", error);
      }
    };
    fetchStreak();
  },[]);
  return (
    <Card className={cn("w-full bg-white flex items-center", className)}>
      <CardContent className="flex flex-col items-center justify-center gap-4 w-full flex-wrap">
        <Flame
          className="text-orange-500 rounded-full border-orange-500 bg-orange-100 p-4 aspect-square"
          size={60}
        />
        <div className="flex-col flex items-center justify-center gap-2">
          <h1 className="text-xl font-bold">
            {streak.currentStreak} Day Streak
          </h1>
          <p className="text-sm text-gray-600">Keep your momentum going!</p>
        </div>
      </CardContent>
    </Card>
  );
}
