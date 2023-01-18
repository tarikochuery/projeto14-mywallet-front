import styled from "styled-components";

export const TransactionListContainer = styled.div`
  width: 100%;
  padding: 2.3rem 1.1rem 1rem;
  min-height: 44.6rem;
  background-color: #fff;
  font-size: 2rem;
  color: #868686;
  border-radius: 0.5rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.isThereTransactions ? 'space-between' : 'center'};

  & > p {
    width: 18rem;
  }
`;

export const Transactions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const BalanceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  span{
    color: #000;
    font-weight: 700;
  }
`;

export const BalanceValue = styled.p`
  color : #03AC00;
`;