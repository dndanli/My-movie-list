import styled from "styled-components";
import TruncatedResult from "./TruncatedResult";

const StyledTruncatedResult = styled(TruncatedResult)`
  .content-wrapper {
    padding-inline: 1rem;
    padding-block: 1.2rem;
    display: grid;
    grid-column-gap: 3%;
    grid-row-gap: 2rem;
    grid-template-columns: repeat(5, 0fr);
    width: 90%;
    overflow-x: auto;
    margin-bottom: 1.5rem;
  }

  .truncate-wrapper {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding-left: 1rem;
    padding-bottom: 2rem;
  }

  .truncate-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f093db;
    cursor: pointer;
  }
`;

export default StyledTruncatedResult;
