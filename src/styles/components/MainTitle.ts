import styled from 'styled-components';

export const MainTitle = styled.h1`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 24px;
  }
  text-align: center;
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.hover};
`;
