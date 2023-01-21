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

  const handleInputChange = (e, type) => {
    setIncomeData({ ...incomeData, [type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, errors } = await updateTransactionByID(id);

    if (!success) {
      alert(errors);
      navigate('/home');
      return;
    }

    navigate('/home');
  };
  return (
    <NewTransactionContainer>
      <h3>Editar Entrada</h3>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          name='Valor'
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
        <Button type='submit'>Atualizar entrada</Button>
      </FormStyled>
    </NewTransactionContainer>
  );
};