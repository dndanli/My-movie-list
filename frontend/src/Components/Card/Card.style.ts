import styled from "styled-components";
import Card from "./Card";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 9.3rem;
  min-height: 16rem;
  max-height: 21.4rem;
  border-radius: 11px;
  position: relative;
  a {
    text-decoration: none;
  }
  .image {
    max-width: 170px;
    max-height: 225px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .title {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.9);
    padding-inline: 0.5rem;
  }
  .metadata {
    padding-inline: 0.5rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    max-width: 9rem;
    max-height: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    .rating-score {
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: auto;
      position: absolute;
      bottom: 6.5rem;
      left: 1rem;
      min-width: 2rem;
      max-width: 2rem;
      min-height: 2rem;
      max-height: 2rem;
      border-radius: 50%;
      background-color: #fbc7d4;
      color: rgba(16, 16, 16, 0.8);
    }
    .extra-info {
      margin-top: 0.5rem;
      color: rgba(255, 255, 255, 1);
    }
  }
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s ease;
  }
`;

export default StyledCard;
