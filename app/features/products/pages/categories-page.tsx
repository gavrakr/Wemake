import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/categories-page";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Categories | ProductHunt Clone" },
    { name: "description", content: "Browse products by category" },
  ];
};

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero title="Categories" subtitle="Browse products by category" />
      <div className="grid grid-cols-4 gap-10">
        <Link to="/categories/categoryId" className="block">
          <Card>
            <CardHeader>
              <CardTitle className="flex">
                Category Name
                <ChevronRightIcon className="size-6" />
              </CardTitle>
              <CardDescription className="text-base">
                Category Description
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}
