import styled from "styled-components";
import Discover from "./Discover";

const StyledDiscover = styled(Discover)`
  padding-block: 1rem;
  padding-inline: 1rem;
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
    color: rgba(51, 51, 51, 0.9);
    text-align: center;
  }

  .searchbar-discover-wrapper {
    display: flex;
    justify-content: center;
    .search-bar {
      width: 100%;
    }
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

  /* 535px */
  @media only screen and (min-width: 33.4em) {
    padding-inline: 2rem;
    .filter-button {
      font-size: 1rem;
    }
  }

  /* 635px */
  @media only screen and (min-width: 39.6em) {
    padding-inline: 3rem;
    .filter-button {
      font-size: 1.2rem;
    }
  }

  /* 1024px */
  @media only screen and (min-width: 64em) {
    .discover-page {
      width: 80%;

      .profile {
        max-width: 150px;
        max-height: 150px;
      }
      .person-icon {
        min-width: 100px;
        min-height: 150px;
      }

      .box {
        .image {
          max-width: 160px;
          max-height: 160px;
        }

        .box-icon {
          min-width: 110px;
          min-height: 150px;
        }
      }
    }
  }

  /*1024px*/
  @media only screen and (min-width: 65em) {
    margin-left: 14rem;
  }

  /* 1295px */
  @media only screen and (min-width: 80em) {
  }

  /* 1515px */
  @media only screen and (min-width: 94.688em) {
    margin-right: 15rem;
    width: 60%;
  }

  /*1700px*/
  @media only screen and (min-width: 106.25em) {
    padding-inline: 5rem;
  }

  /*1800px*/
  @media only screen and (min-width: 112.5em) {
    padding-inline: 7.5rem;
  }
`;

export default StyledDiscover;
