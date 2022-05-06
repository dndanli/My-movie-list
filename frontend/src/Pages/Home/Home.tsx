import StyledSearchBar from "../../Components/SearchBar/SearchBar.style";
import StyledSection from "../../Components/Layout/Section.style";

import { getPopularMedia, getUpcoming } from "../../Helpers/clientHelpers";
import { useEffect, useState } from "react";

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
    let isMounted = true;
    const fetchData = async () => {
      const popularMoviesResponseData = await getPopularMedia("movie");
      const upcomingResponseData = await getUpcoming();
      if (isMounted) {
        setPopularMovies(popularMoviesResponseData);
        setUpcoming(upcomingResponseData.results);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={className}>
      <div className="home-wrapper">
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
