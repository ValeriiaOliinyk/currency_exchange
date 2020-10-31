import styled from "styled-components";

export const NavigationList = styled.ul`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 200px;
  }
  display: flex;
  width: 300px;
  justify-content: space-around;
`;
