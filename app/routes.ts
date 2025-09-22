// import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;

import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "/login", file: "routes/login/login.tsx" },
  { path: "/signup", file: "routes/signup/signup.tsx" },
  { path: "/mainPage", file: "routes/main-page/main-page.tsx" },
//   { path: "*", file: "routes/home.tsx" },
] satisfies RouteConfig;
