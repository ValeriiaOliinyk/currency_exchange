import styled from "styled-components";

interface FavoriteStyled {
  favorite?: boolean;
}

export const ListFavorite = styled.ul`
  margin: auto;
  margin-top: 20px;
  width: 60%;
  text-align: center;
  padding: 20px;
  padding-bottom: 30px;
  border-bottom: ${(props: FavoriteStyled) =>
    props.favorite && "4px dashed #ffc107"};
`;
