import { HiOutlineSearch } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

type SearchBarProps = {
  className: string;
};

const SearchBar = ({ className }: SearchBarProps) => {
  const [isCloseIconVis, setCloseIconVis] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const validateInput = (input: string) => !!input.trim();
  const clearSearchInput = () => {
    setSearchInput("");
    setCloseIconVis(false);
  };

  return (
    <div className={className}>
      <HiOutlineSearch className="search-icon" />
      <input
        className="search-field"
        type="search"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => {
          if (validateInput(e.target.value) === false) {
            setCloseIconVis(false);
          } else {
            setCloseIconVis(true);
          }
          setSearchInput(e.target.value);
        }}
      ></input>
      <IoCloseOutline
        className={isCloseIconVis ? "close-icon-vis" : "close-icon"}
        onClick={clearSearchInput}
      />
    </div>
  );
};

export default SearchBar;
