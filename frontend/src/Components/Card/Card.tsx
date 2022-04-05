type CardProps = {
  className: string;
  imagePath: string;
  title: string;
  rating: number;
  seasons?: number;
  //TODO:make it a number and convert to appropriate format
  date: string;
};

const Card = ({
  className,
  imagePath,
  title,
  rating,
  seasons,
  date,
}: CardProps) => {
  return (
    <div className={className}>
      <img
        className="image"
        src={`http://image.tmdb.org/t/p/w500/${imagePath}`}
        alt={title}
      />
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="metadata">
        <p className="rating-score">{rating}</p>
        {seasons ? <p className="extra-info">{seasons} seasons</p> : null}
        <p className="extra-info">{date}</p>
      </div>
    </div>
  );
};

export default Card;
