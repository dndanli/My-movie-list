import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useState, ImgHTMLAttributes } from "react";

type ReviewsProps = {
  className: string;
  authorName: string;
  authorUsername: string;
  authorReview: string;
  authorRating: number;
  authorProfile: string;
};

const ReviewPanel = ({
  className,
  authorName,
  authorUsername,
  authorReview,
  authorRating,
  authorProfile,
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
        </div>
      </div>
      <div className="user-wrapper">
        <img
          src={`${authorProfile.slice(1)}`}
          alt={authorName}
          onError={(e) => {
            e.currentTarget.src = `https://image.tmdb.org/t/p/w400${authorProfile}`;
          }}
          className="user"
        />
        <div className="name-wrapper">
          <h4 className="author-name">{authorName}</h4>
          <h4 className="author-name">@{authorUsername}</h4>
        </div>
      </div>
    </div>
  );
};
export default ReviewPanel;
