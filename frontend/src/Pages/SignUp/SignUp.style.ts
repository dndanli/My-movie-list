import styled from "styled-components";
import SignUp from "./SignUp";

const StyledSignUp = styled(SignUp)`
  min-height: 100vh;
  .sign-up-container {
    margin-top: 2rem;
  }

  /*498px*/
  @media only screen and (min-width: 31.125em) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* 535px */
  @media only screen and (min-width: 33.4em) {
    padding-ineline: 2rem;
  }

  /* 635px */
  @media only screen and (min-width: 39.6em) {
  }

  /* 768px */
  @media only screen and (min-width: 48em) {
  }

  /* 800px */
  @media only screen and (min-width: 50em) {
  }

  /* 900px */
  @media only screen and (min-width: 56.25em) {
  }

  /* 1024px */
  @media only screen and (min-width: 64em) {
    .sign-up-container {
      margin-top: 4rem;
    }
  }

  /* 1575px */
  @media only screen and (min-width: 98em) {
  }
`;

export default StyledSignUp;
