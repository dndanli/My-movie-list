import styled from "styled-components";
import Person from "./Person";

const StyledPerson = styled(Person)`
  min-height: 100vh;
  font-family: "Poppins", sans-serif;

  .popup-wrapper{
    position: fixed;
    z-index: 3;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    background-color: rgba(51, 51, 51, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 5rem;  
  }

  .profile-wrapper {
    width: 12rem;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
  }

  .profile {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 25%;
    border:1px solid #ccc;
  }

  .info-wrapper {
    margin-top: 1rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding-inline: 1rem;
    padding-top: 1rem;
    position: relative;
  }

  .info-block {
    .value {
      color: rgba(51, 51, 51, 0.9);
    }
  }

  .name {
    color: rgba(51, 51, 51, 0.9);
  }

  .general-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0.7rem;
  }

  .biography-section {
    padding-block: 1rem;
    padding-inline: 1rem;
    color: rgba(51, 51, 51, 0.9);
  }
  .header {
    color: rgba(51, 51, 51, 0.9);
    font-weight: 500;
    margin-block: 0.5rem;
  }

  .bio-header {
    color: rgba(51, 51, 51, 0.9);
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

  /*1024px*/
  @media only screen and (min-width: 65em) {
    margin-left: 15rem;
  }

  /* 1295px */
  @media only screen and (min-width: 80em) {
    width: 70%;
  }

  /*1400px*/
  @media only screen and (min-width: 87.5em) {
  }

  @media only screen and (min-width: 94.688em) {
    width: 60%;
  }

  /* 1575px */
  @media only screen and (min-width: 98em) {
    .trailers-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    padding-inline: 3rem;
  }

  /*1700px*/
  @media only screen and (min-width: 106.25em) {
    padding-inline: 3.5rem;
  }

  /*1800px*/
  @media only screen and (min-width: 112.5em) {
    padding-inline: 5.5rem;
  }
`;
export default StyledPerson;
