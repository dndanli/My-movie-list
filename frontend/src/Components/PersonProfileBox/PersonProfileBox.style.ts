import styled from "styled-components";
import PersonProfileBox from "./PersonProfileBox";

const StyledPersonProfileBox = styled(PersonProfileBox)`
  .wrapper {
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    border-radius: 8px;
  }

  .profile {
    object-fit: contain;
    max-width: 100px;
    max-height: 100px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .person-icon {
    color: rgba(16, 16, 16, 0.3);
    margin-top: 1.5rem;
    min-height: 100px;
    min-width: 80px;
    margin-left: 0;
  }
  .profile-info-wrapper {
    font-family: "Inter", sans-serif;
    color: rgba(16, 16, 16, 0.9);
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
    color: rgba(16, 16, 16, 0.7);
    font-size: 1rem;
    font-weight: 500;
  }
`;

export default StyledPersonProfileBox;
