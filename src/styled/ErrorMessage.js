import styled from "styled-components";

export const ErrorMessage = styled.div`
  width: 100%;
  font-size: 18px;
  color: ${(props) => props.theme.colors.red};
  font-weight: 700;
`;
