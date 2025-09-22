import { Link } from "react-router-dom";

export default function AccessDenied() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <div className="mb-6">
        <span className="text-red-600 text-[120px]">🚫</span>
      </div>

      {/* <span className="text-6xl font-bold text-gray-800 mb-4">404</span> */}

      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Access Denied</h1>

      <p className="text-lg text-gray-600 mb-8 max-w-lg">You must log in first before accessing this section. Please try again!</p>

      <Link
        to="/login"
        className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go to Login
      </Link>
    </div>
  );
}
