import styled, { keyframes } from "styled-components";
import Navbar from "./Navbar";

const animation = keyframes`
    0%{opacity:0; transform: translateY(-45px) skewY(10deg) skewX(-9deg); filter:blur(3px)};
    25%{opacity:1; transform: translateY(0) skewY(0deg) skewX(0deg);  filter:blur(0)};
    75%{opacity:1; transform: translateY(0) skewY(0deg) skewX(0deg);  filter:blur(0)};
    100%{opacity:1; };
`;

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
  z-index: 3;
  .logo {
    margin-right: auto;
    a {
      color: rgb(255, 140, 50);
      text-decoration: none;
    }
  }

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

    opacity: 0;
    animation-name: ${animation};
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }

  .menu-icon {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.8);
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
