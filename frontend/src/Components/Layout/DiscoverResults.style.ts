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
    color: rgba(255, 255, 255, 0.7);
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
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
  }

  .paginate-active {
    color: white;
    background-color: rgb(255, 140, 50);
    padding-inline: 1rem;
    text-align: center;
    border-radius: 2px;
    transition: 200ms ease-in;
  }
`;
