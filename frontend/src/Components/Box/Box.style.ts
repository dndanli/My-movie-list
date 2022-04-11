import styled from "styled-components";
import Box from "./Box";

const StyledBox = styled(Box)`
  width: 100%;
  .wrapper {
    display: flex;
    border-radius: 11px;
    background-color: rgba(255, 255, 255, 1);
  }
  a {
    text-decoration: none;
  }

  .image {
    max-width: 150px;
    max-height: 150px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .main-info-wrapper {
    padding-left: 1rem;
    max-width: 12rem;
  }

  .main-info-wrapper > p:not(:last-child) {
    margin-top: 0.5rem;
  }

  .title {
    margin-top: 1rem;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: rgba(16, 16, 16, 0.8);
  }

  .overview-wrapper {
    max-height: 5rem;
  }

  .overview-preview {
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;

    color: rgba(16, 16, 16, 0.9);
    margin-top: 1rem;
  }

  .rating-score {
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    color: rgba(16, 16, 16, 0.7);
  }
`;

export default StyledBox;
