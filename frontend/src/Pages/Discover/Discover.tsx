import { useEffect, useState } from "react";
import StyledBox from "../../Components/Box/Box.style";
import StyledButton from "../../Components/Button/Button.style";

import StyledSearchBar from "../../Components/SearchBar/SearchBar.style";
import { getPopularMovies } from "../../Helpers/clientHelpers";

type DiscoverProps = {
  className: string;
};

const Discover = ({ className }: DiscoverProps) => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularMoviesResponseData = await getPopularMovies();
      setPopularMovies(popularMoviesResponseData.results);
    };
    fetchData();
  }, []);
  return (
    <div className={className}>
      <StyledSearchBar className="search-bar" />
      <ul className="filter-section">
        <StyledButton className="filter-button" text="Movies" />
        <StyledButton className="filter-button" text="Tv-Shows" />
        <StyledButton className="filter-button" text="People" />
      </ul>
      <hr className="divider" />
      <div className="content-wrapper">
        <div className="content-wrapper">
          {popularMovies.map((data: any) => {
            return (
              <StyledBox
                className="box"
                imagePath={data.poster_path}
                title={data.title}
                rating={data.vote_average}
                date={data.release_date}
                boxId={data.id}
                key={data.id}
                overview={data.overview}
              />
            );
          })}
        </div>
      </div>
      <hr className="divider" />
    </div>
  );
};

export default Discover;
