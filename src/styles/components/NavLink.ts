import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const NavLinks = styled(NavLink)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 14px;
  }
  font-size: 24px;
  color: ${(props) => props.theme.colors.main};
  text-decoration: none;
  font-weight: 700;
  transition: 250ms color linear;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
    font-weight: 700;
    text-decoration: none;
  }
`;
