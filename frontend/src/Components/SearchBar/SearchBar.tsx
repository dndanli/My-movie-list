import { HiOutlineSearch } from "react-icons/hi";
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
      <form onSubmit={handleSubmit}>
        <input
          className="search-field"
          type="search"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
