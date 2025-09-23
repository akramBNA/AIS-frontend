import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  {
    // parent route with DefaultLayout
    file: "defaultLayout/defaultLayout.tsx",
    children: [
      index("routes/home.tsx"),
      { path: "/login", file: "routes/login/login.tsx" },
      { path: "/signup", file: "routes/signup/signup.tsx" },
      { path: "/mainPage", file: "routes/main-page/main-page.tsx" },
      { path: "simulation-input", file: "routes/simulation-input/simulation-input.tsx" },
      { path: "simulations-list", file: "routes/simulations-list/simulations-list.tsx" },
      { path: "/access-denied", file: "routes/access-denied/access-denied.tsx" },
    ],
  },
] satisfies RouteConfig;
