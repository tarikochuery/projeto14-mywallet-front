import { useContext } from 'react';
import { CloseOutline } from 'react-ionicons';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import { DateStyled, TransactionStyled, DescriptionStyled, ValueStyled, DeleteButtonContainer } from './style';

export const Transaction = ({ transaction, setLoading }) => {
  const navigate = useNavigate();
  const { date, description, value, type, id } = transaction;
  const { deleteTransaction, updateTransactions, updateTransactionByID } = useContext(UserContext);

  const handleDeleteButton = async () => {
    const deleteConfirm = window.confirm('Deseja realmente deletar essa transação?');

    if (!deleteConfirm) return;
    setLoading(true);
    try {
      const { success, errors } = await deleteTransaction(id);
      if (!success) {
        setLoading(false);
        return alert(errors);
      }
      await updateTransactions();
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleEditButton = () => {
    const redirectURL = type === 'income' ? `/editar-entrada/${id}` : `/editar-saida/${id}`;
    navigate(redirectURL);
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