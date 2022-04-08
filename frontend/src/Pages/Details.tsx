import { useState, useEffect } from "react";
import { getMovieData } from "../Helpers/clientHelpers";

import StyledCardCard from "../Components/CastCard/CastCard.style";
import ReactPlayer from "react-player/lazy";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

type DetailsProps = {
  className: string;
  movieId?: number;
  tvShowId?: number;
};

const Details = ({ className, movieId, tvShowId }: DetailsProps) => {
  const [detailData, setDetailData] = useState<any>();
  const [trailers, setTrailers] = useState([]);

  // TODO: when user leaves page --> set detailData to null
  useEffect(() => {
    const fetch = async () => {
      const movieDataResponse = await getMovieData();
      setDetailData(movieDataResponse);
      setTrailers(movieDataResponse.videos.results);
    };
    fetch();
  }, []);

  return (
    <div className={className}>
      {detailData !== undefined ? (
        <div className="overview-images">
          <img
            className="overview-background"
            src={`https://image.tmdb.org/t/p/w500${detailData.backdrop_path}`}
            alt=""
          />

          <img
            className="overview-poster"
            src={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`}
            alt=""
          />
        </div>
      ) : null}

      {detailData !== undefined ? (
        <h1 className="overview-title-header">{detailData.title}</h1>
      ) : null}

      {detailData !== undefined ? (
        <ul className="genre-section">
          {detailData.genres.map((genre: any) => {
            return (
              <li key={genre.id} className="genre-button">
                <p>{genre.name}</p>
              </li>
            );
          })}
        </ul>
      ) : null}

      {detailData !== undefined ? (
        <div className="overview-info">
          <h1 id="overview-info-header">Overview</h1>
          <p className="overview-text">{detailData.overview}</p>
        </div>
      ) : null}

      <h1 id="overview-crew-header">Cast</h1>

      {detailData !== undefined ? (
        <div className="cast-info">
          {detailData.credits.cast.slice(0, 9).map((person: any) => {
            return (
              <StyledCardCard
                key={person.cast_id}
                className="cast-card"
                person={person}
              />
            );
          })}
          <div className="see-more">
            <Link to={"/"}>
              <h3>see more</h3>
            </Link>
            <Link to={"/"}>
              <RiArrowRightSLine className="see-more-icon" />
            </Link>
          </div>
        </div>
      ) : null}

      {detailData !== undefined ? (
        <div className="trailers-wrapper">
          <h2 id="trailers">Trailers</h2>

          {trailers.map((data: any) => {
            if (data.type !== "Trailer") {
              return null;
            }
            return (
              <div className="trailer-player" key={data.id}>
                <h2 id="trailer-name">{data.name}</h2>
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
    </div>
  );
};

export default Details;
