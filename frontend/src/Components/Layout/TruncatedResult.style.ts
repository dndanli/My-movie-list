import styled from "styled-components";
import TruncatedResult from "./TruncatedResult";

const StyledTruncatedResult = styled(TruncatedResult)`
  .content-wrapper {
    padding-inline: 1rem;
    padding-block: 1.2rem;
  --grid-layout-gap: 1.5rem;
  --grid-column-count: 6;
  --grid-item--min-width: 9.5rem;

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
  }

  .truncate-wrapper {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding-left: 1rem;
    padding-bottom: 2rem;
  }

  .truncate-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f093db;
    cursor: pointer;
  }
`;

export default StyledTruncatedResult;
