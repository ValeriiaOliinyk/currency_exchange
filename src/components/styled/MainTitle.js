import styled from "styled-components";

export default styled.h1`
  text-align: center;
  font-size: 34px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.hover};
`;
