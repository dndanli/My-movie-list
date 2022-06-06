import styled from "styled-components";
import { theme } from "../../Theme/theme";
import Carousel from "./Carousel";

const StyledCarousel = styled(Carousel)`
  overflow: hidden;
  position: relative;
  margin-top: 2rem;
  padding-top: 3.5rem;
  padding-bottom: 3rem;
  padding-left: 0.5rem;

  .embla__container {
    display: flex;
  }

  .heading {
    color: ${theme.colorWhite};
    position: absolute;
    top: 1%;
    font-size: 1.8rem;
  }
  .embla__button {
    color: ${theme.colorWhite};
    position: absolute;
    transition: 500ms ease-in-out;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    font-size: 1.2rem;
    top: 0;
    padding: 0.2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border: solid 1px ${theme.colorWhite};

    &:hover {
      cursor: pointer;
    }
  }

  .prev {
    right: 4rem;
  }

  .next {
    right: 0;
  }

  .card {
    .wrapper {
      width: 11rem;
    }
    margin-right: 1.5rem;
  }
`;

export default StyledCarousel;
