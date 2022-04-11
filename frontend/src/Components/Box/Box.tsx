import { Link } from "react-router-dom";

type BoxProps = {
  className: string;
  imagePath: string;
  title: string;
  rating: number;
  //TODO: convert to appropriate format
  date: string;
  boxId: number;
  overview: string;
};

const Box = ({
  className,
  imagePath,
  title,
  rating,
  date,
  boxId,
  overview,
}: BoxProps) => {
  return (
    <div className={className}>
      <Link to={`/detail/${boxId}`}>
        <div className="wrapper">
          <img
            className="image"
            src={`http://image.tmdb.org/t/p/w500/${imagePath}`}
            alt={title}
          />
          <div className="main-info-wrapper">
            <p className="title">{title}</p>
            <p className="rating-score">Score: {rating}</p>
            <div className="overview-wrapper">
              <p className="overview-preview">{overview}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Box;
