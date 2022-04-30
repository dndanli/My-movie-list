import styled from "styled-components";
import Button from "./Button";

const StyledButton = styled(Button)`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  max-height: 1.2rem;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  padding-block: 0.5rem;
  padding-inline: 0.5rem;

  .count-value {
    margin-left: 0.5rem;
  }
`;

export default StyledButton;
