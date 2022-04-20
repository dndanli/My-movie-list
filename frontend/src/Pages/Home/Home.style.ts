import styled from "styled-components";
import Home from "./Home";
const StyledHome = styled(Home)`
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  padding-inline: 1rem;

  .hero {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-inline: 1rem;
    min-height: 15rem;
    max-height: 15rem;

    background-image: linear-gradient(135deg, #fad7a1 10%, #e96d71 100%);

    color: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
    margin-block: 1rem;

    #hero-heading {
      font-size: 2rem;
      margin-top: 1.8rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    h2 {
      margin-top: 0;
      margin-bottom: 0;
      font-weight: 500;
    }
  }

  .searchbar {
    margin-block: 1rem;
  }

  .content-wrapper {
    min-height: 25rem;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    padding-top: 1rem;
    .card {
      margin-right: 1.5rem;
    }
  }

  #popular-heading {
    font-size: 1.7rem;
    font-weight: 500;
    color: rgba(16, 16, 16, 0.8);
    margin-block: 0.5rem;
  }
  #upcoming-heading {
    font-size: 1.7rem;
    font-weight: 500;
    color: rgba(16, 16, 16, 0.8);
    margin-block: 1rem;
  }
`;
export default StyledHome;
