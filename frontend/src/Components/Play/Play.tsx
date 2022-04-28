import { IoPlay } from "react-icons/io5";

type PlayProps = {
  className: string;
  cover: string;
  title: string;
  onClickAction: any;
};

const Play = ({ className, cover, title, onClickAction }: PlayProps) => {
  return (
    <div className={className} onClick={onClickAction}>
      <div className="play-content-wapper">
        <img
          src={`http://image.tmdb.org/t/p/w500/${cover}`}
          alt={title}
          className="cover"
        />
        <IoPlay className="play-icon" />
      </div>
    </div>
  );
};

export default Play;
