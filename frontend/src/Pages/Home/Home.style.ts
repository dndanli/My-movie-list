import styled from "styled-components";
import Home from "./Home";
const StyledHome = styled(Home)`
  padding-inline: 1rem;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;

  .search-wrapper {
    display: flex;
    justify-content: center;
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
    font-weight: 700;
    color: rgba(16, 16, 16, 0.8);
    margin-block: 0.5rem;
  }
  #upcoming-heading {
    font-size: 1.7rem;
    font-weight: 700;
    color: rgba(16, 16, 16, 0.9);
    margin-block: 1rem;
  }
  .hero {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-inline: 1rem;
    min-height: 15rem;
    max-height: 15rem;

    background-color: rgba(16, 16, 16, 9);
    color: rgba(16, 16, 16, 0.9);

    border-radius: 1rem;
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
`;
export default StyledHome;
