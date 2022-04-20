import { GoPerson } from "react-icons/go";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
      const movieDataResponse = await getMediaDetails(mediaType, id);
      setCastData(movieDataResponse.credits.cast);
      setCrewData(movieDataResponse.credits.crew);
    };
    fetch();
  }, [mediaType, id]);

  return (
    <div className={className}>
      {castData.length > 0 ? <h2 className="cast-header">Cast</h2> : null}
      <ul>
        {castData.map((data: any, index) => {
          return (
            // TODO: replace index with uid
            <Link to={`/person/${data.id}`} key={index}>
              <li className="list-item">
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
            </Link>
          );
        })}
      </ul>
      {crewData.length > 0 ? <h2 className="cast-header">Crew</h2> : null}
      
      <ul>
        {crewData.map((data: any, index) => {
          return (
            // TODO: replace index with uid
            <Link to={`/person/${data.id}`} key={index}>
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
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
