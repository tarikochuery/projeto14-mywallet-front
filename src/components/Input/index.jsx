import { InputStyled } from "./styles";

export const Input = ({ name, value, onChange, type, required, min, loading }) => {
  return (
    <InputStyled loading={loading}>
      <input
        placeholder={name}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
        min={min}
        disabled={loading}
      />
    </InputStyled>
  );
};