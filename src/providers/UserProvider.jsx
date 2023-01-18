const { createContext, useState } = require("react");

export const UserContext = createContext({
  userInfo: {
    name: '',
    email: '',
    transactions: []
  },
  updateUserInfo(newUserInfo) { }
});

export const UserProvider = () => {

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    transactions: []
  });

  const updateUserInfo = (newUserInfo) => {
    setUserInfo(newUserInfo);
  };

  return (
    <UserContext.Provider value={{ userInfo, updateUserInfo }}>

    </UserContext.Provider>
  );
};