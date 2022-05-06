import styled from "styled-components";
import Cast from "./Cast";

const StyledCast = styled(Cast)`
  padding-inline: 1rem;
  padding-block: 1rem;
  min-height: 100vh;

  .cast-header {
    font-family: "Inter", sans-serif;
    font-size: 1.7rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    margin-block: 0.5rem;
  }

  /* 1024px */
  @media only screen and (min-width: 64em) {
    width: 70%;
    margin-left: 15rem;
  }

  /* 1515px */
  @media only screen and (min-width: 94.688em) {
    width: 60%;
    padding-inline: 2.2rem;
  }

  /*1700px*/
  @media only screen and (min-width: 106.25em) {
    padding-inline: 3.5rem;
  }

  /*1800px*/
  @media only screen and (min-width: 112.5em) {
    padding-inline: 5.6rem;
  }
`;

export default StyledCast;
