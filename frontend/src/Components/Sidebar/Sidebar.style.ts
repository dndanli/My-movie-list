import styled from "styled-components";
import Siderbar from "./Sidebar";

const StyledSidebar = styled(Siderbar)`
  min-width: 13rem;
  font-family: "Poppins", sans-serif;
  border-right: 0.5px solid rgba(255, 255, 255, 0.2);
  background-color: #ffffff;
  position: fixed;
  min-height: 100vh;
  top: 0;
  left: 1%;
  margin-top: 1rem;
  border-radius: 1.5rem;
  padding-inline: 0.5rem;
  .logo {
    margin-right: auto;
    padding-left: 2rem;
    a {
      color: #f093fb;
      text-decoration: none;
    }
  }

  #menu {
    margin-top: 3rem;
  }

  .header-2 {
    color: rgba(51, 51, 51, 1);
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
    &:hover {
      background-color: #eeeeee;
      border-radius: 1rem;
    }

    &:hover {
      .link-icon {
        color:#f093fb;
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
    color: #a7a6ac;
  }

  .link-name {
    font-size: 1rem;
    color: rgb(51, 51, 51);
  }
`;

export default StyledSidebar;
