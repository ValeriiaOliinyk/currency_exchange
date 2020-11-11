import styled from "styled-components";

interface BtnFavoriteProps {
  type: string;
}

export const BtnFavorite = styled.button<BtnFavoriteProps>`
  all: unset;
  width: 20px;
  height: 20px;
  background-image: url("./images/star.svg");
  background-repeat: no-repeat;
  background-size: cover;
`;
