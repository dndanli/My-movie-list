import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import StyledButton from "../../Components/Button/Button.style";
import StyledSearchBar from "../../Components/SearchBar/SearchBar.style";
import DiscoverResults from "../../Components/Layout/DiscoverResults";

import {
  getSearchQueryPageResponse,
  getSearchQueryResponse,
} from "../../Helpers/clientHelpers";
import { Response } from "../../Interfaces/Response";
import { PageResponse } from "../../Interfaces/PageResponse";

type DiscoverProps = {
  className: string;
};

// TODO: use useReducer
// TODO: cache api data

const Discover = ({ className }: DiscoverProps) => {
  const [responseData, setResponseData] = useState<Response>();
  const [responsePageData, setResponsePageData] = useState<PageResponse>();
  const [currVisible, setCurrVisible] = useState<string>("movie");

  const [searchParams] = useSearchParams();
  const [currQuery, setQuery] = useState<string | null>("");

  useEffect(() => {
    const fetchData = async () => {
      if (searchParams.get("query")) {
        const response = await getSearchQueryResponse(
          searchParams.get("query")
        );
        setResponseData(response);
        setQuery(searchParams.get("query"));
      }

      if (searchParams.get("page") !== null) {
        const response = await getSearchQueryPageResponse(
          searchParams.get("query"),
          currVisible,
          searchParams.get("page")
        );
        setResponsePageData(response);
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
          countValue={
            searchParams.get("page") && currVisible === "movie"
              ? responsePageData?.total_results
              : responseData?.[0].total_results
          }
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
          countValue={
            searchParams.get("page") && currVisible === "tv"
              ? responsePageData?.total_results
              : responseData?.[1].total_results
          }
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
          countValue={
            searchParams.get("page") && currVisible === "people"
              ? responsePageData?.total_results
              : responseData?.[2].total_results
          }
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
        {currVisible === "movie" ? (
          <DiscoverResults
            className="results"
            displayData={
              searchParams.get("page")
                ? responsePageData?.results
                : responseData?.[0].results
            }
            mediaType="movie"
            totalPages={
              searchParams.get("page")
                ? responsePageData?.total_pages
                : responseData?.[0].total_pages
            }
            query={currQuery}
          />
        ) : null}
        {currVisible === "tv" ? (
          <DiscoverResults
            className="results"
            displayData={
              searchParams.get("page")
                ? responsePageData?.results
                : responseData?.[1].results
            }
            mediaType="tv"
            totalPages={
              searchParams.get("page")
                ? responsePageData?.total_pages
                : responseData?.[1].total_pages
            }
            query={currQuery}
          />
        ) : null}
        {currVisible === "people" ? (
          <DiscoverResults
            className="results"
            displayData={
              searchParams.get("page")
                ? responsePageData?.results
                : responseData?.[2].results
            }
            mediaType="people"
            totalPages={
              searchParams.get("page")
                ? responsePageData?.total_pages
                : responseData?.[2].total_pages
            }
            query={currQuery}
          />
        ) : null}
      </div>
      <hr className="divider" />
    </div>
  );
};

export default Discover;
