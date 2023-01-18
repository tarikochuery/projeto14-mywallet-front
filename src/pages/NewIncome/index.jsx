import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FormStyled } from "../../styles/FormStyled";
import { NewTransactionContainer } from "../../styles/NewTransactionContainer";

export const NewIncome = () => {
  const [incomeData, setIncomeData] = useState({
    value: '',
    description: '',
    type: 'income'
  });

  const handleInputChange = (e, type) => {
    setIncomeData({ ...incomeData, [type]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(incomeData);
    //TODO: Montar envio de transação para back
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