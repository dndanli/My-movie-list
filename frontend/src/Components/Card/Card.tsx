import { Link } from "react-router-dom";

type CardProps = {
  className: string;
  imagePath: string;
  title: string;
  rating: number;
  //TODO: convert to appropriate format
  date: string;
  cardId: number;
  onClickHandler: any;
};

const Card = ({
  className,
  imagePath,
  title,
  rating,
  date,
  cardId,
  onClickHandler,
}: CardProps) => {
  return (
    <div className={className} onClick={() => onClickHandler(cardId)}>
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
          <p className="rating-score">{rating}</p>
          <p className="extra-info">{date}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
