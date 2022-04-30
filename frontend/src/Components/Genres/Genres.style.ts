import styled from "styled-components";
import Genres from "./Genres";

const StyledGenres = styled(Genres)`
  margin-top: 1rem;
  display: flex;
  list-style-type: none;
  overflow-x: auto;
  min-width: 100%;
  min-height: 3rem;

  .genre-button {
    margin-left: 0.5rem;
  }

  .genre-button {
    max-height: 1.2rem;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(51, 51, 51, 0.9);
    color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    padding-block: 0.5rem;
    padding-inline: 0.5rem;
  }
`;

export default StyledGenres;
