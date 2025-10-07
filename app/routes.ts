import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "/login", file: "routes/login/login.tsx" },
  { path: "/signup", file: "routes/signup/signup.tsx" },
  { path: "/access-denied", file: "routes/access-denied/access-denied.tsx" },
  {
    file: "defaultLayout/defaultLayout.tsx",
    children: [
      { path: "/mainPage", file: "routes/main-page/main-page.tsx" },
      { path: "simulation-input", file: "routes/simulation-input/simulation-input.tsx" },
      { path: "simulations-list", file: "routes/simulations-list/simulations-list.tsx" },
    ],
  },
] satisfies RouteConfig;
