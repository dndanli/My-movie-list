import styled from "styled-components";
import Person from "./Person";

const StyledPerson = styled(Person)`
  min-height: 100vh;
  font-family: "Poppins", sans-serif;

  .profile-wrapper {
    width: 12rem;
    height: 12rem;
    position: absolute;
    top: -27%;
    left: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .profile {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  .info-wrapper {
    margin-top: 8rem;
    padding-top: 8rem;
    background-color: white;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding-inline: 1rem;
    -moz-box-shadow: 0 0 0.5px #ccc;
    -webkit-box-shadow: 0 0 0.5px #ccc;
    box-shadow: 0 0 0 0.5px #ccc;
    position: relative;
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
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  .header {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    margin-block: 0.5rem;
  }
  .bio-header {
    color: rgba(16, 16, 16, 0.9);
  }
  .biography {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
  }
`;
export default StyledPerson;
