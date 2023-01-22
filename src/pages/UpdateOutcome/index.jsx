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
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e, type) => {
    setOutcomeData({ ...outcomeData, [type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { success, errors } = await updateTransactionByID(id, outcomeData);
    if (!success) {
      alert(errors);
      setLoading(false);
      return;
    }

    navigate('/home');
  };

  return (
    <NewTransactionContainer>
      <h3>Editar Saída</h3>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          loading={loading}
          name='Valor'
          required={true}
          min={0}
          value={outcomeData.value}
          onChange={(e) => { handleInputChange(e, 'value'); }}
        />
        <Input
          loading={loading}
          name='Descrição'
          type='text'
          required={true}
          value={outcomeData.description}
          onChange={(e) => { handleInputChange(e, 'description'); }}
        />
        <Button loading={loading} type='submit'>Atualizar saída</Button>
      </FormStyled>
    </NewTransactionContainer>
  );
};