import { useEffect, useState } from "react";
import StyledBox from "../../Components/Box/Box.style";
import StyledButton from "../../Components/Button/Button.style";

import StyledSearchBar from "../../Components/SearchBar/SearchBar.style";
import { getSearchQueryResponse } from "../../Helpers/clientHelpers";

import { useSearchParams } from "react-router-dom";
import StyledPersonProfileBox from "../../Components/PersonProfileBox/PersonProfileBox.style";

type DiscoverProps = {
  className: string;
};

// TODO: cache api data
// TODO: use useReducer

const Discover = ({ className }: DiscoverProps) => {
  const [movieResponseData, setMovieResponseData] = useState([]);
  const [movieVisible, setMovieVisible] = useState(true);

  const [tvShowResponseData, setTvShowResponseData] = useState([]);
  const [tvShowVisible, setTvShowVisible] = useState(false);

  const [peopleResponseData, setPeopleesposeData] = useState([]);
  const [peopleVisible, setPeopleVisible] = useState(false);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      if (searchParams.get("query")) {
        const response = await getSearchQueryResponse(
          searchParams.get("query")
        );
        setMovieResponseData(response[0].results);
        setTvShowResponseData(response[1].results);
        setPeopleesposeData(response[2].results);
      }
    };

    fetchData();
  }, [searchParams]);
  return (
    <div className={className}>
      <StyledSearchBar className="search-bar" />
      <ul className="filter-section">
        {/* {
          movieVisible
        } */}
        <StyledButton
          className="filter-button"
          text="Movies"
          clickedStateValue={true}
          clickHandler={() => {
            setMovieVisible(!movieVisible);
          }}
        />
        <StyledButton
          className="filter-button"
          text="Tv-Shows"
          clickedStateValue={false}
          clickHandler={() => {
            setTvShowVisible(!tvShowVisible);
          }}
        />
        <StyledButton
          className="filter-button"
          text="People"
          clickedStateValue={false}
          clickHandler={() => {
            setPeopleVisible(!peopleVisible);
          }}
        />
      </ul>
      <hr className="divider" />

      <div className="content-wrapper">
        {searchParams.get("query") === null ? (
          <h2 className="message">
            Nothing here, try searching for something.
          </h2>
        ) : null}

        {movieVisible !== false
          ? movieResponseData.map((data: any) => {
              return (
                <StyledBox
                  className="box"
                  imagePath={data.poster_path}
                  title={data.name || data.title}
                  rating={data.vote_average}
                  boxId={data.id}
                  key={data.id}
                  overview={data.overview}
                  mediaType="movie"
                />
              );
            })
          : null}

        {tvShowVisible !== false
          ? tvShowResponseData.map((data: any) => {
              return (
                <StyledBox
                  className="box"
                  imagePath={data.poster_path}
                  title={data.name || data.title}
                  rating={data.vote_average}
                  boxId={data.id}
                  key={data.id}
                  overview={data.overview}
                  mediaType="tv"
                />
              );
            })
          : null}

        {peopleVisible !== false
          ? peopleResponseData.map((data: any) => {
              return (
                <StyledPersonProfileBox
                  className="person-profile"
                  personName={data.name}
                  personId={data.id}
                  profileImgPath={data.profile_path}
                  knownFor={data.known_for_department}
                  key={data.id}
                />
              );
            })
          : null}
      </div>
      <hr className="divider" />
    </div>
  );
};

export default Discover;
