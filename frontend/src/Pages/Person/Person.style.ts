import styled from "styled-components";
import Person from "./Person";

const StyledPerson = styled(Person)`
  min-height: 100vh;
  font-family: "Poppins", sans-serif;

  .profile-wrapper {
    width: 12rem;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom:2rem;
  }

  .profile {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 25%;
  }

  .info-wrapper {
    margin-top: 1rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding-inline: 1rem;
    padding-top:1rem;
    position: relative;
  }

  .info-block {
    .value {
      color: rgba(16, 16, 16, 0.9);
    }
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
    color: rgba(16, 16, 16, 0.7);
  }
  .header {
    color: rgba(16, 16, 16, 0.9);
    font-weight: 500;
    margin-block: 0.5rem;
  }
  .bio-header {
    color: rgba(16, 16, 16, 0.9);
  }
  .biography {
    font-size: 1rem;
    color: rgba(16, 16, 16, 0.9);
    font-weight: 500;
  }

  /* 535px */
  @media only screen and (min-width: 33.4em) {
    .profile-wrapper {
      margin-top: 1rem;
      width: 14rem;
      height: 14rem;
      top: -40%;
    }
  }

  /* 1295px */
  @media only screen and (min-width: 80em) {
    width:70%;
  }
`;
export default StyledPerson;
