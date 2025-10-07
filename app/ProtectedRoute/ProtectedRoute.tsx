import { Navigate } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const isAuthenticated = token && user;

  if (!isAuthenticated) {
    return <Navigate to="/access-denied" replace />;
  }

  return children;
};

export default ProtectedRoute;
