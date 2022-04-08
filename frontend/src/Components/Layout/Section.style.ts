import styled from "styled-components";
import Section from "./Section";

const StyledSection = styled(Section)`
  .trailers-wrapper {
    display: flex;
    overflow: auto;
    max-height: 11rem;
    .play {
      margin-right: 1.5rem;
    }
    padding-bottom: 2rem;
  }
  .player-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: black;
    text-align: end;
  }
  .close {
    color: rgba(255, 255, 255, 0.7);
    margin-right: 0.5rem;
    font-weight: 700;
    font-size: 2.4rem;
  }
  #trailers-heading {
    font-size: 1.7rem;
    font-weight: 500;
    margin-block: 1rem;
    color: rgba(255, 255, 255, 0.9);
  }
`;

export default StyledSection;
