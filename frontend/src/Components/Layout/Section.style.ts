import styled from "styled-components";
import { theme } from "../../Theme/theme";
import Section from "./Section";

const StyledSection = styled(Section)`
  padding-block: 2rem;
  border-radius: 8px;

  .trailers-wrapper {
    display: flex;
    overflow: auto;
    max-height: 11rem;
    .play {
      margin-right: 1.5rem;
    }
    padding-bottom: 2rem;
  }
  .play {
    &:hover {
      cursor: pointer;
    }
  }

  .player-wrapper {
    position: relative;
    padding-top: 56.25%;
  }

  .react-player {
    margin-top: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    text-align: end;
  }

  .close {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    position: absolute;
    top: 2%;
    right: -1rem;
    border-radius: 6px;
    z-index: 2;
    background-color: ${theme.colorBlue};
    color: ${theme.colorWhite};
    cursor: pointer;
    transition: 200ms ease;
    &:hover {
      background-color: ${theme.colorWhite};
      color: ${theme.colorBlue};
    }
  }

  #trailers-heading {
    font-family: "Poppins", sans-serif;
    font-size: 1.7rem;
    font-weight: 700;
    margin-block: 1rem;
    color: ${theme.colorWhite};
  }
`;

export default StyledSection;
