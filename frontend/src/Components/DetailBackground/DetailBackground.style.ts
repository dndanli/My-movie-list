import styled from "styled-components";
import { theme } from "../../Theme/theme";
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
    padding-inline: 0.2rem;
  }

  .overview-poster {
    max-width: 100%;
    max-height: 170px;
    margin-top: 1rem;
    object-fit: contain;
    border-radius: 10px;
  }

  .overview-background{
    border-radius: 6px;
    width: 100%;
    max-height: 20rem;
    object-fit: cover;
    border-radius: 1rem;
  }
  .overview-background-fill {
    border-radius: 6px;
    max-height: 20rem;
    object-fit: cover;
    border-radius: 1rem;
    background-color: ${theme.colorWhiteLighter};
    min-height: 20rem;
  }
`;

export default StyledDetailBackground;
