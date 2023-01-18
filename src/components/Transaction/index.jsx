import { DateStyled, TransactionStyled, DescriptionStyled, ValueStyled } from './style';

export const Transaction = ({ transaction }) => {
  const { date, description, value, type } = transaction;
  return (
    <TransactionStyled>
      <DateStyled>
        {date}
      </DateStyled>
      <DescriptionStyled>
        {description}
      </DescriptionStyled>
      <ValueStyled type={type}>
        {Number(value).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
      </ValueStyled>
    </TransactionStyled>
  );
};