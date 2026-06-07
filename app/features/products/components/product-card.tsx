import { Link } from "react-router";
import { MessageCircleIcon, EyeIcon, ChevronUpIcon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  messageCount: number;
  viewCount: number;
  upvoteCount: number;
}

export function ProductCard({
  id,
  title,
  description,
  messageCount,
  viewCount,
  upvoteCount,
}: ProductCardProps) {
  return (
    <Link to={`/products/${id}`} className="block">
      <Card className="w-full h-30 flex flex-row items-center justify-between bg-transparent hover:bg-card/50">
        <CardHeader className="pt-0">
          <CardTitle className="w-40 text-2xl font-semibold leading-none tracking-tight">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <MessageCircleIcon className="w-4 h-4" />
              <span>{messageCount}</span>
            </div>
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <EyeIcon className="w-4 h-4" />
              <span>{viewCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0 bg-transparent border-t-0">
          <Button variant={"outline"} className="flex flex-col h-14">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>{upvoteCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
