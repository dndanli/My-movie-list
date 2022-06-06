import styled from "styled-components";
import { theme } from "../../Theme/theme";
export const BrowseResultWrapper = styled.div`
  --grid-layout-gap: 1.5rem;
  --grid-column-count: 6;
  --grid-item--min-width: 9rem;

  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));

  --grid-item--max-width: calc(
    (100% - var(--total-gap-width)) / var(--grid-column-count)
  );

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
  );
  grid-gap: var(--grid-layout-gap);
  grid-row-gap: 2.5rem;
`;

export const Wrapper = styled.div`
  .popup-wrapper{
    position: fixed;
    z-index: 3;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    background-color: rgba(51, 51, 51, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 5rem;  
  }
  .discover-paginate {
    margin-top: 9rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style-type: none;
    font-size: 1.2rem;
    font-family: "Inter", sans-serif;
    font-weight: 500;
        color: ${theme.colorWhite};
    li {
      a {
        cursor: pointer;
      }
    }
  }

  .previous-btn,
  .next-btn {
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
  }

  .paginate-active {
    color: white;
    background-color: ${theme.colorAccentPrimary};
    padding-inline: 1rem;
    text-align: center;
    border-radius: 2px;
  }
`;
