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
    color: rgba(16, 16, 16, 0.9);
    margin-block: 0.5rem;
  }

  /* 1024px */
  @media only screen and (min-width: 64em) {
    width: 100%;
  }

  /* 1295px */
  @media only screen and (min-width: 80em) {
    width: 50%;
  }
`;

export default StyledCast;
