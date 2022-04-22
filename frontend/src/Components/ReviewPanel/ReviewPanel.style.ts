import styled from "styled-components";
import ReviewSection from "./ReviewPanel";

const StyledReviewPanel = styled(ReviewSection)`
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  -moz-box-shadow: 0 0 0.5px #ccc;
  -webkit-box-shadow: 0 0 0.5px #ccc;
  box-shadow: 0 0 0 0.5px #ccc;
  font-family: "Inter", sans-serif;
  padding: 1rem;

  .wrapper {
    display: flex;
  }

  .rating {
    font-weight: 500;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 2rem;
    background-color: orange;
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 4px;
    padding-inline: 0.5rem;
    padding-block: 0.2rem;
    color: rgba(255, 255, 255, 0.9);

    .star-icon {
      margin-left: 0.5rem;
      font-size: 1.4rem;
    }
  }

  .read-all {
    color: black;
  }

  .user-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .name-wrapper {
    margin-left: 1rem;
  }
  .user {
    width: 75px;
    height: 70px;
    border-radius: 50%;
    -moz-box-shadow: 0 0 0.5px rgba(16, 16, 16, 0.5);
    -webkit-box-shadow: 0 0 0.5px rgba(16, 16, 16, 0.5);
    box-shadow: 0 0 0 0.5px rgba(16, 16, 16, 0.5);
  }

  .content {
    padding-inline: 0.5rem;
    padding-bottom: 0.5rem;
    min-height: 8rem;
    max-width: 15rem;

    p {
      display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .author-name {
    font-weight: 400;
    color: rgba(16, 16, 16, 0.9);
  }
`;

export default StyledReviewPanel;
