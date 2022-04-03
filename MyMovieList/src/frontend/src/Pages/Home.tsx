import StyledSearchBar from "../Components/SearchBar/SearchBar.style";
import StyledCard from "../Components/Card/Card.style";
import StyledPlay from "../Components/Play/Play.style";
import ReactPlayer from "react-player/lazy";
import { useEffect, useState } from "react";

import testImg from "../Assets/akira.jpg";
import { IoIosClose } from "react-icons/io";

import { getPopularMovies } from "../Functions/GetPopularMovieData";

type Homeprops = {
  className: string;
};

const Home = ({ className }: Homeprops) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [responseData, setResponseData] = useState([]);

  const displayPlayer = () => setVideoPlaying(!videoPlaying);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPopularMovies();
      setResponseData(response.results);
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
      <h1 id="trending-heading">Trending</h1>
      <div className="content-wrapper">
        {responseData.map((data: any, index) => {
          return (
            <StyledCard
              className="card"
              imagePath={data.poster_path}
              title={data.original_title}
              rating={data.vote_average}
              date={data.release_date}
              key={index}
            />
          );
        })}
      </div>
      <h1 id="trending-heading">Trailers</h1>
      <div className="trailers-wrapper">
        <StyledPlay
          className="play"
          cover={testImg}
          title="Akira"
          playVideo={displayPlayer}
        />
        <StyledPlay
          className="play"
          cover={testImg}
          title="Akira"
          playVideo={displayPlayer}
        />
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
