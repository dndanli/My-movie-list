import { v4 as uuidv4 } from "uuid";
import StyledCard from "../Card/Card.style";
import { useState } from "react";

type TruncatedResultProps = {
  dataToBeDisplayed: any[];
  mediaType: string;
  className: string;
};

const TruncatedResult = ({
  className,
  dataToBeDisplayed,
  mediaType,
}: TruncatedResultProps) => {
  const [contentMaxLength, setContentMaxLength] = useState(5);
  const [truncateBtnValue, setTruncateBtnValue] = useState("see more");

  return (
    <div className={className}>
      <div className="content-wrapper">
        {dataToBeDisplayed?.slice(0, contentMaxLength).map((data: any) => {
          return (
            <StyledCard
              className="card"
              imagePath={data.poster_path}
              title={data.name || data.title}
              rating={data.vote_average}
              date={data.release_date || data.first_air_date}
              cardId={data.id}
              mediaType={mediaType}
              key={uuidv4()}
            />
          );
        })}
      </div>
      <div className="truncate-wrapper">
      {
      dataToBeDisplayed.length > 5 ?
        <h3
          className="truncate-btn"
          onClick={() => {
            truncateBtnValue === "see more"
              ? setTruncateBtnValue("see less")
              : setTruncateBtnValue("see more");
            if (contentMaxLength === 5) {
              setContentMaxLength(dataToBeDisplayed.length);
            } else {
              setContentMaxLength(5);
            }
          }}
        >
          {truncateBtnValue}
        </h3>
          :null
      }
      </div>
    </div>
  );
};

export default TruncatedResult;
