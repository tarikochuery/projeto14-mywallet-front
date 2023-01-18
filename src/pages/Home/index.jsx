import { useContext } from 'react';
import { LogOutOutline } from 'react-ionicons';
import { Link, useNavigate } from 'react-router-dom';
import { TransactionButton } from '../../components/TransactionButton';
import { TransactionList } from '../../components/TransactionsList';
import { UserContext } from '../../providers/UserProvider';
import { ButtonsContainer, HomeContainer, HomeHeader } from './style';

export const Home = () => {
  const { userInfo, updateUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    updateUserInfo({
      name: '',
      email: '',
      transactions: []
    });
    navigate('/');
  };
  return (
    <HomeContainer>
      <HomeHeader>
        <h2>Olá, {userInfo.name}</h2>
        <LogOutOutline
          title={'logout'}
          color={'#ffffff'}
          height="25px"
          width="25px"
          onClick={handleLogOut}
          style={{ cursor: 'pointer' }}
        />
      </HomeHeader>
      <TransactionList />
      <ButtonsContainer>
        <Link to='/nova-entrada' >
          <TransactionButton type='plus' />
        </Link>
        <Link to='/nova-saida'>
          <TransactionButton type='minus' />
        </Link>
      </ButtonsContainer>
    </HomeContainer>
  );
};