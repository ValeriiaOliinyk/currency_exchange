import styled from 'styled-components';
import { AppBar } from '@material-ui/core';

export const Header = styled(AppBar)`
  background-color: ${props => props.theme.colors.white};
  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 50px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletFrom} {
    height: 70px;
  }
`;
