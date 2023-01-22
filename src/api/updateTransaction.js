import axios from "axios";
import { apiConfig } from "./config";

export const updateApiTransaction = async (id, transactionInfo, token) => {
  const config = apiConfig(token);
  try {
    await axios.put(`${process.env.REACT_APP_API_URL}/transactions/${id}`, transactionInfo, config);
    return { success: true, errors: undefined };
  } catch (error) {
    return { success: false, errors: error.response.data };
  }
};