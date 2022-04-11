import { useState, useEffect } from "react";
import { getMovieData } from "../../Helpers/clientHelpers";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import StyledCardCard from "../../Components/CastCard/CastCard.style";
import ReactPlayer from "react-player/lazy";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

type DetailsProps = {
  className: string;
};

const Details = ({ className }: DetailsProps) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<any>();
  const [trailers, setTrailers] = useState([]);

  // TODO: when user leaves page --> set detailData to null
  useEffect(() => {
    const fetch = async () => {
      // make get request to backend with the movie id
      const movieDataResponse = await getMovieData(id);
      setDetailData(movieDataResponse);
      setTrailers(movieDataResponse.videos.results);
    };
    fetch();
  }, [id]);

  return (
    <div className={className}>
      {/* TODO: Fix background for null paths */}
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
        </div>
      ) : null}

      <div className="see-more">
        <Link to={`/detail/cast/${id}`}>
          <h3 className="cast-page-link">
            Full cast and crew
            <HiOutlineArrowNarrowRight className="arrow-icon" />
          </h3>
        </Link>
      </div>

      {trailers !== undefined ? (
        <div className="trailers-wrapper">
          <h2 id="trailers">Trailers</h2>

          <hr className="divider" />

          {trailers.map((data: any) => {
            if (data.type !== "Trailer") {
              return null;
            }
            return (
              <div className="trailer-player" key={data.id}>
                {/* <h2 id="trailer-name">{data.name.toLowerCase()}</h2> */}
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
