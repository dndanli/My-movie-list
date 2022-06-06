import styled from "styled-components";
import ContentBar from "./ContentBar";
import { theme } from "../../Theme/theme";

const StyledContentBar = styled(ContentBar)`
  max-width: 17rem;
  border-left: 0.5px solid ${theme.colorWhiteLighter};
  min-height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  padding-inline: 1.2rem;
  font-family: "Inter", sans-serif;

  .searchbar-wrapper {
    display: flex;
    justify-content: center;
  }
  .searchbar {
    width: 100%;
  }

  .header-2 {
    color: ${theme.colorWhite};
    font-weight: 700;
    font-size: 1.8rem;
    font-family: "Inter", sans-serif;
    margin-top: 3rem;
  }

  .content {
    margin-top: 1.5rem;
    .content-box {
      margin-bottom: 1.5rem;
      font-family: "Inter", sans-serif;
    }
    overflow-y: auto;
    max-height: 33rem;
  }

  .truncate-btn {
    background-color: rgb(253, 0, 84);
    padding-inline: 1rem;
    padding-block: 0.7rem;
    max-height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    border-radius: 10px;
    font-size: 1.2rem;
  }
`;

export default StyledContentBar;
