import InfoBlock from "../InfoBlock/InfoBlock";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

type InfoBlockContainerProps = {
  className: string;
  data: any[] | undefined;
};


const InfoBlockContainer = ({ className, data }: InfoBlockContainerProps) => {
  return (
    <div className={className}>
      {data?.map((obj: any) => {
        return (
          <InfoBlock
            className="info-block"
            key={uuidv4()}
            title={obj.value}
            value={obj.job}
          />
        );
      })}
    </div>
  );
};

export default InfoBlockContainer;
