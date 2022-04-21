import { v4 as uuidv4 } from "uuid";
import StyledCard from "../Card/Card.style";
import { useState } from "react";

type TruncatedResultProps = {
  dataToBeDisplayed: [];
  mediaType: string;
  className: string;
};

const TruncatedResult = ({
  className,
  dataToBeDisplayed,
  mediaType,
}: TruncatedResultProps) => {
  const [contentMaxLength, setContentMaxLength] = useState(4);
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
              date={data.release_date}
              cardId={data.id}
              mediaType={mediaType}
              key={uuidv4()}
            />
          );
        })}
      </div>
      <div className="truncate-wrapper">
        <h3
          className="truncate-btn"
          onClick={() => {
            truncateBtnValue === "see more"
              ? setTruncateBtnValue("see less")
              : setTruncateBtnValue("see more");
            if (contentMaxLength === 4) {
              setContentMaxLength(dataToBeDisplayed.length);
            } else {
              setContentMaxLength(4);
            }
          }}
        >
          {truncateBtnValue}
        </h3>
      </div>
    </div>
  );
};

export default TruncatedResult;
