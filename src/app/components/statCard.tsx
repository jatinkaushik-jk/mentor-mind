import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  {
    title: "Learning Hours",
    value: "24.5",
    change: "+2.5 this week",
  },
  {
    title: "Skills Learned",
    value: "7",
    change: "+2 this month",
  },
  {
    title: "Practice Projects",
    value: "3",
    change: "of 5 Completed",
  },
];

export default function DashboardStats({ className }: { className?: string }) {
  return (
    <Card className={cn("w-full p-4 bg-white justify-center", className)}>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-left space-y-1.5">
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <h2 className="text-2xl font-bold">{stat.value}</h2>
              <p className="text-sm text-green-600">{stat.change}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
