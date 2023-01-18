import { AddCircleOutline, RemoveCircleOutline } from "react-ionicons";
import { TransactionButtonStyled } from "./style";

export const TransactionButton = ({ type }) => {

  return (
    <TransactionButtonStyled>
      {type === 'plus' &&
        <>
          <AddCircleOutline
            title={'newIncome'}
            color={'#ffffff'}
            height="25px"
            width="25px"
          />
          <p>Nova Entrada</p>
        </>
      }
      {type === 'minus' &&
        <>
          <RemoveCircleOutline
            title={'newOutcome'}
            color={'#ffffff'}
            height="25px"
            width="25px"
          />
          <p>Nova Saída</p>
        </>
      }
    </TransactionButtonStyled>
  );
};