import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { UserContext } from "../../providers/UserProvider";
import { FormStyled } from "../../styles/FormStyled";
import { NewTransactionContainer } from "../../styles/NewTransactionContainer";

export const NewOutcome = () => {
  const navigate = useNavigate();
  const { createTransaction } = useContext(UserContext);
  const [outcomeData, setOutcomeData] = useState({
    value: '',
    description: '',
    type: 'outcome'
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e, type) => {
    setOutcomeData({ ...outcomeData, [type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { success, errors } = await createTransaction(outcomeData);
    if (!success) {
      alert(errors);
      setLoading(false);
      return;
    }

    navigate('/home');
  };

  return (
    <NewTransactionContainer>
      <h3>Nova Saída</h3>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          loading={loading}
          name='Valor'
          type='number'
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
        <Button loading={loading} type='submit'>Salvar saída</Button>
      </FormStyled>
    </NewTransactionContainer>
  );
};