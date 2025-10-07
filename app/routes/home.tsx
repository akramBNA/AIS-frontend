import type { Route } from "./+types/home";
import Login from "./login/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Agricultural Impcat Similator App" },
    { name: "description", content: "Agricultural Impcat Similator App" },
  ];
}

export default function Home() {
  return <Login />;
}
