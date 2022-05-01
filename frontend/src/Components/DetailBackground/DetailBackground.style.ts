import styled from "styled-components";
import DetailBackground from "./DetailBackground";

const StyledDetailBackground = styled(DetailBackground)`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  .bg {
    width: 35%;
    height: 100%;
    left: 0%;
    position: absolute;
    background-color: rgba(16, 16, 16, 0.8);
    display: flex;
    justify-content: center;
    border-bottom-left-radius: 0.9rem;
    border-top-left-radius: 0.9rem;
  }

  .overview-poster {
    max-width: 100%;
    max-height: 170px;
    margin-top: 1rem;
    object-fit: contain;
  }

  .overview-background {
    border-radius: 6px;
    width: 100%;
    max-height: 20rem;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

export default StyledDetailBackground;
