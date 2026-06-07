import {
  ChevronUpIcon,
  DotIcon,
  EyeIcon,
  HeartIcon,
  MessageCircleIcon,
} from "lucide-react";
import { Link, type MetaFunction } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { DiscussionCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { ProductCard } from "~/features/products/components/product-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20">
      {/* Product Part */}
      <div className="grid grid-cols-3 gap-4 pb-10">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button variant={"link"} asChild className="text-lg p-0">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCard
            id={`productId-${index}`}
            title="Product Name"
            description="Product Description"
            messageCount={12}
            viewCount={12}
            upvoteCount={12}
          />
        ))}
      </div>
      {/* Community Part */}
      <div className="grid grid-cols-3 gap-4 pb-10 py-40">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions from our community today.
          </p>
          <Button variant={"link"} asChild className="text-lg p-0">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <DiscussionCard
            postId={`postId-${index}`}
            avatarSrc="../../../uploads/file_0.jpg"
            title="What is best productivity tool?"
            authorName="Sexy Girl"
            categoryName="Productivity"
            timeAgo="12 hours ago"
          />
        ))}
      </div>
      {/* Ideaa GPT */}
      <div className="grid grid-cols-3 gap-4 pb-10 py-40">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            IdeasGPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project.
          </p>
          <Button variant={"link"} asChild className="text-lg p-0">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <IdeaCard
            ideaId={`ideaId-${index}`}
            title="A startup that creates an AI-powered generated personal trainer,
                delivering, customized fitness recommendations and tracking of
                progress using a mobile app to track workouts and progress as
                well as a website to manage the business."
            viewCount={12}
            timeAgo="hours ago"
            likeCount={123}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
