import { AddCircleOutline, RemoveCircleOutline } from "react-ionicons";
import { TransactionButtonStyled } from "./style";

export const TransactionButton = ({ type }) => {

  return (
    <TransactionButtonStyled>
      {type === 'plus' &&
        <>
          <AddCircleOutline
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