import { useEffect, useState } from "react";
import StyledBox from "../../Components/Box/Box.style";
import StyledButton from "../../Components/Button/Button.style";

import StyledSearchBar from "../../Components/SearchBar/SearchBar.style";
import { getSearchQueryResponse } from "../../Helpers/clientHelpers";

import { useSearchParams } from "react-router-dom";

type DiscoverProps = {
  className: string;
};

// TODO: cache api data

const Discover = ({ className }: DiscoverProps) => {
  const [queryResponse, setQueryResponse] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      if (searchParams.get("query")) {
        const response = await getSearchQueryResponse(
          searchParams.get("query")
        );
        setQueryResponse(response.results);
      }
    };
    fetchData();
  }, [searchParams]);
  return (
    <div className={className}>
      <StyledSearchBar className="search-bar" />
      <ul className="filter-section">
        <StyledButton className="filter-button" text="Movies" />
        <StyledButton className="filter-button" text="Tv-Shows" />
      </ul>
      <hr className="divider" />

      <div className="content-wrapper">
        {queryResponse.map((data: any) => {
          return (
            <StyledBox
              className="box"
              imagePath={data.poster_path}
              title={data.name || data.title}
              rating={data.vote_average}
              date={data.release_date}
              boxId={data.id}
              key={data.id}
              overview={data.overview}
              mediaType="movie"
            />
          );
        })}
      </div>
      <hr className="divider" />
    </div>
  );
};

export default Discover;
