import styled from "styled-components";
import Siderbar from "./Sidebar";
import { theme } from "../../Theme/theme";

const StyledSidebar = styled(Siderbar)`
  min-width: 13rem;
  font-family: "Poppins", sans-serif;
  background-color: ${theme.colorGreyDarker};
  margin-top: 1rem;
  border-radius:1rem;
  position: fixed;
  min-height: 100vh;
  top: 0;
  left: 1%;
  padding-inline: 0.5rem;
  .logo {
    margin-right: auto;
    padding-left: 2rem;
    a {
      color: ${theme.colorAccentPrimary};
      text-decoration: none;
    }
  }

  #menu {
    margin-top: 3rem;
  }

  .header-2 {
    color: ${theme.colorWhite};
    padding-inline: 2rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    a {
      text-decoration: none;
    }
    margin-top: 2rem;
    padding-left: 1rem;
  }

  .link-container {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover {
      background-color: #eeeeee;
      border-radius: 1rem;
    }

    &:hover {
      .link-icon {
        color: ${theme.colorBlue};
      }
      .link-name {
        color: ${theme.colorBlack};
      }
    }
    &:active {
      background-color: #dddddd;
    }
    padding-left: 1rem;
    padding-block: 1rem;
    transition: 200ms;
  }

  .link-icon {
    font-size: 1.4rem;
    margin-right: 1rem;
    color: ${theme.colorGrey};
  }

  .link-name {
    font-size: 1rem;
    color: ${theme.colorGrey};
  }
`;

export default StyledSidebar;
