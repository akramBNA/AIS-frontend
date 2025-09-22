import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        if (user?.firstName) {
          setFirstName(user.firstName);
        }
      } catch (err) {
        console.error("Error parsing user from localStorage", err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4"
      style={{
        background: "linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%)",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center drop-shadow-lg">
        Welcome back
        <span className="block md:inline md:ml-2 text-yellow-200 font-semibold">
          {firstName ? firstName : ""}
        </span>{" "}
        👋
      </h1>

      <div className="flex flex-col space-y-6 w-full max-w-md">
        <Link
          to="/simulation-input"
          className="p-8 rounded-2xl bg-white/90 shadow-lg border border-blue-200 hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Create a New Simulation</h2>
          <p className="text-gray-600">Start a fresh simulation now.</p>
        </Link>

        <Link
          to="/simulations-list"
          className="p-8 rounded-2xl bg-white/90 shadow-lg border border-teal-200 hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-center">
          <h2 className="text-2xl font-semibold text-teal-700 mb-2">Show My Simulations</h2>
          <p className="text-gray-600">View and manage your previous simulations.</p>
        </Link>

        <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white  font-bold rounded-xl shadow-lg transition-all duration-300 cursor-pointer">
            Logout
        </button>
      </div>
    </div>
  );
}
