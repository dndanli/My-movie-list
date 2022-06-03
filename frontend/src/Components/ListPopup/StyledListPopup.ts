import styled from "styled-components";
import ListPopup from "./ListPopup";


const StyledListPopup = styled(ListPopup)`
  background-color: #fff;
  padding-inline: 3.2rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  border-radius: 1rem;
  max-width: 40rem;
  max-height: 45rem;
  
  .close-wrapper{
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .close-icon{
      font-size: 2rem;
      cursor: pointer;
      margin-bottom:1rem
    }
  }
  p {
    color: rgba(56, 56, 56, 0.9);
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
  }
  input[type="submit"] {
    background-color: #f093ff;
    color: #ffffff;
    border-radius: 4.5px;
    padding-block: 0.5rem;
    padding-inline: 1rem;
    font-size: 1rem;
    cursor: pointer;
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
