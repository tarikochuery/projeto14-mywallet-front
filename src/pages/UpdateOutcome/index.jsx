import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { UserContext } from "../../providers/UserProvider";
import { FormStyled } from "../../styles/FormStyled";
import { NewTransactionContainer } from "../../styles/NewTransactionContainer";

export const UpdateOutcome = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateTransactionByID, userInfo } = useContext(UserContext);
  const { value, type, description } = userInfo.transactions.find(transaction => transaction.id === id);
  const [outcomeData, setOutcomeData] = useState(
    {
      value: Number(value).toLocaleString('pt-br', { minimumFractionDigits: 2 }),
      type,
      description
    }
  );

  console.log(outcomeData);

  const handleInputChange = (e, type) => {
    setOutcomeData({ ...outcomeData, [type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, errors } = await updateTransactionByID(outcomeData);
    if (!success) {
      alert(errors);
      navigate('/home');
      return;
    }

    navigate('/home');
  };

  return (
    <NewTransactionContainer>
      <h3>Editar Saída</h3>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          name='Valor'
          required={true}
          min={0}
          value={outcomeData.value}
          onChange={(e) => { handleInputChange(e, 'value'); }}
        />
        <Input
          name='Descrição'
          type='text'
          required={true}
          value={outcomeData.description}
          onChange={(e) => { handleInputChange(e, 'description'); }}
        />
        <Button type='submit'>Atualizar saída</Button>
      </FormStyled>
    </NewTransactionContainer>
  );
};