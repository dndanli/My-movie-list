import { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";

import { getMediaDetails } from "../../Helpers/clientHelpers";
import StyledReviewPanel from "../../Components/ReviewPanel/ReviewPanel.style";
import StyledCastCarousel from "../../Components/CastCarousel/CastCarousel.style";
import StyledGenres from "../../Components/Genres/Genres.style";
import StyledTextPanel from "../../Components/TextPanel/TextPanel.style";
import StyledDetailMetadata from "../../Components/DetailMetadata/DetailMetadata.style";
import StyledDetailBackground from "../../Components/DetailBackground/DetailBackground.style";
import StyledDetailDesktopViewInfo from "../../Components/DetailDesktopViewInfo/DetailDesktopViewInfo.style";

type DetailsProps = {
  className: string;
};

const Details = ({ className }: DetailsProps) => {
  const { mediaType, id } = useParams();
  const [detailData, setDetailData] = useState<any>();
  const [trailers, setTrailers] = useState([]);
  const [movieContentRating, setMovieContentRating] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const detailResponse = await getMediaDetails(mediaType, id);
      setDetailData(detailResponse[0]);
      setMovieContentRating(detailResponse[1]);
      setTrailers(detailResponse[0].videos.results);
      setReviews(detailResponse[0].reviews.results);
      console.log(detailResponse[0]);
    };
    fetch();
  }, [mediaType, id]);

  return (
    <div className={className}>
      {detailData?.backdrop_path !== undefined ? (
        <StyledDetailBackground
          className="detail-background"
          backdropPath={detailData.backdrop_path}
          posterPath={detailData.poster_path}
        />
      ) : (
        <div className="overview-background-fill">Loading</div>
      )}

      <div className="mobile-info-wrapper">
        {detailData?.title !== undefined || detailData?.name !== undefined ? (
          <h1 className="overview-title-header">
            {detailData.title || detailData.name}
          </h1>
        ) : null}

        {detailData?.genres.length > 0 ? (
          <StyledGenres className="genres" genres={detailData?.genres} />
        ) : (
          <div className="no-info-to-show">
            <h2 className="info-text">No genres available...</h2>
          </div>
        )}

        <div className="metadata-wrapper">
          <StyledDetailMetadata
            className="metadata"
            mediaType={mediaType}
            detailData={detailData}
            movieContentRating={movieContentRating}
          />
        </div>
      </div>

      {/* <div className="desktop-view-wrapper">
        <StyledDetailDesktopViewInfo
          className="desktop-view-info"
          detailData={detailData}
          mediaType={mediaType}
          movieContentRating={movieContentRating}
        />
      </div> */}

      <div className="block">
        {detailData?.overview !== undefined ? (
          <StyledTextPanel className="text-panel" text={detailData.overview} />
        ) : (
          <div className="no-info-to-show">
            <h2 className="info-text">No overview to show...</h2>
          </div>
        )}

        {detailData?.credits.cast !== undefined ? (
          <div className="cast-info">
            <StyledCastCarousel
              className="cast-carousel"
              slides={detailData.credits.cast}
              total={9}
              heading={"Cast"}
            />
          </div>
        ) : (
          <div className="no-info-to-show">
            <h2 className="info-text">No cast to show...</h2>
          </div>
        )}
      </div>
      {detailData?.credits.cast !== undefined ? (
        <div className="see-more">
          <Link to={`/detail/cast/${mediaType}/${id}`}>
            <h3 className="cast-page-link">
              Full cast and crew
              <HiOutlineArrowNarrowRight className="arrow-icon" />
            </h3>
          </Link>
        </div>
      ) : null}
      {reviews.length > 0 ? (
        <div className="reviews">
          <h2 className="header-2" style={{ marginBottom: "0.5rem" }}>
            Reviews
          </h2>
          {reviews.slice(0, 1).map((data: any) => {
            return (
              <StyledReviewPanel
                className="review-panel"
                key={data.id}
                authorName={data.author}
                authorUsername={data.author_details.username}
                authorRating={data.author_details.rating}
                authorReview={data.content}
                authorProfile={data.author_details.avatar_path}
                dateCreated={data.created_at}
                tmdbUser={true}
              />
            );
          })}
          <Link to="/" style={{ color: "rgba(255,255,255, 0.8)" }}>
            <p>see all reviews</p>
          </Link>
        </div>
      ) : null}

      {trailers.length > 0 ? (
        <div className="trailers-wrapper">
          <h2 id="trailers">Trailers</h2>

          <hr className="divider" />

          {trailers.map((data: any) => {
            if (data.type !== "Trailer") {
              return null;
            }
            return (
              <div className="trailer-player" key={uuidv4()}>
                <ReactPlayer
                  controls
                  width="340px"
                  height="280px"
                  url={`https://www.youtube.com/watch?v=${data.key}`}
                />
              </div>
            );
          })}
        </div>
      ) : null}
      <hr className="divider" />
    </div>
  );
};

export default Details;
