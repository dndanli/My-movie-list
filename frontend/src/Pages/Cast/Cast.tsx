import { GoPerson } from "react-icons/go";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMediaDetails } from "../../Helpers/clientHelpers";

type CastProps = {
  className: string;
};

const Cast = ({ className }: CastProps) => {
  const { mediaType, id } = useParams();
  const [castData, setCastData] = useState([]);
  const [crewData, setCrewData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      // make get request to backend with the movie id
      const movieDataResponse = await getMediaDetails(mediaType, id);
      setCastData(movieDataResponse.credits.cast);
      setCrewData(movieDataResponse.credits.crew);
    };
    fetch();
  }, [mediaType, id]);

  return (
    <div className={className}>
      <h2 className="cast-header">Cast</h2>
      <ul>
        {castData.map((data: any, index) => {
          return (
            // TODO: replace index with uid
            <li key={index} className="list-item">
              {data.profile_path !== null ? (
                <img
                  className="profile"
                  src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
                  alt={data.name}
                />
              ) : (
                <GoPerson className="person-icon" />
              )}
              <div className="name-wrapper">
                <h4 className="name">{data.name}</h4>
                <h4 className="role">{data.character}</h4>
              </div>
            </li>
          );
        })}
      </ul>
      <h2 className="cast-header">Crew</h2>
      <ul>
        {crewData.map((data: any, index) => {
          return (
            // TODO: replace index with uid
            <li key={index} className="list-item">
              {data.profile_path !== null ? (
                <img
                  className="profile"
                  src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
                  alt={data.name}
                />
              ) : (
                <GoPerson className="person-icon" />
              )}
              <div className="name-wrapper">
                <h4 className="name">{data.name}</h4>
                <h4 className="role">{data.job}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
