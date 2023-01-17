import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../api/signUp";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { ContainerStyled } from "../../styles/ContainerStyled";
import { FormStyled } from "../../styles/FormStyled";

export const SignUp = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e, type) => {
    setSignUpData({ ...signUpData, [type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    //TODO: Fazer Lógica de cadastro de usuário
    e.preventDefault();
    const passwordMatch = signUpData.password === signUpData.passwordConfirmation;
    if (!passwordMatch) return window.alert('Senha e confirmação devem ser iguais');

    setLoading(true);
    const signUpResponse = await signUp(signUpData);

    setLoading(false);
    if (!signUpResponse.success) return window.alert(signUpResponse.error);

    navigate('/');
  };

  return (
    <ContainerStyled>
      <Logo />

      {loading ?
        <p>carregando...</p>
        :
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
      }
      <Link to='/'>
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </ContainerStyled>
  );
};