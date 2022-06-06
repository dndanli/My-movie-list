import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineMovieFilter } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";

type CardProps = {
  className: string;
  imagePath: string;
  bannerPath:string;
  title: string;
  rating: number;
  //TODO: convert to appropriate format
  cardId: number;
  mediaType: string;
  childToParent: any;
};

const Card = ({
  className,
  imagePath,
  bannerPath,
  title,
  rating,
  cardId,
  mediaType,
  childToParent,
}: CardProps) => {
  return (
    <div className={className}>
      <Link to={`/detail/${mediaType}/${cardId}`}>
        <div className="wrapper">
          {imagePath !== null ? (
            <img
              className="image"
              src={`https://image.tmdb.org/t/p/w500/${imagePath}`}
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
              <p>{title}</p>
            </div>
          </div>
        </div>
      </Link>
      {/* on click send the current props to a context provider
          and let it share across all aplication.
      */}
      
      <div className="add-wrapper">
        <IoAddOutline
          className="add"
          onClick={() =>
            childToParent({
              imagePath,
              bannerPath,
              title,
              rating,
              cardId,
              mediaType,
            })
          }
        />
      </div>
    </div>
  );
};

export default Card;
