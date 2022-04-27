import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body{
    background-color:#FCFCFD;
  }

  ::-webkit-scrollbar {
      height: 0.5em;  
      width: 0.5rem;
    }
  ::-webkit-scrollbar-track {
    background-color: white;
  }
  ::-webkit-scrollbar-thumb {
    background-color:rgb(59, 61, 58);
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
  }

  /* 635px */
  @media only screen and (min-width: 39.6em) {
    padding-inline: 3rem;
  }

  /* 768px */
  @media only screen and (min-width: 48em) {
    padding-inline: 3.3rem;
  }

  /* 800px */
  @media only screen and (min-width: 50em) {
    padding-inline: 4rem;
  }

  /* 900px */
  @media only screen and (min-width: 56.25em) {
    padding-inline: 6rem;
  }

  /* 1024px */
  @media only screen and (min-width: 64em) {
    flex-direction: row;
    justify-content: center;
    .sidebar {
      display: block;
      padding-top: 2.3rem;
    }
    .home-page {
      width: 90%;
      padding-top: 1.3rem;
    }
    .navbar {
      display: none;
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
  }

  /* 1575px */
  @media only screen and (min-width: 98em) {
    .home-page {
      width: 60%;
      padding-inline: 4rem;
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
