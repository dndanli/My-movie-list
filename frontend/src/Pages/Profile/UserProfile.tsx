import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { UserService } from "../../Services/UserService";
import { BsFillPersonFill } from "react-icons/bs";
import StyledDashBoardCard from "../../Components/DashboardCard/DashboardCard.style";
import { MdFeaturedPlayList, MdOutlineRateReview } from "react-icons/md";

type UserProfileProps = {
  className: string;
};

const UserProfile = ({ className }: UserProfileProps) => {
  const [user, setUser] = useState<any | undefined>();
  let navigate = useNavigate();
  useEffect(() => {
    const userService = new UserService();
    const fetch = async () => {
      const userObj: any = await userService.getUserObject(
        "/user/profile",
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
  return (
    <div className={className}>
      <div className="person-profile-wrapper">
        <BsFillPersonFill className="person-icon" />
      </div>
      <h1>Welcome {user} </h1>

      <div className="profile-content">
        <StyledDashBoardCard
          className="dashboard-card"
          icon={<MdFeaturedPlayList />}
          name="Lists"
          link="/profile/lists"
        />

        <StyledDashBoardCard
          className="dashboard-card"
          icon={<MdOutlineRateReview />}
          name="Reviews"
          link="/profile/reviews"
        />
      </div>
    </div>
  );
};

export default UserProfile;
