import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { convertISO8601toMMDDYYY } from "../../Helpers/dateFormatter";

type ReviewsProps = {
  className: string;
  authorName: string;
  authorUsername: string;
  authorReview: string;
  authorRating: number;
  authorProfile: string;
  dateCreated: string;
};

const ReviewPanel = ({
  className,
  authorName,
  authorUsername,
  authorReview,
  authorRating,
  authorProfile,
  dateCreated,
}: ReviewsProps) => {
  return (
    <div className={className}>
      <div className="wrapper">
        <div className="rating">
          <p>{authorRating}</p>
          <AiFillStar className="star-icon" />
        </div>

        <div className="content">
          <p>{authorReview}</p>
          <Link to="/" className="read-all">
            {" "}
            read all
          </Link>
          <p className="posted">posted on {convertISO8601toMMDDYYY(dateCreated)}</p>
        </div>
      </div>
      <div className="user-wrapper">
        <div className="profile-img-wrapper">
          <img
            src={`${authorProfile.slice(1)}`}
            alt={authorName}
            onError={(e) => {
              e.currentTarget.src = `https://image.tmdb.org/t/p/w400${authorProfile}`;
            }}
            className="user"
          />
        </div>
        <div className="name-wrapper">
          <h4 className="author-name">{authorName}</h4>
          <h4 className="author-username">@{authorUsername}</h4>
        </div>
      </div>
    </div>
  );
};
export default ReviewPanel;
