import styled from "styled-components";
import InfoBlockContainer from "./InfoBlockContainer";

const StyledInfoBlockContainer = styled(InfoBlockContainer)`
  display: grid;
  padding-block: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;

  .info-block {
    font-family: "Poppins", sans-serif;
    .title {
      font-size: 1.4rem;
      font-weight: 500;
      color: rgba(16, 16, 16, 0.9);
    }

    .value {
      font-size: 1rem;
      font-weight: 400;
      color: rgba(16, 16, 16, 0.7);
    }
  }
`;

export default StyledInfoBlockContainer;
