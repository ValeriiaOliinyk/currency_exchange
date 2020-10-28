import styled from "styled-components";

export const ErrorMessage = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) =>
    props.transparent ? "#ffffff00" : props.theme.colors.red};
`;
