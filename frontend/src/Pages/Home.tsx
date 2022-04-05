import StyledSearchBar from "../Components/SearchBar/SearchBar.style";
import StyledCard from "../Components/Card/Card.style";
import StyledPlay from "../Components/Play/Play.style";
import ReactPlayer from "react-player/lazy";
import { useEffect, useState } from "react";

import testImg from "../Assets/akira.jpg";
import { IoIosClose } from "react-icons/io";

import {
  getPopularMovies,
  getMovieTrailer,
  getNowPlayingMovies,
  postMovieId,
} from "../Functions/GetPopularMovieData";

type Homeprops = {
  className: string;
};

const Home = ({ className }: Homeprops) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [popuResponse, setPopResponse] = useState([]);
  const [nowPlayingResponse, setNowPlaying] = useState([]);
  const [trailerResponse, setTrailerResponse] = useState([]);

  const displayPlayer = () => setVideoPlaying(!videoPlaying);

  useEffect(() => {
    const fetchData = async () => {
      const popularResponseData = await getPopularMovies();
      setPopResponse(popularResponseData.results);

      const nowPlayingResponseData = await getNowPlayingMovies();
      setNowPlaying(nowPlayingResponseData.results);
    };
    fetchData();
  }, []);

  return (
    <div className={className}>
      <div className="hero">
        <h1 id="hero-heading">Welcome</h1>
        <h2 className="hero-heading-2">
          to a place where you discover new movies
        </h2>
        <h2 className="hero-heading-2">and TV shows.</h2>
      </div>
      <StyledSearchBar className="searchbar" />
      <h1 id="popular-heading">Popular</h1>
      <div className="content-wrapper">
        {popuResponse.map((data: any) => {
          return (
            <StyledCard
              className="card"
              imagePath={data.poster_path}
              title={data.original_title}
              rating={data.vote_average}
              date={data.release_date}
              key={data.id}
            />
          );
        })}
      </div>
      <h1 id="trending-heading">Trailers</h1>
      <div className="trailers-wrapper">
        {nowPlayingResponse.map((data: any) => {
          return (
            <StyledPlay
              className="play"
              cover={data.poster_path}
              title={data.title}
              onClickAction={() => {
                postMovieId(data.id);
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
              displayPlayer();
            }}
          />

          <ReactPlayer
            controls
            width="340px"
            height="280px"
            url="https://www.youtube.com/watch?v=nA8KmHC2Z-g&ab_channel=RetroBiografen"
            config={{
              youtube: { playerVars: { origin: "https://www.youtube.com" } },
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
