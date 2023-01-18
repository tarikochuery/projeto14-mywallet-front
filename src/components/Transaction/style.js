import styled from "styled-components";

export const TransactionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const DateStyled = styled.p`
  color: #C6C6C6;
  font-size: 1.6rem;
`;

export const DescriptionStyled = styled.p`
  color: #000;
  font-size: 1.6rem;
  width: 100%;
`;

export const ValueStyled = styled.p`
  color: ${props => props.type === 'income' ? '#03AC00' : '#C70000'};
  font-size: 1.6rem;
`;