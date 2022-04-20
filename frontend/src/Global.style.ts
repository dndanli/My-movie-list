import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body{
    background-color:rgb(245, 245, 245);
    background-color:rgba(255, 255, 255, 0.5);
  }
`;

export default GlobalStyle;
