import { InputStyled } from "./styles";

export const Input = ({ name, value, onChange, type, required }) => {
  return (
    <InputStyled>
      <input
        placeholder={name}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
      />
    </InputStyled>
  );
};