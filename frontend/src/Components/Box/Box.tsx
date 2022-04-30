import { MdMovie } from "react-icons/md";
import { Link } from "react-router-dom";

type BoxProps = {
  className: string;
  imagePath: string;

  title: string;
  rating: number;
  boxId: number;
  overview: string;
  mediaType: string;
};

const Box = ({
  className,
  imagePath,
  title,
  rating,
  boxId,
  overview,
  mediaType,
}: BoxProps) => {
  return (
    <div className={className}>
      <Link to={`/detail/${mediaType}/${boxId}`}>
        <div className="wrapper">
          {imagePath !== null ? (
            <img
              className="image"
              src={`http://image.tmdb.org/t/p/w500/${imagePath}`}
              alt={title}
            />
          ) : (
            <MdMovie className="box-icon" />
          )}

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
