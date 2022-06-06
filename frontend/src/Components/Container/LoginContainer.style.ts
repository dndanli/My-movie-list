import styled from "styled-components";
import { theme } from "../../Theme/theme";

import LoginContainer from "./LoginContainer";
const StyledLoginContainer = styled(LoginContainer)`
  font-family: "Poppins", sans-serif;
  background-color:#ffffff;
  border: 1px solid #ccc;
  padding-inline: 1rem;
  padding-block: 1rem;
  border-radius: 0.8rem;
  max-width: 27rem;

  .error-message {
    margin-top: 0.5rem;
    color: ${theme.colorRed};
  }

  .wrapper {
    text-align: center;
    h2 {
      font-size: 2rem;
      font-weight: 600;
      color:rgba(51,51,51,1)
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 400;
      color:rgba(51,51,51,1);
      padding-bottom: 1rem;
    }
  }

  .right {
    text-align: end;
    margin-top: 1rem;
  }

  h4 {
    color:rgba(51,51,51,1);
    font-weight: 400;
    a {
      color:${theme.colorBlue};
    }
  }

  .form-container {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .text-input {
    font-size: 1.2rem;
    font-weight: 400;
    padding: 1rem;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    border: 1px solid #ccc;
    &:focus {
      border: 1px solid rgb(255, 140, 50);
    }
  }

  .password-input {
    width: 100%;
    font-size: 1.2rem;
    font-weight: 400;
    padding: 1rem;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
  }

  input[type="submit"] {
    padding-block: 0.6rem;
    margin-block: 2rem;
    background-color: rgba(43, 43, 43, 1);
    color:rgb(255, 255, 255);
    font-size: 1.2rem;
    border-radius: 10px;
    cursor: pointer;
    transition: 100ms ease;
    &:hover {
      background-color: rgba(43, 43, 43, 0.7);
    }
    &:active {
      background-color: rgba(43, 43, 43, 0.5);
    }
  }

  label {
    font-size: 1.2rem;
    font-weight: 400;
    margin-block: 0.7rem;
    color:rgba(51,51,51,1);
  }

  input {
    border: none;
    border-radius: 0;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: "Poppins", sans-serif;
  }

  .password-input-wrapper {
    border-radius: 10px;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    background-color: rgba(255, 255, 255, 1);
  }

  .view {
    font-size: 1.7rem;
    padding-inline: 0.5rem;
    color: #2b2b2b;
  }
`;

export default StyledLoginContainer;
