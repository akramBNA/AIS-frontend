import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";

interface ProtectedRouteProps {
  children?: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isClient, setIsClient] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      setIsAuthenticated(!!token && !!user);
    }
  }, []);

  if (!isClient || isAuthenticated === null) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/access-denied" replace />;
  }

  return <>{children ?? <Outlet />}</>;
}
