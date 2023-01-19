import axios from "axios";

export const postTransaction = async (token, transactionData) => {

  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/transaction`, transactionData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return { success: true, errors: undefined };
  } catch (error) {
    return { success: false, errors: error.response.data };
  }
};