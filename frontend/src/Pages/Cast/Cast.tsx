import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMediaDetails } from "../../Helpers/clientHelpers";
import StyledCastListItem from "../../Components/CastListItem/CastListItem.style";
import { v4 as uuidv4 } from "uuid";

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
      setCastData(movieDataResponse[0].credits.cast);
      setCrewData(movieDataResponse[0].credits.crew);
    };
    fetch();
  }, [mediaType, id]);

  return (
    <div className={className}>
      {castData.length > 0 ? <h2 className="cast-header">Cast</h2> : null}
      <ul className="cast-info-desktop">
        {castData.map((data: any) => {
          return (
            <StyledCastListItem
              className="cast-list-item"
              id={data.id}
              profilePath={data.profile_path}
              _name={data.name}
              character={data.character}
              key={uuidv4()}
            />
          );
        })}
      </ul>
      {crewData.length > 0 ? <h2 className="cast-header">Crew</h2> : null}
      <ul>
        {crewData.map((data: any) => {
          return (
            <StyledCastListItem
              className="cast-list-item"
              id={data.id}
              profilePath={data.profile_path}
              _name={data.name}
              character={data.job}
              key={uuidv4()}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
