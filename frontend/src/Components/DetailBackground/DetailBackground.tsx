type DetailBackgroundProps = {
  className: string;
  backdropPath: string;
  posterPath: string;
};

const DetailBackground = ({
  className,
  backdropPath,
  posterPath,
}: DetailBackgroundProps) => {
  return (
    <div className={className}>
      <div className="bg">
        <img
          className="overview-poster"
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt=""
        />
      </div>
      {
      backdropPath !== null ?
      <img
        className="overview-background"
        src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
        alt=""
        />:
        <div className="overview-background-fill"></div>
      }

    </div>
  );
};

export default DetailBackground;
