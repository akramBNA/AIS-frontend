const API_URL = "http://localhost:3000/api/auth";

const login = async (credentials: { email: string; password: string }) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  return response.json();
};

const signup = async (userData: { email: string; password: string }) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Signup failed");
  }

  return response.json();
};

export default { login, signup };
