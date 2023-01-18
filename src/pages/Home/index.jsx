import { TransactionButton } from '../../components/TransactionButton';
import { TransactionList } from '../../components/TransactionsList';

export const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      <TransactionList />
    </div>
  );
};