import styled from "styled-components";
import Person from "./Person";

const StyledPerson = styled(Person)`
  min-height: 100vh;
  font-family: "Inter", sans-serif;

  .profile {
    object-fit: cover;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    position: absolute;
    top: 5rem;
    left: 1rem;
  }

  .info-wrapper {
    margin-top: 8rem;
    padding-top: 8rem;
    background-color: white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding-inline: 1rem;
    -moz-box-shadow: 0 0 3px #ccc;
    -webkit-box-shadow: 0 0 3px #ccc;
    box-shadow: 0 0 3px #ccc;
  }

  .name {
    color: rgba(16, 16, 16, 0.9);
  }

  .general-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0.7rem;
  }

  .biography-section {
    padding-block: 1rem;
    padding-inline: 1rem;
    background-color: white;
  }
  .header {
    color: rgba(16, 16, 16, 0.9);
    margin-block: 0.5rem;
  }
  .biography {
    font-size: 1rem;
    font-weight: 500;
  }

  .content-wrapper {
    padding-inline: 1rem;
    padding-bottom: 2rem;
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;
export default StyledPerson;
