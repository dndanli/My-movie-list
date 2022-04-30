import StyledDetailMetadata from "../DetailMetadata/DetailMetadata.style";
import StyledGenres from "../Genres/Genres.style";

type DetailDesktopViewInfoProps = {
  className: string;
  detailData: any;
  mediaType: string | undefined;
  movieContentRating?: string;
};

const DetailDesktopViewInfo = ({
  className,
  detailData,
  mediaType,
  movieContentRating,
}: DetailDesktopViewInfoProps) => {
  return (
    <div className={className}>
      <div className="poster-wrapper">
        {detailData?.poster_path !== undefined ? (
          <img
            className="overview-poster"
            src={`https://image.tmdb.org/t/p/w500${detailData?.poster_path}`}
            alt=""
          />
        ) : null}
      </div>
      <div className="metadata-wrapper">
        <h1 className="overview-title-header">
          {detailData?.title || detailData?.name}
        </h1>

        {detailData?.genres !== undefined ? (
          <StyledGenres className="genres" genres={detailData?.genres} />
        ) : null}

        <StyledDetailMetadata
          className="metadata"
          mediaType={mediaType}
          detailData={detailData}
          movieContentRating={movieContentRating}
        />
      </div>
    </div>
  );
};

export default DetailDesktopViewInfo;
