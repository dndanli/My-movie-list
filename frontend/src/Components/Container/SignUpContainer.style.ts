import styled from "styled-components";

import Container from "./SignUpContainer";
const StyledContainer = styled(Container)`
  font-family: "Poppins", sans-serif;
  background-color: rgb(255, 255, 255);
  padding-inline: 1rem;
  padding-block: 1rem;
  border-radius: 0.8rem;
  -moz-box-shadow: 0 0 0.5px #ccc;
  -webkit-box-shadow: 0 0 0.5px #ccc;
  box-shadow: 0 0 0 0.5px #ccc;
  max-width: 27rem;

  .wrapper {
    text-align: center;
    h2 {
      font-size: 2rem;
      font-weight: 600;
      color: #2b2b2b;
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 400;
      color: #423f3e;
      padding-bottom: 1rem;
    }
  }

  h4 {
    color: #423f3e;
    font-weight: 400;
    a {
      color: rgb(255, 140, 50);
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
    background-color: #2b2b2b;
    color: rgb(255, 255, 255);
    font-size: 1.2rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: 300ms ease;
    &:hover {
      background-color: rgba(43, 43, 43, 0.9);
    }
    &:active {
      background-color: rgba(43, 43, 43, 0.8);
    }
  }

  label {
    font-size: 1.2rem;
    font-weight: 400;
    margin-block: 0.7rem;
    color: #2b2b2b;
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
  }

  .view {
    font-size: 1.7rem;
    padding-inline: 0.5rem;
    color: #2b2b2b;
  }
`;

export default StyledContainer;
