import styled from "styled-components";

export const Wrapper = styled.div`
  .discover-paginate {
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
    transition: 200ms ease-in;
  }
`;
