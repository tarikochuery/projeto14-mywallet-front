import axios from "axios";

export const login = async (loginData) => {
  try {
    const { data: userInfo } = await axios.post(`${process.env.REACT_APP_API_URL}/login`, loginData);

    return { success: true, error: undefined, userInfo };

  } catch (error) {
    return { success: false, error: error.response.data, userInfo: undefined };
  }
};