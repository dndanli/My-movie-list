import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { UserService } from "../../Services/UserService";

type ListsProps = {
  className: string;
};

const Lists = ({ className }: ListsProps) => {
  const [user, setUser] = useState<any | undefined>();
  let navigate = useNavigate();
  useEffect(() => {
    const userService = new UserService();
    const fetch = async () => {
      const userObj: any = await userService.getUserObject(
        "/user/lists",
        navigate
      );
      if (userObj.data.user !== undefined) {
        setUser(userObj?.data.user);
      } else {
        setUser("");
      }
    };
    fetch();
  }, [navigate]);
  return <div className={className}>lists for {user}</div>;
};

export default Lists;
