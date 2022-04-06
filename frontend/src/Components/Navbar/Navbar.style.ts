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
  .logo {
    margin-right: auto;
    color: rgb(255, 211, 105);
  }
  .menu-icon {
    font-size: 2rem;
    color: rgba(16, 16, 16, 0.8);
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
    top: 4rem;
    right: 0rem;
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
    .link-icon {
      font-size: 18px;
      margin-left: 1.5rem;
      margin-right: 0.5rem;
    }
  }
`;
export default StyledNavbar;