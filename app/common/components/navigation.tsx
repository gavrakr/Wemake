import { Link } from "react-router";
import { Separator } from "../../common/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../common/components/ui/navigation-menu";
import { cn } from "~/lib/utils";
import { Button } from "../../common/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../common/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../common/components/ui/avatar";
import {
  BarChart3Icon,
  BellIcon,
  CircleIcon,
  MessageCircleIcon,
} from "lucide-react";

const menus = [
  {
    name: "Products",
    to: "/products",
    items: [
      {
        name: "Leaderboards",
        description: "See the top performers in your community",
        to: "/products/leaderboards",
      },
      {
        name: "Categories",
        description: "See the top categories in your community",
        to: "/products/categories",
      },
      {
        name: "Search",
        description: "Search for a product",
        to: "/products/search",
      },
      {
        name: "Submit a Product",
        description: "Submit a product to our community",
        to: "/products/submit",
      },
      {
        name: "Promote a Product",
        description: "Promote a product to our community",
        to: "/products/promote",
      },
    ],
  },
  {
    name: "Jobs",
    to: "/jobs",
    items: [
      {
        name: "Remote Jobs",
        description: "Find a remote job in our community",
        to: "/jobs?location=remote",
      },
      {
        name: "Full-Time Jobs",
        description: "Find a full-time job in our community",
        to: "/jobs?type=full-time",
      },
      {
        name: "Freelance Jobs",
        description: "Find a freelance job in our community",
        to: "/jobs?type=full-time",
      },
      {
        name: "Internships Jobs",
        description: "Find a internships job in our community",
        to: "/jobs?type=full-time",
      },
      {
        name: "Submit a Jobs",
        description: "Submit a job to our community",
        to: "/jobs/submit",
      },
    ],
  },
  {
    name: "Community",
    to: "/community",
    items: [
      {
        name: "All Posts",
        description: "See all posts in our community",
        to: "/community",
      },
      {
        name: "Top Posts",
        description: "See the top posts in our community",
        to: "/community?sort=top",
      },
      {
        name: "New Posts",
        description: "See the new posts in our community",
        to: "/community?sort=new",
      },
      {
        name: "Create a Post",
        description: "Create a Post in our community",
        to: "/community/create",
      },
    ],
  },
  {
    name: "IdeasGPT",
    to: "/ideasgpt",
  },
  {
    name: "Teams",
    to: "/teams",
    items: [
      {
        name: "All Teams",
        description: "See all teams in our community",
        to: "/teams",
      },
      {
        name: "Create a Team",
        description: "Create a team in our community",
        to: "/teams/create",
      },
    ],
  },
];

export function Navigation({
  isLoggedIn,
  hasNotifications,
  hasMessages,
}: {
  isLoggedIn: boolean;
  hasNotifications: boolean;
  hasMessages: boolean;
}) {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
      <div className="flex items-center">
        <Link to="/" className="font-bold tracking-tighter text-lg">
          We Make
        </Link>
        <Separator orientation="vertical" className="h-6 mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    {" "}
                    <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-175 font-light gap-3 p-4 grid-cols-2">
                        {menu.items?.map((item) => (
                          <NavigationMenuItem
                            key={item.name}
                            className={cn([
                              "select-none rounded-md transition-colors focus:bg-accent hover:bg-accent",
                              item.to === "/products/promote" &&
                                "col-span-2 bg-primary/50 hover:bg-primary/20 focus:bg-primary/20",
                              item.to === "/jobs/submit" &&
                                "col-span-2 bg-primary/50 hover:bg-primary/20 focus:bg-primary/20",
                            ])}
                          >
                            <NavigationMenuLink>
                              <Link
                                className="p-2 space-y-1 block leading-none no-underline outline-none"
                                to={item.to}
                              >
                                <span className="text-sm font-medium leading-none">
                                  {item.name}
                                </span>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {isLoggedIn ? (
        <div className="flex items-center gap-5">
          <Button size="icon" variant="ghost" asChild className="relative">
            <Link to="/my/notifications">
              <BellIcon className="size-4" />
              {hasNotifications && (
                <div className="absolute top-0.5 -right-0.5 size-2 bg-red-500 rounded-full"></div>
              )}
            </Link>
          </Button>
          <Button size="icon" variant="ghost" asChild className="relative">
            <Link to="/my/messages">
              <MessageCircleIcon className="size-4" />
              {hasMessages && (
                <div className="absolute top-0.5 -right-0.5 size-2 bg-red-500 rounded-full"></div>
              )}
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarFallback>
                  <span className="text-xs">Test</span>
                </AvatarFallback>
                <AvatarImage src="../../../uploads/file_0.jpg" />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="flex flex-col">
                <span className="font-medium text-white">Sexy Girl</span>
                <span className="text-xs text-muted-foreground">@username</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/dashboard">
                    <BarChart3Icon className="size-4 mr-2" />
                    DashBoard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/profile">
                    <BarChart3Icon className="size-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/settings ">
                    <BarChart3Icon className="size-4 mr-2" />
                    Settings
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/auth/logout ">
                    <BarChart3Icon className="size-4 mr-2" />
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button asChild variant="secondary">
            <Link to="/auth/login">Login</Link>
          </Button>
          <Button>
            <Link to="/auth/join">Join</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
