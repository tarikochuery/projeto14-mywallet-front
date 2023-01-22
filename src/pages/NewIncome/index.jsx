import { useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FormStyled } from "../../styles/FormStyled";
import { NewTransactionContainer } from "../../styles/NewTransactionContainer";
import { UserContext } from '../../providers/UserProvider';
import { useNavigate } from "react-router-dom";

export const NewIncome = () => {
  const navigate = useNavigate();
  const { createTransaction } = useContext(UserContext);
  const [incomeData, setIncomeData] = useState({
    value: 0,
    description: '',
    type: 'income'
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e, type) => {
    setIncomeData({ ...incomeData, [type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { success, errors } = await createTransaction(incomeData);

    if (!success) {
      alert(errors);
      setLoading(false);
      return;
    }

    navigate('/home');
  };
  return (
    <NewTransactionContainer>
      <h3>Nova Entrada</h3>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          loading={loading}
          name='Valor'
          type='number'
          required={true}
          min={0}
          value={incomeData.value}
          onChange={(e) => { handleInputChange(e, 'value'); }}
        />
        <Input
          loading={loading}
          name='Descrição'
          type='text'
          required={true}
          value={incomeData.description}
          onChange={(e) => { handleInputChange(e, 'description'); }}
        />
        <Button loading={loading} type='submit'>Salvar entrada</Button>
      </FormStyled>
    </NewTransactionContainer>
  );
};