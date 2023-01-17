import { ButtonStyled } from "./style";

export const Button = ({ children, type, onClick }) => {
  return (
    <ButtonStyled onClick={onClick} type={type}>{children}</ButtonStyled>
  );
};