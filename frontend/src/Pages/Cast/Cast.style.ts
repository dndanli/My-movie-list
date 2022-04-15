import styled from "styled-components";
import Cast from "./Cast";

const StyledCast = styled(Cast)`
  padding-inline: 1rem;
  padding-block: 1rem;

  .cast-header {
    font-family: "Inter", sans-serif;
    font-size: 1.7rem;
    font-weight: 500;
    color: rgba(16, 16, 16, 0.8);
    margin-block: 0.5rem;
  }
  a {
    text-decoration: none;
  }
  .list-item {
    border-radius: 6px;
    background-color: rgb(50, 50, 50);
    margin-bottom: 1rem;
    display: flex;
  }

  .profile {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    object-fit: cover;
    min-width: 100px;
    max-height: 120px;
  }

  .person-icon {
    min-width: 100px;
    min-height: 120px;
    color: rgba(255, 255, 255, 0.6);
  }

  .name-wrapper {
    padding-inline: 0.7rem;
    color: rgba(255, 255, 255, 0.9);
  }
  .name,
  .role {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    margin-top: 1rem;
  }
`;

export default StyledCast;
