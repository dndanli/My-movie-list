import StyledSearchBar from "../../Components/SearchBar/SearchBar.style";
import StyledCard from "../../Components/Card/Card.style";
import StyledSection from "../../Components/Layout/Section.style";

import { getPopularMedia, getUpcoming } from "../../Helpers/clientHelpers";
import { useEffect, useState } from "react";
import TextAnimation from "../../Components/Animations/TextAnimation";

type Homeprops = {
  className: string;
};

// TODO: cache api data

const Home = ({ className }: Homeprops) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularMoviesResponseData = await getPopularMedia("movie");
      const upcomingResponseData = await getUpcoming();
      setPopularMovies(popularMoviesResponseData);
      setUpcoming(upcomingResponseData.results);
    };
    fetchData();
  }, []);

  return (
    <div className={className}>
      <div className="home-wrapper">
        <div className="hero">
          <h1 id="hero-heading">
            <TextAnimation />
          </h1>
          <h2 className="hero-heading-2">
            to your favorite place to discover new movies
          </h2>
          <h2 className="hero-heading-2">and Tv-Shows.</h2>
        </div>
        <div className="search-wrapper">
          <StyledSearchBar className="searchbar" />
        </div>
        <h1 id="popular-heading">Popular</h1>

        <div className="content-wrapper">
          {popularMovies.map((page: any) => {
            return page.results.map((data: any) => {
              return (
                <StyledCard
                  className="card"
                  imagePath={data.poster_path}
                  title={data.title}
                  rating={data.vote_average}
                  date={data.release_date}
                  cardId={data.id}
                  mediaType={"movie"}
                  key={data.id}
                />
              );
            });
          })}
        </div>

        <StyledSection className="section" />

        <h1 id="upcoming-heading">Upcoming movies</h1>

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
                mediaType={"movie"}
                key={data.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
