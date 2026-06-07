import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/common/home-page.tsx"),
  route("/my/notifications", "pages/common/image.tsx"),
] satisfies RouteConfig;
