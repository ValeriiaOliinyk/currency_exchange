import styled from "styled-components";

export const TitleHome = styled.h2`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 18px;
  }
  font-size: 28px;
  text-align: center;
  margin-top: 30px;
  color: ${(props) => props.theme.colors.main};
`;
