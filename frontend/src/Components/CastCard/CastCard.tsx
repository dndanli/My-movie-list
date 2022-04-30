import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

type CastCardProps = {
  className: string;
  person: {
    name: string;
    character: string;
    profile_path: string;
    id: string;
  };
};

const CastCard = ({ className, person }: CastCardProps) => {
  return (
    <div className={className}>
      <Link to={`/person/${person.id}`}>
        <div className="wrapper">
          {person.profile_path !== null ? (
            <div className="image-wrapper">
              <img
                className="profile"
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={person.name}
              />
            </div>
          ) : (
            <GoPerson className="person-icon" />
          )}
          <div className="name-wrapper">
            <h3 className="name">{person.name}</h3>
            <h3 className="character-name">{person.character}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CastCard;
