import styled from "styled-components";
import Carousel from "./Carousel";

const StyledCarousel = styled(Carousel)`
  overflow: hidden;
  position: relative;
  padding-top: 3.5rem;
  padding-bottom: 3rem;
  
  .embla__container {
    display: flex;
  }

  .embla__button {
    color: rgba(23, 23, 23, 0.8);
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

     border: solid 1px #ccc;
  }

  .prev {
    right: 4rem;
  }

  .next {
    right: 0;
  }


  .embla__slide {

  }

  .card {
    margin-right: 1.5rem;
  }
`;

export default StyledCarousel;
