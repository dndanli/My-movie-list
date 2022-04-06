import StyledSearchBar from "../Components/SearchBar/SearchBar.style";
import StyledCard from "../Components/Card/Card.style";
import StyledSection from "../Components/Layout/Section.style";

import { getPopularMovies } from "../Functions/movieDataRequests";
import { useEffect, useState } from "react";

type Homeprops = {
  className: string;
};

const Home = ({ className }: Homeprops) => {
  const [popuResponse, setPopResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularResponseData = await getPopularMovies();
      setPopResponse(popularResponseData.results);
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
        {popuResponse.map((data: any) => {
          return (
            <StyledCard
              className="card"
              imagePath={data.poster_path}
              title={data.original_title}
              rating={data.vote_average}
              date={data.release_date}
              key={data.id}
            />
          );
        })}
      </div>
      <StyledSection className="section" />
    </div>
  );
};

export default Home;
