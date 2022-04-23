import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { convertISO8601toMMDDYYY } from "../../Helpers/dateFormatter";
import { useState } from "react";

type ReviewsProps = {
  className: string;
  authorName: string;
  authorUsername: string;
  authorReview: string;
  authorRating: number;
  authorProfile: string;
  dateCreated: string;
  tmdbUser: boolean;
};

const ReviewPanel = ({
  className,
  authorName,
  authorUsername,
  authorReview,
  authorRating,
  authorProfile,
  dateCreated,
  tmdbUser,
}: ReviewsProps) => {
  const [imageLoadError, setImageLoadError] = useState(true);

  return (
    <div className={className}>
      <div className="wrapper">
      {
        authorRating !== null ?
        <div className="rating">
          <p>{authorRating}</p>
          <AiFillStar className="star-icon" />
        </div>
        :null
      }

        <div className="content">
          <p>{authorReview}</p>
          <Link to="/" className="read-all">
            {" "}
            read all
          </Link>
          <p className="posted">
            posted on {convertISO8601toMMDDYYY(dateCreated)}
          </p>
        </div>
      </div>
      <div className="user-wrapper">
        <div className="profile-img-wrapper">
          {authorProfile !== null ? (
            <img
              src={authorProfile ? `${authorProfile.slice(1)}` : ""}
              alt={authorName}
              onError={(e) => {
                if (imageLoadError) {
                  setImageLoadError(false);
                  e.currentTarget.src = `https://image.tmdb.org/t/p/w400${authorProfile}`;
                }
              }}
              className="user"
            />
          ) : (
            <BsFillPersonFill className="user-icon" />
          )}
        </div>
        <div className="name-wrapper">
          <h4 className="author-name">{authorName}</h4>
          <h4 className="author-username">@{authorUsername}</h4>
          {tmdbUser ? <div className="tmdb-user">TMDB</div> : null}
        </div>
      </div>
    </div>
  );
};
export default ReviewPanel;
