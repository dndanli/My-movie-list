import styled from "styled-components";
import MainPanel from "./MainPanel";

const StyledMainPanel = styled(MainPanel)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 1rem;

  .wrapper {
    position: relative;
    display: flex;
    overflow: hidden;
    border-radius: 1rem;
    /* width: 100%; */
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
    font-size: 1.2rem;
    background-color: rgba(43, 43, 39, 0.6);
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
    background-color: rgb(253, 0, 84);
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 3%;
    right: 3%;
  }
`;
export default StyledMainPanel;
