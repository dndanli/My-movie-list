import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPersonResponse } from "../../Helpers/clientHelpers";

type PersonProps = {
  className: string;
};

const Person = ({ className }: PersonProps) => {
  const { id } = useParams();
  const [personResponseData, setPersonResponseData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const personResponse = await getPersonResponse(id);
      setPersonResponseData(personResponseData);
      console.log(personResponse);
    };
    fetch();
  }, [id, personResponseData]);
  return <div className={className}></div>;
};

export default Person;
