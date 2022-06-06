import styled from "styled-components";
import PersonProfileBox from "./PersonProfileBox";

const StyledPersonProfileBox = styled(PersonProfileBox)`
  --fs-small:14px;

  --profile-height:200px;
  max-width: 11rem;

  .wrapper {
    background-color:#ffffff;
    border-radius: 8px;
  }

  .profile {
    width: 100%;
    max-height: var(--profile-height);
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  .person-icon {
    width: 100%;
    color: rgba(51, 51, 51, 0.2);
    font-size:var(--profile-height);
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
    padding-left: 0.5rem;
    padding-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
  }

  .name {
    font-size: var(--fs-small);
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space:nowrap;
  }

  .knownFor {
    color: rgba(51, 51, 51, 0.8);
    font-size: var(--fs-small);
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space:nowrap;
  }
`;

export default StyledPersonProfileBox;
