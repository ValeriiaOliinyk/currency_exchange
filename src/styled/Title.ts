import styled from "styled-components";

export const Title = styled.h2`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 22px;
  }
  text-align: center;
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.hover};
  font-weight: 700;
  font-size: 32px;
`;
