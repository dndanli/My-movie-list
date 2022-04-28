import { useEffect, useState } from "react";
import { getTrending } from "../../Helpers/clientHelpers";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

type MainPanelProps = {
  className: string;
};

const MainPanel = ({ className }: MainPanelProps) => {
  const [current, setCurrent] = useState<number>(0);
  const [slides, setSlides] = useState<any>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await getTrending("movie");
      setSlides(response.results);
      console.log(response);
    };

    fetch();
  }, []);

  return (
    <div className={className}>
      {slides[current] !== undefined ? (
        <div className="wrapper">
          <div className="btn-wrapper prev">
            <MdArrowBackIos
              className="panel-btn "
              onClick={() => {
                if (current !== 0) {
                  setCurrent(current - 1);
                } else if (current === 0) {
                  setCurrent(slides.length - 1);
                }
              }}
            />
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original/${slides[current].backdrop_path}`}
            alt={slides[current].title}
            className="panel-img"
          />
          <h2 className="title">{slides[current].title}</h2>
          <div className="rating-score">
            {slides[current].vote_average !== 0 ? (
              slides[current].vote_average
            ) : (
              <p>NR</p>
            )}
            <AiFillStar className="star-icon" />
          </div>

          <div className="btn-wrapper next">
            <MdArrowForwardIos
              className="panel-btn"
              onClick={() => {
                if (current !== slides.length - 1) {
                  setCurrent(current + 1);
                } else {
                  setCurrent(0);
                }
              }}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MainPanel;
