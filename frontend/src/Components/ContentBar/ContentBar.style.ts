import styled from "styled-components";
import ContentBar from "./ContentBar";

const StyledContentBar = styled(ContentBar)`
  min-width: 17rem;
  border-left: 0.5px solid #ccc;
  border-right: 0.5px solid #ccc;
  padding-inline: 1rem;

  .searchbar {
    width: 17rem;
  }
`;

export default StyledContentBar;
