import axios from "axios";

export const getTransactions = async (token) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/transaction`, {
      headers: {
        'Authorization': token
      }
    });

    const transactions = res.data;
    return { success: true, transactions, errors: undefined };
  } catch (error) {
    return { success: false, transactions: undefined, errors: error.response.data };
  }
};