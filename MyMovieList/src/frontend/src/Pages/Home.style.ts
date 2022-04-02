import styled from "styled-components";
import Home from "./Home";
const StyledHome = styled(Home)`
  /* background-color: lightseagreen; */
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  .hero {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-inline: 1rem;
    min-height: 15rem;
    max-height: 15rem;
    background-color: rgb(32, 32, 34);
    background-image: linear-gradient(45deg, #ef709b, #fa9372);
    color: rgba(255, 255, 255, 0.9);
    border-radius: 5px;

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
    min-height: 20rem;
    display: flex;
    overflow: auto;
    .card {
      margin-right: 1.5rem;
    }
  }

  .trailers-wrapper {
    display: flex;
    overflow: auto;
    .play {
      margin-right: 1.5rem;
    }
    padding-bottom: 2rem;
  }

  #trending-heading {
    color: rgba(16, 16, 16, 0.8);
  }

  .player-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: black;
    text-align: end;
  }

  .close {
    color: rgba(255, 255, 255, 0.7);
    margin-right: 0.5rem;
    font-weight: 700;
    font-size: 2.4rem;
  }
`;
export default StyledHome;
