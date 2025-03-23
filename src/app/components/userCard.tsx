import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface UserCardProps {
  name: string;
  role: string;
  avatarUrl?: string;
  skills: string[];
  className?: string;
}

export default function UserCard({
  name,
  role,
  avatarUrl,
  skills,
  className,
}: UserCardProps) {
  return (
    <Card
      className={cn(
        "w-full justify-center p-4 flex flex-row flex-wrap lg:flex-nowrap items-center gap-3 bg-white",
        className
      )}
    >
      <Avatar className="w-16 h-16">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback className="bg-accent">{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <CardContent className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-muted-foreground">{role}</p>
        <div className="flex gap-2 mt-2">
          {skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
