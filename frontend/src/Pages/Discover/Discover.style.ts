import styled from "styled-components";
import Discover from "./Discover";

const StyledDiscover = styled(Discover)`
  padding-block: 1rem;
  padding-inline: 1rem;
  color: red;
  font-family: "Inter", sans-serif;
  min-height: 100vh;

  .filter-section {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    overflow-x: auto;
    min-width: 100%;
    min-height: 3rem;
  }

  .filter-section > .filter-button {
    margin-left: 0.5rem;
  }

  .divider {
    margin-top: 1rem;
    border: 0.5px solid rgba(16, 16, 16, 0.1);
  }

  .content-wrapper {
    min-height: 25rem;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    overflow-y: hidden;
    padding-top: 1rem;
  }
  .box {
    margin-bottom: 1rem;
  }
`;

export default StyledDiscover;
