import styled from "styled-components";

interface StyledProps {
  transparent?: boolean;
}

export const ErrorMessage = styled.div<StyledProps>`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) =>
    props.transparent
      ? props.theme.colors.transparent
      : props.theme.colors.red};
`;
