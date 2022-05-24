import styled from "styled-components";
import SearchBar from "./SearchBar";

const StyledSearchBar = styled(SearchBar)`
  width: 100%;
  min-height: 2rem;
  padding-block: 0.5rem;
  border-radius: 15px;
  background-color:#ffffff;
  display: flex;
  align-items: center;
  box-shadow: 0 0 0 0.5px #ccc;
  font-family: "Poppins", sans-serif;
  .search-icon {
    font-size: 2rem;
    color: rgba(16, 16, 16, 0.7);
    padding-left: 10px;
  }

  .close-icon {
    font-size: 1.5rem;
    margin-left: auto;
    margin-right: 1rem;
    color: rgba(16, 16, 16, 0.7);
  }

  display: flex;
  .form-container {
    width: 90%;
  }

  .search-field {
    outline: none;
    border: none;
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    /* background-color: rebeccapurple; */
    min-height: 2rem;
    width: 90%;
  }

  input[type="text"]::-webkit-search-decoration,
  input[type="text"]::-webkit-search-cancel-button,
  input[type="text"]::-webkit-search-results-button,
  input[type="text"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

export default StyledSearchBar;
