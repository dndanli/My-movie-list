import styled from "styled-components";
import Navbar from "./Navbar";
const StyledNavbar = styled(Navbar)`
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-height: 3.5rem;
  padding-inline: 1rem;
  position: relative;
  border-radius: 1rem;
  margin-top: 1rem;
  z-index: 2;
  .logo {
    margin-right: auto;
    a {
      color: rgb(219, 48, 86);
      text-decoration: none;
    }
  }
  .menu-icon {
    font-size: 2rem;
    color: rgb(219, 48, 86);
  }

  /* mobile navbar wrapper section */
  .mobile-navbar-wrapper {
    display: flex;
    flex-direction: column;
    background-color: rgba(82, 74, 78, 0.4);
    backdrop-filter: blur(25px);
    border-radius: 1rem;
    min-width: 11rem;
    position: absolute;
    top: 2.5rem;
    right: 1rem;
  }

  .nav-links-wrapper {
    text-decoration: none;
    margin-bottom: 1px;
  }
  .nav-links-wrapper:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .nav-link-container {
    display: flex;
    color: rgba(255, 255, 255, 1);
    align-items: center;
    .link-icon {
      padding-block: 1rem;
      font-size: 18px;
      margin-left: 1.5rem;
      margin-right: 0.5rem;
    }
  }
`;
export default StyledNavbar;
