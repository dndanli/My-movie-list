import { GoPerson } from "react-icons/go";

type CastCardProps = {
  className: string;
  person: {
    name: string;
    character: string;
    profile_path: string;
  };
};

const CastCard = ({ className, person }: CastCardProps) => {
  return (
    <div className={className}>
      {person.profile_path !== null ? (
        <img
          className="profile"
          src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
          alt={person.name}
        />
      ) : (
        <GoPerson className="person-icon" />
      )}
      <div className="name-wrapper">
        <h3 className="name">{person.name}</h3>
        <h3 className="character-name">{person.character}</h3>
      </div>
    </div>
  );
};

export default CastCard;
