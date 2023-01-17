import { useState } from "react";
import { LoginForm, LoginStyled, Logo } from "./style";
import { Input } from '../../components/Input';
import { Link } from "react-router-dom";
import { Button } from '../../components/Button';

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
    <LoginStyled>
      <Logo>MyWallet</Logo>
      <LoginForm onSubmit={handleSubmit}>
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
      </LoginForm>

      <Link to='/cadastrar'>
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </LoginStyled>
  );
};