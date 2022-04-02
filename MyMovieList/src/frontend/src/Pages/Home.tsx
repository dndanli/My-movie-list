import StyledSearchBar from "../Components/SearchBar/SearchBar.style";
import StyledCard from "../Components/Card/Card.style";
import StyledPlay from "../Components/Play/Play.style";
import ReactPlayer from "react-player/lazy";

import testImg from "../Assets/akira.jpg";
import { IoIosClose } from "react-icons/io";

import { useState } from "react";
type Homeprops = {
  className: string;
};

const Home = ({ className }: Homeprops) => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const displayPlayer = () => setVideoPlaying(!videoPlaying);

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
        <StyledCard
          className="card"
          imagePath={testImg}
          title="Akira"
          rating={8.3}
          duration="2h 4m"
        />
        <StyledCard
          className="card"
          imagePath={testImg}
          title="Akira"
          rating={8.3}
          duration="2h 4m"
        />
        <StyledCard
          className="card"
          imagePath={testImg}
          title="Akira"
          rating={8.3}
          duration="2h 4m"
        />
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
