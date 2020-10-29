import styled from "styled-components";

export const ErrorMessage = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  color: ${(props: any) =>
    props.transparent
      ? props.theme.colors.transparent
      : props.theme.colors.red};
`;
