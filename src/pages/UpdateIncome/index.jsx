import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { UserContext } from "../../providers/UserProvider";
import { FormStyled } from "../../styles/FormStyled";
import { NewTransactionContainer } from "../../styles/NewTransactionContainer";

export const UpdateIncome = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateTransactionByID, userInfo } = useContext(UserContext);
  const { value, description, type } = userInfo.transactions.find(transaction => id === transaction.id);
  const [incomeData, setIncomeData] = useState(
    {
      value: Number(value).toLocaleString('pt-br', { minimumFractionDigits: 2 }),
      type,
      description
    }
  );
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e, type) => {
    setIncomeData({ ...incomeData, [type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { success, errors } = await updateTransactionByID(id, incomeData);

    if (!success) {
      alert(errors);
      setLoading(false);
      return;
    }

    navigate('/home');
  };
  return (
    <NewTransactionContainer>
      <h3>Editar Entrada</h3>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          loading={loading}
          name='Valor'
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
        <Button loading={loading} type='submit'>Atualizar entrada</Button>
      </FormStyled>
    </NewTransactionContainer>
  );
};