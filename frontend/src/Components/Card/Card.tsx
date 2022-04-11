import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

type CardProps = {
  className: string;
  imagePath: string;
  title: string;
  rating: number;
  //TODO: convert to appropriate format
  date: string;
  cardId: number;
};

const Card = ({
  className,
  imagePath,
  title,
  rating,
  date,
  cardId,
}: CardProps) => {
  return (
    <div className={className}>
      <Link to={`/detail/${cardId}`}>
        <img
          className="image"
          src={`http://image.tmdb.org/t/p/w500/${imagePath}`}
          alt={title}
        />
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="metadata">
          <p className="rating-score">
            {rating}
            <AiFillStar className="star-icon" />
          </p>
          <p className="extra-info">{date}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
