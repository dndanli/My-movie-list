import styled from "styled-components";
import CastCarousel from "./CastCarousel";

const StyledCastCarousel = styled(CastCarousel)`
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
    color: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 1%;
    font-size: 1rem;
    font-weight: 500;
  }

  .embla__button {
    color: rgba(255, 255, 255, 0.9);
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

  .heading {
    color: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 1%;
    font-size: 1.7rem;
  }

  .card {
    margin-right: 1.5rem;
  }
`;

export default StyledCastCarousel;
