import styled from "styled-components";
import Card from "./Card";

const StyledCard = styled(Card)`
  font-family: "Inter", sans-serif;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10.3rem;
    min-height: 21rem;
    border-radius: 11px;
    background-color: rgba(255, 255, 255, 0.9);
    position: relative;
    padding-bottom: 0.5rem;
    -moz-box-shadow: 0 0 0.5px #ccc;
    -webkit-box-shadow: 0 0 0.5px #ccc;
    box-shadow:0 0 0 0.5px #ccc;
  }

  a {
    text-decoration: none;
  }

  .image {
    width: 100%;
    height: 220px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .background {
    width: 150px;
    height: 226px;
    border-radius: 10px;
  }

  .text-content {
    margin-inline: 1rem;
    font-weight: 400;
    width: 100%;
  }

  .title {
    margin-block: 1rem;
    text-align: start;
    padding-left: 1rem;
    font-size: 1rem;
    font-weight: 700;
    color:rgba(16,16,16, 0.9);
    p {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .rating-score {
    min-width: 4rem;
    min-height: 2rem;
    font-weight: 700;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 15px;
    background-color:rgb(255, 140, 50);
    color: rgba(255, 255, 255, 1);
    position: absolute;
    bottom: 6.8rem;
    left: 1rem;
  }

  .star-icon {
    font-size: 14px;
  }

  .date {
    padding-inline: 1rem;
    color: rgba(16, 16, 16, 1);
  }

  .icon {
    font-size: 9rem;
    color: rgba(16, 16, 16, 0.3);
    padding-bottom: 6.5rem;
  }

  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
    transition: 0.5s ease;
  }
`;

export default StyledCard;
