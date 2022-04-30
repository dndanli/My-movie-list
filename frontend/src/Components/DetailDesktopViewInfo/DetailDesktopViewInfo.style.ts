import styled from "styled-components";
import DetailDesktopViewInfo from "./DetailDesktopViewInfo";

const StyledDetailDesktopViewInfo = styled(DetailDesktopViewInfo)`
  display: flex;

  .overview-poster {
    max-width: 100%;
    max-height: 320px;
    margin-top: 1rem;
    object-fit: contain;
    border-radius: 8px;
  }

  .overview-title-header {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.9);
  }

  .metadata-wrapper {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
  }
`;

export default StyledDetailDesktopViewInfo;
