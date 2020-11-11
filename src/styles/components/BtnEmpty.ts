import styled from 'styled-components';

interface BtnEmptyProps {
  type: string;
}

export const BtnEmpty = styled.button<BtnEmptyProps>`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 15px;
    height: 15px;
  }

  all: unset;
  width: 20px;
  height: 20px;
  background-image: url('./images/starEmpty.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;
