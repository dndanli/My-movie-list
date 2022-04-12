import { useEffect, useState } from "react";
import StyledBox from "../../Components/Box/Box.style";
import StyledButton from "../../Components/Button/Button.style";

import StyledSearchBar from "../../Components/SearchBar/SearchBar.style";
import { getPopularMedia } from "../../Helpers/clientHelpers";

type DiscoverProps = {
  className: string;
};

const Discover = ({ className }: DiscoverProps) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularShows, setPopularShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularMoviesResponseData = await getPopularMedia("movie");
      const popularShowsResponseData = await getPopularMedia("tv");

      setPopularMovies(popularMoviesResponseData);
      setPopularShows(popularShowsResponseData);
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
        {/* 
          if movies btn was clicked then -> display movies
          if tv-shows btn was clicked then -> display shows
          if people btn was clicked then -> display people

        */}

        {popularMovies.map((page: any) => {
          return page.results.map((data: any) => {
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
          });
        })}

        {popularShows.map((page: any) => {
          return page.results.map((data: any) => {
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
                mediaType="tv"
              />
            );
          });
        })}
      </div>
      <hr className="divider" />
    </div>
  );
};

export default Discover;
