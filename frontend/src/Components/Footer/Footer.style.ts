import styled from "styled-components";
import Footer from "./Footer";

const StyledFooter = styled(Footer)`
  background-color: rgba(16, 16, 16, 1);
  color: white;
  padding-inline: 1rem;
  padding-block: 1rem;
  display: flex;

  .footer-text {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
    margin-left: 2rem;
  }
  #link {
    margin-inline: 0.2rem;
  }
  #link a {
    color: rgb(252, 153, 124);
    text-decoration: none;
  }
  .tmdb-logo {
    max-width: 10srem;
    max-height: 5rem;
  }
`;

export default StyledFooter;
