import styled from "styled-components";
import Siderbar from "./Sidebar";

const StyledSidebar = styled(Siderbar)`
  min-width: 13rem;
  font-family: "Inter", sans-serif;
  border-right: 0.5px solid #ccc;
  /* background-color: red; */

  .logo {
    margin-right: auto;
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
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    a {
      text-decoration: none;
    }
    margin-top: 2rem;
  }

  .link-container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .link-icon {
    font-size: 1.6rem;
    margin-right: 1rem;
    color: rgb(255, 140, 50);
  }

  .link-name {
    font-size: 1rem;
    color: rgb(255, 140, 50);
  }
`;

export default StyledSidebar;
