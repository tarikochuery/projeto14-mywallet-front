import styled from "styled-components";

export const InputStyled = styled.label`
  background-color: #fff;
  width: 100%;
  min-width: 32.6rem;
  padding: 1.7rem 1.5rem;
  border-radius: 0.5rem;

  input {
    font-size: 2rem;
    color: #000;
    border: none;
    outline: none;
  }

  input::placeholder{
    color: #000;
    opacity: 1;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`;