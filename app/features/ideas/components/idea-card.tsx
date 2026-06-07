import { Link } from "react-router";
import { EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
  ideaId: string;
  title: string;
  viewCount: number;
  timeAgo: string;
  likeCount: number;
  claimed?: boolean;
}

export function IdeaCard({
  ideaId,
  title,
  viewCount,
  timeAgo,
  likeCount,
  claimed,
}: IdeaCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader>
        <Link to={`/ideas/${ideaId}`}>
          <CardTitle className="text-xl text-left">
            <span
              className={cn(
                claimed ? "bg-foreground selection:bg-foreground" : "",
              )}
            >
              {title}
            </span>
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex items-center text-sm">
        <div className="flex items-center gap-2">
          <EyeIcon className="size-4" />
          <span>{viewCount}</span>
        </div>
        <span className="mx-1">•</span>{" "}
        {/* DotIcon 대신 표준적인 불렛 사용 또는 DotIcon 유지 가능 */}
        <span className="text-muted-foreground">{timeAgo}</span>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 bg-transparent border-t-0">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <HeartIcon className="size-4" />
          <span>{likeCount}</span>
        </Button>
        {!claimed ? (
          <Button asChild>
            <Link to={`/ideas/${ideaId}/claim`}>Claim idea now</Link>
          </Button>
        ) : (
          <Button variant={"outline"} disabled>
            <LockIcon className="size-4" />
            claimed
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
