import StyledPersonProfileBox from "../PersonProfileBox/PersonProfileBox.style";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {BrowseResultWrapper, Wrapper } from "../Layout/DiscoverResults.style";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useState } from "react";
import StyledCard from "../Card/Card.style";

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
  const [currentAdded, setCurrentAdded] = useState<any>();
  const navigate = useNavigate();

  const handlePageClick = (selected: any) => {
    navigate(`/discover?page=${selected.selected + 1}&query=${query}`);
  };

  const childToParent = (cardData: any) => {
    document.body.style.overflow = "hidden";
    setCurrentAdded(cardData);
  };

  return (
    <div className={className}>
    <BrowseResultWrapper>
      {displayData?.map((data: any) => {
        return mediaType === "movie" || mediaType === "tv" ? (
          <StyledCard
            className="card"
            imagePath={data.poster_path}
            title={data.name || data.title}
            rating={data.vote_average}
            cardId={data.id}
            mediaType={mediaType}
            key={data.id}
            childToParent={childToParent}
            bannerPath={data.backdrop_path}
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
    </BrowseResultWrapper>

      {displayData?.length! > 0 ? (
        <Wrapper>
          <ReactPaginate
            previousLabel={<BiLeftArrow />}
            nextLabel={<BiRightArrow />}
            pageCount={totalPages! | 0}
            breakLabel={"..."}
            marginPagesDisplayed={3}
            onPageChange={handlePageClick}
            className={"discover-paginate"}
            previousLinkClassName={"previous-btn"}
            nextLinkClassName={"next-btn"}
            disabledClassName={"paginate-disabled"}
            activeClassName={"paginate-active"}
          />
        </Wrapper>
      ) : null}
    </div>
  );
};

export default DiscoverResults;
