import styled from "styled-components";
import Play from "./Play";

const StyledPlay = styled(Play)`
  width: 300px;
  position: relative;
  margin-bottom: 5rem;

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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:active {
    transform: scale(0.9);
    transition: 1s ease;
  }
`;

export default StyledPlay;
