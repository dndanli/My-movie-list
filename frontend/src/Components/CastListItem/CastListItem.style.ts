import styled from "styled-components";
import CastListItem from "./CastListItem";

const StyledCastListItem = styled(CastListItem)`
  .list-item {
    border-radius: 6px;
    background-color:#ffffff;
    margin-bottom: 1rem;
    display: flex;
  }
  a {
    text-decoration: none;
    .name {
      color: rgba(51, 51, 51, 0.9);
    }
    .role {
      color: rgba(51, 51, 51, 0.8);
    }
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
    color: rgba(51, 51, 51, 0.5);
  }

  .name-wrapper {
    padding-inline: 0.7rem;
  }
  .name {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    margin-top: 1rem;
    color: rgba(255, 255, 255, 0.9);
  }
  .role {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 16px;
    margin-top: 1rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default StyledCastListItem;
