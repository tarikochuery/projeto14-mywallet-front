import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FormStyled } from "../../styles/FormStyled";
import { NewTransactionContainer } from "../../styles/NewTransactionContainer";

export const NewOutcome = () => {
  const [outcomeData, setOutcomeData] = useState({
    value: '',
    description: '',
    type: 'outcome'
  });

  const handleInputChange = (e, type) => {
    setOutcomeData({ ...outcomeData, [type]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(outcomeData);
    //TODO: Montar envio de transação para back
  };

  return (
    <NewTransactionContainer>
      <h3>Nova Saída</h3>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          name='Valor'
          type='number'
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
        <Button type='submit'>Salvar saída</Button>
      </FormStyled>
    </NewTransactionContainer>
  );
};