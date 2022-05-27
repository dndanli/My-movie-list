import styled from "styled-components";
import UserProfile from "./UserProfile";

const StyledUserProfile = styled(UserProfile)`
  font-family: "Poppins", sans-serif;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  padding-inline: 1rem;

  .person-profile-wrapper {
    max-width: 5rem;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    border-radius: 0.7rem;
  }

  .person-icon {
    font-size: 5rem;
    color: rgba(51, 51, 51, 0.4);
  }
  .profile-content{
    display: flex;
    .dashboard-card{
      margin-right: 1.5rem;
  }
  }
`;
export default StyledUserProfile;
