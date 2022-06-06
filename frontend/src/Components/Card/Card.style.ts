import styled from "styled-components";
import Card from "./Card";

const StyledCard = styled(Card)`
  font-family: "Poppins", sans-serif;
  transition:500ms ease;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 11px;
    background-color:#ffffff;
    position: relative;
    padding-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
  }

  .image {
    width: 100%;
    height:15rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .background {
    width: 100%;
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
    font-size: 14px;
    p {
      color: rgba(51, 51, 51, 0.9);
      font-weight: 700;
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
    background-color: #ffffff;
    color: rgba(51, 51, 51, 0.9);
    position: absolute;
    bottom: 17%;
    left: 1rem;
  }
  
  .add-wrapper{
    transform: scale(0);
    display: flex;
    background-color: rgba(51, 51, 51, 0.9);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 3.5rem;
    right: 1rem;
    border-radius: 100%;
    cursor: pointer;
    .add{
      color: #ffffff;
      font-size: 1.8rem;
    }
  }

  .star-icon {
    font-size: 14px;
  }

  .date {
    padding-inline: 1rem;
    color: rgba(51, 51, 51, 0.9);
  }

  .icon {
    font-size: 9rem;
    color: rgba(51, 51, 51, 0.2);
    padding-bottom: 6rem;
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.5s ease;
      .add-wrapper{
        transform: scale(1.07);
        transition: 0.3s ease;
      }
  }

  //700px
  @media (min-width:43.75em){
    .title{
      font-size: 1rem;
    }
  }
`;

export default StyledCard;
