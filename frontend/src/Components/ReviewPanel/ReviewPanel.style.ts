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
    max-height: 1.5rem;
    background-color: rgba(255, 140, 50, 0.9);
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
    display: flex;
    flex-direction: column;
    justify-content: center; 
  }
  .profile-img-wrapper{
    width: 4rem;
  }
  .user {
    width: 100%;
    height: 4rem;
    object-fit: cover;
    border-radius: 8px;
    -moz-box-shadow: 0 0 0.5px rgba(16, 16, 16, 0.5);
    -webkit-box-shadow: 0 0 0.5px rgba(16, 16, 16, 0.5);
    box-shadow: 0 0 0 0.5px rgba(16, 16, 16, 0.5);
  }

  .user-icon{
    color: rgba(16, 16, 16, 0.6);
    width: 100%;
    height: 4rem;
    object-fit: cover;
    border-radius: 8px;
    -moz-box-shadow: 0 0 0.5px rgba(16, 16, 16, 0.5);
    -webkit-box-shadow: 0 0 0.5px rgba(16, 16, 16, 0.5);
    box-shadow: 0 0 0 0.5px rgba(16, 16, 16, 0.5);
  }

  .content {
    padding-inline: 0.5rem;
    padding-bottom: 0.5rem;
    min-height: 8rem;
    max-width: 17rem;

    p {
      display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .author-name {
    font-weight: 500;
    color: rgba(16, 16, 16, 1);
  }

  .author-username {
    font-weight: 400;
    color: rgba(16, 16, 16, 1);
  }

  .posted{
    margin-top: 1rem;
    color:rgba(16, 16, 16, 1);
  }

  .tmdb-user{
    font-family:"Inter", sans-serif;
    font-weight: 500;
    margin-top: 0.5rem;
    border-radius: 2px;
    width:4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #01b4e4;
    color:rgba(255, 255, 255, 0.9);
  }
`;

export default StyledReviewPanel;
