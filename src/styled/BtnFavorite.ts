import styled from "styled-components";
import star from "../images/star.svg";

interface BtnFavoriteProps {
  type: string;
}

export const BtnFavorite = styled.section<BtnFavoriteProps>`
  width: 20px;
  height: 20px;
  background-image: url(${star});
  background-repeat: no-repeat;
  background-size: cover;
`;
