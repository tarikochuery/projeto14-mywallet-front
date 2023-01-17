import { useState } from "react";
import { Input } from '../../components/Input';
import { Link } from "react-router-dom";
import { Button } from '../../components/Button';
import { Logo } from "../../components/Logo";
import { FormStyled } from "../../styles/FormStyled";
import { ContainerStyled } from "../../styles/ContainerStyled";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e, type) => {
    setLoginData({ ...loginData, [type]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: Montar Função para Submit Login
    console.log(loginData);
  };

  return (
    <ContainerStyled>
      <Logo />
      <FormStyled onSubmit={handleSubmit}>
        <Input
          name='E-mail'
          type='email'
          value={loginData.email}
          onChange={(e) => { handleInputChange(e, 'email'); }}
        />
        <Input
          name='Senha'
          type='password'
          value={loginData.password}
          onChange={(e) => { handleInputChange(e, 'password'); }}
        />
        <Button type='submit'>Entrar</Button>
      </FormStyled>

      <Link to='/cadastro'>
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </ContainerStyled>
  );
};