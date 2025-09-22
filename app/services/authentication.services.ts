import axios from "axios";

// const backendUrl = process.env.REACT_APP_API_URL as string;

// if (!backendUrl) {
//   throw new Error("backendUrl is not defined in your .env file");
// }

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
    // console.log("backendUrl: ", backendUrl);
    console.log("login data ==: ", loginData);
    
    
    const response = await axios.post(`http://localhost:3000/api/users/login`, loginData);
    console.log("response from login service: ", response);
    
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
