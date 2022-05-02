import styled from "styled-components";
import MainPanel from "./MainPanel";

const StyledMainPanel = styled(MainPanel)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 1rem;
  font-family: "Poppins", sans-serif;

  .wrapper {
    position: relative;
    display: flex;
    overflow: hidden;
    border-radius: 1rem;
  }
  .play-icon {
    font-size: 1.3rem;
    margin-right: 0.5rem;
  }

  .watch-btn {
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    position: absolute;
    color: rgb(255, 255, 255);
    background-color: #ff7700;
    background-image: linear-gradient(336deg, #ff7700 0%, #eaa15c 100%);
    padding-block: 0.8rem;
    padding-inline: 1rem;
    border-radius: 1rem;
    top: 60%;
    left: 5%;
    display: none;
  }

  .darker {
    background-color: black;
    opacity: 0.5;
    position: absolute;
    width: 30%;
    height: 100%;
  }

  .panel-img {
    object-fit: cover;
    width: 100%;
    max-height: 25rem;
    border-radius: 1rem;
  }

  .title {
    color: rgba(255, 255, 255, 1);
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    font-size: 1.1rem;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(7px);
    padding-inline: 20px;
    padding-block: 0.5rem;
    width: 100%;
  }

  .btn-wrapper {
    position: absolute;
    background-color: rgba(43, 43, 39, 0.7);
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index:2;
  }

  .panel-btn {
    color: rgba(255, 255, 255, 1);
    font-size: 1.5rem;
  }

  .prev {
    top: 50%;
    left: 7px;
    transform: translateY(-60%);
  }

  .next {
    top: 50%;
    right: 7px;
    transform: translateY(-60%);
  }

  .rating-score {
    min-width: 4rem;
    min-height: 2rem;
    font-weight: 700;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 15px;
    background-color: #ff7700;
    background-image: linear-gradient(336deg, #ff7700 0%, #eaa15c 100%);
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 3%;
    right: 3%;
  }
`;
export default StyledMainPanel;
