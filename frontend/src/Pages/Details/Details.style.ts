import styled from "styled-components";
import Details from "./Details";

const StyledDetails = styled(Details)`
  font-family: "Inter", sans-serif;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding-inline: 1rem;

  .overview-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .overview-poster {
    top: 1rem;
    left: 1rem;
    position: absolute;
    min-width: 80px;
    min-height: 100px;

    max-width: 100px;
    max-height: 150px;
  }

  .overview-background {
    max-width: 400px;
    max-height: 200px;
    border-radius: 6px;
  }

  .overview-title-header,
  .cast-info,
  #overview-info-header,
  #overview-crew-header,
  #trailers,
  #trailer-name {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.5rem;
    color: rgba(16, 16, 16, 0.8);
  }
  .overview-info,
  .overview-text {
    margin-top: 1rem;
    color: rgba(16, 16, 16, 0.8);
  }

  #status {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: rgba(16, 16, 16, 0.7);
  }
  .genre-section {
    margin-top: 1rem;
    display: flex;
    list-style-type: none;
    overflow-x: auto;
    min-width: 100%;
    min-height: 3rem;
  }

  .genre-section > .genre-button {
    margin-left: 0.5rem;
  }
  .genre-button {
    max-height: 1.2rem;
    white-space: nowrap;
    display: flex;
    background-color: rgba(51, 51, 51, 0.9);
    color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    padding-block: 0.5rem;
    padding-inline: 0.5rem;
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
    a {
      color: rgb(219, 48, 86);
      text-decoration: none;
    }
  }
  .cast-page-link {
    display: flex;
    align-items: center;
    color: rgb(255, 140, 50);
  }
  .arrow-icon {
    margin-left: 0.5rem;
  }
  .trailer-player {
    margin-block: 2rem;
  }
  .divider {
    margin-top: 1rem;
    border: 0.5px solid rgba(16, 16, 16, 0.1);
  }
  .overview-background-fill {
    height: 190px;
    width: 100%;
    /* background-color: rgb(202, 62, 71); */

    background-color: #ff9a8b;
    background-image: linear-gradient(
      90deg,
      #ff9a8b 0%,
      #ff6a88 55%,
      #ff99ac 100%
    );
  }
`;

export default StyledDetails;
