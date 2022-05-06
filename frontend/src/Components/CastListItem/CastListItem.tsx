import { Link } from "react-router-dom";
import { GoPerson } from "react-icons/go";

type CastListItemProps = {
  className: string;
  id: number;
  profilePath: string;
  _name: string;
  character: string;
};

const CastListItem = ({
  className,
  id,
  profilePath,
  _name,
  character,
}: CastListItemProps) => {
  return (
    <div className={className}>
      <Link to={`/person/${id}`}>
        <li className="list-item">
          {profilePath !== null ? (
            <img
              className="profile"
              src={`https://image.tmdb.org/t/p/w500${profilePath}`}
              alt={_name}
            />
          ) : (
            <GoPerson className="person-icon" />
          )}
          <div className="name-wrapper">
          <h4 className="name">{_name}</h4>
            <h4 className="role">{character}</h4>
          </div>
        </li>
      </Link>
    </div>
  );
};

export default CastListItem;
