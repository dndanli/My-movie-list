import { useEffect, useState } from "react";
import { useParams } from "react-router";
import StyledInfoBlock from "../../Components/InfoBlock/InfoBlock.style";
import { getPersonResponse } from "../../Helpers/clientHelpers";

import StyledTruncatedResult from "../../Components/Layout/TruncatedResult.style";
import StyledListPopup from "../../Components/ListPopup/StyledListPopup";
import { getPersonGender } from "../../Helpers/getPersonGender";

type PersonProps = {
  className: string;
};
const Person = ({ className }: PersonProps) => {
  const { id } = useParams();
  const [personResponseData, setPersonResponseData] = useState<any>({});
  const [currentAdded, setCurrentAdded] = useState<any>();

  const  childToParent = (cardData:any)=>{
    document.body.style.overflow = "hidden"
    setCurrentAdded(cardData);
  }

  useEffect(() => {
    const fetch = async () => {
      const personResponse = await getPersonResponse(id);
      setPersonResponseData(personResponse);
    };
    fetch();
  }, [id]);

  const togglePopup = () =>{
    document.body.style.overflow = ""
    setCurrentAdded(undefined);
  }

  return (
    <div className={className}>
      <div className="info-wrapper">
        {personResponseData.profile_path !== undefined ? (
          <div className="profile-wrapper">
            <img
              className="profile"
              src={`https://www.themoviedb.org/t/p/w375_and_h375_face/${personResponseData.profile_path}`}
              alt={personResponseData.name}
            />
          </div>
        ) : null}
        <h2 className="name">{personResponseData.name}</h2>
        <div className="general-info">
          {personResponseData.known_for_department ? (
            <StyledInfoBlock
              className="info-block"
              title="Known for"
              value={personResponseData.known_for_department}
            />
          ) : null}
          {personResponseData.gender ? (
            <StyledInfoBlock
              className="info-block"
              title="Gender"
              value={getPersonGender(personResponseData.gender)}
            />
          ) : null}
          {personResponseData.birthday ? (
            <StyledInfoBlock
              className="info-block"
              title="Birthday"
              value={personResponseData.birthday}
            />
          ) : null}
          {personResponseData.place_of_birth ? (
            <StyledInfoBlock
              className="info-block"
              title="Place of birth"
              value={personResponseData.place_of_birth}
            />
          ) : null}
        </div>
      </div>
      <section className="biography-section">
        <h2 className="header bio-header">Biography</h2>
        <p className="biography-text">{personResponseData.biography}</p>
      </section>

      {personResponseData.movie_credits !== undefined ? (
        <h2 className="header" style={{ paddingInline: "1rem" }}>
          Movies
        </h2>
      ) : null}

      {personResponseData?.movie_credits?.cast.length > 0 ? (
        <StyledTruncatedResult
          className="truncated-result"
          dataToBeDisplayed={personResponseData?.movie_credits?.cast}
          mediaType={"movie"}
          childToParent={childToParent}
        />
      ) : null}

      {personResponseData.tv_credits !== undefined ? (
        <h2 className="header" style={{ paddingInline: "1rem" }}>
          Tv Shows
        </h2>
      ) : null}
      {personResponseData?.tv_credits?.cast.length > 0 ? (
        <StyledTruncatedResult
          className="truncated-result"
          dataToBeDisplayed={personResponseData?.tv_credits?.cast}
          mediaType={"tv"}
          childToParent={childToParent}
        />
      ) : null}

      {personResponseData?.movie_credits?.crew.length > 0 || personResponseData.tv_credits?.crew.length > 0 ? (
        <h2 className="header" style={{ paddingInline: "1rem" }}>
          Crew in
        </h2>
      ) : null}

      {personResponseData?.movie_credits?.crew.length > 0 ? (
        <StyledTruncatedResult
          className="truncated-result"
          dataToBeDisplayed={personResponseData?.movie_credits?.crew}
          mediaType={"movie"}
          childToParent={childToParent}
        />
      ) : null}
      {personResponseData?.tv_credits?.crew.length > 0 ? (
        <StyledTruncatedResult
          className="truncated-result"
          dataToBeDisplayed={personResponseData?.movie_credits?.crew}
          mediaType={"tv"}
          childToParent={childToParent}
        />
      ) : null}

        {currentAdded ? (          
          <div className="popup-wrapper">
            <StyledListPopup
              className="styled-list-popup"
              cardData={currentAdded}
              togglePopup={togglePopup}
            />
          </div>
        ) : null}
    </div>
  );
};

export default Person;
