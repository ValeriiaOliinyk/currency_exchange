import FormControl from "@material-ui/core/FormControl";
import styled from "styled-components";

export const FormControlBox = styled(FormControl)`
  & .MuiFilledInput-underline:after {
    border-bottom: 2px solid #67a030;
  }

  & .MuiInputBase-root {
    background-color: ${(props) => props.theme.colors.main};
  }
`;
