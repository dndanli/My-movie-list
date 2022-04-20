import { useState, useEffect } from "react";
import { getMediaDetails } from "../../Helpers/clientHelpers";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import StyledCastCard from "../../Components/CastCard/CastCard.style";
import ReactPlayer from "react-player/lazy";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import { v4 as uuidv4 } from "uuid";

type DetailsProps = {
  className: string;
};

const Details = ({ className }: DetailsProps) => {
  const { mediaType, id } = useParams();
  const [detailData, setDetailData] = useState<any>();
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const movieDataResponse = await getMediaDetails(mediaType, id);
      setDetailData(movieDataResponse);
      setTrailers(movieDataResponse.videos.results);
    };
    fetch();
  }, [mediaType, id]);

  return (
    <div className={className}>
      {detailData !== undefined ? (
        <div className="overview-images">
          {detailData.backdrop_path !== null ? (
            <img
              className="overview-background"
              src={`https://image.tmdb.org/t/p/w500${detailData.backdrop_path}`}
              alt=""
            />
          ) : (
            <div className="overview-background-fill"></div>
          )}

          <img
            className="overview-poster"
            src={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`}
            alt=""
          />
        </div>
      ) : null}

      {detailData?.title !== undefined ? (
        <h1 className="overview-title-header">
          {detailData.title || detailData.name}
        </h1>
      ) : null}

      {detailData?.genres.length > 0 ? (
        <ul className="genre-section">
          {detailData.genres.map((genre: any) => {
            return (
              <li key={uuidv4()} className="genre-button">
                <p>{genre.name}</p>
              </li>
            );
          })}
        </ul>
        ) :

        <div className="no-info-to-show">
          <h2 className="info-text">No genres available...</h2>
        </div>
      }

      {detailData?.overview !== undefined ? (
        <div className="overview-info">
          <h1 id="overview-info-header">Overview</h1>
          <p className="overview-text">{detailData.overview}</p>
        </div>
      ) : (
        <div className="no-info-to-show">
          <h2 className="info-text">No overview to show...</h2>
        </div>
      )}

      <h1 id="overview-crew-header">Cast</h1>

      {detailData?.credits.cast !== undefined ? (
        <div className="cast-info">
          {detailData.credits.cast.slice(0, 9).map((person: any) => {
            return (
              <StyledCastCard
                key={uuidv4()}
                className="cast-card"
                person={person}
              />
            );
          })}
        </div>
      ) : (
        <div className="no-info-to-show">
          <h2 className="info-text">No cast to show...</h2>
        </div>
      )}

      <div className="see-more">
      {
       detailData?.credits.cast !== undefined ? 
        <Link to={`/detail/cast/${mediaType}/${id}`}>
          <h3 className="cast-page-link">
            Full cast and crew
            <HiOutlineArrowNarrowRight className="arrow-icon" />
          </h3>
          </Link>
          :null
      }
      </div>

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
