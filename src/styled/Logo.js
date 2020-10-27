import styled from "styled-components";
import myImage from "../images/return-of-investment.svg";

export const Logo = styled.div`
  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
  width: 45px;
  height: 45px;
  background-image: url(${myImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
