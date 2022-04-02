import styled from "styled-components";
import SearchBar from "./SearchBar";

const StyledSearchBar = styled(SearchBar)`
  background-color: white;
  min-height: 2rem;
  padding-block: 0.5rem;
  border-radius: 1rem;
  background-color: rgba(216, 227, 231, 0.8);
  .search-icon,
  .close-icon,
  .close-icon-vis {
    font-size: 2rem;
    color: rgba(16, 16, 16, 0.7);
  }
  .search-icon {
    padding-left: 10px;
  }
  .close-icon {
    visibility: hidden;
  }
  .close-icon-vis {
    padding-right: 10px;
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
    background-color: rgba(216, 227, 231, 0.1);
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

export default StyledSearchBar;
