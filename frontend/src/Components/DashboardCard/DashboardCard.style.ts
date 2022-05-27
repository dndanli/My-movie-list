import styled from "styled-components";
import DashboardCard from "./DashboardCard";

const StyledDashBoardCard = styled(DashboardCard)`
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  .wrapper{
  background-color: #ffffff;
  width: 8rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: 2.5rem;
    margin-top: 1rem;
    color: #f093fb; 
  }

  h2 {
    margin-top: auto;
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 1.3rem;
    text-decoration: none;
    color: purple;
  }
  }


`;

export default StyledDashBoardCard;
