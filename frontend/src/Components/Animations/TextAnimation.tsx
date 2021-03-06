import styled, { keyframes } from "styled-components";

export default function TextAnimation() {
  return <Wrapper>Welcome</Wrapper>;
}

const animation = keyframes`
    0%{opacity:0; transform: translateY(-100px) };
    25%{opacity:1; transform: translateY(0) };
    75%{opacity:1; transform: translateY(0) };
    100%{opacity:1; };
`;
const Wrapper = styled.span`
  display: inline-block;
  opacity: 0;
  animation-name: ${animation};
  animation-duration: 6s;
  animation-fill-mode: forwards;
`;
