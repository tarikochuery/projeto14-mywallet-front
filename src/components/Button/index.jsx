import { ThreeDots } from "react-loader-spinner";
import { ButtonStyled } from "./style";

export const Button = ({ children, type, onClick, loading }) => {
  return (
    <ButtonStyled onClick={onClick} type={type} disabled={loading}>
      {loading ?
        <ThreeDots
          height="23"
          width="59"
          radius="9"
          color="#ffffff"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
        :
        children}
    </ButtonStyled>
  );
};