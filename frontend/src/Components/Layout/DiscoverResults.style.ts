import styled from "styled-components";
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
  .discover-paginate {
    margin-top: 9rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style-type: none;
    font-size: 1.2rem;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    color: rgba(51, 51, 51, 0.9);
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
    color: rgba(51, 51, 51, 0.7);
    cursor: pointer;
  }

  .paginate-active {
    color: white;
    background-color: #f093fb;
    padding-inline: 1rem;
    text-align: center;
    border-radius: 2px;
  }
`;
