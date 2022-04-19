import StyledBox from "../Box/Box.style";
import StyledPersonProfileBox from "../PersonProfileBox/PersonProfileBox.style";
import { useNavigate, useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type DiscoverResultsProps = {
  className: string;
  displayData: [] | undefined;
  mediaType: string;
  totalPages: number | undefined;
  query: string | null;
};

const DiscoverResults = ({
  className,
  displayData,
  mediaType,
  totalPages,
  query,
}: DiscoverResultsProps) => {
  const navigate = useNavigate();

  const handlePageClick = (selected: any) => {
    navigate(`/discover?page=${selected.selected + 1}&query=${query}`);
  };
  return (
    <div className={className}>
      {displayData?.map((data: any) => {
        return mediaType === "movie" || mediaType === "tv" ? (
          <StyledBox
            className="box"
            imagePath={data.poster_path}
            title={data.name || data.title}
            rating={data.vote_average}
            boxId={data.id}
            key={data.id}
            overview={data.overview}
            mediaType={mediaType}
          />
        ) : (
          <StyledPersonProfileBox
            className="person-profile"
            personName={data.name}
            personId={data.id}
            profileImgPath={data.profile_path}
            knownFor={data.known_for_department}
            key={data.id}
          />
        );
      })}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={totalPages! | 0}
        breakLabel={"..."}
        marginPagesDisplayed={3}
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default DiscoverResults;
