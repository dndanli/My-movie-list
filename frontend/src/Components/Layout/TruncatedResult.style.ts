import styled from "styled-components";
import TruncatedResult from "./TruncatedResult";

const StyledTruncatedResult = styled(TruncatedResult)`
  .content-wrapper {
    padding-inline: 1rem;
    padding-bottom: 2rem;
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }

  .truncate-wrapper{
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 2rem;
  }

  .truncate-btn{
    background-color: rgb(255, 140, 50);
    padding-inline: 1rem;
    padding-block: 0.5rem;
    max-height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color:rgba(255, 255, 255, 0.9);
    border-radius: 10px; 
  }
`;

export default StyledTruncatedResult;
