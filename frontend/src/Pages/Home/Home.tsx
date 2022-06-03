import StyledSearchBar from "../../Components/SearchBar/SearchBar.style";
import StyledSection from "../../Components/Layout/Section.style";

import { getPopularMedia, getUpcoming } from "../../Helpers/clientHelpers";
import { useEffect, useState } from "react";

import StyledCarousel from "../../Components/Carousel/Carousel.style";
import StyledMainPanel from "../../Components/MainPanel/MainPanel.style";
import StyledListPopup from "../../Components/ListPopup/StyledListPopup";

type Homeprops = {
  className: string;
};
// TODO: cache api data
const Home = ({ className }: Homeprops) => {
  const [popularMovies, setPopularMovies] = useState<any>([]);
  const [upcoming, setUpcoming] = useState<any>([]);
  const [currentAdded, setCurrentAdded] = useState<any>();

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

  const childToParent = (cardData: any) => {
    document.body.style.overflow = "hidden"
    setCurrentAdded(cardData);   
  };

  const togglePopup = () =>{
    document.body.style.overflow = ""
    setCurrentAdded(undefined);   
  }

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
          childToParent={childToParent}
        />
        {currentAdded !== undefined? (          
          <div className="popup-wrapper">
            <StyledListPopup
              className="styled-list-popup"
              cardData={currentAdded}
              togglePopup={togglePopup}
            />
          </div>
        ) : null}
        <StyledSection className="section" />
        <StyledCarousel
          className="embla"
          slides={upcoming}
          multiPages={false}
          heading={"Upcoming movies"}
          childToParent={childToParent}
        />
      </div>
    </div>
  );
};

export default Home;
