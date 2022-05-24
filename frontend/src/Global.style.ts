import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body{
    background-color:rgb(245, 245, 245);  
  }
 
  ::-webkit-scrollbar {
      height: 0.4rem;  
      width: 0.5rem;
    }
  ::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #f093fb;
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

  /* 1024px */
  @media only screen and (min-width: 64em) {
    .sidebar {
      display: block;
      padding-top: 2.3rem;
    }
    .navbar {
      display: none;
    }
  }

  /* 1295px */
  @media only screen and (min-width: 80em) {
  }

  /*1515px*/
  @media only screen and (min-width: 94.688em) {
    .content-bar {
      padding-top: 2.3rem;
      display: block;
    }
  }

  /* 1575px */
  @media only screen and (min-width: 98em) {
  }

  /* 1600px */
  @media only screen and (min-width: 100em) {
  }

  /*1700px*/
  @media only screen and (min-width: 106.25em) {
    .sidebar {
      left: 3%;
    }
    .content-bar {
      right: 2%;
    }
  }
`;
