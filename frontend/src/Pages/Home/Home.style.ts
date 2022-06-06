import styled from "styled-components";
import { theme } from "../../Theme/theme";
import Home from "./Home";
const StyledHome = styled(Home)`
  padding-inline: 1rem;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;

  .search-wrapper {
    display: flex;
    justify-content: center;
  }

  .popup-wrapper{
    position: fixed;
    z-index: 3;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    background-color: rgba(51, 51, 51, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 5rem;  
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

  .hero {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-inline: 1rem;
    min-height: 15rem;
    max-height: 15rem;

    background-color: rgba(255, 255, 255, 9);
    color: rgba(255, 255, 255, 0.9);

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

  /* 635px */
  @media only screen and (min-width: 39.6em) {
    padding-inline: 3rem;
    .main-panel {
      .title {
        font-size: 1.4rem;
      }
    }
  }

  /* 768px */
  @media only screen and (min-width: 48em) {
    padding-inline: 3.3rem;
    .main-panel {
      .watch-btn {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  /* 800px */
  @media only screen and (min-width: 50em) {
    padding-inline: 4rem;
    .main-panel {
      .title {
        font-size: 1.7rem;
      }
      .play-icon {
        font-size: 1.7rem;
      }
    }
  }

  /* 900px */
  @media only screen and (min-width: 56.25em) {
    padding-inline: 6rem;
  }

  /* 1024px */
  @media only screen and (min-width: 64em) {
    width: 72%;
    padding-top: 1.3rem;
    padding-right: 0;
    margin-left: 10rem;
    .main-panel {
      .watch-btn {
        font-size: 1.2em;
      }
      .wrapper {
        width: 100%;
      }
      .title {
        font-size: 2rem;
      }
    }

    .card {
      .wrapper {
        width: 11rem;
      }
    }

    .hero {
      #hero-heading {
        font-size: 2.3rem;
      }
      .hero-heading-2 {
        font-size: 1.7rem;
      }
    }

    #popular-heading,
    #upcoming-heading {
      font-size: 2rem;
    }

    .section {
      #trailers-heading {
        font-size: 2rem;
      }
    }

    /* 1295px */
    @media only screen and (min-width: 80em) {
      width: 70%;
      .hero {
        min-height: 20rem;
      }
    }

    /*1515px*/
    @media only screen and (min-width: 94.688em) {
      width: 60%;
    }

    /* 1575px */
    @media only screen and (min-width: 98em) {
      padding-inline: 7rem;
      .search-wrapper {
        display: none;
      }
    }

    /*1700px*/
    @media only screen and (min-width: 106.25em) {
      padding-inline: 8rem;
    }

    /*1700px*/
    @media only screen and (min-width: 112.5em) {
      padding-inline: 10rem;
    }
  }
`;
export default StyledHome;
