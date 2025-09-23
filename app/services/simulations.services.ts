import axios from "axios";

export const getSimulations = async function () {
  try {
    const response = await axios.get(``);
    return response.data;
  } catch (err) {
    throw err;
  }
};
