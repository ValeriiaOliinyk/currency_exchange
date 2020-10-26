import styled from "styled-components";

export const ListFavorite = styled.ul`
  margin: auto;
  margin-top: 20px;
  width: 60%;
  text-align: center;
  padding: 20px;
  padding-bottom: 30px;
  border-bottom: ${(props) => props.favorite && "4px dashed #ffc107"};
`;
