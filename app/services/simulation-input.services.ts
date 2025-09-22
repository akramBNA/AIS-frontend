import axios from "axios";

export const submitData = async function (FormData: any) {
  try {
    const response = await axios.post(`http://localhost:3000/api/farm/insertData`, FormData);
    return response.data;
  } catch (err) {
    throw err;
  }
};
