import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/common/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { DotIcon } from "lucide-react";

interface DiscussionCardProps {
  postId: string;
  avatarSrc?: string;
  title: string;
  authorName: string;
  categoryName: string;
  timeAgo: string;
}

export function DiscussionCard({
  postId,
  avatarSrc,
  title,
  authorName,
  categoryName,
  timeAgo,
}: DiscussionCardProps) {
  return (
    <Link to={`/community/${postId}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors pt-7">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-15">
            <AvatarFallback>{authorName[0]}</AvatarFallback>
            {avatarSrc && <AvatarImage src={avatarSrc} />}
          </Avatar>
          <div className="space-y-3">
            <CardTitle className="text-2xl">{title}</CardTitle>
            <div className="flex gap-2 text-xs leading-tight text-muted-foreground">
              <span>{authorName} on</span>
              <span>{categoryName}</span>
              <DotIcon className="w-4, h-4" />
              <span className="whitespace-nowrap">{timeAgo}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end bg-transparent border-t-0">
          <Button variant={"ghost"}>Reply &rarr;</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
