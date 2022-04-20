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
    align-items: center;
    justify-content: center;
    list-style-type: none;
    overflow-x: auto;
    min-height: 3.5rem;
    padding-inline: 0.7rem;
  }


  .filter-section > .filter-button {
    margin-left: 0.5rem;
  }

  .divider {
    margin-top: 1rem;
    border: 0.5px solid rgba(16, 16, 16, 0.1);
  }

  .message {
    font-size: 1.2rem;
    color: rgba(16, 16, 16, 0.5);
    text-align: center;
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
  .person-profile {
    margin-bottom: 0.7rem;
  }
`;

export default StyledDiscover;
