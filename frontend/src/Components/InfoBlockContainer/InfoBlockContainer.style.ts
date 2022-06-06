import styled from "styled-components";
import { theme } from "../../Theme/theme";
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
      color: ${theme.colorWhite};
    }

    .value {
      font-size: 1rem;
      font-weight: 400;
      color: ${theme.colorWhite};
    }
  }
`;

export default StyledInfoBlockContainer;
