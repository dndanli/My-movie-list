import styled from "styled-components";
import Siderbar from "./Sidebar";

const StyledSidebar = styled(Siderbar)`
  min-width: 13rem;
  font-family: "Poppins", sans-serif;
  border-right: 0.5px solid rgba(16, 16, 16, 0.2);
  .logo {
    margin-right: auto;
    padding-left: 2rem;
    a {
      color: rgb(255, 140, 50);
      text-decoration: none;
    }
  }

  #menu {
    margin-top: 3rem;
  }

  .header-2 {
    color: rgba(16, 16, 16, 0.8);
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
    /* &:hover {
      background-color: rgba(235, 240, 233, 0.6);
    } */
    padding-left: 1rem;
    padding-block: 1rem;
    transition: 500ms;
  }

  .link-icon {
    font-size: 1.4rem;
    margin-right: 1rem;
    color: rgb(255, 140, 50);
  }

  .link-name {
    font-size: 1rem;
    color: rgba(16, 16, 16, 0.8);
  }
`;

export default StyledSidebar;
