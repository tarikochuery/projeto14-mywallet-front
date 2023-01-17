import axios from "axios";

export const signUp = async (signUpData) => {
  const response = {
    success: false,
    error: undefined
  };

  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/cadastro`, signUpData);

    response.success = true;
    return response;

  } catch (error) {
    response.error = error.response.data;
    return response;
  }
};