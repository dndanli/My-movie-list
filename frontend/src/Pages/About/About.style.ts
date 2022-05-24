import styled from "styled-components";
import About from "./About";

const StyledAbout = styled(About)`
  padding-block: 1rem;
  padding-inline: 1rem;
  font-family: "Poppins", sans-serif;
  color: rgba(51, 51, 51, 0.9);
  display: flex;
  flex-direction: column;
  .header-1 {
    font-size: 1.9rem;
    margin-block: 1rem;
  }
  p {
    font-size: 1.2rem;
  }

  .wrapper {
    margin-top: 2.5rem;
  }

  .list-about {
    div {
      margin-bottom: 2rem;
      display: flex;
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      background-color: rgba(255, 140, 50);
      color: #fafafa;
      padding-block: 0.3rem;
      padding-inline: 0.6rem;
      height: 2rem;
      width: 2rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div:nth-child(1) {
      span {
        width: 1.6rem;
      }
    }
  }

  /* 900px */
  @media only screen and (min-width: 56.25em) {
    .header-1 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.3rem;
    }

    .list-about {
      p {
        font-size: 1.3rem;
      }
    }
  }

  /* 1024px */
  @media only screen and (min-width: 64em) {
    margin-left: 15rem;
  }

  /*1700px*/
  @media only screen and (min-width: 106.25em) {
    padding-inline: 6rem;
  }
`;

export default StyledAbout;
