import styled from "styled-components";

export const Favorite = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-top: 20px;
  width: 40px;
  height: 40px;
  background-image: url("./images/star.svg");
  background-repeat: no-repeat;
  background-size: cover;
  color: ${(props) => props.theme.colors.white};
`;
