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

interface Response {
  0: {
    results: [];
    total_results: number;
  };
  1: {
    results: [];
    total_results: number;
  };
  2: {
    results: [];
    total_results: number;
  };
}

// TODO: cache api data
// TODO: use useReducer

const Discover = ({ className }: DiscoverProps) => {
  const [responseData, setResponseData] = useState<Response>();
  const [currVisible, setCurrVisible] = useState<string>("movie");

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      if (searchParams.get("query")) {
        const response = await getSearchQueryResponse(
          searchParams.get("query")
        );
        setResponseData(response);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <div className={className}>
      <StyledSearchBar className="search-bar" />
      <ul className="filter-section">
        <StyledButton
          className="filter-button"
          text="Movies"
          countValue={responseData?.[0].total_results}
          color={
            currVisible === "movie"
              ? "rgba(219, 48, 86, 1)"
              : "  rgba(219, 48, 86, 0.8)"
          }
          clickHandler={() => {
            setCurrVisible("movie");
          }}
        />
        <StyledButton
          className="filter-button"
          text="Tv-Shows"
          countValue={responseData?.[1].total_results}
          color={
            currVisible === "tv"
              ? "rgba(219, 48, 86, 1)"
              : "  rgba(219, 48, 86, 0.8)"
          }
          clickHandler={() => {
            setCurrVisible("tv");
          }}
        />
        <StyledButton
          className="filter-button"
          text="People"
          countValue={responseData?.[2].total_results}
          color={
            currVisible === "people"
              ? "rgba(219, 48, 86, 1)"
              : "  rgba(219, 48, 86, 0.8)"
          }
          clickHandler={() => {
            setCurrVisible("people");
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

        {currVisible === "movie"
          ? responseData?.[0].results.map((data: any) => {
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

        {currVisible === "tv"
          ? responseData?.[1].results.map((data: any) => {
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

        {currVisible === "people"
          ? responseData?.[2].results.map((data: any) => {
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
