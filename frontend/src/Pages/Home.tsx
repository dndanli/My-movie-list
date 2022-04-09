import StyledSearchBar from "../Components/SearchBar/SearchBar.style";
import StyledCard from "../Components/Card/Card.style";
import StyledSection from "../Components/Layout/Section.style";

import { getPopularMovies, getUpcoming } from "../Helpers/clientHelpers";
import { useEffect, useState } from "react";

type Homeprops = {
  className: string;
};

const Home = ({ className }: Homeprops) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularMoviesResponseData = await getPopularMovies();
      const upcomingResponseData = await getUpcoming();
      setPopularMovies(popularMoviesResponseData.results);
      setUpcoming(upcomingResponseData.results);
    };
    fetchData();
  }, []);

  return (
    <div className={className}>
      <div className="hero">
        <h1 id="hero-heading">Welcome</h1>
        <h2 className="hero-heading-2">
          to a place where you discover new movies
        </h2>
        <h2 className="hero-heading-2">and TV shows.</h2>
      </div>
      <StyledSearchBar className="searchbar" />
      <h1 id="popular-heading">Popular</h1>
      <div className="content-wrapper">
        {popularMovies.map((data: any) => {
          return (
            <StyledCard
              className="card"
              imagePath={data.poster_path}
              title={data.title}
              rating={data.vote_average}
              date={data.release_date}
              cardId={data.id}
              key={data.id}
            />
          );
        })}
      </div>
      <StyledSection className="section" />

      <h1 id="upcoming-heading">Upcoming</h1>

      <div className="content-wrapper">
        {upcoming.map((data: any) => {
          return (
            <StyledCard
              className="card"
              imagePath={data.poster_path}
              title={data.title}
              rating={data.vote_average}
              date={data.release_date}
              cardId={data.id}
              key={data.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
