import styled from "styled-components";
import Card from "./Card";

const StyledCard = styled(Card)`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 8.8rem;
  max-height: 18rem;
  padding-inline: 0.5rem;
  border-radius: 10px;
  .image {
    max-width: 170px;
    max-height: 225px;
    border-radius: 10px;
  }
  .title {
    margin-bottom: 0;
    margin-top: 5px;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 700;
  }
  .metadata {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    max-width: 9rem;
    max-height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .rating-score {
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: auto;
      min-width: 2rem;
      max-width: 2rem;
      min-height: 2rem;
      max-height: 2rem;
      border-radius: 50%;
      background-color: rgba(255, 211, 105, 0.8);
      color: rgba(16, 16, 16, 0.9);
    }
    .extra-info {
      color: rgba(16, 16, 16, 0.8);
    }
  }
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s ease;
  }
`;

export default StyledCard;
