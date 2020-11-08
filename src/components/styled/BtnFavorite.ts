import styled from "styled-components";

interface BtnFavoriteProps {
  type: string;
}

export const BtnFavorite = styled.section<BtnFavoriteProps>`
  width: 20px;
  height: 20px;
  background-image: url(${`${window.location.origin}/images/star.svg`});
  background-repeat: no-repeat;
  background-size: cover;
`;
