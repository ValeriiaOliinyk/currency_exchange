import styled from "styled-components";

export const MainTitle = styled.h1`
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  text-align: center;
  font-size: 34px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.hover};
`;
