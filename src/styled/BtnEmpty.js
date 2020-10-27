import styled from "styled-components";
import star from "../images/starEmpty.svg";

export const BtnEmpty = styled.section`
  @media screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
  width: 20px;
  height: 20px;
  background-image: url(${star});
  background-repeat: no-repeat;
  background-size: cover;
`;
