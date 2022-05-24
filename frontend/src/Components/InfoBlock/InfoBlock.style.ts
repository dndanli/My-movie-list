import styled from "styled-components";

import InfoBlock from "./InfoBlock";

const StyledInfoBlock = styled(InfoBlock)`
  display: flex;
  flex-direction: column;
  padding-block: 0.5rem;

  .title {
    font-weight: 700;
    font-size: 1.2rem;
    color: #f093fb;
  }

  .value {
    color: rgba(16, 16, 16, 0.9);
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

export default StyledInfoBlock;
