import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;


export const submitData = async function (FormData: any) {
  try {
    const response = await axios.post(`${API_URL}/farm/insertData`, FormData);
    return response.data;
  } catch (err) {
    throw err;
  }
};
