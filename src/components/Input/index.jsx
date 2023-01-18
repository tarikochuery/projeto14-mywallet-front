import { InputStyled } from "./styles";

export const Input = ({ name, value, onChange, type, required, min }) => {
  return (
    <InputStyled>
      <input
        placeholder={name}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
        min={min}
      />
    </InputStyled>
  );
};