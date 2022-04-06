import StyledPlay from "../Play/Play.style";
import ReactPlayer from "react-player/lazy";
import { useEffect, useState } from "react";

import { IoIosClose } from "react-icons/io";

import {
  getTrending,
  postMovieId,
  getTrailer,
} from "../../Functions/movieDataRequests";

type SectionProps = {
  className: string;
};

const Section = ({ className }: SectionProps) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [trendingResponse, setTrending] = useState([]);

  //   const [trailerResponse, setTrailerResponse] = useState<any>();
  const [trailerUrl, setTrailerUrl] = useState<any>();

  const displayPlayer = () => {
    console.log("displaying");
    setVideoPlaying(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const trendingResponseData = await getTrending();
      setTrending(trendingResponseData.results);
    };
    fetchData();
  }, []);

  return (
    <div className={className}>
      <h1 id="trailers-heading">Trailers</h1>
      <div className="trailers-wrapper">
        {trendingResponse.map((data: any) => {
          return (
            <StyledPlay
              className="play"
              cover={data.poster_path}
              title={data.title}
              onClickAction={() => {
                postMovieId(data.id);
                // TODO: debug this
                getTrailer().then((res) => {
                  setTrailerUrl(
                    `https://www.youtube.com/watch?v=${res.results[0].key}`
                  );
                });
                displayPlayer();
              }}
              key={data.id}
            />
          );
        })}
      </div>
      {videoPlaying ? (
        <div className="player-wrapper">
          <IoIosClose
            className="close"
            onClick={() => {
              setVideoPlaying(false);
              setTrailerUrl(null);
            }}
          />
          <ReactPlayer
            controls
            width="340px"
            height="280px"
            url={trailerUrl}
            stopOnUnmount={true}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Section;
