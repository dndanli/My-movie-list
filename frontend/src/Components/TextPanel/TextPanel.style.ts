import styled from "styled-components";
import { theme } from "../../Theme/theme";
import TextPanel from "./TextPanel";

const StyledTextPanel = styled(TextPanel)`
  .overview-info,
  .overview-text {
    margin-top: 1rem;
    color: ${theme.colorWhite};
  }

  #overview-info-header {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${theme.colorWhite};
  }
`;

export default StyledTextPanel;
