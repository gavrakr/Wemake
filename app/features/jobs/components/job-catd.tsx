import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";

interface JobCardProps {
  jobId: string;
  companyLogoUrl: string;
  company: string;
  postedTime: string;
  title: string;
  type: string;
  salaryRange: string;
  companyHq: string;
  applyButtonText?: string;
  position: string;
}

export function JobCard({
  jobId,
  company,
  companyLogoUrl,
  companyHq,
  postedTime,
  title,
  type,
  salaryRange,
  position,
  applyButtonText = "Apply now",
}: JobCardProps) {
  return (
    <Link to={`/jobs/${jobId}`}>
      <Card className="bg-transparent transition-colors hover:bg-card/50">
        <CardHeader>
          <div className="flex items-center gap-4 mb-8">
            <img
              src={companyLogoUrl}
              alt={`${company} logo`}
              className="size-10 rounded-full object-cover"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground font-medium">
                {company}
              </span>
              <span className="text-xs text-muted-foreground">
                {postedTime}
              </span>
            </div>
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge variant={"outline"}>{type}</Badge>
          <Badge variant={"outline"}>{position}</Badge>
        </CardContent>
        <CardFooter className="flex justify-between bg-transparent border-t-0">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">
              {salaryRange}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {companyHq}
            </span>
          </div>
          <Button variant="secondary" size="sm">
            {applyButtonText}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
