import { useEffect, useState } from "react";
import { getTopRatedMovies } from "../../Helpers/clientHelpers";
import StyledBox from "../Box/Box.style";
import StyledSearchBar from "../SearchBar/SearchBar.style";

import { v4 as uuidv4 } from "uuid";

type ContentBarProps = {
  className: string;
};
const ContentBar = ({ className }: ContentBarProps) => {
  const [results, setResult] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await getTopRatedMovies();
      setResult(response.results);
    };
    fetch();
  }, []);

  return (
    <div className={className}>
      <div className="searchbar-wrapper">
        <StyledSearchBar className="searchbar" />
      </div>
      <div className="header-2">Top rated movies</div>
      <div className="content">
        {results.slice(0, 3).map((obj: any) => {
          return (
            <StyledBox
              className="content-box"
              imagePath={obj.poster_path}
              title={obj.title}
              rating={obj.vote_average}
              boxId={obj.id}
              overview={obj.overview}
              mediaType={"movie"}
              key={uuidv4()}
            />
          );
        })}
      </div>
      <div className="truncate-btn">See more</div>
    </div>
  );
};

export default ContentBar;
