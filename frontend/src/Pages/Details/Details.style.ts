import styled from "styled-components";
import { theme } from "../../Theme/theme";
import Details from "./Details";

const StyledDetails = styled(Details)`
  font-family: "Poppins", sans-serif;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  padding-inline: 1rem;

  .no-info-to-show{
    margin-top: 1rem;
  }  

  .info-text {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1.3rem;
    color: ${theme.colorWhite};
    margin-top: 0.5rem;
  }

  .overview-title-header,
  .cast-info,
  #overview-info-header,
  #overview-crew-header,
  #trailers,
  .header-2,
  #trailer-name {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${theme.colorWhite};
  }
  .overview-title-header{
    font-size:2rem;
  }

  #status {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${theme.colorWhite};
  }

  .cast-info {
    margin-top: 1rem;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    min-height: 20rem;

    .cast-card {
      margin-right: 1rem;
    }

    .cast-card:nth-child(1) {
      margin-left: 0.1rem;
    }
  }

  .see-more {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    font-size: 1rem;
    color: ${theme.colorWhite};
    a {
      color: ${theme.colorWhite};
      text-decoration: none;
    }
  }
  .cast-page-link {
    display: flex;
    align-items: center;
    color: ${theme.colorWhite};
  }
  .arrow-icon {
    margin-left: 0.5rem;
  }

  .trailer-player {
    margin-block: 2rem;
  }

  .divider {
    margin-top: 1rem;
    border: 0.5px solid rgba(255, 255, 255, 0.1);
  }

  .overview-background-fill {
    height: 190px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
  }


  .metadata-wrapper {
    display: flex;
    justify-content: flex-start;
  }

  a {
    text-decoration: none;
  }

  /* 535px */
  @media only screen and (min-width: 33.4em) {
    .detail-background {
      .overview-poster {
        max-height: 200px;
      }
    }
  }

  /* 635px */
  @media only screen and (min-width: 39.6em) {
    .detail-background {
      .overview-poster {
        max-height: 220px;
      }
    }
  }

  /* 768px */
  @media only screen and (min-width: 48em) {
    .detail-background {
      .overview-poster {
        max-height: 240px;
      }
    }
  }

  /* 900px */
  @media only screen and (min-width: 56.25em) {
    .detail-background {
      .overview-poster {
        max-height: 250px;
      }
    }
  }

  /* 1024px */
  @media only screen and (min-width: 64em) {
    width: 70%;
    margin-left: 15rem;
    .detail-background {
      .overview-poster {
        max-height: 330px;
      }
      .overview-background {
        max-height: 23rem;
      }
    }
    .metadata {
      width: 20rem;
    }
  }

  /* 1295px */
  @media only screen and (min-width: 80em) {
  }

  /*1400px*/
  @media only screen and (min-width: 87.5em) {
    .cast-carousel {
      .cast-card {
        margin-right: 1.5rem;
      }
    }
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

export default StyledDetails;
