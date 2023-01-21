import { useContext } from 'react';
import { CloseOutline } from 'react-ionicons';
import { UserContext } from '../../providers/UserProvider';
import { DateStyled, TransactionStyled, DescriptionStyled, ValueStyled, DeleteButtonContainer } from './style';

export const Transaction = ({ transaction }) => {
  const { date, description, value, type, id } = transaction;
  const { deleteTransaction, updateTransactions } = useContext(UserContext);

  const handleDeleteButton = async () => {
    try {
      await deleteTransaction(id);
      await updateTransactions();
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleEditButton = () => {
    console.log('clicou no botão de editar');
  };

  return (
    <TransactionStyled>
      <DateStyled>
        {date}
      </DateStyled>
      <DescriptionStyled >
        <p onClick={handleEditButton}>
          {description}
        </p>
      </DescriptionStyled>
      <ValueStyled type={type}>
        {Number(value).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
      </ValueStyled>

      <DeleteButtonContainer>
        <CloseOutline
          color={'#c6c6c6'}
          title={'deleteTransaction'}
          height="20px"
          width="20px"
          onClick={handleDeleteButton}
        />
      </DeleteButtonContainer>
    </TransactionStyled>
  );
};