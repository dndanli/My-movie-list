import styled from "styled-components";
import { theme } from "../../Theme/theme";
import ListPopup from "./ListPopup";


const StyledListPopup = styled(ListPopup)`
  background-color: ${theme.colorDark};
  padding-inline: 3.2rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  border-radius: 1rem;
  width: 40rem;
  max-height: 50rem;
  .title{
    color: ${theme.colorWhite};
  } 
  .close-wrapper{
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .close-icon{
      font-size: 2rem;
      cursor: pointer;
      margin-bottom:1rem;
      color:${theme.colorWhite};
    }
  }
  p {
    color: ${theme.colorWhite};
  }
  .status-container {
    position: absolute;
  }
  .statuses-dropdown {
    z-index: 2;
    background-color: #ffffff;
    padding-block: 0.5rem;
    width: 15rem;
    -moz-box-shadow: 0 0 3px #ccc;
    -webkit-box-shadow: 0 0 3px #ccc;
    box-shadow: 0 0 3px #ccc;
    li {
      list-style-type: none;
      padding-block: 0.2rem;
      padding-inline: 1rem;
      font-size: 16px;
      transition: 100ms ease;
      cursor: pointer;
      &:hover {
        background-color: #eeeeee;
        color: #a760ff;
      }
    }
  }

  input[type="text"] {
    background-color: #eeeeee;
    border-radius: 8px;
    padding-block: 1rem;
    padding-inline: 0.9rem;
  }

  #status {
    cursor: pointer;
  }
  .banner {
    img {
      width: 100%;
      max-height: 25rem;
      border-radius: 1rem;
    }
    .background{
      width: 100%;
        height: 25rem;
        background: red;
      }
  }
  input[type="submit"] {
    background-color: ${theme.colorBlue};
    color: #ffffff;
    border-radius: 4.5px;
    padding-block: 0.5rem;
    padding-inline: 1rem;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
  }

  textarea {
    border: 1px solid rgba(31, 31, 31, 0.4);
    border-radius: 4px;
  }

  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: "Poppins", sans-serif;
  }

  input {
    border: none;
    border-radius: 0;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: "Poppins", sans-serif;
  }
`;
export default StyledListPopup;
