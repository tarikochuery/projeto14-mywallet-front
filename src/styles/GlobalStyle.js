import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html {
    font-size: 10px;
    font-family: 'Raleway', sans-serif;
    min-height: 100vh;
  }

  body{
    min-height: 100vh;
  }
`;