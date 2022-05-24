import styled from "styled-components";
import PersonProfileBox from "./PersonProfileBox";

const StyledPersonProfileBox = styled(PersonProfileBox)`
  .wrapper {
    background-color:#ffffff;
    display: flex;
    border-radius: 8px;
  }

  .profile {
    object-fit: contain;
    max-width: 130px;
    max-height: 130px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .person-icon {
    color: rgba(51, 51, 51, 0.2);
    margin-top: 1.5rem;
    min-width: 90px;
    min-height: 130px;
    margin-left: 0;
  }

  .profile-info-wrapper {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: rgba(51, 51, 51, 0.9);

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
  }

  a {
    text-decoration: none;
  }

  .name {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .knownFor {
    color: rgba(51, 51, 51, 0.8);
    font-size: 1rem;
    font-weight: 500;
  }
`;

export default StyledPersonProfileBox;
