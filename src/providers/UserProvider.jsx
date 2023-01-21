import { getTransactions } from "../api/getTransactions";
import { postTransaction } from "../api/postTransaction";
import { usePersistedState } from '../hooks/usePersistedState';
import { createContext } from "react";
import { deleteApiTransaction } from "../api/deleteTransaction";
import { updateApiTransaction } from "../api/updateTransaction";

export const UserContext = createContext({
  userInfo: {
    name: '',
    token: '',
    transactions: []
  },
  updateUserInfo(newUserInfo) { },
  updateTransactions() { return new Promise; },
  createTransaction(transactionData) { return new Promise(() => { return { success: false, errors: [] }; }); },
  deleteTransaction(id) { return new Promise(() => { return { success: false, errors: [] }; }); },
  updateTransactionByID(id) { return new Promise(() => { return { success: false, errors: [] }; }); }
});

export const UserProvider = ({ children }) => {

  const [userInfo, setUserInfo] = usePersistedState({
    name: '',
    token: '',
    transactions: []
  }, 'user-info');

  const updateUserInfo = (newUserInfo) => {
    const { name, token } = newUserInfo;
    setUserInfo({ ...userInfo, name, token });
  };

  const updateTransactions = async () => {
    const { success, transactions, errors } = await getTransactions(userInfo.token);

    if (!success) {
      window.alert(errors);
      return;
    }
    setUserInfo({ ...userInfo, transactions });
  };

  const createTransaction = async (transactionData) => {
    const res = await postTransaction(userInfo.token, transactionData);
    return res;
  };

  const deleteTransaction = async (id) => {
    const res = await deleteApiTransaction(id, userInfo.token);
    return res;
  };

  const updateTransactionByID = async (id) => {
    const res = await updateApiTransaction(id, userInfo.token);
    return res;
  };

  return (
    <UserContext.Provider value={{
      userInfo,
      updateUserInfo,
      updateTransactions,
      createTransaction,
      deleteTransaction,
      updateTransactionByID
    }}>
      {children}
    </UserContext.Provider>
  );
};