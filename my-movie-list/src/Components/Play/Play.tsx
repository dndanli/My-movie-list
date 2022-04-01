import { BsFillPlayFill } from "react-icons/bs";

type PlayProps = {
  className: string;
  cover: string;
  title: string;
  playVideo: any;
};

const Play = ({ className, cover, title, playVideo }: PlayProps) => {
  return (
    <div className={className} onClick={playVideo}>
      <img src={cover} alt={title} className="cover" />
      <BsFillPlayFill className="play-icon" />
    </div>
  );
};

export default Play;
