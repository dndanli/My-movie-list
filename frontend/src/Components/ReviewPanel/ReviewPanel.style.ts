import styled from "styled-components";
import { theme } from "../../Theme/theme";
import ReviewSection from "./ReviewPanel";

const StyledReviewPanel = styled(ReviewSection)`
  background-color: ${theme.colorGreyDarker};
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  padding: 1rem;

  .rating {
    width: 4rem;
    font-weight: 500;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 1.5rem;
    background-color: ${theme.colorRed};
    border-radius: 4px;
    padding-inline: 0.5rem;
    padding-block: 0.2rem;
    color: ${theme.colorWhite};
    margin-bottom: 0.5rem;

    .star-icon {
      margin-left: 0.5rem;
      font-size: 1.4rem;
    }
  }

  .read-all {
    color: ${theme.colorWhite};
    text-decoration: underline;
  }

  .user-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .name-wrapper {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .profile-img-wrapper {
    width: 4rem;
  }

  .user {
    width: 100%;
    height: 4rem;
    object-fit: cover;
    border-radius: 8px;
  }

  .user-icon {
    color:${theme.colorWhite};
    width: 100%;
    height: 4rem;
    object-fit: cover;
    border-radius: 8px;
    -moz-box-shadow: 0 0 0.5px rgba(255, 255, 255, 0.5);
    -webkit-box-shadow: 0 0 0.5px rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.5);
  }

  .content {
    padding-bottom: 0.5rem;
    min-height: 8rem;
    color: rgba(255, 255, 255, 0.8);
    p {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .author-name {
    font-weight: 500;
    font-size:1.2rem;
    color: ${theme.colorWhite};
  }

  .author-username {
    font-weight: 400;
    color: ${theme.colorWhite};
  }

  .posted {
    margin-top: 1rem;
    color: ${theme.colorWhite};
  }

  .tmdb-user {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    margin-top: 0.5rem;
    border-radius: 2px;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #01b4e4;
    color: rgba(255, 255, 255, 0.9);
  }
`

export default StyledReviewPanel;
