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
    max-width: 100%;
    max-height: 100%;
  }

  .overview-title-header,
  .cast-info,
  #overview-info-header,
  #overview-crew-header,
  #trailers {
    margin-top: 1rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: rgba(23, 23, 23, 0.9);
  }
  .overview-info,
  .overview-text {
    margin-top: 1rem;
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
    background-color: rgba(34, 40, 49, 0.5);
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
    display: flex;
    align-items: center;
    max-height: 18rem;
    font-size: 1rem;
    white-space: nowrap;
    a {
      color: rgba(23, 23, 23, 0.9);
    }
  }
  .see-more-icon {
    color: rgba(23, 23, 23, 0.9);
    font-size: 2rem;
  }
  .trailer-player {
    margin-block: 1rem;
  }
`;

export default StyledDetails;
