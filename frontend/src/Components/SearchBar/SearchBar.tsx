import { HiOutlineSearch } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";

type SearchBarProps = {
  className: string;
};

const SearchBar = ({ className }: SearchBarProps) => {
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();

  const validateInput = (input: string) => !!input.trim();
  const clearSearchInput = () => {
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateInput(input) !== false) {
      axios.post(`http://localhost:8000/search/${input}`, { query: input });
      navigate(`/discover?query=${input}`);
    }
  };

  return (
    <div className={className}>
      <HiOutlineSearch className="search-icon" />
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="search-field"
          type="text"
          value={input}
          placeholder={"Movie, Tv show or Person ...."}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </form>
      {validateInput(input) !== false ? (
        <IoMdClose className="close-icon" onClick={clearSearchInput} />
      ) : null}
    </div>
  );
};

export default SearchBar;
