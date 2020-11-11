import styled from "styled-components";
import { Form } from "react-bootstrap";

export const FormSelect = styled(Form.Control)`
  @media ${({ theme }) => theme.breakpoints.mobileL} {
    width: 40%;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 12px;
  }
  width: 20%;
`;
