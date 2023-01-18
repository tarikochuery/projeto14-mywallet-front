import { useContext } from "react";
import { BalanceContainer, BalanceValue, TransactionListContainer, Transactions } from "./style";
import { UserContext } from '../../providers/UserProvider';

export const TransactionList = () => {
  // const { userInfo: { transactions } } = useContext(UserContext);

  const transactions = [1, 2, 3];
  return (
    <TransactionListContainer isThereTransactions={transactions.length > 0}>
      {transactions.length === 0 ?
        <p>
          Não há registros de
          entrada ou saída
        </p>
        :
        <>
          <Transactions>
            <p>Transação 1</p>
            <p>Transação 2</p>
            <p>Transação 3</p>
          </Transactions>
          <BalanceContainer>
            <span>SALDO</span>
            <BalanceValue>valor</BalanceValue>
          </BalanceContainer>
        </>
      }
    </TransactionListContainer>
  );
};