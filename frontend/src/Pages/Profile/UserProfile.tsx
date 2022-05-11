import { v4 as uuidv4 } from "uuid";

type UserProfileProps = {
  className: string;
};

const UserProfile = ({ className }: UserProfileProps) => {
  //   });

  return <div className={className}></div>;
};

export default UserProfile;
