import styled from "styled-components";
import Play from "./Play";

const StyledPlay = styled(Play)`
  width: 300px;
  margin-bottom: 5rem;
  .play-content-wapper {
    position: relative;
    display: grid;
    place-items: center;
  }
  .cover {
    border-radius: 8px;
    width: 300px;
    height: 187px;
    object-fit: cover;
  }

  .play-icon {
    font-size: 4rem;
    color: rgb(255, 255, 255);
    position: absolute;
  }
  &:active {
    transform: scale(0.9);
    transition: 1s ease;
  }
`;

export default StyledPlay;
