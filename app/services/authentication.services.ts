import axios from "axios";

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string, 
  lastName: string, 
  email: string, 
  password: string
}

const login = async (loginData: LoginData) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/users/login`, loginData);    
    return response.data;
  } catch (err: any) {
    if (err.response?.data?.message) {
      throw new Error(err.response.data.message);
    } else {
      throw new Error("Network or server error");
    }
  }
};

const signup = async (registerData: RegisterData) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/users/createUser`, registerData);
    return response.data;
  } catch (err: any) {
    if (err.response?.data?.message) {
      throw new Error(err.response.data.message);
    } else {
      throw new Error("Network or server error");
    }
  }
};

const authService = {
  login,
  signup,
};

export default authService;
