import styled from "styled-components";

export const Wrapper = styled.div`
  .discover-paginate {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style-type: none;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    color: rgba(16, 16, 16, 0.7);
  }
  .previous-btn,
  .next-btn {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .paginate-active {
    color: white;
    background-color: rgb(245, 136, 64);
    padding-inline: 1rem;
    text-align: center;
    border-radius: 2px;
    transition: 200ms ease-in;
  }
`;
