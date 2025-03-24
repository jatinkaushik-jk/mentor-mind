import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignInButton } from "@clerk/nextjs";
import { ArrowRightCircle } from "lucide-react";

interface SkillCardProps {
  cardData: {
    skillName: string;
    trendScore: number;
    avgLearningTime: string;
    jobDemand: string;
    futureScope: string;
  };
}

const SkillCard: React.FC<SkillCardProps> = ({ cardData }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold text-lg">
          {cardData.skillName}
        </CardTitle>
      </CardHeader>
      <hr />
      <CardContent>
        <div>
          <div className="grid grid-cols-2 gap-4">
            <ul className="font-bold">
              <li>Trend Score</li>
              <li>Avg Learning Time</li>
              <li>Job Demand</li>
            </ul>
            <ul>
              <li>{cardData.trendScore}</li>
              <li>{cardData.avgLearningTime}</li>
              <li>{cardData.jobDemand}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mt-4">Future Scope</h4>
            <p className="mt-1">{cardData.futureScope}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant={"link"} className="group">
          <div>
            <SignInButton>Know more </SignInButton>
            <ArrowRightCircle className="group-hover:translate-x-1 transition" />
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SkillCard;
