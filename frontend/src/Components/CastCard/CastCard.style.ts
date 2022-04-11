import styled from "styled-components";
import CastCard from "./CastCard";

const StyledCastCard = styled(CastCard)`
  background-color: rgba(255, 255, 255, 0.9);
  min-width: 8rem;
  max-height: 18rem;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  .profile {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
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
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .character-name {
    font-size: 13.5px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default StyledCastCard;
