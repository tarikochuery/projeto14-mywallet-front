import axios from "axios";
import { apiConfig } from "./config";


export const deleteApiTransaction = async (id, token) => {
  const config = apiConfig(token);
  try {
    await axios.delete(`${process.env.REACT_APP_API_URL}/transactions/${id}`, config);
    return { success: true, errors: undefined };
  } catch (error) {
    return { success: false, errors: error.response.data };
  }
};