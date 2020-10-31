import styled from "styled-components";
import star from "../images/starEmpty.svg";

interface BtnEmptyProps {
  type: string;
}

export const BtnEmpty = styled.section<BtnEmptyProps>`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 15px;
    height: 15px;
  }
  width: 20px;
  height: 20px;
  background-image: url(${star});
  background-repeat: no-repeat;
  background-size: cover;
`;
