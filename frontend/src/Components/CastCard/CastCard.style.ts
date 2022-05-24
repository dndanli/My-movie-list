import styled from "styled-components";
import CastCard from "./CastCard";

const StyledCastCard = styled(CastCard)`
  width: 8rem;
  background-color: #ffffff;
  border-radius: 8px;
  padding-bottom: 1rem;
  a {
    text-decoration: none;
    .name {
      color: rgba(51, 51, 51, 0.9);
    }
    .character-name {
      color: rgba(51, 51, 51, 0.8);
    }
  }
  .image-wrapper {
    width: 100%;
  }
  .profile {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    min-width: 100%;
    height: 190px;
  }
  .person-icon {
    color: rgba(51, 51, 51, 0.3);
    margin-top: 1rem;
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
