import styled from "styled-components";
import Login from "./Login";

const StyledLogin = styled(Login)`
  padding-inline: 1rem;
  padding-block: 2rem;
  min-height: 100vh;

  .form-container {
    margin-top: 3rem;
  }

  .header {
    font-size: 2.4rem;
    font-weight: 500;
    font-family: "Libre Baskerville", sans-serif;
    color: rgba(16, 16, 16, 0.8);
  }

  .input-label,
  .user-input,
  .submit-btn {
    border: none;
    border-radius: 0;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  .input-label {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: rgba(16, 16, 16, 0.6);
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;
  }

  .user-input {
    padding: 1rem;
    padding-block: 1.3rem;
    border-radius: 12px;
    font-size: 1.2rem;
    -moz-box-shadow: 0 0 0.5px #ccc;
    -webkit-box-shadow: 0 0 0.5px #ccc;
    box-shadow: 0 0 0 0.5px #ccc;
    color: rgba(57, 62, 70, 0.7);
    &:focus {
      border: solid 1.5px rgb(255, 140, 50);
    }
  }

  .user-input::placeholder {
    color: rgba(16, 16, 16, 0.2);
  }

  .submit-wrapper {
    display: flex;
    justify-content: center;
  }

  .submit-btn {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    width: 100%;
    border-radius: 10px;
    padding-block: 1rem;
    background-color: rgb(253, 0, 84);
    color: rgba(255, 255, 255, 0.9);
    margin-top: 2.5rem;
  }

  .text-small {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: rgba(16, 16, 16, 0.4);
    span {
      color: rgb(253, 0, 84);
    }
  }

  a {
    text-decoration: none;
  }

  .text-wrapper-right {
    display: flex;
    justify-content: flex-end;
  }

  .text-wrapper-center {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
  }
  .view-icon {
    padding-left: 1rem;
    bottom: 1rem;
    right: 2rem;
    font-size: 1.8rem;
    color: rgba(16, 16, 16, 0.5);
  }

  .password-input-wrapper {
    padding: 1rem;
    border-radius: 12px;
    -moz-box-shadow: 0 0 0.5px #ccc;
    -webkit-box-shadow: 0 0 0.5px #ccc;
    box-shadow: 0 0 0 0.5px #ccc;
    &:focus {
      border: solid 1.5px rgb(255, 140, 50);
    }
    display: flex;
    justify-content: center;
  }
  .password-input {
    border: none;
    border-radius: 0;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 1.2rem;
    color: rgba(57, 62, 70, 0.7);
  }
`;

export default StyledLogin;
