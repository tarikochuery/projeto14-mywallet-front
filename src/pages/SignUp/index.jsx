import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { ContainerStyled } from "../../styles/ContainerStyled";
import { FormStyled } from "../../styles/FormStyled";

export const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const handleInputChange = (e, type) => {
    setSignUpData({ ...signUpData, [type]: e.target.value });
  };

  const handleSubmit = (e) => {
    //TODO: Fazer Lógica de cadastro de usuário
    //TODO: Fazer Verificação de senha e confirmação iguais
    e.preventDefault();
    console.log(signUpData);
  };

  return (
    <ContainerStyled>
      <Logo />
      <FormStyled onSubmit={handleSubmit}>
        <Input
          name='Nome'
          onChange={(e) => { handleInputChange(e, 'name'); }}
          value={signUpData.name}
          type='text'
        />
        <Input
          name='E-mail'
          onChange={(e) => { handleInputChange(e, 'email'); }}
          value={signUpData.email}
          type='email'
        />
        <Input
          name='Senha'
          onChange={(e) => { handleInputChange(e, 'password'); }}
          value={signUpData.password}
          type='password'
        />
        <Input
          name='Confirme a senha'
          onChange={(e) => { handleInputChange(e, 'passwordConfirmation'); }}
          value={signUpData.passwordConfirmation}
          type='password'
        />
        <Button>Cadastrar</Button>
      </FormStyled>
      <Link to='/'>
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </ContainerStyled>
  );
};