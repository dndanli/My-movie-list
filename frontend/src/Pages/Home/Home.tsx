import StyledSearchBar from "../../Components/SearchBar/SearchBar.style";
import StyledSection from "../../Components/Layout/Section.style";

import { getPopularMedia, getUpcoming } from "../../Helpers/clientHelpers";
import { useEffect, useState } from "react";
import TextAnimation from "../../Components/Animations/TextAnimation";

import StyledCarousel from "../../Components/Carousel/Carousel.style";
import StyledMainPanel from "../../Components/MainPanel/MainPanel.style";

type Homeprops = {
  className: string;
};

// TODO: cache api data

const Home = ({ className }: Homeprops) => {
  const [popularMovies, setPopularMovies] = useState<any>([]);
  const [upcoming, setUpcoming] = useState<any>([]);

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
        {/* <div className="hero">
          <h1 id="hero-heading">
            <TextAnimation />
          </h1>
          <h2 className="hero-heading-2">
            to your favorite place to discover new movies
          </h2>
          <h2 className="hero-heading-2">and Tv-Shows.</h2>
        </div> */}
        <StyledMainPanel className="main-panel" />
        <div className="search-wrapper">
          <StyledSearchBar className="searchbar" />
        </div>
        <StyledCarousel
          className="embla"
          slides={popularMovies}
          multiPages={true}
          heading={"Popular"}
        />
        <StyledSection className="section" />
        <StyledCarousel
          className="embla"
          slides={upcoming}
          multiPages={false}
          heading={"Upcoming movies"}
        />
      </div>
    </div>
  );
};

export default Home;
