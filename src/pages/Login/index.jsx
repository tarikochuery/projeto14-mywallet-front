import { useContext, useState } from "react";
import { Input } from '../../components/Input';
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';
import { Logo } from "../../components/Logo";
import { FormStyled } from "../../styles/FormStyled";
import { ContainerStyled } from "../../styles/ContainerStyled";
import { login } from "../../api/login";
import { UserContext } from "../../providers/UserProvider";

export const Login = () => {
  const { updateUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e, type) => {
    setLoginData({ ...loginData, [type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loginResponse = await login(loginData);
    setLoading(false);
    if (!loginResponse.success) {
      window.alert(loginResponse.error);
      return;
    }

    updateUserInfo(loginResponse.userInfo);
    navigate('/home');
  };

  return (
    <ContainerStyled>
      <Logo />
      {loading ?
        <p>Carregando...</p>
        :
        <FormStyled onSubmit={handleSubmit}>
          <Input
            name='E-mail'
            type='email'
            value={loginData.email}
            onChange={(e) => { handleInputChange(e, 'email'); }}
            required={true}
          />
          <Input
            name='Senha'
            type='password'
            value={loginData.password}
            onChange={(e) => { handleInputChange(e, 'password'); }}
            required={true}
          />
          <Button type='submit'>Entrar</Button>
        </FormStyled>
      }

      <Link to='/cadastro'>
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </ContainerStyled>
  );
};