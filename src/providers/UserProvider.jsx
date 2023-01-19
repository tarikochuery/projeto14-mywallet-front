import { getTransactions } from "../api/getTransactions";
import { postTransaction } from "../api/postTransaction";
import { usePersistedState } from '../hooks/usePersistedState';
import { createContext } from "react";

export const UserContext = createContext({
  userInfo: {
    name: '',
    token: '',
    transactions: []
  },
  updateUserInfo(newUserInfo) { },
  updateTransactions() { },
  createTransaction(transactionData) { }
});

export const UserProvider = ({ children }) => {

  const [userInfo, setUserInfo] = usePersistedState({
    name: '',
    token: '',
    transactions: []
  });

  const updateUserInfo = (newUserInfo) => {
    const { name, token } = newUserInfo;
    setUserInfo({ ...userInfo, name, token });
  };

  const updateTransactions = async () => {
    const { success, transactions, errors } = await getTransactions(userInfo.token);

    if (!success) {
      window.alert(errors);
    }
    setUserInfo({ ...userInfo, transactions });
  };

  const createTransaction = async (transactionData) => {
    await postTransaction(userInfo.token, transactionData);
  };

  return (
    <UserContext.Provider value={{ userInfo, updateUserInfo, updateTransactions, createTransaction }}>
      {children}
    </UserContext.Provider>
  );
};