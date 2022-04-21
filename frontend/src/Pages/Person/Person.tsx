import { useEffect, useState } from "react";
import { useParams } from "react-router";
import StyledInfoBlock from "../../Components/InfoBlock/InfoBlock.style";
import { getPersonResponse } from "../../Helpers/clientHelpers";

import StyledTruncatedResult from "../../Components/Layout/TruncatedResult.style";


type PersonProps = {
  className: string;
};
const Person = ({ className }: PersonProps) => {
  const { id } = useParams();
  const [personResponseData, setPersonResponseData] = useState<any>({});
  const [movieCreditsData, setMovieCreditsData] = useState<any>([]);
  const [tvCreditsData, setTvCreditsData] = useState<any>([]);


  useEffect(() => {
    const fetch = async () => {
      const personResponse = await getPersonResponse(id);
      setPersonResponseData(personResponse);

      if (personResponse.tv_credits) {
        setTvCreditsData(personResponse.tv_credits.cast);
      }
      if (personResponse.movie_credits) {
        setMovieCreditsData(personResponse.movie_credits.cast);
      }
    };
    fetch();
  }, [id]);

  const getGender = (value: number): string => {
    let gender: string = "";
    switch (value) {
      case 1: {
        gender = "Female";
        break;
      }
      case 2: {
        gender = "Male";
        break;
      }
      case 3: {
        gender = "Non-Binary";
        break;
      }
      default: {
        gender = "Not specified";
        break;
      }
    }
    return gender;
  };
  return (
    <div className={className}>
      {personResponseData.profile_path !== undefined ? (
        <img
          className="profile"
          src={`https://image.tmdb.org/t/p/w500${personResponseData.profile_path}`}
          alt={personResponseData.name}
        />
      ) : null}
      <div className="info-wrapper">
        <h2 className="name">{personResponseData.name}</h2>
        <div className="general-info">
          <StyledInfoBlock
            className="info-block"
            title="Known for"
            value={personResponseData.known_for_department}
          />
          <StyledInfoBlock
            className="info-block"
            title="Gender"
            value={getGender(personResponseData.gender)}
          />
          <StyledInfoBlock
            className="info-block"
            title="Birthday"
            value={personResponseData.birthday}
          />
          <StyledInfoBlock
            className="info-block"
            title="Place of birth"
            value={personResponseData.place_of_birth}
          />
        </div>
      </div>
      <section className="biography-section">
        <h2 className="header">Biography</h2>
        <p className="biography-text">{personResponseData.biography}</p>
      </section>

      <h2 className="header" style={{ paddingInline: "1rem" }}>
        Movies and Tv Shows
      </h2>

      {
        movieCreditsData?

          <StyledTruncatedResult className="truncated-result"
            dataToBeDisplayed={movieCreditsData}
            mediaType={"movie"}
          />
            :null

      }
      {
        tvCreditsData?

          <StyledTruncatedResult className="truncated-result"
            dataToBeDisplayed={tvCreditsData}
            mediaType={"tv"}
          />
            :null

      }
    </div>
  );
};

export default Person;
