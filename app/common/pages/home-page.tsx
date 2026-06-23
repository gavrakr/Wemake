import { Link, type MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { DiscussionCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-catd";
import { ProductCard } from "~/features/products/components/product-card";
import { TeamCard } from "~/features/teams/components/team-card";
import myimg from "../../uploads/file_0.jpg";
import myimg2 from "../../uploads/file_1.jpeg";

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
            key={`productId-${index}`}
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
            key={`postId-${index}`}
            postId={`postId-${index}`}
            avatarSrc={myimg}
            title="What is best productivity tool?"
            authorName="Sexy Girl"
            categoryName="Productivity"
            timeAgo="12 hours ago"
          />
        ))}
      </div>
      {/* Ideaa GPT Part*/}
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
            key={`ideaId-${index}`}
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
      {/* Jobs Part */}
      <div className="grid grid-cols-3 gap-4 pb-10 py-40">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your dream job.
          </p>
          <Button variant={"link"} asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 15 }).map((_, index) => (
          <JobCard
            key={`jobId-${index}`}
            jobId="jobId"
            companyLogoUrl={myimg2}
            company="Hot Girl"
            title="Software Engineer"
            type="Full-time"
            position="Remote"
            postedTime="12 hours ago"
            salaryRange="$100,000 - $120,000"
            companyHq="San Francisco, CA"
            applyButtonText="Apply now"
          />
        ))}
      </div>
      {/* Team Part */}
      <div className="grid grid-cols-4 gap-4 pb-10 py-40">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Find a team mate
          </h2>
          <p className="text-xl font-light text-foreground">
            Join a team looking for a new member.
          </p>
          <Button variant={"link"} asChild className="text-lg p-0">
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <TeamCard
            key={`teamId-${index}`}
            teamId={`teamId-${index}`}
            leaderName="Sexy Girl"
            leaderAvatarSrc={myimg}
            roles={["React Developer", "Backend Developer", "Product Manager"]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}
