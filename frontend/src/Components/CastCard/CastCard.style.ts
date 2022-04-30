import styled from "styled-components";
import CastCard from "./CastCard";

const StyledCastCard = styled(CastCard)`
  min-width: 8rem;
  /* max-height: 18rem; */
  background-color: rgb(34, 35, 46);
  border-radius: 8px;
  padding-bottom: 1rem;
  a {
    text-decoration: none;
    .name {
      color: rgba(255, 255, 255, 0.9);
    }
    .character-name {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .image-wrapper {
    width: 100%;
  }

  .profile {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    max-width: 100%;
    min-height: 190px;
  }

  .person-icon {
    color: rgba(16, 16, 16, 0.3);
    margin-top: 1.5rem;
    min-height: 192px;
    min-width: 128px;
  }

  .name-wrapper {
    padding-inline: 0.5rem;
  }

  .name {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .character-name {
    font-size: 13.5px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default StyledCastCard;
