import { AiFillStar } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { formatMinutesToHoursAndMinutes } from "../../Helpers/timeFormatter";

type DetailMetadataProps = {
  className: string;
  detailData: any;
  mediaType: string | undefined;
  movieContentRating?: string;
};
const DetailMetadata = ({
  className,
  detailData,
  mediaType,
  movieContentRating,
}: DetailMetadataProps) => {
  return (
    <div className={className}>
      <div className="rating-score">
        {detailData?.vote_average}
        <AiFillStar className="star-icon" />
      </div>
      {mediaType === "tv" ? (
        detailData?.content_ratings.results.map((data: any) => {
          return data.iso_3166_1 === "US" ? (
            <p className="p-small" id="rating" key={uuidv4()}>
              {data.rating}
            </p>
          ) : null;
        })
      ) : movieContentRating !== "" ? (
        <p className="p-small" id="rating" key={uuidv4()}>
          {movieContentRating}
        </p>
      ) : null}
      {detailData?.episode_run_time !== undefined ? (
        <p className="p-small">{detailData?.episode_run_time}m</p>
      ) : null}

      {detailData?.runtime !== undefined ? (
        <p className="p-small">
          {formatMinutesToHoursAndMinutes(detailData?.runtime)}
        </p>
      ) : null}
    </div>
  );
};

export default DetailMetadata;
