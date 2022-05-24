import styled from "styled-components";
import TextPanel from "./TextPanel";

const StyledTextPanel = styled(TextPanel)`
  .overview-info,
  .overview-text {
    margin-top: 1rem;
    color: rgba(51, 51, 51, 0.9);
  }

  #overview-info-header {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.5rem;
    color: rgba(51, 51, 51, 0.9);
  }
`;

export default StyledTextPanel;
