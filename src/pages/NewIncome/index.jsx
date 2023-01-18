import { useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FormStyled } from "../../styles/FormStyled";
import { NewTransactionContainer } from "../../styles/NewTransactionContainer";
import { UserContext } from '../../providers/UserProvider';
import { useNavigate } from "react-router-dom";

export const NewIncome = () => {
  const navigate = useNavigate();
  const { updateTransactions, createTransaction } = useContext(UserContext);
  const [incomeData, setIncomeData] = useState({
    value: '',
    description: '',
    type: 'income'
  });

  const handleInputChange = (e, type) => {
    setIncomeData({ ...incomeData, [type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTransaction(incomeData);
    await updateTransactions();
  };
  return (
    <NewTransactionContainer>
      <h3>Nova Entrada</h3>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          name='Valor'
          type='number'
          required={true}
          min={0}
          value={incomeData.value}
          onChange={(e) => { handleInputChange(e, 'value'); }}
        />
        <Input
          name='Descrição'
          type='text'
          required={true}
          value={incomeData.description}
          onChange={(e) => { handleInputChange(e, 'description'); }}
        />
        <Button type='submit'>Salvar entrada</Button>
      </FormStyled>
    </NewTransactionContainer>
  );
};