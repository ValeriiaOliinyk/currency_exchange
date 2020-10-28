import styled from "styled-components";
import { Field } from "formik";

export const FormControl = styled(Field)`
  outline: none;
  width: 75%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-color: ${(props) => props.theme.colors.black};
`;
