import { useContext, useEffect } from "react";
import { BalanceContainer, BalanceValue, TransactionListContainer, Transactions } from "./style";
import { UserContext } from '../../providers/UserProvider';
import { Transaction } from "../Transaction";
import { useState } from "react";
import { Oval } from "react-loader-spinner";

export const TransactionList = () => {
  const { userInfo: { transactions }, updateTransactions } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const getNewTransactions = async () => {
    setLoading(true);
    await updateTransactions();
    setLoading(false);
  };

  const totalValue = transactions.reduce((sum, transaction) => {
    const { value, type } = transaction;
    if (type === 'income') {
      return sum += value;
    }

    return sum -= value;
  }, 0);

  useEffect(() => {
    getNewTransactions();
  }, []);

  if (loading) {
    return (
      <TransactionListContainer>
        <Oval
          height={80}
          width={80}
          color="#868686"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#a8a8a8"
          strokeWidth={2}
          strokeWidthSecondary={2}

        />
      </TransactionListContainer>
    );
  }

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
              (transaction, idx) => <Transaction setLoading={setLoading} transaction={transaction} key={idx} />
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