import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { convertToMonthDayYear } from "../../Helpers/dateFormatter";
import { MdOutlineMovieFilter } from "react-icons/md";

type CardProps = {
  className: string;
  imagePath: string;
  title: string;
  rating: number;
  //TODO: convert to appropriate format
  date: string;
  cardId: number;
  mediaType: string;
};

const Card = ({
  className,
  imagePath,
  title,
  rating,
  date,
  cardId,
  mediaType,
}: CardProps) => {
  return (
    <div className={className}>
      <Link to={`/detail/${mediaType}/${cardId}`}>
        <div className="wrapper">
          {imagePath !== null ? (
            <img
              className="image"
              src={`http://image.tmdb.org/t/p/w500/${imagePath}`}
              alt={title}
            />
          ) : (
            <MdOutlineMovieFilter className="icon" />
          )}
          <div className="rating-score">
            {rating !== 0 ? rating : <p>NR</p>}
            <AiFillStar className="star-icon" />
          </div>

          <div className="text-content">
            <div className="title">
              <p>{title.toUpperCase()}</p>
            </div>

            <div className="date">
              {date !== null && date !== undefined ? (
                <p>{convertToMonthDayYear(date)}</p>
              ) : null}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
