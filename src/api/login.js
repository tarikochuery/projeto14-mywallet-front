import axios from "axios";

export const login = async (loginData) => {
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/login`, loginData);

    return { success: true, error: undefined };

  } catch (error) {
    return { success: false, error: error.response.data };
  }
};