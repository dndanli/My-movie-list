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

  const [movieCreditsDataCrew, setMovieCreditsDataCrew] = useState<any>([]);
  const [tvCreditsDataCrew, setTvCreditsDataCrew] = useState<any>([]);

  useEffect(() => {
    const fetch = async () => {
      const personResponse = await getPersonResponse(id);
      setPersonResponseData(personResponse);

      if (personResponse.tv_credits.cast) {
        setTvCreditsData(personResponse.tv_credits.cast);
      }
      if (personResponse.movie_credits.cast) {
        setMovieCreditsData(personResponse.movie_credits.cast);
      }

      if (personResponse.tv_credits.crew) {
        setTvCreditsDataCrew(personResponse.tv_credits.crew);
      }

      if (personResponse.movie_credits.crew) {
        setMovieCreditsDataCrew(personResponse.movie_credits.crew);
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
              value={getGender(personResponseData.gender)}
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

      {movieCreditsData !== undefined && tvCreditsData !== undefined ? (
        <h2 className="header" style={{ paddingInline: "1rem" }}>
          Movies and Tv Shows
        </h2>
      ) : null}
      {movieCreditsData.length > 0 ? (
        <StyledTruncatedResult
          className="truncated-result"
          dataToBeDisplayed={movieCreditsData}
          mediaType={"movie"}
        />
      ) : null}
      {tvCreditsData.length > 0 ? (
        <StyledTruncatedResult
          className="truncated-result"
          dataToBeDisplayed={tvCreditsData}
          mediaType={"tv"}
        />
      ) : null}

      {movieCreditsDataCrew.length > 0 ? (
        <StyledTruncatedResult
          className="truncated-result"
          dataToBeDisplayed={movieCreditsDataCrew}
          mediaType={"movie"}
        />
      ) : null}
      {tvCreditsDataCrew.length > 0 ? (
        <StyledTruncatedResult
          className="truncated-result"
          dataToBeDisplayed={tvCreditsDataCrew}
          mediaType={"tv"}
        />
      ) : null}
    </div>
  );
};

export default Person;
