import styled from "styled-components";
import DetailMetadata from "./DetailMetadata";

const StyledDetailMetadata = styled(DetailMetadata)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: #ff7700;
  background-image: linear-gradient(336deg, #ff7700 0%, #eaa15c 100%);
  border-radius: 8px;
  width: 100%;
  max-height: 2rem;

  .p-small {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
  }

  #rating {
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 4px;
    padding-inline: 0.8rem;
    margin-right: 1rem;
    padding-block: 0.2rem;
  }
  .rating-score {
    font-weight: 700;
    display: flex;
    align-items: center;
    border-radius: 4px;
    color: rgba(255, 255, 255, 1);
    margin-right: 1rem;
    .star-icon {
      margin-left: 0.5rem;
      font-size: 1.4rem;
    }
  }
`;

export default StyledDetailMetadata;