import styled from "styled-components";

export const Logo = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 35px;
    height: 35px;
  }
  width: 45px;
  height: 45px;
  background-image: url(${`${window.location.origin}/images/return-of-investment.svg`});
  background-repeat: no-repeat;
  background-size: cover;
`;
