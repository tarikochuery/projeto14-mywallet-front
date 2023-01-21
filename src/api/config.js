export const apiConfig = (token) => {
  return {
    headers: {
      authorization: `Bearer ${token}`
    }
  };
};