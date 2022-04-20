import styled from "styled-components";
import SearchBar from "./SearchBar";

const StyledSearchBar = styled(SearchBar)`
  background-color: white;
  min-height: 2rem;
  padding-block: 0.5rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  box-shadow:0 0 0 0.5px #ccc;
  .search-icon {
    font-size: 2rem;
    color: rgba(16, 16, 16, 0.7);
    padding-left: 10px;
  }

  .close-icon {
    font-size: 1.5rem;
    padding-left: 10px;
    color: rgba(16, 16, 16, 0.7);
  }

  display: flex;
  .search-field {
    width: 100%;
    max-width: 100%;
    min-width: 20px;
    outline: none;
    border: none;
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
  }

  input.search-field {
    background-color: rgba(255, 255, 255, 0.9);
    min-height: 2rem;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

export default StyledSearchBar;
