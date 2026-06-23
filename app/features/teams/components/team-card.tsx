import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";

interface TeamCardProps {
  teamId: string;
  leaderName: string;
  leaderAvatarSrc?: string;
  roles: string[];
  projectDescription: string;
}

export function TeamCard({
  teamId,
  leaderName,
  leaderAvatarSrc,
  roles,
  projectDescription,
}: TeamCardProps) {
  return (
    <Link to={`/teams/${teamId}`}>
      <Card className="bg-transparent transition-colors hover:bg-card/50">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="text-base leading-loose">
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-2 shadow-sm text-base px-2 py-1"
            >
              <span className="truncate max-w-25]">@{leaderName}</span>
              <Avatar className="size-5">
                <AvatarFallback>N</AvatarFallback>
                {leaderAvatarSrc && <AvatarImage src={leaderAvatarSrc} />}
              </Avatar>
            </Badge>
            <span> is looking for</span>
            {roles.map((role) => (
              <Badge key={role} className="text-base font-normal">
                {role}
              </Badge>
            ))}
            <span> to build</span>
            <span className="font-medium text-foreground">
              {projectDescription}
            </span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="justify-end bg-transparent border-t-0">
          <Button variant="link" className="p-0">
            Join to team &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
