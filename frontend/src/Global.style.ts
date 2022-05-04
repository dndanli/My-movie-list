import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body{
    background-color:rgb(251, 250, 251);  
  }

  ::-webkit-scrollbar {
      height: 0.4rem;  
      width: 0.5rem;
    }
  ::-webkit-scrollbar-track {
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(16, 16, 16, 0.7);
    border-radius: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  .sidebar,
  .content-bar {
    display: none;
  }

  /* 535px */
  @media only screen and (min-width: 33.4em) {
    padding-inline: 2rem;
    .discover-page {
      .filter-button {
        font-size: 1rem;
      }
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
    .discover-page {
      .filter-button {
        margin-left: 1.5rem;
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
    flex-direction: row;
    justify-content: center;
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
    .sidebar {
      display: block;
      padding-top: 2.3rem;
    }
    .home-page {
      width: 90%;
      padding-top: 1.3rem;
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
    }
    .navbar {
      display: none;
    }
    .discover-page {
      width: 80%;

      .profile {
        max-width: 150px;
        max-height: 150px;
      }
      .person-icon {
        min-width: 100px;
        min-height: 150px;
      }

      .box {
        .image {
          max-width: 160px;
          max-height: 160px;
        }

        .box-icon {
          min-width: 110px;
          min-height: 150px;
        }
      }
    }
  }

  /* 1295px */
  @media only screen and (min-width: 80em) {
    .home-page {
      width: 70%;
      .search-wrapper {
        display: none;
      }
      .hero {
        min-height: 20rem;
      }
    }
    .content-bar {
      padding-top: 2.3rem;
      display: block;
    }
    .discover-page {
      width: 60%;
    }
  }

  /* 1575px */
  @media only screen and (min-width: 98em) {
    .home-page {
      width: 60%;
      padding-inline: 3rem;
    }

    .content-bar {
      display: block;
    }
  }

  /* 1600px */
  @media only screen and (min-width: 100em) {
    .home-page {
      width: 57%;
    }
  }
`;
