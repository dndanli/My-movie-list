type CardProps = {
  className: string;
  imagePath: string;
  title: string;
  rating: number;
  seasons?: number;
  //TODO:make it a number and convert to appropriate format
  duration?: string;
};

const Card = ({
  className,
  imagePath,
  title,
  rating,
  seasons,
  duration,
}: CardProps) => {
  return (
    <div className={className}>
      <img className="image" src={imagePath} alt={title} />
      <p className="title">{title}</p>
      <div className="metadata">
        <p className="rating-score">{rating}</p>
        {seasons ? <p className="extra-info">{seasons} seasons</p> : null}
        {duration ? <p className="extra-info">{duration}</p> : null}
      </div>
    </div>
  );
};

export default Card;
