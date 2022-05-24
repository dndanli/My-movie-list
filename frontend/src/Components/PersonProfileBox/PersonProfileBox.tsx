import {BsFillPersonFill} from "react-icons/bs";
import { Link } from "react-router-dom";

type PersonProfileBoxProps = {
  className: string;
  profileImgPath: string;
  personId: string;
  personName: string;
  knownFor: string;
};
const PersonProfileBox = ({
  className,
  profileImgPath,
  personId,
  personName,
  knownFor,
}: PersonProfileBoxProps) => {
  return (
    <div className={className}>
      <Link to={`/person/${personId}`}>
        <div className="wrapper">
          {profileImgPath !== null ? (
            <img
              className="profile"
              src={`https://image.tmdb.org/t/p/w500${profileImgPath}`}
              alt={personName}
            />
          ) : (
            <BsFillPersonFill className="person-icon" />
          )}
          <div className="profile-info-wrapper">
            <h2 className="name">{personName}</h2>
            <h2 className="knownFor">{knownFor}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PersonProfileBox;
