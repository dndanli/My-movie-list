import StyledPlay from "../Play/Play.style";
import ReactPlayer from "react-player/lazy";
import { useEffect, useState } from "react";

import { IoIosClose } from "react-icons/io";

import {
  getTrending,
  postIdForTrailer,
  getTrailer,
} from "../../Helpers/clientHelpers";

type SectionProps = {
  className: string;
};

const Section = ({ className }: SectionProps) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [trendingResponse, setTrending] = useState <any | undefined>([]);
  const [trailerUrl, setTrailerUrl] = useState<any>();

  const displayPlayer = () => {
    setVideoPlaying(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const trendingResponseData = await getTrending("tv");
      setTrending(trendingResponseData.results);
    };
    fetchData();
  }, []);

  return (
    <div className={className}>
      <h1 id="trailers-heading">Trailers</h1>
      <div className="trailers-wrapper">
      {
       trendingResponse !== undefined ? 
        trendingResponse.map((data: any) => {
          return (
            <StyledPlay
              className="play"
              cover={data.poster_path}
              title={data.title}
              onClickAction={() => {
                postIdForTrailer(data.id);
                getTrailer().then((res) => {
                  if(res){
                  setTrailerUrl(
                    `https://www.youtube.com/watch?v=${res.results[0].key}`
                  );
                  }
                });
                displayPlayer();
              }}
              key={data.id}
            />
          );
       }):null}
      </div>
      {videoPlaying ? (
        <div className="player-wrapper">
        <div className="close">
          <IoIosClose
            onClick={() => {
              setVideoPlaying(false);
              setTrailerUrl(null);
            }}
          />
          </div>
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url={trailerUrl}
            stopOnUnmount={true}
            className="react-player"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Section;
