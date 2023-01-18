import { useContext, useEffect } from "react";
import { BalanceContainer, BalanceValue, TransactionListContainer, Transactions } from "./style";
import { UserContext } from '../../providers/UserProvider';
import { Transaction } from "../Transaction";

export const TransactionList = () => {
  const { userInfo: { transactions }, updateTransactions } = useContext(UserContext);

  const totalValue = transactions.reduce((sum, transaction) => {
    const { value, type } = transaction;
    if (type === 'income') {
      return sum += value;
    }

    return sum -= value;
  }, 0);

  useEffect(() => {
    updateTransactions();
  }, []);

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
            {transactions.map(
              (transaction, idx) => <Transaction transaction={transaction} key={idx} />
            )}
          </Transactions>
          <BalanceContainer>
            <span>SALDO</span>
            <BalanceValue isBalancePositive={totalValue >= 0}>
              {Number(totalValue).toLocaleString('pt-br', {
                minimumFractionDigits: 2
              })}
            </BalanceValue>
          </BalanceContainer>
        </>
      }
    </TransactionListContainer>
  );
};